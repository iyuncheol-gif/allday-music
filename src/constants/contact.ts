import { siteConfig } from "./site";

export const contactMethods = [
  {
    type: "naver",
    title: "네이버 톡톡 문의",
    description: "빠른 상담을 원하시면\n네이버 톡톡으로 문의하세요.",
    url: siteConfig.social.naverTalk,
    bgColor: "bg-[#03C75A]",
    hoverColor: "hover:bg-[#02b351]",
    textColor: "text-white",
    icon: "chat_bubble",
  },
  {
    type: "kakao",
    title: "카카오톡 문의",
    description: "카카오톡으로\n편하게 문의하세요.",
    url: siteConfig.social.kakao,
    bgColor: "bg-[#FAE100]",
    hoverColor: "hover:bg-[#FCE620]",
    textColor: "text-[#371D1E]",
    icon: "chat",
  },
];

export const locationInfo = {
  name: siteConfig.name,
  address: siteConfig.contact.address.full,
  landmark: siteConfig.contact.landmark,
  lat: siteConfig.contact.geo.latitude,
  lng: siteConfig.contact.geo.longitude,
  phone: siteConfig.contact.phone,
  hours: siteConfig.openingHours.display,
};

// 월대여 장점
export const benefits = [
  {
    icon: "schedule",
    title: "24시간 자유로운 이용",
    description:
      "언제든 영감이 떠오를 때 방문하세요. 나만의 비밀번호로 365일 24시간 제한 없이 출입 가능합니다.",
  },
  {
    icon: "graphic_eq",
    title: "완벽한 방음 설계",
    description:
      "이중 방음벽과 베이스 트랩 시공으로 외부 소음을 차단하고, 온전히 내 소리에만 집중할 수 있습니다.",
  },
  {
    icon: "lock",
    title: "철저한 보안/안전",
    description:
      "사각지대 없는 CCTV 녹화와 개별 도어락, 개인 장비 보관이 가능한 전용 공간을 제공합니다.",
  },
];

// 공동 시설
export const sharedFacilities = [
  { icon: "shower", name: "샤워실" },
  { icon: "local_laundry_service", name: "세탁기" },
  { icon: "dry_cleaning", name: "빨래 살균 건조기" },
  { icon: "videocam", name: "7채널 CCTV (사각지대 없음)" },
  { icon: "wifi", name: "기가와이파이" },
  { icon: "computer", name: "컴퓨터" },
  { icon: "kitchen", name: "냉장고" },
  { icon: "water_drop", name: "냉온 직수 정수기" },
  { icon: "microwave", name: "전자렌지" },
  { icon: "door_sliding", name: "락커 개별 신발장" },
  { icon: "lock", name: "락커 개인 사물함" },
];

// 개인 룸 시설
export const roomFacilities = [
  { icon: "thermostat", name: "온도조절 바닥 난방" },
  { icon: "ac_unit", name: "에어컨" },
  { icon: "mode_fan", name: "환풍기" },
  { icon: "fire_extinguisher", name: "스프레이 소화기" },
  { icon: "sensors", name: "화재 감지기" },
  { icon: "lightbulb", name: "각 방 번호등" },
];

// 룸 타입별 방음 정보
export const roomSoundproofing = {
  basic: {
    title: "듀플렉스 룸, 베이직 룸",
    description: "시스템도어 (벽두께 25cm)",
  },
  premium: {
    title: "프리미엄 룸",
    description: "2중 방음 (벽두께 40cm)",
  },
};

// 룸 타입
export const roomTypes = [
  {
    id: "duplex",
    name: "Duplex Room",
    description:
      "높은 층고를 활용한 복층 구조로 공간 활용도가 뛰어납니다. 하단은 작업 공간, 상단은 휴식 공간으로 분리된 구조입니다.",
    features: [
      { icon: "layers", text: "공간 분리형 복층 구조" },
      { icon: "height", text: "개방감 있는 높은 층고" },
    ],
    isBest: false,
  },
  {
    id: "basic",
    name: "Basic Room",
    description:
      "가장 표준적인 단층 직사각형 구조로, 효율적인 악기 배치가 가능합니다. 개인 연습에 최적화된 컴팩트한 설계입니다.",
    features: [
      { icon: "crop_square", text: "효율적인 직사각형 구조" },
      { icon: "wb_sunny", text: "쾌적한 기본 조명 세팅" },
    ],
    isBest: false,
  },
  {
    id: "premium",
    name: "Premium Room",
    description:
      "벽 두께를 대폭 보강한 이중 방음벽 구조입니다. 40cm 두께의 벽체와 이중 도어로 물리적인 소음 차단을 극대화했습니다.",
    features: [
      { icon: "wall_art", text: "40cm 초광폭 벽체 구조" },
      { icon: "lock_person", text: "2중 방음문 프라이빗 설계" },
    ],
    isBest: true,
  },
];

// 빈 룸 현황 (실제로는 API에서 가져올 데이터)
export const roomAvailability = [
  { id: "101", type: "Premium", available: true },
  { id: "102", type: "Premium", available: false },
  { id: "103", type: "Standard", available: false },
  { id: "201", type: "Basic", available: true },
  { id: "202", type: "Basic", available: false },
  { id: "203", type: "Basic", available: false },
  { id: "301", type: "Duplex", available: true },
  { id: "302", type: "Large", available: false },
];

// 이용 방법 단계
export const usageSteps = [
  {
    icon: "chat",
    title: "1. 상담 신청",
    description: "희망 시작월과 용도 문의",
  },
  {
    icon: "check_circle",
    title: "2. 안내 확정",
    description: "방문 투어 및 계약 진행",
  },
  {
    icon: "key",
    title: "3. 사용 시작",
    description: "나만의 비밀번호로 출입",
  },
];

// 편의시설 아이콘
export const amenities = [
  { icon: "wifi", name: "기가 와이파이" },
  { icon: "ac_unit", name: "냉난방 완비" },
  { icon: "coffee", name: "커피/정수기 제공" },
  { icon: "print", name: "공용 프린터" },
];

// FAQ
export const faqItems = [
  {
    question: "최소 계약 기간이 어떻게 되나요?",
    answer:
      "안정적인 면학 분위기 조성을 위해 기본적으로 월 단위 계약을 원칙으로 하며, 최소 1개월부터 계약 가능합니다. 장기 계약 시 할인 혜택이 적용될 수 있습니다.",
  },
  {
    question: "외부인 동반 출입이 가능한가요?",
    answer:
      "가능합니다. 다만 다른 이용자분들의 작업에 방해가 되지 않도록 정숙을 부탁드리며, 숙식은 불가능합니다. 자세한 인원 규정은 룸 타입별로 상이하므로 문의 바랍니다.",
  },
  {
    question: "장비나 악기는 포함되어 있나요?",
    answer:
      "기본적으로 방음 시설, 냉난방, 조명, 유무선 인터넷이 제공되는 공실 형태입니다. 개인 악기와 장비를 가져오셔서 나만의 공간으로 세팅하시면 됩니다.",
  },
  {
    question: "주차는 가능한가요?",
    answer:
      "건물 내 주차 공간은 협소하여 제공이 어렵습니다. 인근 공영주차장 이용을 권장드립니다. 장비 하차 시 잠시 정차는 가능합니다.",
  },
];

// 배치도 룸 데이터
export const floorplanRooms = {
  row1: [
    { id: "206", size: "2.1x3.0" },
    { id: "205", size: "2.1x3.0" },
    { id: "204", size: "2.1x2.7" },
    { id: "203", size: "2.1x2.7" },
    { id: "202", size: "2.1x2.7" },
    { id: "201", size: "2.1x2.7" },
  ],
  col1: [
    { id: "301", size: "2.2x2.5", height: "h-[152px]" },
    { id: "302", size: "4.2x2.5", height: "h-[316px]" },
  ],
  col3: [
    { id: "106", size: "2.1x2.8" },
    { id: "105", size: "2.1x2.8" },
    { id: "104", size: "2.1x2.8" },
  ],
  col4: [
    { id: "107", size: "3.1x3.2" },
    { id: "103", size: "3.1x3.2" },
    { id: "102", size: "2.6x3.6" },
  ],
  col4Bottom: [
    { id: "101", size: "2.2x2.5" },
  ],
};
