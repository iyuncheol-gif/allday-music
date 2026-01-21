import { roomTypes, siteConfig } from "@/constants";

import ScrollAnimation from "./scroll-animation";

export default function Rooms() {
  return (
    <section
      className="py-12 md:py-24 px-4 md:px-6 bg-white border-y border-border-light"
      id="rooms"
    >
      <ScrollAnimation className="w-full max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16">
          <span className="text-primary font-bold tracking-wider text-xs md:text-sm uppercase mb-1 md:mb-2 block">
            Room Structure
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-text-main">
            나에게 맞는 구조
          </h2>
        </div>

        {/* Room Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {roomTypes.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-2xl p-6 md:p-8 flex flex-col relative border border-border-light hover:border-primary hover:shadow-[0_4px_20px_-2px_rgba(59,130,246,0.15)] hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="mb-4 md:mb-6">
                <div className="flex justify-between items-start mb-2 md:mb-3">
                  <h3 className="text-lg md:text-xl font-bold text-text-main">
                    {room.name}
                  </h3>
                </div>
                <p className="text-text-muted text-xs md:text-sm leading-relaxed mb-3 md:mb-4">
                  {room.description}
                </p>
                <div className="space-y-1.5 md:space-y-2">
                  {room.features.map((feature) => (
                    <div
                      key={feature.text}
                      className="flex items-center gap-2 text-xs md:text-sm text-text-muted"
                    >
                      <span className="material-symbols-outlined text-primary text-sm md:text-base">
                        {feature.icon}
                      </span>
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-auto">
                <a
                  className="block w-full text-center py-3 md:py-3.5 rounded-xl font-bold transition-colors text-sm md:text-base border border-primary text-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/20"
                  href={siteConfig.social.naverTalk}
                  target="_blank"
                  rel="noreferrer"
                >
                  네이버 톡톡 문의
                </a>
              </div>
            </div>
          ))}
        </div>
      </ScrollAnimation>
    </section>
  );
}
