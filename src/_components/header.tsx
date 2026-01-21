"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { navItems, siteConfig } from "@/constants";

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
            className="bg-[#FAE100] text-[#371D1E] hover:bg-[#FCE620] px-3 lg:px-4 py-2 rounded-lg text-xs lg:text-sm font-bold transition-all inline-flex items-center gap-1.5"
            href={siteConfig.social.kakao}
            target="_blank"
            rel="noreferrer"
          >
            <span className="material-symbols-outlined text-[18px]">
              chat_bubble
            </span>
            카카오톡 문의
          </a>
          <a
            className="bg-[#03C75A] text-white hover:bg-[#02b351] px-3 lg:px-5 py-2 rounded-lg text-xs lg:text-sm font-bold transition-all shadow-sm inline-flex items-center gap-1.5"
            href={siteConfig.social.naverTalk}
            target="_blank"
            rel="noreferrer"
          >
            <span className="hidden lg:inline">네이버 톡톡으로 문의</span>
            <span className="lg:hidden">톡톡 문의</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-text-main"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
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
        className={`fixed top-0 right-0 z-50 w-80 max-w-[85vw] h-full bg-white shadow-2xl transform transition-transform duration-300 ease-out md:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full pt-16 pb-6 px-5">
          {/* Close Button */}
          <button
            className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            <CloseIcon className="text-text-main" />
          </button>

          {/* Navigation Links */}
          <div className="flex-1 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-4 py-3 rounded-xl text-base font-medium text-text-main hover:bg-gray-100 transition-all duration-300"
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
              <span className="material-symbols-outlined text-lg">chat</span>
              카카오톡 문의
            </a>
            <a
              href={siteConfig.social.naverTalk}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-[#03C75A] text-white font-bold rounded-xl hover:bg-[#02b351] transition-colors duration-300"
            >
              <span className="material-symbols-outlined text-lg">
                chat_bubble
              </span>
              네이버 톡톡으로 문의
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
