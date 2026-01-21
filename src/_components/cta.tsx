import { siteConfig } from "@/constants";

import ScrollAnimation from "./scroll-animation";
import { SiNaver } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri";

export default function CTA() {
  return (
    <section className="py-12 md:py-24 px-4 md:px-6 relative overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0 bg-surface z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Content */}
      <ScrollAnimation className="w-full max-w-2xl mx-auto text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-[56px] font-black text-text-main mb-4 md:mb-6 leading-tight">
          프리미엄한 연습실을
          <br />
          나만의 연습실로
        </h2>
        <p className="text-base md:text-xl text-text-muted mb-6 md:mb-10">
          월대여 상담으로 공실/가격을 빠르게 안내받으세요.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-6 md:mb-8">
          <a
            className="inline-flex items-center justify-center bg-[#FAE100] text-[#371D1E] hover:bg-[#FCE620] h-12 md:h-14 px-6 md:px-10 rounded-xl text-base md:text-lg font-bold transition-all shadow-sm"
            href={siteConfig.social.kakao}
            target="_blank"
            rel="noreferrer"
          >
            <RiKakaoTalkFill className="mr-2 text-xl" />
            카카오톡 문의
          </a>
          <a
            className="inline-flex items-center justify-center bg-[#03C75A] hover:bg-[#02b351] text-white h-12 md:h-14 px-6 md:px-10 rounded-xl text-base md:text-lg font-bold shadow-lg shadow-green-500/20 hover:shadow-green-500/30 transition-all"
            href={siteConfig.social.naverTalk}
            target="_blank"
            rel="noreferrer"
          >
            <SiNaver className="mr-2 text-lg" />
            네이버 톡톡 문의
          </a>
        </div>

        {/* Notice */}
        <p className="text-xs md:text-sm font-medium text-text-muted border-t border-border-light pt-4 md:pt-6 inline-block">
          월 단위 예약만 가능 · 시간제/파트타임 불가
        </p>
      </ScrollAnimation>
    </section>
  );
}
