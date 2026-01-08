"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

function About() {
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

  const stats = [
    { value: "5+", label: "Disciplines" },
    { value: "50+", label: "Team Members" },
    { value: "5th", label: "Place ACE 2025" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-charcoal overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-ashGold/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-ashGold/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      {/* Section Header */}
      <div className="py-16 text-center">
        <h2
          className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-softWhite mb-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Who We Are
        </h2>
        <div
          className={`mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-ashGold to-transparent transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
        />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative group">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-ashGold/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Main image container */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 border-2 border-ashGold/30 rounded-xl z-10 pointer-events-none" />
                <img
                  src="/team/juan_aura_farm.JPG"
                  alt="Pilot wearing exoskeleton suit"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Floating accent card */}
              <div className="absolute -bottom-6 -right-6 bg-charcoal border border-ashGold/30 rounded-xl p-4 shadow-xl backdrop-blur-sm hidden sm:block">
                <p className="text-ashGold font-bold text-2xl">5 Months</p>
                <p className="text-softWhite/70 text-sm">From concept to competition</p>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            {/* Mission statement */}
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-ashGold to-ashGold/20 rounded-full" />
              <div className="pl-6">
                <p className="text-xl sm:text-2xl lg:text-3xl leading-relaxed font-light text-softWhite">
                  <span className="font-bold text-ashGold">
                    McMaster Exoskeleton
                  </span>{" "}
                  is a student-run technical team spanning 5+ disciplines. We design, build, and compete with lower-limb exoskeletons that enhance human strength and mobility.
                </p>
              </div>
            </div>

            {/* Stats - Enhanced */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`relative text-center p-5 rounded-xl bg-black/30 border border-white/5 group hover:border-ashGold/30 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  {/* Animated background glow */}
                  <div className="absolute inset-0 rounded-xl bg-ashGold/0 group-hover:bg-ashGold/5 transition-all duration-500" />
                  {/* Top accent line */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-transparent via-ashGold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <p className="relative text-3xl sm:text-4xl lg:text-5xl font-black text-gradient-gold mb-1 group-hover:scale-105 transition-transform duration-300">
                    {stat.value}
                  </p>
                  <p className="relative text-xs sm:text-sm text-softWhite/50 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/team"
                className="inline-flex items-center gap-2 px-6 py-3 bg-ashGold text-charcoal font-semibold rounded-lg hover:bg-goldLight transition-all duration-300 shadow-lg hover:shadow-glow"
              >
                Meet the Team
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
              <Link
                href="/ace"
                className="inline-flex items-center gap-2 px-6 py-3 border border-ashGold/50 text-ashGold font-semibold rounded-lg hover:bg-ashGold/10 transition-all duration-300"
              >
                Our Competition
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
