import { sheetsConfig } from "@/config/sheets";

export interface RoomConfig {
  roomId: string;
  type: string;
}

export interface RoomReservation {
  roomId: string;
  startDate: string | null;
  endDate: string | null;
}

export interface RoomStatus {
  roomId: string;
  type: string;
  isAvailable: boolean;
  currentEndDate: string | null; // 현재 예약 종료일
  nextStartDate: string | null; // 다음 예약 시작일 (빈 방일 때)
}

/**
 * Google Sheets에서 데이터를 가져오는 공통 함수
 */
async function fetchSheetData(
  sheetName: string,
): Promise<Array<{ c: Array<{ v: string | null } | null> }>> {
  const { sheetId } = sheetsConfig;
  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(sheetName)}`;

  try {
    const response = await fetch(url);
    const text = await response.text();

    // Google Sheets API 응답은 "google.visualization.Query.setResponse({...})" 형태
    const jsonMatch = text.match(
      /google\.visualization\.Query\.setResponse\(([\s\S]*)\);?$/,
    );
    if (!jsonMatch) {
      console.error("Failed to parse Google Sheets response");
      return [];
    }

    const data = JSON.parse(jsonMatch[1]);
    return data.table?.rows || [];
  } catch (error) {
    console.error(`Failed to fetch sheet ${sheetName}:`, error);
    return [];
  }
}

/**
 * Room 시트에서 방 설정을 가져옵니다.
 * | 방번호 | 타입 |
 */
export async function fetchRoomConfigs(): Promise<RoomConfig[]> {
  const rows = await fetchSheetData(sheetsConfig.roomSheet);

  return rows
    .map((row) => {
      const cells = row.c || [];
      return {
        roomId: cells[0]?.v?.toString() || "",
        type: cells[1]?.v?.toString() || "Basic",
      };
    })
    .filter((r) => r.roomId);
}

/**
 * Reservation 시트에서 예약 데이터를 가져옵니다.
 * | 방번호 | 예약시작일 | 예약종료일 |
 */
export async function fetchReservations(): Promise<RoomReservation[]> {
  const rows = await fetchSheetData(sheetsConfig.reservationSheet);

  return rows
    .map((row) => {
      const cells = row.c || [];
      return {
        roomId: cells[0]?.v?.toString() || "",
        startDate: cells[1]?.v || null,
        endDate: cells[2]?.v || null,
      };
    })
    .filter((r) => r.roomId);
}

/**
 * 특정 룸의 현재 상태를 계산합니다.
 */
export function getRoomStatus(
  roomConfig: RoomConfig,
  reservations: RoomReservation[],
): RoomStatus {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const { roomId, type } = roomConfig;

  // 해당 룸의 모든 예약 필터링
  const roomReservations = reservations.filter((r) => r.roomId === roomId);

  if (roomReservations.length === 0) {
    return {
      roomId,
      type,
      isAvailable: true,
      currentEndDate: null,
      nextStartDate: null,
    };
  }

  // 현재 진행 중인 예약 찾기 (시작일 <= 오늘 <= 종료일)
  const currentReservation = roomReservations.find((r) => {
    if (!r.startDate || !r.endDate) return false;
    const start = parseDate(r.startDate);
    const end = parseDate(r.endDate);
    return start <= today && today <= end;
  });

  if (currentReservation) {
    return {
      roomId,
      type,
      isAvailable: false,
      currentEndDate: currentReservation.endDate,
      nextStartDate: null,
    };
  }

  // 다음 예약 찾기 (시작일 > 오늘 중 가장 빠른 것)
  const futureReservations = roomReservations
    .filter((r) => {
      if (!r.startDate) return false;
      const start = parseDate(r.startDate);
      return start > today;
    })
    .sort((a, b) => {
      const startA = parseDate(a.startDate!);
      const startB = parseDate(b.startDate!);
      return startA.getTime() - startB.getTime();
    });

  const nextReservation = futureReservations[0];

  return {
    roomId,
    type,
    isAvailable: true,
    currentEndDate: null,
    nextStartDate: nextReservation?.startDate || null,
  };
}

/**
 * 날짜 문자열을 Date 객체로 변환합니다.
 * Google Sheets에서 "Date(2025,0,15)" 형태로 올 수도 있고,
 * "2025-01-15" 형태로 올 수도 있습니다.
 */
function parseDate(dateStr: string): Date {
  // Google Sheets Date 형식: "Date(2025,0,15)" (월은 0부터 시작)
  const googleDateMatch = dateStr.match(/Date\((\d+),(\d+),(\d+)\)/);
  if (googleDateMatch) {
    const year = parseInt(googleDateMatch[1]);
    const month = parseInt(googleDateMatch[2]);
    const day = parseInt(googleDateMatch[3]);
    return new Date(year, month, day);
  }

  // ISO 형식: "2025-01-15"
  return new Date(dateStr);
}

/**
 * 날짜를 "M/D" 형식으로 포맷합니다.
 */
export function formatDateShort(dateStr: string | null): string {
  if (!dateStr) return "";
  const date = parseDate(dateStr);
  return `${date.getMonth() + 1}/${date.getDate()}`;
}

/**
 * 날짜를 "M월 D일" 형식으로 포맷합니다.
 */
export function formatDateKorean(dateStr: string | null): string {
  if (!dateStr) return "";
  const date = parseDate(dateStr);
  return `${date.getMonth() + 1}월 ${date.getDate()}일`;
}
