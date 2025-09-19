import React from "react";
import { APPLICATIONS_OPEN, APPLICATION_FORM_LINK } from "../constants";

export default function ElectricalPage() {
  return (
    <div className="min-h-screen bg-charcoal text-softWhite py-12 px-4 flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-6 text-yellow-400">
        Electrical Subteam
      </h1>
      <div className="max-w-2xl text-center mb-12">
        <p className="mb-6 text-xl">
          The electrical team powers and brings the exoskeleton to life, from
          distributing energy safely to sensing motion and driving motors. See
          below for details on our two sub-teams: Power Architecture and
          Electrical Actuation & Sensing.
        </p>
        <p className="mb-6 text-xl">
          <strong>Electrical Actuation & Sensing Team</strong>
          <br />
          The electrical actuation and sensing team designs and integrates the
          sensors and motors that enable responsive, real-time interaction with
          the user's movement. From precise IMU data to reliable motor control
          signals, we build the systems that sense, react, and move.
          <br />
          As a general member, you'll work on designing circuits, selecting
          components, managing clean wiring, and helping program embedded
          systems. You'll also collaborate closely with software and mechanical
          teams to make sure everything fits together, and works safely.
          <br />
          If you're excited by embedded systems, signal pathways, or the
          challenge of making hardware smarter and more responsive, apply now!
        </p>
        <p className="mb-6 text-xl">
          <strong>Power Architecture Team</strong>
          <br />
          The Power Architecture team ensures the exoskeleton runs safely and
          efficiently. From regulating voltages to distributing power to all
          onboard systems, we handle the electrical backbone of the suit.
          <br />
          As a general member, you'll help design power distribution circuits,
          lay out PCBs, and get hands-on with wiring, soldering, and testing. We
          work on safety-critical systems, so attention to detail and clean
          implementation matter.
          <br />
          If you're passionate about electronics, enjoy building and testing
          circuits, and want to work on systems to power the suit, apply now!
        </p>
      </div>
      <div className="w-full max-w-xl bg-black bg-opacity-60 rounded-lg p-8 mt-4">
        <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Roles</h2>
        <ul className="list-disc list-inside text-left text-xl text-softWhite">
          <li>PCB Designer</li>
          <li>Embedded Systems Developer</li>
          <li>Sensor Integration Specialist</li>
          <li>Power Systems Engineer</li>
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
