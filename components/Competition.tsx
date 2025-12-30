"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

function Competition() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const events = [
    "Design Review",
    "Safety Check",
    "Emergency Doff",
    "Stair Climbing",
    "Obstacle Course",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-jet overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ashGold/30 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-ashGold/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Column */}
          <div
            className={`order-2 lg:order-1 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            {/* Section badge */}
            <div className="mb-6">
              <span className="inline-block px-3 py-1 text-xs font-medium tracking-widest uppercase text-ashGold bg-ashGold/10 border border-ashGold/20 rounded-full">
                Competition
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-softWhite mb-6 leading-tight">
              ACE Competition
              <span className="block text-ashGold text-xl sm:text-2xl lg:text-3xl font-normal mt-2">
                Applied Collegiate Exoskeleton
              </span>
            </h2>

            {/* Description */}
            <p className="text-lg sm:text-xl text-softWhite/80 leading-relaxed mb-8">
              The ACE Competition is a cross-university competition testing the
              functional capabilities of exoskeletons designed and built by
              undergraduate students. Teams compete in challenges that test
              strength, endurance, and technological innovation.
            </p>

            {/* Events list */}
            <div className="mb-8">
              <p className="text-sm font-medium text-softWhite/60 uppercase tracking-wider mb-4">
                Competition Events
              </p>
              <div className="flex flex-wrap gap-2">
                {events.map((event, index) => (
                  <span
                    key={event}
                    className={`px-4 py-2 text-sm font-medium text-softWhite bg-black/40 border border-white/10 rounded-lg transition-all duration-500 hover:border-ashGold/50 hover:bg-ashGold/10 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    {event}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/ace"
              className="inline-flex items-center gap-3 px-6 py-3 bg-ashGold text-charcoal font-bold rounded-lg hover:bg-goldLight transition-all duration-300 shadow-lg hover:shadow-glow group"
            >
              <span>Learn About ACE 2025</span>
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          {/* Image Column */}
          <div
            className={`order-1 lg:order-2 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative group">
              {/* Floating decorative element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-ashGold/30 rounded-xl z-0 transition-all duration-500 group-hover:border-ashGold/50" />

              {/* Main image container */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl z-10">
                <div className="absolute inset-0 border-2 border-ashGold/20 rounded-xl z-10 pointer-events-none" />
                <img
                  src="/team/pilots.png"
                  alt="Exoskeleton pilots at ACE Competition"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-ashGold/10 opacity-60" />

                {/* Floating badge */}
                <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm border border-ashGold/30 rounded-lg px-4 py-2">
                  <p className="text-ashGold font-bold text-lg">5th Place</p>
                  <p className="text-softWhite/70 text-xs">ACE 2025 - First Year</p>
                </div>
              </div>

              {/* Floating decorative element */}
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-ashGold/20 rounded-xl z-0 transition-all duration-500 group-hover:border-ashGold/40" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ashGold/30 to-transparent" />
    </section>
  );
}

export default Competition;
