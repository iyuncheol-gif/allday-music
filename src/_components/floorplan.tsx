import { floorplanRooms } from "@/constants";

function RoomCell({
  id,
  size,
  className = "",
}: {
  id: string;
  size: string;
  className?: string;
}) {
  return (
    <div
      className={`border-2 border-slate-300 rounded-lg flex flex-col items-center justify-center p-2 bg-white hover:border-primary hover:shadow-md transition-all group ${className}`}
    >
      <span className="text-base md:text-lg font-bold text-primary mb-0.5 md:mb-1 group-hover:scale-110 transition-transform">
        {id}
      </span>
      <span className="text-[10px] md:text-xs text-text-muted font-mono">
        {size}
      </span>
    </div>
  );
}

function FacilityCell({
  icon,
  label,
}: {
  icon: string;
  label: string;
}) {
  return (
    <div className="border-2 border-slate-200 rounded-lg flex flex-col items-center justify-center bg-slate-50 hover:bg-slate-100 transition-colors p-2">
      <span className="material-symbols-outlined text-slate-400 mb-0.5 md:mb-1 text-lg md:text-xl">
        {icon}
      </span>
      <span className="text-[8px] md:text-[10px] text-slate-500 font-bold uppercase">
        {label}
      </span>
    </div>
  );
}

import ScrollAnimation from "./scroll-animation";

// ... (other helper components like RoomCell, FacilityCell remain unchanged)

export default function Floorplan() {
  return (
    <section className="py-12 md:py-24 px-4 md:px-6 bg-surface" id="floorplan">
      <ScrollAnimation className="w-full max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16">
          <span className="text-primary font-bold tracking-wider text-xs md:text-sm uppercase mb-1 md:mb-2 block">
            Floor Plan
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-text-main mb-2 md:mb-4">
            스튜디오 룸 배치도
          </h2>
          <p className="text-sm md:text-base text-text-muted">
            다양한 크기의 룸과 편의시설 위치를 확인하세요.
          </p>
        </div>

        {/* Floorplan - Horizontal Scroll on Mobile */}
        <div className="w-full overflow-x-auto pb-4 no-scrollbar">
          <div className="min-w-[700px] md:min-w-[800px] max-w-[900px] mx-auto bg-white p-4 md:p-8 rounded-3xl shadow-sm border border-border-light relative select-none">
            <div className="flex flex-col gap-3 md:gap-4">
              {/* Row 1 - Top rooms */}
              <div className="grid grid-cols-6 gap-2 md:gap-3">
                {floorplanRooms.row1.map((room) => (
                  <RoomCell
                    key={room.id}
                    id={room.id}
                    size={room.size}
                    className="h-24 md:h-32"
                  />
                ))}
              </div>

              {/* Main Grid */}
              <div className="grid grid-cols-4 gap-3 md:gap-4">
                {/* Column 1 - 301, 302, Shower/Toilet */}
                <div className="flex flex-col gap-2 md:gap-3">
                  <RoomCell
                    id={floorplanRooms.col1[0].id}
                    size={floorplanRooms.col1[0].size}
                    className="h-28 md:h-[152px]"
                  />
                  <RoomCell
                    id={floorplanRooms.col1[1].id}
                    size={floorplanRooms.col1[1].size}
                    className="h-56 md:h-[316px]"
                  />
                  <div className="grid grid-cols-2 gap-1.5 md:gap-2 h-16 md:h-24">
                    <FacilityCell icon="shower" label="Shower" />
                    <FacilityCell icon="wc" label="Toilet" />
                  </div>
                </div>

                {/* Column 2 - Cabinet Area */}
                <div className="border-2 border-slate-200 bg-slate-50 rounded-lg flex flex-col items-center py-3 md:py-4 px-2 h-auto">
                  <span className="text-[10px] md:text-xs font-bold text-slate-500 uppercase mb-2 md:mb-4 tracking-wider">
                    Cabinet Area
                  </span>
                  <div className="w-full flex-1 flex flex-col gap-1 md:gap-2 opacity-50 justify-center">
                    {Array.from({ length: 11 }).map((_, i) => (
                      <div
                        key={i}
                        className="h-5 md:h-8 w-full border border-slate-300 rounded bg-white"
                      />
                    ))}
                  </div>
                </div>

                {/* Column 3 - 106, 105, 104, Elevator */}
                <div className="flex flex-col gap-2 md:gap-3">
                  {floorplanRooms.col3.map((room) => (
                    <RoomCell
                      key={room.id}
                      id={room.id}
                      size={room.size}
                      className="h-28 md:h-[152px]"
                    />
                  ))}
                  <div className="border-2 border-slate-200 bg-slate-100 rounded-lg h-16 md:h-24 flex flex-col items-center justify-center">
                    <span className="material-symbols-outlined text-slate-400 mb-0.5 md:mb-1 text-lg md:text-xl">
                      elevator
                    </span>
                    <span className="text-[9px] md:text-xs font-bold text-slate-500 uppercase">
                      Elevator
                    </span>
                  </div>
                </div>

                {/* Column 4 - 107, 103, 102, 101, 100 */}
                <div className="flex flex-col gap-2 md:gap-3">
                  {floorplanRooms.col4.map((room) => (
                    <RoomCell
                      key={room.id}
                      id={room.id}
                      size={room.size}
                      className="h-28 md:h-[152px]"
                    />
                  ))}
                  <div className="flex gap-1.5 md:gap-2 h-16 md:h-24">
                    {floorplanRooms.col4Bottom.map((room) => (
                      <RoomCell
                        key={room.id}
                        id={room.id}
                        size={room.size}
                        className="w-full"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
}
