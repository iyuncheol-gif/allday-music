"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ScrollAnimation from "./scroll-animation";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
// Duplicate the items to create a seamless loop effect (prefix + original + suffix)
// We use 3 sets: [Set A (Clone)] [Set B (Original)] [Set C (Clone)]
const IMAGE_FILES = [
  "img01.jpeg",
  "img02.jpeg",
  "img04.jpeg",
  "img05.jpeg",
  "img07.jpeg",
  "img08.jpeg",
  "img09.jpeg",
  "img10.jpeg",
  "img11.jpeg",
  "img13.jpeg",
  "img14.jpeg",
  "img15.jpeg",
];
const TOTAL_IMAGES = IMAGE_FILES.length;
const TRIPLE_ITEMS = [...IMAGE_FILES, ...IMAGE_FILES, ...IMAGE_FILES]; // 3x check

export default function InteriorPhotos() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Initial scroll positioning to the middle set
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const initializeScroll = () => {
      const middleSetStartIndex = TOTAL_IMAGES;
      const itemNode = container.children[middleSetStartIndex] as HTMLElement;

      if (itemNode) {
        // Scroll to center this item
        const centerPos = itemNode.offsetLeft + itemNode.offsetWidth / 2 - container.clientWidth / 2;
        container.scrollLeft = centerPos;
      }
    };

    // Use requestAnimationFrame to ensure layout is ready
    requestAnimationFrame(() => {
      initializeScroll();
      // Trigger initial scale update
      updateScale();
    });
  }, []);

  const updateScale = () => {
    const container = scrollRef.current;
    if (!container) return;

    const center = container.scrollLeft + container.clientWidth / 2;
    const nodes = Array.from(container.children);

    nodes.forEach((node) => {
      const item = node as HTMLElement;
      const itemCenter = item.offsetLeft + item.offsetWidth / 2;
      const distance = Math.abs(center - itemCenter);
      const halfWidth = container.clientWidth / 2;

      // distance 0 -> center -> grayscale 0
      // distance large -> side -> grayscale 100%
      // Normalized distance: 0 at center, 1 at edge
      const normalizedDist = Math.min(distance / halfWidth, 1);

      // User requested "70% smaller" (or 70% size). 
      // Changed from 0.15 (85% size) to 0.3 (70% size) at edges.
      const scale = 1.0 - (normalizedDist * 0.3);

      // Calculate grayscale: 
      // If normalizedDist < 0.2 (very close to center), grayscale is 0.
      // If normalizedDist > 0.5 (further out), starts getting gray.
      // Let's make it a smooth transition but mostly gray on sides.
      // Use a slightly steeper curve for grayscale than scale.
      const grayscaleValue = Math.min(normalizedDist * 3, 1) * 100; // 0 -> 100%

      const imageWrapper = item.querySelector(".img-wrapper") as HTMLElement;
      if (imageWrapper) {
        imageWrapper.style.transform = `scale(${scale})`;
        imageWrapper.style.filter = `grayscale(${grayscaleValue}%)`;
        imageWrapper.style.transition = "transform 0.3s ease-out, filter 0.3s ease-out";
      }
    });
  };

  // Infinite Scroll Logic
  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const totalWidth = container.scrollWidth;
    const oneSetWidth = totalWidth / 3;

    // Limits
    // If we are in the first set (scrolled too far left), jump forward
    if (container.scrollLeft < oneSetWidth * 0.5) {
      container.scrollLeft += oneSetWidth;
    }
    // If we are in the last set (scrolled too far right), jump backward
    else if (container.scrollLeft > oneSetWidth * 2.5) {
      container.scrollLeft -= oneSetWidth;
    }

    updateScale();
  };

  // Auto-scroll functionality
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      const container = scrollRef.current;
      if (!container) return;

      const center = container.scrollLeft + container.clientWidth / 2;
      let closestIndex = 0;
      let minDistance = Infinity;

      const children = Array.from(container.children);
      children.forEach((child, index) => {
        const item = child as HTMLElement;
        const itemCenter = item.offsetLeft + item.offsetWidth / 2;
        const distance = Math.abs(center - itemCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      const nextIndex = closestIndex + 1;
      const nextItem = children[nextIndex] as HTMLElement;

      if (nextItem) {
        const nextScrollLeft = nextItem.offsetLeft + nextItem.offsetWidth / 2 - container.clientWidth / 2;
        container.scrollTo({
          left: nextScrollLeft,
          behavior: "smooth",
        });
      }

    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused]);


  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    container.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateScale);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateScale);
    };
  }, []);

  return (
    <section
      className="py-12 md:py-24 bg-surface border-y border-border-light"
      id="interior-photos"
    >
      <ScrollAnimation className="w-full max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12 px-4">
          <h2 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-text-main mb-2 md:mb-4">
            연습실 내부 사진
          </h2>
          <p className="text-sm md:text-base text-text-muted">
            다양한 룸 타입의 실제 모습을 확인하세요.
          </p>
        </div>

        {/* Panorama Scroll View */}
        <div className="relative w-full group">
          {/* Left Button */}
          <button
            onClick={() => {
              const container = scrollRef.current;
              if (container) {
                const itemWidth = container.children[0].clientWidth;
                container.scrollBy({ left: -itemWidth, behavior: "smooth" });
                setIsPaused(true);
              }
            }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 md:opacity-100"
            aria-label="Previous photo"
          >
            <IoChevronBack size={24} />
          </button>

          {/* Right Button */}
          <button
            onClick={() => {
              const container = scrollRef.current;
              if (container) {
                const itemWidth = container.children[0].clientWidth;
                container.scrollBy({ left: itemWidth, behavior: "smooth" });
                setIsPaused(true);
              }
            }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 md:opacity-100"
            aria-label="Next photo"
          >
            <IoChevronForward size={24} />
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 no-scrollbar pl-[calc(50%-42.5vw)] pr-[calc(50%-42.5vw)] md:pl-[calc(50%-400px)] md:pr-[calc(50%-400px)]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            {TRIPLE_ITEMS.map((filename, i) => {
              // Calculate original index from the expanded index
              const originalIndex = i % TOTAL_IMAGES;
              return (
                <div
                  key={i}
                  // Determine width
                  className="flex-none w-[85vw] md:w-[800px] aspect-[4/3] relative snap-center py-4"
                >
                  <div
                    className="img-wrapper w-full h-full relative rounded-2xl overflow-hidden shadow-lg border border-border-light bg-surface-card transition-transform duration-300 ease-out will-change-transform"
                  >
                    <Image
                      src={`/img/${filename}`}
                      alt={`연습실 내부 사진 ${originalIndex + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 85vw, 800px"
                      priority={i >= TOTAL_IMAGES && i < TOTAL_IMAGES + 2} // Priority load the middle set start
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Navigation Dots (Optional but good for carousel feel) */}
        {/* Skipping dots to keep it clean as per "Panorama" request, unless needed. */}

      </ScrollAnimation>
    </section>
  );
}
