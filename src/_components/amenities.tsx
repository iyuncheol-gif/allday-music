import { amenities } from "@/constants";

export default function Amenities() {
  return (
    <section className="py-12 md:py-20 bg-white border-y border-border-light">
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {amenities.map((amenity) => (
            <div
              key={amenity.name}
              className="flex flex-col items-center gap-2 md:gap-3 text-center"
            >
              <span className="material-symbols-outlined text-primary text-3xl md:text-4xl">
                {amenity.icon}
              </span>
              <span className="font-medium text-text-main text-sm md:text-base">
                {amenity.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
