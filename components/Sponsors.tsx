"use client";

import React, { useState } from "react";
import ParticlesHexagon from "./ParticlesHexagon";
import { sponsors, SponsorProps } from "@/data/sponsorsData"; // Import from the new data file
import Image from "next/image";

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

const AffiliateCard = ({
  logo,
  name,
  description,
  website,
}: AffiliateProps) => (
  <a
    href={website}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center bg-gray-800 text-white p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
  >
    <div className="relative w-32 h-32 mb-4">
      <img
        src={logo}
        alt={`${name} logo`}
        className="w-full h-full object-contain rounded-md hover:opacity-80"
      />
    </div>
    <h3 className="text-xl font-bold mb-2">{name}</h3>
    <p className="text-sm text-gray-300 text-center">{description}</p>
  </a>
);

export const SponsorCard = ({ logo, name, website }: SponsorProps) => (
  <a
    href={website}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center p-4 transition-transform duration-300 hover:scale-105"
  >
    <div className="relative w-60 h-40 flex items-center justify-center p-2">
      <div className="absolute inset-0 rounded-xl" />
      <img
        src={logo}
        alt={`${name} logo`}
        className="w-full h-full object-contain hover:opacity-80"
      />
    </div>
  </a>
);

const SpecialThanksCard = ({ name, role, website }: SpecialThanksProps) => (
  <a href={website} target="_blank" rel="noopener noreferrer">
    <div className="bg-gray-800 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
      <p className="text-xl font-bold">{name}</p>
      <p className="text-sm text-gray-300">{role}</p>
    </div>
  </a>
);

function Sponsors() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="relative bg-charcoal text-softWhite">
      {/* Hero Section */}
      <div className="relative min-h-[80vh] flex items-center justify-center text-center bg-charcoal overflow-hidden">
        {/* Background Image */}
        <Image
          src="/working_on_suit.JPG"
          alt="Team working on exoskeleton suit"
          fill
          priority
          className="object-cover w-full h-full z-0"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black bg-opacity-70 z-0" />
        <div className="relative z-10">
          <h1 className="text-6xl sm:text-7xl font-bold mb-4">
            Sponsors and Affiliates
            <span className="block w-64 h-1 bg-ashGold mx-auto mt-4"></span>
          </h1>
          <p className="text-xl sm:text-2xl font-light">
            Partnering to build the future of innovation.
          </p>
        </div>
      </div>

      {/* Sponsorship Package Section */}
      <div className="relative bg-jet text-softWhite py-16 px-8 overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">
            How You Can Help
            <span className="block w-64 h-1 bg-ashGold mx-auto mt-2"></span>
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed mb-8">
            Join us in shaping the future of mobility and innovation. Your
            support empowers our student-run team to design and compete with
            cutting-edge exoskeleton technology.
          </p>

          <button
            onClick={() => window.open("/sponsor_proposal.pdf", "_blank")}
            className="bg-ashGold hover:bg-yellow-400 text-charcoal font-bold px-8 py-4 rounded-lg shadow-lg text-xl transition-colors"
          >
            View Sponsorship Package
          </button>
        </div>
      </div>

      {/* Affiliates Section */}
      <div className="relative bg-charcoal text-softWhite py-16 px-8 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">
            Our Affiliates
            <span className="block w-64 h-1 bg-ashGold mx-auto mt-2"></span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Meet the organizations that help drive our mission forward.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {affiliates.map((affiliate) => (
              <AffiliateCard
                key={affiliate.name}
                logo={affiliate.logo}
                name={affiliate.name}
                description={affiliate.description}
                website={affiliate.website}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Sponsors Section */}
      <div className="relative bg-jet text-softWhite py-16 px-8 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">
            Our Sponsors
            <span className="block w-64 h-1 bg-ashGold mx-auto mt-2"></span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            We are immensely grateful to our sponsors for their continued
            support and dedication.
          </p>

          {/* Gold Tier */}
          <div className="relative bg-charcoal p-8 rounded-xl shadow-lg mb-16 border-l-4 border-ashGold">
            <h3 className="relative text-4xl font-bold mb-6 text-yellow-400">
              Gold Tier
              <span className="block w-32 h-1 bg-yellow-400 mx-auto mt-2"></span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {sponsors.gold.map((sponsor) => (
                <SponsorCard
                  key={sponsor.name}
                  logo={sponsor.logo}
                  name={sponsor.name}
                  website={sponsor.website}
                />
              ))}
            </div>
          </div>

          {/* Silver Tier */}
          <div className="relative bg-charcoal p-8 rounded-xl shadow-lg mb-16 border-l-4 border-mutedGray">
            <h3 className="text-4xl font-bold mb-6 text-mutedGray">
              Silver Tier
              <span className="block w-32 h-1 bg-mutedGray mx-auto mt-2"></span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {sponsors.silver.map((sponsor) => (
                <SponsorCard
                  key={sponsor.name}
                  logo={sponsor.logo}
                  name={sponsor.name}
                  website={sponsor.website}
                />
              ))}
            </div>
          </div>

          {/* Bronze Tier */}
          <div className="relative bg-charcoal p-8 rounded-xl shadow-lg border-l-4 border-ashGold">
            <h3 className="text-4xl font-bold mb-6 text-ashGold">
              Bronze Tier
              <span className="block w-32 h-1 bg-ashGold mx-auto mt-2"></span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {sponsors.bronze.map((sponsor) => (
                <SponsorCard
                  key={sponsor.name}
                  logo={sponsor.logo}
                  name={sponsor.name}
                  website={sponsor.website}
                />
              ))}
            </div>
          </div>

          {/* Special Thanks Section */}
          <div className="relative bg-black bg-opacity-60 p-8 rounded-xl shadow-lg mt-16 border-l-4 border-ashGold">
            <h3 className="text-3xl font-bold mb-6 text-ashGold">
              Special Thanks
              <span className="block w-24 h-1 bg-ashGold mx-auto mt-2"></span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {specialThanks.map((thank) => (
                <SpecialThanksCard
                  key={thank.name}
                  name={thank.name}
                  role={thank.role}
                  website={thank.website}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
