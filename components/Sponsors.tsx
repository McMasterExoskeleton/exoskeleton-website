"use client";

import React, { useState } from "react";
import ParticlesHexagon from "./ParticlesHexagon";


function Sponsors() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="relative bg-black text-white z-10 py-10">
      <ParticlesHexagon id="applications"></ParticlesHexagon>
      {/* Content Section */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">Sponsor Us</h1>
        <p className="text-lg sm:text-xl md:text-2xl leading-relaxed mb-8">
          Join us in shaping the future of mobility and innovation. Your support
          empowers our student-run team to design and compete with cutting-edge
          exoskeleton technology.
        </p>

        {/* Button */}
        <button
          onClick={toggleModal}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg transition duration-300"
        >
          View Sponsorship Package
        </button>
      </div>

      {/* Sponsorship Package Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-20">
          <div className="bg-white text-black rounded-lg shadow-lg p-8 max-w-2xl">
            <h2 className="text-2xl font-bold mb-4">Sponsorship Package</h2>
            <p className="text-lg mb-6">
              Thank you for your interest in sponsoring McMaster Exoskeleton.
              Click the button below to download or preview our sponsorship
              package.
            </p>
            <div className="flex justify-between items-center">
              <a
                href="/sponsorship_package.pdf" // Replace with the actual path to your PDF
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg transition duration-300"
              >
                Open Package
              </a>
              <button
                onClick={toggleModal}
                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg text-lg transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sponsors;
