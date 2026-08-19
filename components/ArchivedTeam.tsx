"use client";

import React, { useEffect, useRef, useState } from "react";
import archivedExecs from "../public/data/archived_execs.json";
import { FaLinkedin } from "react-icons/fa";

interface ArchivedExec {
  name: string;
  title: string;
  tenure: string;
  image_url?: string;
  linkedin_url?: string;
}

function ArchivedTeam() {
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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-ashGold/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className={`text-3xl sm:text-4xl font-bold text-softWhite mb-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Past Leadership
          </h2>
          <div
            className={`mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-ashGold to-transparent transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          />
          <p
            className={`mt-4 text-lg text-softWhite/60 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            For those who made the team what it is today
          </p>
        </div>

        {/* Archived Team List */}
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-6">
            {archivedExecs.map((exec: ArchivedExec, index: number) => (
              <div
                key={exec.name}
                className={`w-full md:w-[calc(50%-12px)] flex items-center gap-5 p-5 bg-charcoal/50 border border-white/5 rounded-lg hover:border-ashGold/30 transition-all duration-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                {/* Photo */}
                <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-white border-2 border-ashGold/30">
                  <img
                    src={exec.image_url || "/headshots/placeholder.png"}
                    alt={`${exec.name} headshot`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text Content */}
                <div className="flex flex-col justify-center flex-grow">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-semibold text-softWhite leading-tight">
                      {exec.name}
                    </h3>
                    {exec.linkedin_url && (
                      <a
                        href={exec.linkedin_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-softWhite/60 hover:text-ashGold hover:scale-110 transition-all duration-300"
                        aria-label={`${exec.name}'s LinkedIn profile`}
                      >
                        <FaLinkedin size={18} />
                      </a>
                    )}
                  </div>
                  <p className="text-softWhite/80 text-md mt-1">{exec.title}</p>
                  <p className="text-sm text-ashGold/80 mt-1">{exec.tenure}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ashGold/30 to-transparent" />
    </section>
  );
}

export default ArchivedTeam;
