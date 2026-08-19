import React from "react";
import { APPLICATIONS_OPEN, APPLICATION_FORM_LINK } from "../constants";

export default function MechanicalPage() {
  return (
    <div className="min-h-screen bg-charcoal text-softWhite py-12 px-4 flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-6 text-gray-400">
        Mechanical Subteam
      </h1>
      <div className="max-w-2xl text-center mb-12">
        <p className="mb-6 text-xl">
          The Mechanical team is responsible for the design and fabrication of
          the exoskeleton which will support the pilot's entire range of motion
          from below their hip. See below for details on our two Mechanical
          Sub-teams: Waist and Linkages.
        </p>
        <p className="mb-6 text-xl">
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
        </p>
        <p className="mb-6 text-xl">
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
        </p>
      </div>
      <div className="w-full max-w-xl bg-black bg-opacity-60 rounded-lg p-8 mt-4">
        <h2 className="text-3xl font-semibold text-gray-400 mb-4">Roles</h2>
        <ul className="list-disc list-inside text-left text-xl text-softWhite">
          <li>CAD Designer</li>
          <li>Waist Subteam Engineer</li>
          <li>Linkages Subteam Engineer</li>
          <li>Prototyping Specialist</li>
        </ul>
      </div>
      <div className="flex justify-center mt-12">
        {APPLICATIONS_OPEN ? (
          <a
            href={APPLICATION_FORM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-ashGold text-charcoal font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-yellow-400 transition-colors text-xl"
          >
            Apply Now
          </a>
        ) : (
          <button
            disabled
            className="bg-gray-500 text-gray-300 font-bold px-8 py-4 rounded-lg shadow-lg text-xl cursor-not-allowed"
          >
            Applications Currently Closed
          </button>
        )}
      </div>
    </div>
  );
}
