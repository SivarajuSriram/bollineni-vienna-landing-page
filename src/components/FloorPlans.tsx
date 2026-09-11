"use client";

import { useState } from "react";

interface Category {
  id: string;
  label: string;
  images: string[];
}

// Stock placeholder imagery until final master-plan / site-plan / legend /
// floor-plan artwork is supplied — swap the paths below when real assets land.
const categories: Category[] = [
  { id: "master-plan", label: "Master Plan", images: ["/images/floor-plans/master-plan.png"] },
  {
    id: "floor-plans",
    label: "Floor Plans",
    images: ["/images/floor-plans/floor-plan-1.png", "/images/floor-plans/floor-plan-2.png"],
  },
];

export default function FloorPlans() {
  const [activeId, setActiveId] = useState(categories[0].id);
  const active = categories.find((c) => c.id === activeId) ?? categories[0];

  return (
    <section id="floor-plans" className="bg-ink">
      <div className="px-32 lg:max-xl:px-20 max-lg:px-20 max-md:px-10 max-sm:px-5">
        <div className="w-full pt-24 max-lg:pt-20 max-md:pt-14"></div>
        <div className="flex flex-col items-center gap-[2vw] max-lg:gap-6">
          <h2 className="text-6xl lg:max-xl:text-5xl max-lg:text-5xl max-md:text-3xl font-medium leading-none text-white">FLOOR PLANS</h2>
          <p className="text-white text-xl max-lg:text-lg max-md:text-base text-center max-lg:text-justify max-w-[55vw] max-lg:max-w-[38rem] max-md:max-w-[28rem] max-sm:max-w-[90vw]">
            The floor plans at Bollineni Vienna are designed to balance spaciousness, privacy, natural light, and effortless flow. From expansive 4 BHK & 5 BHK apartments in Bengaluru to refined bespoke residences Bengaluru, every layout reflects thoughtful planning and contemporary luxury. Explore well-crafted homes at one of the most distinguished luxury apartments in Kogilu, designed for elevated everyday living.
          </p>
        </div>
        <div className="w-full pt-14 max-lg:pt-12 max-md:pt-10"></div>

        <div className="flex justify-center gap-[0.75vw] max-lg:gap-3 max-md:gap-2 flex-wrap">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveId(category.id)}
              className={`px-[1.5vw] py-[0.6vw] lg:max-xl:px-5 lg:max-xl:py-2.5 max-lg:px-5 max-lg:py-2.5 max-md:px-4 max-md:py-2 rounded-full border text-base max-lg:text-sm max-md:text-xs transition-colors cursor-pointer ${
                active.id === category.id
                  ? "border-white bg-white text-ink"
                  : "border-white/30 text-white/70 hover:text-white hover:border-white/60"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="w-full pt-10 max-lg:pt-8 max-md:pt-6"></div>

        <div
          className={`grid gap-[1.5vw] max-lg:gap-6 max-md:gap-4 ${
            active.images.length > 1 ? "grid-cols-2 max-md:grid-cols-1" : "grid-cols-1"
          }`}
        >
          {active.images.map((src) => (
            <div
              key={src}
              className="group relative overflow-hidden h-[28vw] max-lg:h-[55vw] max-md:h-[70vw]"
            >
              <img
                src={src}
                alt={active.label}
                loading="lazy"
                className="w-full h-full object-cover block blur-md scale-105 select-none pointer-events-none"
              />
              <div className="absolute inset-0 bg-ink/40 group-hover:bg-ink/55 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <a
                  href="#book"
                  className="px-[1.75vw] py-[0.75vw] lg:max-xl:px-6 lg:max-xl:py-3 max-lg:px-6 max-lg:py-3 max-md:px-5 max-md:py-2.5 rounded-full bg-white text-ink text-base max-lg:text-sm max-md:text-xs font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 cursor-pointer"
                >
                  View Plan
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full pt-24 max-lg:pt-20 max-md:pt-14"></div>
      </div>
    </section>
  );
}
