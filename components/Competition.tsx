"use client";
import React, { useEffect, useState } from "react";

function Competition() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the component is visible
      }
    );

    const target = document.querySelector("#competition-section");
    if (target) {
      observer.observe(target);
    }

    // Cleanup observer on unmount
    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return (
    <section
      id="competition-section"
      className={`py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 transition-all duration-1000 ${
        isVisible ? "opacity-100 animate-fadeIn" : "opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Column */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-4">
            ACE (Applied Collegiate Exoskeleton) Competition
          </h2>
          <p className="text-gray-300 text-lg sm:text-lg md:text-2xl leading-relaxed">
            The ACE Competition is a cross-university competition aimed at
            testing the functional capabilities of exoskeletons designed and
            built by undergraduate students of their respective universities.
            Teams compete in challenges that test strength, endurance, and
            technological innovation.
          </p>
        </div>

        {/* Right Column */}
        <div className="flex justify-center">
          <img
            src="/ACE.jpg"
            alt="ACE Competition"
            className={`rounded-lg shadow-lg max-w-full h-auto transition-opacity duration-1000 ${
              isVisible ? " opacity-100 animate-fadeIn" : "opacity-0"
            }`}
          />
        </div>
      </div>
    </section>
  );
}

export default Competition;
