"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ace2025Images from "./ace2025Images";

const EVENTS = [
  { name: "Design Review", description: "Technical evaluation of exoskeleton design" },
  { name: "Safety Check", description: "Comprehensive safety verification" },
  { name: "Emergency Doff", description: "Rapid suit removal capability test" },
  { name: "Don/Doff Test", description: "Suit wearing and removal efficiency" },
  { name: "Stair Climbing", description: "Mobility test on varying surfaces" },
  { name: "Obstacle Course", description: "Full agility and performance test" },
];

function useScrollAnimation(threshold = 0.2) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

export default function AceCompetitionPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const aboutSection = useScrollAnimation();
  const experienceSection = useScrollAnimation();
  const gallerySection = useScrollAnimation();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-charcoal text-softWhite">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('/ace_2025/vineet_obstacle.JPG')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-charcoal z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 z-10" />

        {/* Decorative top line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-ashGold/50 to-transparent z-20" />

        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          {/* Badge */}
          <div
            className={`mb-6 transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-widest uppercase bg-ashGold/20 text-ashGold border border-ashGold/30 rounded-full backdrop-blur-sm">
              Competition
            </span>
          </div>

          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 transition-all duration-1000 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="block text-white">Applied Collegiate</span>
            <span className="block text-gradient-gold mt-2">Exoskeleton</span>
          </h1>

          <p
            className={`text-xl sm:text-2xl text-softWhite/80 max-w-2xl mx-auto mb-10 transition-all duration-1000 delay-400 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Building the future of first responder strength and mobility
          </p>

          {/* Achievement Badge */}
          <div
            className={`inline-flex items-center gap-3 px-6 py-3 bg-black/50 backdrop-blur-sm border border-ashGold/30 rounded-xl transition-all duration-1000 delay-600 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-4xl font-bold text-ashGold">5th</span>
            <div className="text-left">
              <p className="text-sm text-softWhite/60">Place Overall</p>
              <p className="text-sm font-medium text-softWhite">ACE 2025 - First Year</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <div className="flex flex-col items-center gap-2 text-white/60">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
              <div className="w-1.5 h-1.5 bg-ashGold rounded-full animate-bounce" />
            </div>
          </div>
        </div>

        {/* Corner decorations */}
        <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-ashGold/30 z-20" />
        <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-ashGold/30 z-20" />
      </section>

      {/* About ACE Section */}
      <section
        ref={aboutSection.ref as React.RefObject<HTMLElement>}
        className="relative py-24 bg-charcoal overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-ashGold/5 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className={`text-4xl sm:text-5xl font-bold mb-6 transition-all duration-1000 ${
              aboutSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            What is ACE?
          </h2>
          <div
            className={`mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-ashGold to-transparent mb-8 transition-all duration-1000 delay-200 ${
              aboutSection.isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          />
          <p
            className={`text-xl text-softWhite/80 leading-relaxed mb-6 transition-all duration-1000 delay-300 ${
              aboutSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            The Applied Collegiate Exoskeleton (ACE) Competition is an annual
            event where university teams design and build lower-limb exoskeleton
            suits. The goal: enhance the strength and mobility of first responders
            through cutting-edge wearable robotics.
          </p>
          <p
            className={`text-xl text-softWhite/60 leading-relaxed transition-all duration-1000 delay-400 ${
              aboutSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Teams are challenged to innovate, engineer, and compete in a series of
            rigorous events that test both the technology and the team behind it.
          </p>
        </div>
      </section>

      {/* Our Experience Section */}
      <section
        ref={experienceSection.ref as React.RefObject<HTMLElement>}
        className="relative py-24 bg-jet overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ashGold/30 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-ashGold/5 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl sm:text-5xl font-bold mb-6 transition-all duration-1000 ${
                experienceSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Our 2025 ACE Experience
            </h2>
            <div
              className={`mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-ashGold to-transparent mb-8 transition-all duration-1000 delay-200 ${
                experienceSection.isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
              }`}
            />
            <p
              className={`text-xl text-softWhite/80 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
                experienceSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              In our first year competing at ACE (2025), hosted at the University of
              Michigan, our team built a functional exoskeleton in just 5 months and
              placed 5th overall!
            </p>
          </div>

          {/* Events Grid */}
          <div className="mb-12">
            <h3
              className={`text-center text-xl font-semibold text-ashGold mb-8 transition-all duration-1000 delay-400 ${
                experienceSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Competition Events
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {EVENTS.map((event, index) => (
                <div
                  key={event.name}
                  className={`p-6 rounded-xl bg-charcoal/50 border border-white/5 hover:border-ashGold/30 transition-all duration-500 hover:bg-charcoal ${
                    experienceSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
                  <h4 className="text-lg font-bold text-softWhite mb-2">{event.name}</h4>
                  <p className="text-sm text-softWhite/50">{event.description}</p>
                </div>
              ))}
            </div>
          </div>

          <p
            className={`text-center text-lg text-softWhite/60 max-w-2xl mx-auto transition-all duration-1000 delay-700 ${
              experienceSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            From design review and safety checks to stair climbing and obstacle
            courses, our team proved what's possible with passion, teamwork, and
            innovation.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ashGold/30 to-transparent" />
      </section>

      {/* Gallery Section */}
      <section
        ref={gallerySection.ref as React.RefObject<HTMLElement>}
        className="relative py-24 bg-charcoal overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-ashGold/5 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl sm:text-5xl font-bold mb-6 transition-all duration-1000 ${
                gallerySection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Gallery
            </h2>
            <div
              className={`mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-ashGold to-transparent transition-all duration-1000 delay-200 ${
                gallerySection.isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
              }`}
            />
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ace2025Images.map((img, idx) => (
              <div
                key={img}
                className={`group relative aspect-[4/3] rounded-xl overflow-hidden transition-all duration-700 ${
                  gallerySection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${300 + idx * 100}ms` }}
              >
                <img
                  src={img}
                  alt={`ACE 2025 photo ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 border-2 border-ashGold/0 group-hover:border-ashGold/50 rounded-xl transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-jet">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ashGold/30 to-transparent" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-lg text-softWhite/60 mb-8">
            Join our team and help us push the boundaries of what's possible with
            exoskeleton technology.
          </p>
          <Link
            href="/recruiting"
            className="inline-flex items-center gap-2 px-8 py-4 bg-ashGold text-charcoal font-bold rounded-lg text-lg hover:bg-goldLight transition-all duration-300 shadow-lg hover:shadow-glow"
          >
            Join the Team
            <svg
              className="w-5 h-5"
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
      </section>
    </div>
  );
}
