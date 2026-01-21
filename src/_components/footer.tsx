"use client";

import Link from "next/link";
import {
  siteConfig,
  quickLinks,
  supportLinks,
  socialLinks,
  locationInfo,
} from "@/constants";

import ScrollAnimation from "./scroll-animation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f9fafb] border-t border-border-light pt-10 md:pt-16 pb-6 md:pb-8 px-4 md:px-6 text-slate-600">
      <ScrollAnimation className="w-full max-w-[1200px] mx-auto flex flex-col gap-8 md:gap-12">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-10">
          {/* Brand Section */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <span className="material-symbols-outlined text-primary text-xl md:text-2xl">
                graphic_eq
              </span>
              <h2 className="text-text-main text-base md:text-lg font-bold">
                {siteConfig.name}
              </h2>
            </div>
            <p className="text-xs md:text-sm text-text-muted">
              현대적인 독립 아티스트를 위한 프리미엄 창작 공간.
            </p>
            <p className="text-xs md:text-sm text-text-muted mt-1 md:mt-2">
              {locationInfo.address}
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-8 md:gap-16 flex-wrap">
            {/* Studio Links */}
            <div className="flex flex-col gap-3 md:gap-4">
              <h4 className="text-text-main font-bold text-sm md:text-base">
                Studio
              </h4>
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-text-muted hover:text-primary text-xs md:text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Support Links */}
            <div className="flex flex-col gap-3 md:gap-4">
              <h4 className="text-text-main font-bold text-sm md:text-base">
                Support
              </h4>
              {supportLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-text-muted hover:text-primary text-xs md:text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 md:pt-8 border-t border-border-light gap-3 md:gap-4">
          <p className="text-[10px] md:text-xs text-text-muted">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-3 md:gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                className="text-text-muted hover:text-primary transition-colors flex items-center gap-1 text-xs md:text-sm"
                href={social.url}
                target="_blank"
                rel="noreferrer"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </ScrollAnimation>
    </footer>
  );
}
