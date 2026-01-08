"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  FaBolt,
  FaCogs,
  FaCode,
  FaChartLine,
} from "react-icons/fa";
import {
  APPLICATIONS_OPEN,
  APPLICATION_FORM_LINK,
} from "./constants";

const SUBTEAMS = [
  {
    name: "Electrical",
    slug: "electrical",
    icon: FaBolt,
    color: "yellow-400",
    borderColor: "border-yellow-400/50",
    hoverBorder: "hover:border-yellow-400",
    iconBg: "bg-yellow-400/10",
    description:
      "Design PCBs, build circuits, sensors, and power systems that bring the exoskeleton to life.",
  },
  {
    name: "Mechanical",
    slug: "mechanical",
    icon: FaCogs,
    color: "gray-400",
    borderColor: "border-gray-400/50",
    hoverBorder: "hover:border-gray-400",
    iconBg: "bg-gray-400/10",
    description:
      "Engineer the structure, joints, and moving parts for strength, comfort, and performance.",
  },
  {
    name: "Software",
    slug: "software",
    icon: FaCode,
    color: "mutedBlue",
    borderColor: "border-mutedBlue/50",
    hoverBorder: "hover:border-mutedBlue",
    iconBg: "bg-mutedBlue/10",
    description:
      "Develop the code that controls the exoskeleton, from embedded systems to applied ML applications.",
  },
  {
    name: "Business",
    slug: "business",
    icon: FaChartLine,
    color: "ashGold",
    borderColor: "border-ashGold/50",
    hoverBorder: "hover:border-ashGold",
    iconBg: "bg-ashGold/10",
    description:
      "Lead outreach, sponsorship, finance, and team operations to keep us moving forward.",
  },
];

function RecruitingPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-charcoal text-softWhite">
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
              Recruiting
            </span>
          </div>

          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Join the <span className="text-gradient-gold">Team</span>
          </h1>

          <p
            className={`text-lg sm:text-xl text-softWhite/70 max-w-2xl mx-auto mb-8 leading-relaxed transition-all duration-1000 delay-400 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            We're looking for passionate students to join McMaster Exoskeleton!
            No matter your background, there's a place for you to learn, build,
            and make an impact.
          </p>

          {/* Application Status */}
          <div
            className={`transition-all duration-1000 delay-600 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {APPLICATIONS_OPEN ? (
              <a
                href={APPLICATION_FORM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-ashGold text-charcoal font-bold rounded-lg text-lg hover:bg-goldLight transition-all duration-300 shadow-lg hover:shadow-glow"
              >
                Apply Now
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
              </a>
            ) : (
              <div className="inline-flex items-center gap-3 px-6 py-4 bg-charcoal border border-white/10 rounded-xl">
                <div className="w-3 h-3 bg-gray-500 rounded-full" />
                <span className="text-softWhite/60 font-medium">
                  Applications Currently Closed
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Subteams Grid */}
      <section className="relative py-20 bg-jet overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ashGold/30 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-ashGold/5 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Subteams</h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-ashGold to-transparent" />
            <p className="mt-4 text-softWhite/60">
              Click on a subteam to learn more about what they do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SUBTEAMS.map((subteam, index) => (
              <Link
                key={subteam.name}
                href={`/recruiting/${subteam.slug}`}
                className={`group relative p-8 rounded-2xl bg-charcoal/50 border border-white/5 ${subteam.hoverBorder} transition-all duration-500 hover:bg-charcoal hover:-translate-y-1 overflow-hidden ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${700 + index * 100}ms` }}
              >
                {/* Hover glow effect */}
                <div className={`absolute inset-0 ${subteam.iconBg} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-3xl`} />

                {/* Top accent line on hover */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-${subteam.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />

                <div className="relative flex items-start gap-6">
                  {/* Icon */}
                  <div className={`flex-shrink-0 p-4 rounded-xl ${subteam.iconBg} transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <subteam.icon size={32} className={`text-${subteam.color}`} />
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className={`text-2xl font-bold mb-2 text-softWhite group-hover:text-${subteam.color} transition-colors duration-300`}>
                      {subteam.name}
                    </h3>
                    <p className="text-softWhite/60 leading-relaxed">
                      {subteam.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="flex-shrink-0 self-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2">
                    <svg
                      className={`w-6 h-6 text-${subteam.color}`}
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
                  </div>
                </div>

                {/* Bottom shadow accent */}
                <div className={`absolute bottom-0 left-4 right-4 h-8 bg-gradient-to-t from-${subteam.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </Link>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ashGold/30 to-transparent" />
      </section>

      {/* Why Join Section */}
      <section className="relative py-20 bg-charcoal overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Why Join McMaster Exoskeleton?
          </h2>
          <div className="mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-ashGold to-transparent mb-8" />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {[
              {
                title: "Hands-On Experience",
                description: "Work on real engineering challenges from day one",
              },
              {
                title: "Industry Connections",
                description: "Network with sponsors and industry professionals",
              },
              {
                title: "Competition Ready",
                description: "Compete at the national ACE competition",
              },
            ].map((benefit, index) => (
              <div
                key={benefit.title}
                className="p-6 rounded-xl bg-jet/50 border border-white/5 hover:border-ashGold/30 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-ashGold mb-2">
                  {benefit.title}
                </h3>
                <p className="text-softWhite/60">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default RecruitingPage;
