import React from "react";
import { APPLICATIONS_OPEN, APPLICATION_FORM_LINK } from "../constants";

export default function SoftwarePage() {
  return (
    <div className="min-h-screen bg-charcoal text-softWhite py-12 px-4 flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-6 text-mutedBlue">
        Software Subteam
      </h1>
      <div className="max-w-2xl text-center mb-12">
        <p className="mb-6 text-xl">
          The Software team powers the brain behind the exoskeleton. We develop
          intelligent, real-time systems that process sensor data, predict
          movement, and control motors to assist the user — all while
          maintaining safety, responsiveness, and smooth motion.
        </p>
        <p className="mb-6 text-xl">
          Our work spans embedded programming in C++, feedback control design,
          machine learning with PyTorch, and full-stack web development for
          real-time monitoring. We turn raw data into meaningful movement.
        </p>
        <p className="mb-6 text-xl">
          Whether you're into microcontroller firmware, control theory, AI, or
          web apps — if you're curious, driven, and excited by the challenge of
          building real-world robotics, there's a place for you here.
        </p>
      </div>
      <div className="w-full max-w-xl bg-black bg-opacity-60 rounded-lg p-8 mt-4">
        <h2 className="text-3xl font-semibold text-mutedBlue mb-4">Roles</h2>
        <ul className="list-disc list-inside text-left text-xl text-softWhite">
          <li>Embedded Software </li>
          <li>ML/AI Team</li>
          <li>Control Systems / Exoskeleton Algorithm</li>
          <li>Exoskeleton Monitoring(Full-Stack)</li>
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
