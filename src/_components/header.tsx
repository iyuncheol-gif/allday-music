"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { navItems, siteConfig } from "@/constants";
import { SiNaver } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri";

function MenuIcon({ className }: { className?: string }) {
  return (
    <span className={`material-symbols-outlined ${className}`}>menu</span>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <span className={`material-symbols-outlined ${className}`}>close</span>
  );
}


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-border-light bg-white/90 backdrop-blur-md h-[60px] md:h-[72px] flex items-center transition-all duration-300">
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 md:gap-3">
          <div className="size-7 md:size-8 text-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-[28px] md:text-[32px]">
              graphic_eq
            </span>
          </div>
          <h1 className="text-text-main text-sm md:text-lg font-bold tracking-tight">
            {siteConfig.name}
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-text-muted hover:text-primary text-sm font-semibold transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3">
          <a
            className="bg-[#FAE100] text-[#371D1E] hover:bg-[#FCE620] w-[110px] lg:w-[140px] py-2 rounded-lg text-xs lg:text-sm font-bold transition-all inline-flex items-center justify-center gap-1.5"
            href={siteConfig.social.kakao}
            target="_blank"
            rel="noreferrer"
          >
            <RiKakaoTalkFill className="text-[18px]" />
            카카오톡 문의
          </a>
          <a
            className="bg-[#03C75A] text-white hover:bg-[#02b351] w-[110px] lg:w-[140px] py-2 rounded-lg text-xs lg:text-sm font-bold transition-all shadow-sm inline-flex items-center justify-center gap-1.5"
            href={siteConfig.social.naverTalk}
            target="_blank"
            rel="noreferrer"
          >
            <SiNaver className="text-[14px]" />
            <span className="hidden lg:inline">네이버 톡톡 문의</span>
            <span className="lg:hidden">톡톡 문의</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden text-text-main p-2 ${isMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open navigation"
        >
          <MenuIcon />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 z-50 w-80 max-w-[85vw] h-[100dvh] bg-white shadow-2xl transform transition-transform duration-300 ease-out md:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col h-[100dvh] pt-[calc(1rem+env(safe-area-inset-top))] pb-[calc(1.5rem+env(safe-area-inset-bottom))] px-5 bg-white relative overflow-y-auto">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close navigation"
          >
            <CloseIcon className="text-text-main" />
          </button>

          <div className="mt-12 flex-1 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-4 py-3 rounded-xl text-base font-medium text-text-main hover:bg-primary/10 hover:text-primary hover:pl-6 active:bg-primary/10 active:text-primary active:pl-6 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="pt-5 border-t border-border-light space-y-2">
            <a
              href={siteConfig.social.kakao}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-[#FAE100] text-[#371D1E] font-bold rounded-xl hover:bg-[#FCE620] transition-colors duration-300"
            >
              <RiKakaoTalkFill className="text-xl" />
              카카오톡 문의
            </a>
            <a
              href={siteConfig.social.naverTalk}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-[#03C75A] text-white font-bold rounded-xl hover:bg-[#02b351] transition-colors duration-300"
            >
              <SiNaver className="text-lg" />
              네이버 톡톡 문의
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
