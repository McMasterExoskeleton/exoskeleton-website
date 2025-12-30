"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const FacultySupport = [
  {
    name: "Dr. Ratnasingham (Thamas) Tharmarasa",
    link: "https://www.eng.mcmaster.ca/ece/faculty/dr-ratnasingham-thamas-tharmarasa/",
    headshot: "/headshots/Ratnasingham_Tharmarasa_headshot.jpg",
    department: "Electrical & Computer Engineering",
  },
  {
    name: "Dr. Thomas Doyle",
    link: "https://experts.mcmaster.ca/display/doylet",
    headshot: "/headshots/Doyle_headshot.jpg",
    department: "Electrical & Computer Engineering",
  },
  {
    name: "Dr. Shahrukh Athar",
    link: "https://www.eng.mcmaster.ca/ece/faculty/dr-shahrukh-athar/",
    headshot: "/headshots/Shahrukh_Athar_headshot.jpg",
    department: "Electrical & Computer Engineering",
  },
  {
    name: "Dr. Yaser Haddara",
    link: "https://experts.mcmaster.ca/display/yaser",
    headshot: "/headshots/Yaser_Haddara_headshot_cropped2.jpg",
    department: "Materials Science & Engineering",
  },
];

function Faculty() {
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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-ashGold/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl sm:text-5xl font-bold text-softWhite mb-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Faculty Support
          </h2>
          <div
            className={`mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-ashGold to-transparent transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          />
          <p
            className={`mt-6 text-lg text-softWhite/60 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            We are deeply grateful to the McMaster Faculty members who have
            generously offered their mentorship and support to our team.
          </p>
        </div>

        {/* Faculty Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FacultySupport.map((faculty, index) => (
            <a
              key={faculty.name}
              href={faculty.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-6 p-6 rounded-2xl bg-charcoal/50 border border-white/5 hover:border-ashGold/30 transition-all duration-500 hover:bg-charcoal ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              {/* Headshot */}
              <div className="relative flex-shrink-0">
                <div className="w-20 h-20 rounded-full overflow-hidden border-3 border-ashGold/50 group-hover:border-ashGold transition-colors duration-300">
                  <img
                    src={faculty.headshot}
                    alt={faculty.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-softWhite group-hover:text-ashGold transition-colors duration-300">
                  {faculty.name}
                </h3>
                <p className="text-sm text-softWhite/50 mt-1">
                  {faculty.department}
                </p>
              </div>

              {/* Arrow */}
              <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FaExternalLinkAlt className="text-ashGold" size={16} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faculty;
