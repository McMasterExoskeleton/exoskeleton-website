"use client";

import React, { useEffect, useRef, useState } from "react";
import archivedExecs from "../public/data/archived_execs.json";

interface ArchivedExec {
  name: string;
  title: string;
  tenure: string;
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
        <div className="max-w-3xl mx-auto">
          {archivedExecs.map((exec: ArchivedExec, index: number) => (
            <div
              key={exec.name}
              className={`mb-4 p-6 bg-charcoal/50 border border-white/5 rounded-lg hover:border-ashGold/30 transition-all duration-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <div>
                  <h3 className="text-xl font-semibold text-softWhite">
                    {exec.name}
                  </h3>
                  <p className="text-softWhite/60">{exec.title}</p>
                </div>
                <p className="text-sm text-ashGold/80">{exec.tenure}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ashGold/30 to-transparent" />
    </section>
  );
}

export default ArchivedTeam;
