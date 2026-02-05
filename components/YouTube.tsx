"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaYoutube } from "react-icons/fa";

function YouTube() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-jet overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ashGold/30 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className={`text-4xl sm:text-5xl font-bold text-softWhite mb-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Check Out Our YouTube
          </h2>
          <div
            className={`mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          />
          <p
            className={`mt-6 text-lg text-softWhite/60 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Follow our journey as we design, build, and test cutting-edge exoskeleton technology. From behind-the-scenes development to competition highlights, see what it takes to push the boundaries of human augmentation.
          </p>
        </div>

        {/* YouTube CTA */}
        <div
          className={`flex justify-center transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="https://www.youtube.com/@McMasterExo"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.3)] hover:scale-105"
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Content */}
            <FaYoutube className="relative text-2xl text-white" />
            <span className="relative text-lg font-semibold text-white">
              Subscribe to @McMasterExo
            </span>
          </a>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ashGold/30 to-transparent" />
    </section>
  );
}

export default YouTube;
