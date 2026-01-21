import Image from "next/image";
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
          {/* Main Large Photo - 1.jpeg */}
          <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl border border-border-light bg-white shadow-sm aspect-square md:aspect-auto">
            <Image
              src="/img/1.jpeg"
              alt="메인 스튜디오"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Top Right Photos - 2.jpeg */}
          <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-2xl border border-border-light bg-white shadow-sm aspect-[4/3] md:aspect-auto">
            <Image
              src="/img/2.jpeg"
              alt="연습실 내부 1"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
          </div>

          {/* Top Right Photos - 3.jpeg */}
          <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-2xl border border-border-light bg-white shadow-sm aspect-[4/3] md:aspect-auto">
            <Image
              src="/img/3.jpeg"
              alt="연습실 내부 2"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
          </div>

          {/* Bottom Wide Photo - 4.jpg */}
          <div className="md:col-span-2 md:row-span-1 relative group overflow-hidden rounded-2xl border border-border-light bg-white shadow-sm aspect-[2/1] md:aspect-auto">
            <Image
              src="/img/4.jpg"
              alt="휴게 공간"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
}
