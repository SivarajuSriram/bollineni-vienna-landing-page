"use client";

import { useEffect, useRef, useState } from "react";
import { useVilla } from "./Villa";

export default function LocationMap() {
  const villa = useVilla();
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4822.074828756185!2d77.61092311772155!3d13.09948759127624!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae190049ffbf9f%3A0x43001c5bdbf111b8!2sBollineni%20Vienna!5e1!3m2!1sen!2sin!4v1789121391559!5m2!1sen!2sin";

  const [active, setActive] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!active) return;

    // mouseleave on a wrapper containing an <iframe> doesn't reliably fire
    // when the cursor crosses into/out of the iframe's own document, so we
    // can't rely on hover to hand scroll control back to the page. A
    // document-level click-outside check always fires on the parent
    // document, so it works regardless of the iframe.
    const onClick = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setActive(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(false);
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [active]);

  return (
    <section id="location" className="bg-beige">
      <div className="px-32 lg:max-xl:px-20 max-lg:px-20 max-md:px-10 max-sm:px-5">
        <div className="w-full pt-24 max-lg:pt-20 max-md:pt-14"></div>
        <div className="flex flex-col items-center gap-[0.75vw] max-lg:gap-2">
          <h2 className="text-6xl max-lg:text-5xl max-md:text-3xl font-medium leading-none">LOCATION</h2>
          <p className="text-center max-sm:w-3/4">{villa.location.name}</p>
        </div>
        <div className="w-full pt-14 max-lg:pt-12 max-md:pt-10"></div>
      </div>
      <div ref={wrapperRef} className="relative w-full h-[40vw] max-lg:h-[100vw] max-md:h-[120vw]">
        <iframe
          src={mapSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className={`w-full h-full border-0 ${active ? "" : "pointer-events-none"}`}
          title={`Map showing ${villa.location.name}`}
        ></iframe>
        {!active && (
          <div
            className="group absolute inset-0 flex justify-center items-center bg-black/0 hover:bg-black/10 transition-colors cursor-pointer"
            onClick={() => setActive(true)}
          >
            <div className="bg-white/90 rounded-[2vw] px-[1.5vw] py-[0.75vw] text-base max-lg:text-sm max-lg:px-6 max-lg:py-3 max-lg:rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              Click to interact with the map
            </div>
          </div>
        )}
        {active && (
          <button
            type="button"
            onClick={() => setActive(false)}
            className="fixed z-50 top-4 right-4 bg-white rounded-full px-4 py-2 text-sm cursor-pointer shadow-md"
          >
            Done — resume scrolling
          </button>
        )}
      </div>
      <div className="px-32 lg:max-xl:px-20 max-lg:px-20 max-md:px-10 max-sm:px-5">
        <div className="w-full pt-24 max-lg:pt-20 max-md:pt-14"></div>
      </div>
    </section>
  );
}
