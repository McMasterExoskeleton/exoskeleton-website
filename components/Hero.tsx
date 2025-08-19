"use client";

import React, { useState } from "react";
import Image from "next/image";

function Hero() {
  const [isVideo, setVideo] = useState(false);

  return (
    <section className="relative flex justify-center items-center w-full h-screen bg-white z-10 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/team/team_photo.png"
        alt="Team Background"
        fill
        priority
        className="object-cover w-full h-full"
      />

      {/* Dark overlay to dim the image but keep color */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

      {/* Title and Tagline */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white space-y-4 px-4 py-8 z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
          McMaster Exoskeleton
        </h1>
        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl font-medium">
          Innovation Through Movement.
        </p>
      </div>
    </section>
  );
}

export default Hero;
