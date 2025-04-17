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

const sponsors = {
  bronze: [
    {
      name: "East Mount Chiropractic",
      logo: "/eastmount-chiro-logo.png",
      website: "https://eastmountchiropractic.ca/",
    },
    {
      name: "Generations Physio",
      logo: "/generations-physio-logo.avif",
      website: "https://www.generationsphysio.com/",
    },
    {
      name: "Aegis Batteries",
      logo: "/Aegis Batteries.jpg",
      website: "https://www.aegisbattery.com/",
    },
    {
      name: "Protocase",
      logo: "/protocase.png",
      website: "https://www.protocase.com/",
    },
  ],
  silver: [
    {
      name: "Solid Works",
      logo: "/solidworks-logo.svg",
      website: "https://www.solidworks.com/",
    },
    {
      name: "MG Chemicals",
      logo: "/mg-chemicals-logo.webp",
      website: "https://mgchemicals.com/",
    },
    {
      name: "McMaster Engineering Society",
      logo: "/MES_logo.svg",
      website: "https://www.macengsociety.ca/",
    },
  ],
  gold: [
    {
      name: "PCB Libraries",
      logo: "/pcb-libraries.png",
      website: "https://www.pcblibraries.com/",
    },
    {
      name: "EZMotion",
      logo: "/ezmotion-logo.png",
      website: "https://www.ezmotion.co/",
    },
    {
      name: "KISSsoft",
      logo: "/kisssoft-logo.svg",
      website: "https://www.kisssoft.com/en",
    },
    {
      name: "RLX Solutions",
      logo: "/rlx_logo.png",
      website: "https://rlxsolutions.com/",
    },
    {
      name: "3JPrecision",
      logo: "/3JPrecision_logo.png",
      website: "https://www.3jprecision.com/",
    },
  ],
};

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

const SponsorCard = ({ logo, name, website }: SponsorProps) => (
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
    <div className="relative bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center text-center bg-black">
        <ParticlesHexagon id="sponsors-hero" key="particles1" />
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
      <div className="relative bg-gray-800 text-white py-16 px-8 overflow-hidden">
        {/* <div className="absolute inset-0">
    <ParticlesHexagon id="sponsorship-particles" key="particles2" />
  </div> */}

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
            onClick={() => window.open("/sponsor_proposal.pdf", "_blank")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg transition duration-300"
          >
            View Sponsorship Package
          </button>
        </div>
      </div>

      {/* Affiliates Section */}
      <div className="relative bg-gray-700 text-white py-16 px-8 overflow-hidden">
        {/* <div className="absolute inset-0">
          <ParticlesHexagon id="affiliates-particles" key="3" />
        </div> */}

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
      {
        <div className="relative bg-gray-800 text-white py-16 px-8 overflow-hidden">
          {/* <div className="absolute inset-0">
          <ParticlesHexagon id="sponsors-section-particles" />
        </div> */}
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8">
              Our Sponsors
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-12">
              We are immensely grateful to our sponsors for their continued
              support and dedication.
            </p>

            {/* Gold Tier */}
            <div className="relative bg-gray-700 p-8 rounded-xl shadow-lg mb-16">
              <h3 className="relative text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-700 bg-clip-text text-transparent after:content-['✨'] after:absolute after:top-0 after:right-2 after:animate-ping">
                Gold Tier
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
            <div className="relative bg-gray-700 p-8 rounded-xl shadow-lg mb-16">
              <h3 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">
                Silver Tier
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
            <div className="relative bg-gray-700 p-8 rounded-xl shadow-lg">
              <h3 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-700 to-yellow-600 bg-clip-text text-transparent">
                Bronze Tier
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
            <div className="relative bg-gray-700 p-8 rounded-xl shadow-lg mt-16">
              <h3 className="text-3xl sm:text-4xl font-bold mb-6">
                Special Thanks
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
      }
    </div>
  );
}

export default Sponsors;
