"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { SponsorCard } from "./Sponsors";
import { sponsors, SponsorProps } from "@/data/sponsorsData";

const PoweredBy = () => {
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

  const desiredSponsorNames = [
    "EZMotion",
    "RLX Solutions",
    "3JPrecision",
    "PCB Libraries",
    "KISSsoft",
  ];

  const topSponsors = sponsors.gold.filter((sponsor) =>
    desiredSponsorNames.includes(sponsor.name)
  );

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-charcoal overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ashGold/30 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-ashGold/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className={`text-4xl sm:text-5xl font-bold text-softWhite mb-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Powered By
          </h2>
          <div
            className={`mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-ashGold to-transparent transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          />
          <p
            className={`mt-4 text-lg text-softWhite/60 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Our success is made possible by the generous support of our sponsors
          </p>
        </div>

        {/* Sponsors Grid */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center justify-items-center transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {topSponsors.map((sponsor: SponsorProps, index) => (
            <div
              key={sponsor.name}
              className="w-full transition-all duration-500 hover:scale-105"
              style={{ transitionDelay: `${500 + index * 100}ms` }}
            >
              <a
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-xl bg-black/20 border border-white/5 hover:border-ashGold/30 hover:bg-black/30 transition-all duration-300 group"
              >
                <div className="relative h-20 flex items-center justify-center">
                  <img
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    className="max-h-full max-w-full object-contain filter brightness-100 group-hover:brightness-110 transition-all duration-300"
                  />
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-12 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Link
            href="/sponsors"
            className="inline-flex items-center gap-2 px-6 py-3 border border-ashGold/50 text-ashGold font-semibold rounded-lg hover:bg-ashGold/10 transition-all duration-300 group"
          >
            <span>View All Sponsors</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ashGold/30 to-transparent" />
    </section>
  );
};

export default PoweredBy;
