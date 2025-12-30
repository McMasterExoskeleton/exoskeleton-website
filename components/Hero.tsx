"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.3;
  const opacityFade = Math.max(0, 1 - scrollY / 600);

  return (
    <section className="relative flex justify-center items-center w-full min-h-screen bg-jet overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 w-full h-[120%]"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
          backgroundImage: "url('/team/team_photo.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-jet z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 z-10" />

      {/* Animated accent lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-ashGold to-transparent opacity-60 z-20" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ashGold/50 to-transparent z-20" />

      {/* Content */}
      <div
        className="relative z-20 flex flex-col justify-center items-center text-center text-white px-6 py-20 max-w-5xl mx-auto"
        style={{ opacity: opacityFade }}
      >
        {/* Badge */}
        <div
          className={`mb-6 transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-widest uppercase bg-ashGold/20 text-ashGold border border-ashGold/30 rounded-full backdrop-blur-sm">
            McMaster University
          </span>
        </div>

        {/* Main Title */}
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight mb-6 transition-all duration-1000 delay-200 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="block text-white drop-shadow-2xl">McMaster</span>
          <span className="block text-gradient-gold mt-1">Exoskeleton</span>
        </h1>

        {/* Tagline */}
        <p
          className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-softWhite/90 mb-10 max-w-2xl transition-all duration-1000 delay-400 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Innovation Through Movement
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-600 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Link
            href="/recruiting"
            className="btn-primary px-8 py-4 bg-ashGold text-charcoal font-bold rounded-lg text-lg hover:bg-goldLight transition-all duration-300 shadow-glow"
          >
            Join Our Team
          </Link>
          <Link
            href="/design"
            className="px-8 py-4 bg-transparent text-white font-semibold rounded-lg text-lg border-2 border-white/30 hover:border-ashGold hover:text-ashGold transition-all duration-300 backdrop-blur-sm"
          >
            Explore Our Work
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-20 transition-all duration-1000 delay-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ opacity: opacityFade }}
      >
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
            <div className="w-1.5 h-1.5 bg-ashGold rounded-full animate-bounce" />
          </div>
        </div>
      </div>

      {/* Decorative corner accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-ashGold/30 z-20" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-ashGold/30 z-20" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-ashGold/30 z-20" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-ashGold/30 z-20" />
    </section>
  );
}

export default Hero;
