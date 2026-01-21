"use client";

import { usageSteps } from "@/constants";
import { useEffect, useRef, useState } from "react";

export default function Guide() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-8 md:py-12 bg-white" id="guide">
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-6 md:mb-8 transition-all duration-1000 ease-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-text-main mb-1 md:mb-2">
            이용 방법
          </h2>
          <p className="text-xs md:text-sm text-text-muted">
            복잡한 절차 없이, 오직 음악에만 집중하세요.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-6">
          {usageSteps.map((step, index) => (
            <div key={step.title} className="contents">
              {/* Step Card */}
              <div
                className={`flex-1 w-full bg-white border border-border-light p-3 md:p-4 rounded-xl flex items-center gap-3 md:gap-4 shadow-sm hover:shadow-md transition-all duration-700 ease-out transform group ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                  }`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-surface border border-primary/20 flex items-center justify-center text-primary group-hover:scale-105 transition-transform shrink-0">
                  <span className="material-symbols-outlined text-xl md:text-2xl">
                    {step.icon}
                  </span>
                </div>
                <div className="flex flex-col md:flex-row md:items-baseline gap-0.5 md:gap-2 w-full">
                  <span className="font-bold text-text-main whitespace-nowrap text-sm md:text-base">
                    {step.title}
                  </span>
                  <span className="text-text-muted text-xs md:text-sm">
                    {step.description}
                  </span>
                </div>
              </div>

              {/* Arrow (not after last item) */}
              {index < usageSteps.length - 1 && (
                <span
                  className={`material-symbols-outlined text-gray-300 rotate-90 md:rotate-0 shrink-0 text-lg md:text-xl transition-all duration-700 ease-out transform ${isVisible ? "opacity-100 text-primary/40 translate-x-0" : "opacity-0 -translate-x-4"
                    }`}
                  style={{ transitionDelay: `${index * 300 + 150}ms` }}
                >
                  arrow_forward
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
