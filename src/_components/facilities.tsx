import {
  sharedFacilities,
  roomFacilities,
  roomSoundproofing,
} from "@/constants";

import ScrollAnimation from "./scroll-animation";

export default function Facilities() {
  return (
    <section
      className="py-12 md:py-24 px-4 md:px-6 relative overflow-hidden bg-white"
      id="facilities"
    >
      <ScrollAnimation className="w-full max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-text-main mb-2 md:mb-4">
            시설 안내
          </h2>
          <p className="text-sm md:text-base text-text-muted">
            연습에만 집중할 수 있도록, 생활의 편리함까지 갖췄습니다.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
          {/* Shared Facilities */}
          <div className="bg-white rounded-2xl p-6 md:p-8 lg:p-10 shadow-sm border border-border-light flex flex-col h-full hover:border-primary hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-xl md:text-2xl">
                  apartment
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-text-main">
                공동 시설
              </h3>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 md:gap-y-4 gap-x-4 md:gap-x-6">
              {sharedFacilities.map((facility) => (
                <li
                  key={facility.name}
                  className="flex items-center gap-2 md:gap-3 text-text-muted group"
                >
                  <span className="material-symbols-outlined text-primary/70 group-hover:text-primary transition-colors text-lg md:text-xl">
                    {facility.icon}
                  </span>
                  <span className="font-medium text-sm md:text-base">
                    {facility.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Room Facilities */}
          <div className="bg-white rounded-2xl p-6 md:p-8 lg:p-10 shadow-sm border border-border-light flex flex-col h-full hover:border-primary hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-xl md:text-2xl">
                  meeting_room
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-text-main">
                개인 룸 내부시설
              </h3>
            </div>

            <div className="space-y-4 md:space-y-6">
              {/* Soundproofing Info */}
              <div className="bg-surface rounded-xl p-4 md:p-5 border border-blue-100">
                <div className="mb-3 md:mb-4 pb-3 md:pb-4 border-b border-blue-200/60">
                  <h4 className="font-bold text-text-main mb-1 md:mb-2 text-base md:text-lg">
                    {roomSoundproofing.basic.title}
                  </h4>
                  <div className="flex items-center gap-2 text-xs md:text-sm text-text-muted">
                    <span className="material-symbols-outlined text-primary text-sm md:text-base">
                      check_circle
                    </span>
                    <span>{roomSoundproofing.basic.description}</span>
                  </div>
                </div>
                <div className="pt-1">
                  <h4 className="font-bold text-primary mb-1 md:mb-2 text-base md:text-lg">
                    {roomSoundproofing.premium.title}
                  </h4>
                  <div className="flex items-center gap-2 text-xs md:text-sm text-text-muted">
                    <span className="material-symbols-outlined text-primary text-sm md:text-base">
                      check_circle
                    </span>
                    <span>
                      <strong>{roomSoundproofing.premium.description}</strong>
                    </span>
                  </div>
                </div>
              </div>

              {/* Room Facilities List */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 md:gap-y-4 gap-x-4 md:gap-x-6">
                {roomFacilities.map((facility) => (
                  <li
                    key={facility.name}
                    className="flex items-center gap-2 md:gap-3 text-text-muted group"
                  >
                    <span className="material-symbols-outlined text-primary/70 group-hover:text-primary transition-colors text-lg md:text-xl">
                      {facility.icon}
                    </span>
                    <span className="font-medium text-sm md:text-base">
                      {facility.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
}
