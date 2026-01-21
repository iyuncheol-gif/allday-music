import ScrollAnimation from "./scroll-animation";

export default function InteriorPhotos() {
  return (
    <section
      className="py-12 md:py-24 bg-surface border-y border-border-light"
      id="interior-photos"
    >
      <ScrollAnimation className="w-full max-w-[1200px] mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-text-main mb-2 md:mb-4">
            연습실 내부 사진
          </h2>
          <p className="text-sm md:text-base text-text-muted">
            다양한 룸 타입의 실제 모습을 확인하세요.
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-3 md:gap-4 h-auto md:h-[540px]">
          {/* Main Large Photo */}
          <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl border border-border-light bg-white shadow-sm aspect-square md:aspect-auto">
            <div className="absolute inset-0 bg-slate-50 flex items-center justify-center p-4 md:p-8 text-center transition-transform duration-700 group-hover:scale-105">
              <span className="text-slate-400 font-bold text-sm md:text-lg uppercase tracking-wider">
                PHOTO PLACEHOLDER
                <br />- Main Studio Overview
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
              <p className="font-bold text-lg md:text-xl">메인 스튜디오</p>
              <p className="text-xs md:text-sm text-white/90">
                넓고 쾌적한 연습 환경
              </p>
            </div>
          </div>

          {/* Top Right Photos */}
          <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-2xl border border-border-light bg-white shadow-sm aspect-[4/3] md:aspect-auto">
            <div className="absolute inset-0 bg-slate-50 flex items-center justify-center p-4 text-center transition-transform duration-700 group-hover:scale-105">
              <span className="text-slate-300 font-bold text-xs uppercase tracking-wider">
                PHOTO PLACEHOLDER
                <br />- Room Detail
              </span>
            </div>
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
          </div>

          <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-2xl border border-border-light bg-white shadow-sm aspect-[4/3] md:aspect-auto">
            <div className="absolute inset-0 bg-slate-50 flex items-center justify-center p-4 text-center transition-transform duration-700 group-hover:scale-105">
              <span className="text-slate-300 font-bold text-xs uppercase tracking-wider">
                PHOTO PLACEHOLDER
                <br />- Equipment View
              </span>
            </div>
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
          </div>

          {/* Bottom Wide Photo */}
          <div className="md:col-span-2 md:row-span-1 relative group overflow-hidden rounded-2xl border border-border-light bg-white shadow-sm aspect-[2/1] md:aspect-auto">
            <div className="absolute inset-0 bg-slate-50 flex items-center justify-center p-4 text-center transition-transform duration-700 group-hover:scale-105">
              <span className="text-slate-300 font-bold text-xs md:text-sm uppercase tracking-wider">
                PHOTO PLACEHOLDER
                <br />- Wide Lounge &amp; Corridor
              </span>
            </div>
            <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 z-10">
              <span className="bg-white/90 backdrop-blur-sm px-2 md:px-3 py-1 rounded-full text-[10px] md:text-xs font-bold text-text-main opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                휴게 공간
              </span>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
}
