import { siteConfig } from "@/constants";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden py-12 md:py-0">
      {/* Background with blob animations */}
      <div className="absolute inset-0 z-0 bg-slate-50 overflow-hidden">
        {/* Blobs - smaller on mobile */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-blue-300/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-indigo-300/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-16 md:-bottom-32 left-1/2 transform -translate-x-1/2 w-64 h-64 md:w-[500px] md:h-[500px] bg-sky-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob-reverse" />
        <div className="absolute top-10 right-10 w-32 h-32 md:w-64 md:h-64 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob animation-delay-4000" />

        {/* Background text - hidden on mobile */}
        <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none z-0 opacity-[0.03] select-none overflow-hidden">
          <span className="text-[15vw] font-black text-primary tracking-tighter leading-none whitespace-nowrap transform -rotate-6 scale-110">
            ALLDAY MUSIC STUDIO
          </span>
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/30 z-10 backdrop-blur-[1px]" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-4xl mx-auto px-4 md:px-6 text-center flex flex-col items-center gap-6 md:gap-8">
        <div className="flex flex-col gap-4 md:gap-6 items-center">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="bg-white/80 border border-border-light text-text-muted px-3 py-1 rounded-full text-xs font-semibold shadow-sm backdrop-blur-sm">
              {siteConfig.openingHours.display}
            </span>
            <span className="bg-white/80 border border-border-light text-text-muted px-3 py-1 rounded-full text-xs font-semibold shadow-sm backdrop-blur-sm">
              {siteConfig.contact.landmark}
            </span>
            <span className="hidden sm:inline-flex bg-white/80 border border-border-light text-text-muted px-3 py-1 rounded-full text-xs font-semibold shadow-sm backdrop-blur-sm">
              {siteConfig.contact.address.full}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-black leading-[1.1] tracking-tight text-text-main drop-shadow-sm">
            방배역 1분,
            <br />
            <span className="text-primary">24시간 프리미엄</span>
            <br />
            음악연습실
          </h1>

          {/* Notice Box */}
          <div className="bg-blue-50/90 border border-blue-100 p-4 md:p-5 rounded-xl w-full max-w-xl backdrop-blur-sm shadow-sm">
            <p className="text-blue-800 text-xs sm:text-sm font-medium leading-relaxed flex flex-col items-center gap-1 text-center">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base md:text-lg">
                  info
                </span>
                <span>
                  올데이뮤직스튜디오는{" "}
                  <strong>월 단위 예약만 가능</strong>합니다.
                </span>
              </span>
              <span className="opacity-80">
                시간제/파트타임 예약은 불가능합니다.
              </span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href={siteConfig.social.kakao}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#FAE100] text-[#371D1E] hover:bg-[#FCE620] h-12 md:h-14 px-6 md:px-8 rounded-xl text-sm md:text-base font-bold transition-all shadow-sm"
            >
              <span className="material-symbols-outlined text-xl md:text-2xl">
                chat_bubble
              </span>
              카카오톡 문의
            </a>
            <a
              href={siteConfig.social.naverTalk}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#03C75A] text-white hover:bg-[#02b351] h-12 md:h-14 px-6 md:px-8 rounded-xl text-sm md:text-base font-bold transition-all shadow-lg shadow-green-500/20"
            >
              <span className="material-symbols-outlined text-xl md:text-2xl">
                chat_bubble
              </span>
              네이버 톡톡으로 문의
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
