"use client";

import { useState, useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    const btn = document.getElementById("scroll-to-top-btn");
    if (!btn) return;

    let isVisible = false;

    const toggleVisibility = () => {
      const nearBottom =
        document.documentElement.scrollHeight -
          window.innerHeight -
          window.scrollY <
        160;
      const shouldBeVisible = window.scrollY > 300 && !nearBottom;
      if (shouldBeVisible && !isVisible) {
        isVisible = true;
        btn.style.opacity = "1";
        btn.style.pointerEvents = "auto";
        btn.style.transform = "translateY(0)";
      } else if (!shouldBeVisible && isVisible) {
        isVisible = false;
        btn.style.opacity = "0";
        btn.style.pointerEvents = "none";
        btn.style.transform = "translateY(20px)";
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    // Initial check
    toggleVisibility();

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      id="scroll-to-top-btn"
      onClick={scrollToTop}
      className="fixed bottom-6 right-4 max-md:bottom-5 max-md:right-3 z-[9999] flex items-center justify-center w-11 h-11 max-md:w-10 max-md:h-10 rounded-full bg-white text-[#333] border border-[#eaeaea] shadow-[0_4px_12px_rgba(0,0,0,0.15)] cursor-pointer transition-[opacity,transform] duration-300 ease-in-out"
      style={{
        opacity: "0",
        pointerEvents: "none",
        transform: "translateY(20px)",
      }}
      aria-label="Scroll to top"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="max-md:w-4 max-md:h-4"
      >
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </button>
  );
}
