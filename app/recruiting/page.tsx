import React from "react";
import Link from "next/link";
import {
  FaBolt,
  FaCogs,
  FaCode,
  FaChartLine,
  FaShieldAlt,
} from "react-icons/fa";
import {
  APPLICATIONS_OPEN,
  APPLICATION_FORM_LINK,
  BUSINESS_APPLICATION_FORM_LINK,
} from "./constants";

const SUBTEAMS = [
  {
    name: "Electrical",
    slug: "electrical",
    icon: <FaBolt size={40} className="text-yellow-400" />,
    description:
      "Design PCB's, design and build the circuits, sensors, and power systems that bring the exoskeleton to life.",
    image: "/images/electrical-placeholder.png", // Placeholder, can be updated
  },
  {
    name: "Mechanical",
    slug: "mechanical",
    icon: <FaCogs size={40} className="text-gray-400" />,
    description:
      "Engineer the structure, joints, and moving parts for strength, comfort, and performance.",
    image: "/images/mechanical-placeholder.png",
  },
  {
    name: "Software",
    slug: "software",
    icon: <FaCode size={40} className="text-mutedBlue" />,
    description:
      "Develop the code that controls the exoskeleton, from embedded systems to applied ML applications.",
    image: "/images/software-placeholder.png",
  },
  {
    name: "Business",
    slug: "business",
    icon: <FaChartLine size={40} className="text-ashGold" />,
    description:
      "Lead outreach, sponsorship, finance, and team operations to keep us moving forward.",
    image: "/images/business-placeholder.png",
  },
];

function RecruitingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-charcoal text-softWhite py-12 px-4">
      <h1 className="text-5xl font-bold mb-6 text-center">
        Join the Team
        <span className="block w-64 h-1 bg-ashGold mx-auto mt-2"></span>
      </h1>
      <p className="text-lg md:text-xl text-center max-w-2xl mx-auto mb-12">
        We're looking for passionate students to join McMaster Exoskeleton! No
        matter your background, there's a place for you to learn, build, and
        make an impact. Explore our subteams and apply below.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
        {SUBTEAMS.map((subteam) => (
          <Link
            key={subteam.name}
            href={`/recruiting/${subteam.slug}`}
            className="bg-black bg-opacity-60 rounded-lg p-8 flex flex-col items-center shadow-lg border-l-4 border-ashGold hover:scale-105 transition-transform duration-200 cursor-pointer group"
          >
            {subteam.icon}
            <h2 className="text-2xl font-bold mt-4 mb-2 text-ashGold">
              {subteam.name}
            </h2>
            <p className="text-md text-softWhite text-center">
              {subteam.description}
            </p>
          </Link>
        ))}
      </div>
      <div className="flex justify-center">
        <a
          href={BUSINESS_APPLICATION_FORM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-ashGold text-charcoal font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-yellow-400 transition-colors text-xl"
        >
          Business Applications Open Now
        </a>
      </div>
    </div>
  );
}

export default RecruitingPage;
