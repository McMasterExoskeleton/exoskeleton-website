import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { FaBolt, FaCogs, FaCode, FaShieldAlt } from "react-icons/fa";

const TEAM_DETAILS: Record<
  string,
  {
    name: string;
    icon: React.ReactNode;
    description: string;
    details: React.ReactNode;
  }
> = {
  electrical: {
    name: "Electrical",
    icon: <FaBolt size={40} className="text-yellow-400" />,
    description:
      "The electrical team powers and brings the exoskeleton to life, from distributing energy safely to sensing motion and driving motors. See below for details on our two sub-teams: Power Architecture and Electrical Actuation & Sensing.",
    details: (
      <>
        <strong>Electrical Actuation & Sensing Team</strong>
        <br />
        The electrical actuation and sensing team designs and integrates the
        sensors and motors that enable responsive, real-time interaction with
        the user's movement. From precise IMU data to reliable motor control
        signals, we build the systems that sense, react, and move.
        <br />
        As a general member, you'll work on designing circuits, selecting
        components, managing clean wiring, and helping program embedded systems.
        You'll also collaborate closely with software and mechanical teams to
        make sure everything fits together, and works safely.
        <br />
        If you're excited by embedded systems, signal pathways, or the challenge
        of making hardware smarter and more responsive, apply now!
        <br />
        <br />
        <strong>Power Architecture Team</strong>
        <br />
        The Power Architecture team ensures the exoskeleton runs safely and
        efficiently. From regulating voltages to distributing power to all
        onboard systems, we handle the electrical backbone of the suit.
        <br />
        As a general member, you'll help design power distribution circuits, lay
        out PCBs, and get hands-on with wiring, soldering, and testing. We work
        on safety-critical systems, so attention to detail and clean
        implementation matter.
        <br />
        If you're passionate about electronics, enjoy building and testing
        circuits, and want to work on systems to power the suit, apply now!
      </>
    ),
  },
  mechanical: {
    name: "Mechanical",
    icon: <FaCogs size={40} className="text-gray-400" />,
    description:
      "The Mechanical team is responsible for the design and fabrication of the exoskeleton which will support the pilot's entire range of motion from below their hip. See below for details on our two Mechanical Sub-teams: Waist and Linkages.",
    details: (
      <>
        <strong>Waist Team</strong>
        <br />
        The Waist team is responsible for the central structural component of the
        exoskeleton. Members work on the design and fabrication of the waist
        assembly, ensuring it safely and comfortably interfaces with the pilot
        while supporting the attached leg linkages.
        <br />
        As a general member you will work on ergonomics, material selection,
        and structural design to ensure the exoskeleton's core is both
        robust and wearable.
        <br />
        <br />
        <strong>Linkages Team</strong>
        <br />
        The Linkages team is responsible for the mechanical structures that connect
        the joints and transmit forces throughout the exoskeleton's legs. Members
        design components that mimic human biomechanics while withstanding the 
        dynamic loads of motion.
        <br />
        As a general member you will work on limb and joint design,
        kinematics, and material selection to develop the rigid capability
        of the exoskeleton's legs.
      </>
    ),
  },
  software: {
    name: "Software",
    icon: <FaCode size={40} className="text-mutedBlue" />,
    description:
      "Develops the code that controls the exoskeleton, from embedded systems to applied ML applications.",
    details:
      "The Software team develops embedded firmware, control algorithms, and user interfaces. Their work enables precise movement, safety interlocks, and data collection for performance analysis.",
  },
  safety: {
    name: "Safety Integration",
    icon: <FaShieldAlt size={40} className="text-emerald-400" />,
    description:
      "Safety is at the core of our design process, integrated by all subteams to ensure rigorous standards.",
    details:
      "Safety is not a standalone subteam, but a principle that guides every aspect of our design. From electrical protections and mechanical fail-safes to robust software controls, safety is integrated at every stage. Our team collaborates to meet and exceed safety standards, ensuring the exoskeleton is reliable and secure for all users.",
  },
};

export default async function DesignDetailPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const team = TEAM_DETAILS[slug];

  if (!team) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-charcoal text-softWhite p-8">
        <h1 className="text-3xl font-bold mb-4">Team Not Found</h1>
        <Link href="/design" className="text-ashGold underline">
          Back to Design
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center bg-charcoal text-softWhite py-16 px-4">
      <div className="bg-black bg-opacity-70 rounded-xl shadow-lg border-l-4 border-ashGold p-8 max-w-2xl w-full text-center flex flex-col items-center">
        {team.icon}
        <h1 className="text-4xl font-bold mt-2 mb-2 text-ashGold">
          {team.name} Design
        </h1>
        <p className="text-lg mb-4">{team.description}</p>
        <p className="text-md mb-6">{team.details}</p>
        <Link href="/design" className="text-ashGold underline font-semibold">
          ← Back to Design
        </Link>
      </div>
    </main>
  );
}
