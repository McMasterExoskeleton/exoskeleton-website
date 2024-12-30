"use client";

import React, { useState } from "react";
import Image from "next/image";
import BackgroundVideo from "./BackgroundVideo";
import CircuitParticles from "./CircuitParticles";
import GridParticles from "./GridParticles";
import ParticlesHexagon from "./ParticlesHexagon";

function Hero() {
  const [isVideo, setVideo] = useState(false);

  return (
    <section className="relative flex justify-center items-center w-fill h-full bg-white z-10">
      {/* Video Background */}
      {/* <Image
        src="/hero.png"
        alt="Logo"
        width={100}
        height={100}
        className="w-full h-full object-cover"
      /> */}

      {/* <video
        className="w-full h-full object-cover"
        controls
        preload="none"
        autoPlay
        muted
        loop
      >
        <source src="/videos/hero_vid.mp4" type="video/mp4" />
        <source src="/videos/hero_vid.webm" type="video/webm" />
        <source src="/videos/hero_vid.mov" type="video/quicktime" />
        Your browser does not support the video tag.
      </video> */}
      {/* <div className="w-full h-full object-cover">
        <BackgroundVideo></BackgroundVideo>
      </div> */}
      {/* <CircuitParticles id="circuit-home" /> */}
      {/* <GridParticles id="grid-home" /> */}
      <ParticlesHexagon id="hexagon-home" />

      {/* Title and Tagline with Shading */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white space-y-4 px-4 py-8 bg-black bg-opacity-50 z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
          McMaster Exoskeleton
        </h1>
        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl font-medium">
          Empowering movement.
        </p>
      </div>
    </section>
  );
}

export default Hero;
