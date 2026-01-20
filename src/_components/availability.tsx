import { roomAvailability, siteConfig } from "@/constants";

export default function Availability() {
  return (
    <section
      className="py-12 md:py-20 bg-slate-50 border-y border-border-light"
      id="availability"
    >
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-4 md:gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-text-main mb-1 md:mb-2">
              실시간 빈 룸 현황
            </h2>
            <p className="text-sm md:text-base text-text-muted">
              원하는 룸을 확인하고 바로 상담받으세요.
              <span className="text-primary font-semibold text-xs md:text-sm ml-1">
                *실시간 업데이트
              </span>
            </p>
          </div>

          {/* Legend */}
          <div className="flex items-center gap-3 md:gap-4 bg-white px-4 md:px-5 py-2 md:py-2.5 rounded-full border border-border-light shadow-sm w-full md:w-auto justify-center">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5 md:h-3 md:w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 md:h-3 md:w-3 bg-green-500" />
              </span>
              <span className="text-xs md:text-sm font-bold text-text-main">
                빈 방 (예약가능)
              </span>
            </div>
            <div className="w-px h-3 md:h-4 bg-gray-200" />
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-slate-300" />
              <span className="text-xs md:text-sm font-medium text-text-muted">
                예약 완료
              </span>
            </div>
          </div>
        </div>

        {/* Room Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          {roomAvailability.map((room) =>
            room.available ? (
              // Available Room
              <div
                key={room.id}
                className="group bg-white rounded-2xl p-4 md:p-5 border border-border-light shadow-sm hover:border-green-500 hover:shadow-md transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-green-50 rounded-bl-[80px] -mr-4 -mt-4 transition-transform group-hover:scale-110" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-2 md:mb-3">
                    <div className="flex flex-col">
                      <span className="text-[9px] md:text-[10px] font-bold text-text-muted uppercase tracking-wider mb-0.5">
                        {room.type}
                      </span>
                      <span className="text-xl md:text-2xl font-black text-text-main">
                        {room.id}
                      </span>
                    </div>
                    <span className="bg-green-100 text-green-700 text-[10px] md:text-[11px] font-bold px-1.5 md:px-2 py-0.5 md:py-1 rounded-full">
                      빈 방
                    </span>
                  </div>
                  <div className="mt-auto pt-3 md:pt-4">
                    <a
                      className="flex items-center justify-center w-full py-2 md:py-2.5 bg-green-600 hover:bg-green-700 text-white text-xs md:text-sm font-bold rounded-lg transition-colors gap-1"
                      href={siteConfig.social.naverTalk}
                      target="_blank"
                      rel="noreferrer"
                    >
                      문의하기
                      <span className="material-symbols-outlined text-xs md:text-sm">
                        chevron_right
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              // Reserved Room
              <div
                key={room.id}
                className="bg-slate-50 rounded-2xl p-4 md:p-5 border border-border-light opacity-80 hover:opacity-100 transition-opacity"
              >
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-start mb-2 md:mb-3">
                    <div className="flex flex-col">
                      <span className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                        {room.type}
                      </span>
                      <span className="text-xl md:text-2xl font-black text-slate-400">
                        {room.id}
                      </span>
                    </div>
                    <span className="bg-slate-200 text-slate-500 text-[10px] md:text-[11px] font-bold px-1.5 md:px-2 py-0.5 md:py-1 rounded-full">
                      예약완료
                    </span>
                  </div>
                  <div className="mt-auto pt-3 md:pt-4">
                    <button
                      className="w-full py-2 md:py-2.5 bg-slate-200 text-slate-400 text-xs md:text-sm font-bold rounded-lg cursor-not-allowed"
                      disabled
                    >
                      예약 마감
                    </button>
                  </div>
                </div>
              </div>
            )
          )}

          {/* Visit Reservation CTA */}
          <div className="col-span-2 sm:col-span-1 bg-primary/5 rounded-2xl p-4 md:p-5 border border-primary/20 flex flex-col justify-center items-center text-center hover:bg-primary/10 transition-colors cursor-pointer group">
            <a
              className="w-full h-full flex flex-col justify-center items-center py-2"
              href={siteConfig.social.naverTalk}
              target="_blank"
              rel="noreferrer"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white text-primary flex items-center justify-center mb-2 md:mb-3 shadow-sm group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-lg md:text-xl">
                  calendar_month
                </span>
              </div>
              <h4 className="font-bold text-primary mb-0.5 md:mb-1 text-sm md:text-base">
                방문 예약하기
              </h4>
              <p className="text-[10px] md:text-xs text-text-muted">
                직접 보고 결정하세요
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
