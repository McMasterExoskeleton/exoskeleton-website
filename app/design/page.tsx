"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaBolt, FaCogs, FaCode, FaShieldAlt } from "react-icons/fa";

const DESIGN_TEAMS = [
  {
    name: "Electrical",
    slug: "electrical",
    icon: FaBolt,
    color: "yellow-400",
    borderColor: "border-yellow-400",
    iconBg: "bg-yellow-400/10",
    description:
      "Responsible for the circuits, sensors, and power systems that enable the exoskeleton's core functionality.",
    special: false,
  },
  {
    name: "Mechanical",
    slug: "mechanical",
    icon: FaCogs,
    color: "gray-400",
    borderColor: "border-gray-400",
    iconBg: "bg-gray-400/10",
    description:
      "Designs the structure, joints, and moving parts for strength, comfort, and performance.",
    special: false,
  },
  {
    name: "Software",
    slug: "software",
    icon: FaCode,
    color: "mutedBlue",
    borderColor: "border-mutedBlue",
    iconBg: "bg-mutedBlue/10",
    description:
      "Develops the code that controls the exoskeleton, from embedded systems to applied ML applications.",
    special: false,
  },
];

const SAFETY_TEAM = {
  name: "Safety Integration",
  slug: "safety",
  icon: FaShieldAlt,
  color: "emerald-400",
  borderColor: "border-emerald-400",
  iconBg: "bg-emerald-400/10",
  description:
    "Safety is at the core of our design process, integrated by all subteams to ensure rigorous standards.",
};

function DesignPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="min-h-screen bg-charcoal text-softWhite">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-ashGold/50 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-ashGold/10 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div
            className={`mb-6 transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-widest uppercase bg-ashGold/20 text-ashGold border border-ashGold/30 rounded-full">
              Engineering
            </span>
          </div>

          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Our Design <span className="text-gradient-gold">Approach</span>
          </h1>

          <p
            className={`text-lg sm:text-xl text-softWhite/70 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Explore how each subteam contributes to the exoskeleton's design.
            Click a team to learn more about their design philosophy and
            technical approach.
          </p>
        </div>
      </section>

      {/* Teams Grid */}
      <section className="relative py-20 bg-jet overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ashGold/30 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-ashGold/5 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Technical Teams */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {DESIGN_TEAMS.map((team, index) => (
              <Link
                key={team.slug}
                href={`/design/${team.slug}`}
                className={`group relative p-8 rounded-2xl bg-charcoal/50 border border-white/5 hover:${team.borderColor} transition-all duration-500 hover:bg-charcoal overflow-hidden ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                {/* Hover glow effect */}
                <div className={`absolute inset-0 ${team.iconBg} opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-2xl`} />

                <div className="relative flex flex-col items-center text-center">
                  {/* Icon */}
                  <div className={`p-4 rounded-xl ${team.iconBg} mb-6 transition-all duration-300 group-hover:scale-110`}>
                    <team.icon size={36} className={`text-${team.color}`} />
                  </div>

                  {/* Content */}
                  <h3 className={`text-2xl font-bold mb-3 text-softWhite group-hover:text-${team.color} transition-colors duration-300`}>
                    {team.name}
                  </h3>
                  <p className="text-softWhite/60 leading-relaxed mb-4">
                    {team.description}
                  </p>

                  {/* CTA */}
                  <span className={`text-sm font-semibold text-${team.color} opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-1`}>
                    View Details
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>

                {/* Bottom border accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 ${team.iconBg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </Link>
            ))}
          </div>

          {/* Safety Integration - Featured */}
          <Link
            href={`/design/${SAFETY_TEAM.slug}`}
            className={`group relative block p-8 md:p-10 rounded-2xl bg-charcoal/50 border-2 border-emerald-400/30 hover:border-emerald-400 transition-all duration-500 hover:bg-charcoal overflow-hidden ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "900ms" }}
          >
            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-emerald-400/5 opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-2xl" />

            <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-10">
              {/* Icon */}
              <div className="flex-shrink-0 p-6 rounded-2xl bg-emerald-400/10 transition-all duration-300 group-hover:scale-110">
                <FaShieldAlt size={48} className="text-emerald-400" />
              </div>

              {/* Content */}
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-3xl font-bold mb-3 text-emerald-400">
                  {SAFETY_TEAM.name}
                </h3>
                <p className="text-lg text-softWhite/70 leading-relaxed max-w-2xl">
                  {SAFETY_TEAM.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2">
                <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>

            {/* Corner accent */}
            <div className="absolute top-0 left-0 w-20 h-20 border-l-4 border-t-4 border-emerald-400/30 rounded-tl-2xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-r-4 border-b-4 border-emerald-400/30 rounded-br-2xl" />
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ashGold/30 to-transparent" />
      </section>

      {/* Philosophy Section */}
      <section className="relative py-20 bg-charcoal overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Our Philosophy
          </h2>
          <div className="mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-ashGold to-transparent mb-8" />
          <p className="text-lg text-softWhite/70 leading-relaxed max-w-3xl mx-auto">
            We believe in iterative design, rigorous testing, and cross-functional
            collaboration. Every component of our exoskeleton is designed with the
            user in mind, balancing performance, comfort, and safety.
          </p>
        </div>
      </section>
    </main>
  );
}

export default DesignPage;
