"use client";
import React, { useEffect, useState } from "react";
import ParticlesBackground from "./ParticlesBackground";

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const element = document.getElementById("about-section");
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.8) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="about-section"
      className={`relative flex items-center justify-center text-white py-16 px-8 text-center transition-opacity duration-1000 h-fill ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ minHeight: "750px" }}
    >
      {/* Particles Background */}
      <ParticlesBackground />

      {/* Content with Z-Index to stay above particles */}
      <div className="w-1/2 mx-auto relative z-10 text-center text-white py-16 px-4 sm:px-6 lg:px-8 bg-black bg-opacity-50">
        <p className="text-lg sm:text-lg md:text-3xl leading-relaxed font-light">
          <span className="font-bold">McMaster Exoskeleton</span> is a newly
          formed technical team. Entirely student-run, the multi-disciplinary
          team aims to design, build, and compete with a lower-limb exoskeleton
          that enhances users' strength and mobility.
        </p>
      </div>
    </section>
  );
}

export default About;
