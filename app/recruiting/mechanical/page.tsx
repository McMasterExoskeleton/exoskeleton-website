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
          from below their hip. See below for details on our three Mechanical
          Sub-teams: Joint Actuation, Biomechanics, and Power Integration.
        </p>
        <p className="mb-6 text-xl">
          <strong>Joint Actuation Team</strong>
          <br />
          The Joint Actuation team is responsible for the motor and gearbox
          development of all powered joints in the exoskeleton. Members will
          work closely with the Biomechanics team to corroborate joint design
          and the Electrical team to confirm motor compatibility and actuation.
          <br />
          As a general member you will work on spec calculations, gearbox and
          joint design, and motor selection. Members will apply knowledge in
          gearbox design, robotics, and kinematics to develop the powered
          functionality of the exoskeleton.
        </p>
        <p className="mb-6 text-xl">
          <strong>Biomechanics Team</strong>
          <br />
          The Biomechanics team is responsible for the exoskeleton's ability to
          withstand static and dynamic loads without hindering the pilot's range
          of motion. Members will work closely with pilots regarding limb and
          joint design to better align with the pilot's natural motion and
          improve ergonomics.
          <br />
          As a general member you will work on limb and joint design,
          ergonomics, and material selection. Members will apply biomechanics
          and engineering mechanics to develop the wearable and rigid capability
          of the exoskeleton.
        </p>
        <p className="mb-6 text-xl">
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
          and robotics to develop the mechanical-electrical integration
          solutions powering the exoskeleton.
        </p>
      </div>
      <div className="w-full max-w-xl bg-black bg-opacity-60 rounded-lg p-8 mt-4">
        <h2 className="text-3xl font-semibold text-gray-400 mb-4">Roles</h2>
        <ul className="list-disc list-inside text-left text-xl text-softWhite">
          <li>CAD Designer</li>
          <li>Structural Analyst</li>
          <li>Prototyping Specialist</li>
          <li>Joint Actuation Specialist</li>
          <li>Biomechanics Analyst</li>
          <li>Power Integration Engineer</li>
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
            Applications Opening Soon
          </button>
        )}
      </div>
    </div>
  );
}
