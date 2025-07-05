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
      "The Mechanical team is responsible for the design and fabrication of the exoskeleton which will support the pilot's entire range of motion from below their hip. See below for details on our three Mechanical Sub-teams: Joint Actuation, Biomechanics, and Power Integration.",
    details: (
      <>
        <strong>Joint Actuation Team</strong>
        <br />
        The Joint Actuation team is responsible for the motor and gearbox
        development of all powered joints in the exoskeleton. Members will work
        closely with the Biomechanics team to corroborate joint design and the
        Electrical team to confirm motor compatibility and actuation.
        <br />
        As a general member you will work on spec calculations, gearbox and
        joint design, and motor selection. Members will apply knowledge in
        gearbox design, robotics, and kinematics to develop the powered
        functionality of the exoskeleton.
        <br />
        <br />
        <strong>Biomechanics Team</strong>
        <br />
        The Biomechanics team is responsible for the exoskeleton's ability to
        withstand static and dynamic loads without hindering the pilot's range
        of motion. Members will work closely with pilots regarding limb and
        joint design to better align with the pilot's natural motion and improve
        ergonomics.
        <br />
        As a general member you will work on limb and joint design, ergonomics,
        and material selection. Members will apply biomechanics and engineering
        mechanics to develop the wearable and rigid capability of the
        exoskeleton.
        <br />
        <br />
        <strong>Power Integration Team</strong>
        <br />
        The Power Integration team is responsible for the integration and
        packaging of all electrical components worn by the pilot, while
        considering thermal management, safety measures, and accessibility.
        Members will work closely with the Electrical team to plan the power
        electronics architecture and the Joint Actuation team for wire
        harnessing.
        <br />
        As a general member you will work on packaging design, electrical
        documentation, thermal and safety considerations, and material
        selections. Members will use knowledge in batteries, power electronics
        and robotics to develop the mechanical-electrical integration solutions
        powering the exoskeleton.
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

export default function DesignDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
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
