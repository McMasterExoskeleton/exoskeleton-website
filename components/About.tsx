"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

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
      className={`bg-jet relative flex flex-col lg:flex-row items-center justify-center text-white py-16 px-8 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ minHeight: "750px" }}
    >
      {/* Image on the left (for lg+ screens) */}
      <div className="w-full lg:w-1/2 max-w-md px-4 mb-8 lg:mb-0 mx-auto">
        <div className="rounded-lg overflow-hidden shadow-lg border-4 border-ashGold">
          <Image
            src="/team/juan_aura_farm.JPG"
            alt="Pilot wearing exoskeleton suit"
            width={800}
            height={600}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>

      {/* Text content */}
      <div className="w-full lg:w-1/2 px-4 text-center lg:text-left">
        <div className="bg-black bg-opacity-70 p-8 rounded-lg shadow-md border-l-4 border-ashGold">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed font-light text-softWhite">
            <span className="font-bold text-ashGold">McMaster Exoskeleton</span>{" "}
            is a newly formed technical team. Entirely student-run, our team
            spans 5+ disciplines, and aims to design, build, and compete with a
            lower-limb exoskeleton that enhances users' strength and mobility.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
