"use client";

import { benefits, siteConfig } from "@/constants";

import ScrollAnimation from "./scroll-animation";

export default function Benefits() {
  return (
    <section
      className="py-12 md:py-20 bg-white border-y border-border-light"
      id="benefits"
    >
      <ScrollAnimation className="w-full max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16 px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-text-main mb-2 md:mb-3">
            월대여가 더 좋은 이유
          </h2>
          <p className="text-sm md:text-base text-text-muted">
            한 달은 내 공간처럼. 예약 스트레스 없이 몰입하세요.
          </p>
        </div>

        {/* Benefits - Horizontal scroll on mobile, Grid on desktop */}
        <div className="overflow-x-auto no-scrollbar md:overflow-visible px-4 md:px-6">
          <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-8 w-max md:w-auto">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex flex-col gap-3 md:gap-4 p-5 md:p-8 rounded-2xl bg-white border border-border-light hover:border-primary/50 hover:shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] transition-all group w-[280px] md:w-auto shrink-0"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-surface flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-2xl md:text-[32px]">
                    {benefit.icon}
                  </span>
                </div>
                <div>
                  <h3 className="text-base md:text-xl font-bold text-text-main mb-1 md:mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Link */}
        <div className="mt-8 md:mt-12 text-center px-4 md:px-6">
          <a
            className="inline-flex items-center gap-2 text-primary font-bold cursor-pointer text-sm md:text-base hover:text-blue-600 hover:scale-105 transition-all duration-300"
            href={siteConfig.social.naverTalk}
            target="_blank"
            rel="noreferrer"
          >
            네이버 톡톡으로 문의
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </a>
        </div>
      </ScrollAnimation>
    </section>
  );
}
