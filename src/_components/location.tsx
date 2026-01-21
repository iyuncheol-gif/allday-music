import { locationInfo, siteConfig } from "@/constants";

import ScrollAnimation from "./scroll-animation";

export default function Location() {
  return (
    <section
      className="py-8 md:py-12 bg-surface border-b border-border-light"
      id="location"
    >
      <ScrollAnimation className="w-full max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Info Section */}
          <div className="md:col-span-4 p-6 md:p-10 flex flex-col justify-center gap-6 md:gap-8 bg-white md:border-r border-border-light">
            <h2 className="text-2xl md:text-3xl font-bold text-text-main">
              오시는 길
            </h2>

            <div className="flex flex-col gap-4 md:gap-6 text-text-muted">
              {/* Address */}
              <div className="flex items-start gap-2 md:gap-3">
                <span className="material-symbols-outlined text-primary mt-0.5 md:mt-1 text-lg md:text-xl">
                  location_on
                </span>
                <div>
                  <p className="text-text-main font-semibold text-sm md:text-base">
                    {locationInfo.address}
                  </p>
                  <p className="text-xs md:text-sm mt-0.5 md:mt-1">
                    {locationInfo.landmark}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2 md:gap-3">
                <span className="material-symbols-outlined text-primary text-lg md:text-xl">
                  phone
                </span>
                <a
                  href={`tel:${locationInfo.phone}`}
                  className="text-sm md:text-base hover:text-primary transition-colors font-medium"
                >
                  {locationInfo.phone}
                </a>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-2 md:gap-3">
              <a
                className="w-full text-center bg-[#03C75A] text-white font-bold py-2.5 md:py-3 rounded-xl hover:bg-[#02b351] transition-colors shadow-sm flex items-center justify-center gap-2 text-sm md:text-base"
                href={siteConfig.social.naverTalk}
                target="_blank"
                rel="noreferrer"
              >
                <span className="material-symbols-outlined text-lg">
                  chat_bubble
                </span>
                네이버 톡톡으로 문의
              </a>
              <a
                className="w-full text-center bg-[#FAE100] text-[#371D1E] font-bold py-2.5 md:py-3 rounded-xl hover:bg-[#FCE620] transition-colors shadow-sm flex items-center justify-center gap-2 text-sm md:text-base"
                href={siteConfig.social.kakao}
                target="_blank"
                rel="noreferrer"
              >
                <span className="material-symbols-outlined text-lg">chat</span>
                카카오톡 문의
              </a>
            </div>
          </div>

          {/* Map Section */}
          <div className="md:col-span-8 min-h-[300px] md:min-h-[400px] bg-slate-100 relative group overflow-hidden">
            {/* Placeholder Map Background */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-500"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCSL5ovqs8M6UK-xLg4rpHjTZqgmXbX9tIjbWz1pF8SaccnMncmqXpThmjohFei418i9ko3sEntDLnt10GJdt6SFQvPrmqeDP9r6U-HcznLro7YktPTq5DWVS9FuHUYl4ow_HrprCCsCjW2hIWYjIVd4vJ_6ElPXKfSfPkF-8vDuW9eATlmX2VCO90cvJT0vHzoyxLjrAkM0R5PxtPqc5k90xvBo7t0jxjAD3itmsdJS6PTjssFGXbrB_ffHele-XgW_EKLdPPMabE')`,
              }}
            />

            {/* Map Marker */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <span className="material-symbols-outlined text-primary text-4xl md:text-5xl drop-shadow-md">
                location_on
              </span>
              <span className="bg-white px-2 md:px-3 py-0.5 md:py-1 rounded-full shadow-md text-[10px] md:text-xs font-bold text-text-main mt-0.5 md:mt-1">
                ALLDAY MUSIC
              </span>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
}
