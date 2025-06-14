import React from "react";

export default function MechanicalPage() {
  return (
    <div className="min-h-screen bg-charcoal text-softWhite py-12 px-4 flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-6 text-gray-400">
        Mechanical Subteam
      </h1>
      <div className="max-w-2xl text-center mb-12">
        <p className="mb-6 text-xl">
          The Mechanical subteam engineers the structure, joints, and moving
          parts of the exoskeleton for strength, comfort, and performance.
        </p>
        <p className="mb-6 text-xl text-gray-300">
          [Add more details about the team's design process, materials, and
          tools here.]
        </p>
      </div>
      <div className="w-full max-w-xl bg-black bg-opacity-60 rounded-lg p-8 mt-4">
        <h2 className="text-3xl font-semibold text-gray-400 mb-4">
          Example Roles
        </h2>
        <ul className="list-disc list-inside text-left text-xl text-softWhite">
          <li>CAD Designer</li>
          <li>Structural Analyst</li>
          <li>Prototyping Specialist</li>
          <li className="text-gray-400">[Add more roles here]</li>
        </ul>
      </div>
      <div className="flex justify-center mt-12">
        <a
          href="https://forms.gle/placeholder-link"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-ashGold text-charcoal font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-yellow-400 transition-colors text-xl"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
}
