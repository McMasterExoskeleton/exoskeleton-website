"use client";

import React, { useState } from "react";
import ParticlesHexagon from "./ParticlesHexagon";

type AffiliateProps = {
  logo: string;
  name: string;
  description: string;
  website: string;
};

type SponsorProps = {
  logo: string;
  name: string;
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
  {
    name: "McMaster Engineering Society",
    logo: "/MES_logo.svg",
    description:
      "The McMaster Engineering Society fosters collaboration and innovation within the engineering community.",
    website: "https://www.macengsociety.ca/",
  },
  {
    name: "McMaster Engineering Society",
    logo: "/MES_logo.svg",
    description:
      "The McMaster Engineering Society fosters collaboration and innovation within the engineering community.",
    website: "https://www.macengsociety.ca/",
  },
];

const sponsors = {
  bronze: [
    {
      name: "Bronze Sponsor 1",
      logo: "/MES_logo.svg",
      website: "https://www.macengsociety.ca/",
    },
    {
      name: "Bronze Sponsor 1",
      logo: "/MES_logo.svg",
      website: "https://www.macengsociety.ca/",
    },
    {
      name: "Bronze Sponsor 1",
      logo: "/MES_logo.svg",
      website: "https://www.macengsociety.ca/",
    },
  ],
  silver: [
    {
      name: "Silver Sponsor 1",
      logo: "/MES_logo.svg",
      website: "https://www.macengsociety.ca/",
    },
    {
      name: "Silver Sponsor 1",
      logo: "/MES_logo.svg",
      website: "https://www.macengsociety.ca/",
    },
    {
      name: "Silver Sponsor 1",
      logo: "/MES_logo.svg",
      website: "https://www.macengsociety.ca/",
    },
  ],
  gold: [
    {
      name: "Gold Sponsor 1",
      logo: "/MES_logo.svg",
      website: "https://www.macengsociety.ca/",
    },
    {
      name: "Gold Sponsor 1",
      logo: "/MES_logo.svg",
      website: "https://www.macengsociety.ca/",
    },
    {
      name: "Gold Sponsor 1",
      logo: "/MES_logo.svg",
      website: "https://www.macengsociety.ca/",
    },
  ],
};

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

const SponsorCard = ({ logo, name, website }: SponsorProps) => (
  <a
    href={website}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center p-4 transition-transform duration-300 hover:scale-105"
  >
    <div className="relative w-32 h-32">
      <img
        src={logo}
        alt={`${name} logo`}
        className="w-full h-full object-contain hover:opacity-80"
      />
    </div>
  </a>
);

function Sponsors() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="relative bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center text-center bg-black">
        <ParticlesHexagon id="sponsors-hero" />
        <div className="relative z-10">
          <h1 className="text-6xl sm:text-7xl font-bold mb-4">
            Sponsors and Affiliates
          </h1>
          <p className="text-xl sm:text-2xl font-light">
            Partnering to build the future of innovation.
          </p>
        </div>
      </div>

      {/* Sponsorship Package Section */}
      <div className="relative bg-gray-900 text-white py-16 px-8 overflow-hidden">
        <div className="absolute inset-0">
          <ParticlesHexagon id="sponsorship-particles" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            How You Can Help
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed mb-8">
            Join us in shaping the future of mobility and innovation. Your
            support empowers our student-run team to design and compete with
            cutting-edge exoskeleton technology.
          </p>

          <button
            onClick={toggleModal}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg transition duration-300"
          >
            View Sponsorship Package
          </button>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-20">
            <div className="bg-white text-black rounded-lg shadow-lg p-8 max-w-2xl">
              <h2 className="text-2xl font-bold mb-4">Sponsorship Package</h2>
              <p className="text-lg mb-6">
                Thank you for your interest in sponsoring McMaster Exoskeleton.
                Click the button below to download or preview our sponsorship
                package.
              </p>
              <div className="flex justify-between items-center">
                <a
                  href="/sponsorship_package.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg transition duration-300"
                >
                  Open Package
                </a>
                <button
                  onClick={toggleModal}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg text-lg transition duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Affiliates Section */}
      <div className="relative bg-gray-800 text-white py-16 px-8 overflow-hidden">
        <div className="absolute inset-0">
          <ParticlesHexagon id="affiliates-particles" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">
            Our Affiliates
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-12">
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
      <div className="relative bg-gray-900 text-white py-16 px-8 overflow-hidden">
        <div className="absolute inset-0">
          <ParticlesHexagon id="sponsors-section-particles" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">Our Sponsors</h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-12">
            We are immensely grateful to our sponsors for their continued
            support and dedication.
          </p>

          <h3 className="text-3xl sm:text-4xl font-bold mb-6">Gold Tier</h3>
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

          {/* Silver Tier */}
          <h3 className="text-3xl sm:text-4xl font-bold mb-6">Silver Tier</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 justify-center">
            {sponsors.silver.map((sponsor) => (
              <SponsorCard
                key={sponsor.name}
                logo={sponsor.logo}
                name={sponsor.name}
                website={sponsor.website}
              />
            ))}
          </div>

          {/* Bronze Tier */}
          <h3 className="text-3xl sm:text-4xl font-bold mb-6">Bronze Tier</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 justify-center">
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
      </div>
    </div>
  );
}

export default Sponsors;
