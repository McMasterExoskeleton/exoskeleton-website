"use client";

import React, { useEffect, useRef, useState } from "react";
import { sponsors, SponsorProps } from "@/data/sponsorsData";

type AffiliateProps = {
  logo: string;
  name: string;
  description: string;
  website: string;
};

type SpecialThanksProps = {
  name: string;
  role: string;
  website: string;
};

const affiliates = [
  {
    name: "McMaster Engineering Society",
    logo: "/MES_logo.svg",
    description:
      "The McMaster Engineering Society fosters collaboration and innovation within the engineering community.",
    website: "https://www.macengsociety.ca/",
  },
];

const specialThanks = [
  {
    name: "Luke Schuurman",
    role: "Head of Lettuce",
    website: "https://www.linkedin.com/in/luke-schuurman/?originalSubdomain=ca",
  },
];

function useScrollAnimation(threshold = 0.1) {
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

export const SponsorCard = ({ logo, name, website }: SponsorProps) => (
  <a
    href={website}
    target="_blank"
    rel="noopener noreferrer"
    className="group block p-6 rounded-xl bg-charcoal/30 border border-white/5 hover:border-ashGold/30 transition-all duration-500 hover:bg-charcoal/50"
  >
    <div className="relative h-24 flex items-center justify-center">
      <img
        src={logo}
        alt={`${name} logo`}
        className="max-h-full max-w-full object-contain filter brightness-100 group-hover:brightness-110 transition-all duration-300"
      />
    </div>
  </a>
);

function Sponsors() {
  const [isLoaded, setIsLoaded] = useState(false);
  const helpSection = useScrollAnimation();
  const affiliatesSection = useScrollAnimation();
  const sponsorsSection = useScrollAnimation();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-charcoal text-softWhite">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('/working_on_suit.JPG')",
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
              Partners
            </span>
          </div>

          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 transition-all duration-1000 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Sponsors & <span className="text-gradient-gold">Affiliates</span>
          </h1>

          <p
            className={`text-xl sm:text-2xl text-softWhite/80 max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Partnering to build the future of innovation
          </p>
        </div>

        {/* Corner decorations */}
        <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-ashGold/30 z-20" />
        <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-ashGold/30 z-20" />
      </section>

      {/* How You Can Help */}
      <section
        ref={helpSection.ref as React.RefObject<HTMLElement>}
        className="relative py-24 bg-jet overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ashGold/30 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-ashGold/5 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className={`text-4xl sm:text-5xl font-bold mb-6 transition-all duration-1000 ${
              helpSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            How You Can Help
          </h2>
          <div
            className={`mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-ashGold to-transparent mb-8 transition-all duration-1000 delay-200 ${
              helpSection.isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          />
          <p
            className={`text-xl text-softWhite/70 leading-relaxed mb-10 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
              helpSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Join us in shaping the future of mobility and innovation. Your
            support empowers our student-run team to design and compete with
            cutting-edge exoskeleton technology.
          </p>
          <button
            onClick={() => window.open("/sponsor_proposal.pdf", "_blank")}
            className={`inline-flex items-center gap-2 px-8 py-4 bg-ashGold text-charcoal font-bold rounded-lg text-lg hover:bg-goldLight transition-all duration-300 shadow-lg hover:shadow-glow ${
              helpSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            View Sponsorship Package
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </button>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ashGold/30 to-transparent" />
      </section>

      {/* Affiliates */}
      <section
        ref={affiliatesSection.ref as React.RefObject<HTMLElement>}
        className="relative py-24 bg-charcoal overflow-hidden"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl sm:text-5xl font-bold mb-6 transition-all duration-1000 ${
                affiliatesSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Our Affiliates
            </h2>
            <div
              className={`mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-ashGold to-transparent mb-6 transition-all duration-1000 delay-200 ${
                affiliatesSection.isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
              }`}
            />
            <p
              className={`text-lg text-softWhite/60 transition-all duration-1000 delay-300 ${
                affiliatesSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Meet the organizations that help drive our mission forward
            </p>
          </div>

          <div className="flex justify-center">
            {affiliates.map((affiliate, index) => (
              <a
                key={affiliate.name}
                href={affiliate.website}
                target="_blank"
                rel="noopener noreferrer"
                className={`group max-w-md p-8 rounded-2xl bg-jet/50 border border-white/5 hover:border-ashGold/30 transition-all duration-500 hover:bg-jet text-center ${
                  affiliatesSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <img
                    src={affiliate.logo}
                    alt={`${affiliate.name} logo`}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-softWhite mb-2 group-hover:text-ashGold transition-colors duration-300">
                  {affiliate.name}
                </h3>
                <p className="text-softWhite/60">{affiliate.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section
        ref={sponsorsSection.ref as React.RefObject<HTMLElement>}
        className="relative py-24 bg-jet overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ashGold/30 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-ashGold/5 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl sm:text-5xl font-bold mb-6 transition-all duration-1000 ${
                sponsorsSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Our Sponsors
            </h2>
            <div
              className={`mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-ashGold to-transparent mb-6 transition-all duration-1000 delay-200 ${
                sponsorsSection.isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
              }`}
            />
            <p
              className={`text-lg text-softWhite/60 transition-all duration-1000 delay-300 ${
                sponsorsSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              We are immensely grateful to our sponsors for their continued support
            </p>
          </div>

          {/* Gold Tier */}
          <div
            className={`mb-16 transition-all duration-1000 delay-400 ${
              sponsorsSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px flex-grow bg-gradient-to-r from-transparent to-yellow-400/50" />
              <h3 className="text-2xl font-bold text-yellow-400">Gold Tier</h3>
              <div className="h-px flex-grow bg-gradient-to-l from-transparent to-yellow-400/50" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {sponsors.gold.map((sponsor) => (
                <SponsorCard key={sponsor.name} {...sponsor} />
              ))}
            </div>
          </div>

          {/* Silver Tier */}
          <div
            className={`mb-16 transition-all duration-1000 delay-500 ${
              sponsorsSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px flex-grow bg-gradient-to-r from-transparent to-gray-400/50" />
              <h3 className="text-2xl font-bold text-gray-400">Silver Tier</h3>
              <div className="h-px flex-grow bg-gradient-to-l from-transparent to-gray-400/50" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {sponsors.silver.map((sponsor) => (
                <SponsorCard key={sponsor.name} {...sponsor} />
              ))}
            </div>
          </div>

          {/* Bronze Tier */}
          <div
            className={`mb-16 transition-all duration-1000 delay-600 ${
              sponsorsSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px flex-grow bg-gradient-to-r from-transparent to-ashGold/50" />
              <h3 className="text-2xl font-bold text-ashGold">Bronze Tier</h3>
              <div className="h-px flex-grow bg-gradient-to-l from-transparent to-ashGold/50" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {sponsors.bronze.map((sponsor) => (
                <SponsorCard key={sponsor.name} {...sponsor} />
              ))}
            </div>
          </div>

          {/* Special Thanks */}
          <div
            className={`transition-all duration-1000 delay-700 ${
              sponsorsSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px flex-grow bg-gradient-to-r from-transparent to-ashGold/30" />
              <h3 className="text-xl font-bold text-ashGold/80">Special Thanks</h3>
              <div className="h-px flex-grow bg-gradient-to-l from-transparent to-ashGold/30" />
            </div>
            <div className="flex justify-center gap-4">
              {specialThanks.map((thank) => (
                <a
                  key={thank.name}
                  href={thank.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 rounded-xl bg-charcoal/50 border border-white/5 hover:border-ashGold/30 transition-all duration-300 text-center"
                >
                  <p className="text-lg font-bold text-softWhite group-hover:text-ashGold transition-colors duration-300">
                    {thank.name}
                  </p>
                  <p className="text-sm text-softWhite/50">{thank.role}</p>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ashGold/30 to-transparent" />
      </section>
    </div>
  );
}

export default Sponsors;
