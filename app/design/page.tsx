import React from "react";
import Link from "next/link";
import { FaBolt, FaCogs, FaCode, FaShieldAlt } from "react-icons/fa";

const DESIGN_TEAMS = [
  {
    name: "Electrical",
    slug: "electrical",
    icon: <FaBolt size={36} className="text-yellow-400" />,
    description:
      "Responsible for the circuits, sensors, and power systems that enable the exoskeleton's core functionality.",
    special: false,
  },
  {
    name: "Mechanical",
    slug: "mechanical",
    icon: <FaCogs size={36} className="text-gray-400" />,
    description:
      "Designs the structure, joints, and moving parts for strength, comfort, and performance.",
    special: false,
  },
  {
    name: "Software",
    slug: "software",
    icon: <FaCode size={36} className="text-mutedBlue" />,
    description:
      "Develops the code that controls the exoskeleton, from embedded systems to applied ML applications.",
    special: false,
  },
  {
    name: "Safety Integration",
    slug: "safety",
    icon: <FaShieldAlt size={36} className="text-emerald-400" />,
    description:
      "Safety is at the core of our design process, integrated by all subteams to ensure rigorous standards.",
    special: true,
  },
];

function DesignPage() {
  return (
    <main className="min-h-screen bg-charcoal text-softWhite py-16 px-4 flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-4 text-center">
        Our Design Approach
      </h1>
      <p className="text-lg md:text-xl text-center max-w-2xl mb-10">
        Explore how each subteam contributes to the exoskeleton's design. Click
        a team to learn more about their design philosophy and technical
        approach.
      </p>
      <div className="flex flex-wrap justify-center gap-8 w-full max-w-5xl mb-12">
        {DESIGN_TEAMS.filter((t) => !t.special).map((team) => (
          <Link
            key={team.slug}
            href={`/design/${team.slug}`}
            className="group bg-black bg-opacity-60 rounded-xl shadow-lg border-b-4 border-ashGold hover:scale-105 transition-transform duration-200 w-72 p-6 flex flex-col items-center text-center"
          >
            {team.icon}
            <h2 className="text-2xl font-bold mt-3 mb-2 text-ashGold group-hover:underline">
              {team.name}
            </h2>
            <p className="text-md text-softWhite mb-2">{team.description}</p>
            <span className="text-ashGold text-sm font-semibold group-hover:underline">
              View Details
            </span>
          </Link>
        ))}
        {DESIGN_TEAMS.filter((t) => t.special).map((team) => (
          <Link
            key={team.slug}
            href={`/design/${team.slug}`}
            className="group bg-black bg-opacity-70 rounded-xl shadow-lg border-l-8 border-emerald-400 hover:scale-105 transition-transform duration-200 w-full md:w-[38rem] p-8 flex flex-col items-center text-center mt-4"
          >
            {team.icon}
            <h2 className="text-3xl font-bold mt-2 mb-2 text-emerald-400 group-hover:underline">
              {team.name}
            </h2>
            <p className="text-lg text-softWhite mb-2">{team.description}</p>
            <span className="text-emerald-400 text-base font-semibold group-hover:underline">
              Learn about Safety
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default DesignPage;
