"use client";

import { useRef } from "react";
import Script from "next/script";
import { locationInfo, siteConfig } from "@/constants";
import ScrollAnimation from "./scroll-animation";

declare global {
  interface Window {
    kakao: any;
  }
}

export default function Location() {
  const mapRef = useRef<HTMLDivElement>(null);

  const initializeMap = () => {
    if (window.kakao && window.kakao.maps) {
      window.kakao.maps.load(() => {
        if (!mapRef.current) return;

        const options = {
          center: new window.kakao.maps.LatLng(
            siteConfig.contact.geo.latitude,
            siteConfig.contact.geo.longitude
          ),
          level: 3,
        };

        const map = new window.kakao.maps.Map(mapRef.current, options);

        // Marker position
        const markerPosition = new window.kakao.maps.LatLng(
          siteConfig.contact.geo.latitude,
          siteConfig.contact.geo.longitude
        );

        // Create marker
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        // Set marker on map
        marker.setMap(map);

        // Add zoom control
        const zoomControl = new window.kakao.maps.ZoomControl();
        map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);
      });
    }
  };

  return (
    <section
      className="py-8 md:py-12 bg-surface border-b border-border-light"
      id="location"
    >
      <Script
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=35321cad3638593651bfcad0ea32bbc4&autoload=false"
        strategy="afterInteractive"
        onLoad={initializeMap}
      />

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
            <div ref={mapRef} className="w-full h-full min-h-[300px] md:min-h-[400px]" />
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
}
