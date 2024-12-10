import React from "react";
import ParticlesHexagon from "./ParticlesHexagon";
import ParticlesBackground from "./ParticlesBackground";
import ParticlesTest from "./ParticlesTest";

function Team_Hero() {
  return (
    <div className="relative bg-black text-white z-10 py-10">
      <ParticlesHexagon id="applications"></ParticlesHexagon>
      {/* <ParticlesBackground id="apps2"></ParticlesBackground> */}
      {/* <ParticlesTest id="testing"></ParticlesTest> */}
      <div className="relative wrapper w-fill h-fill z-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Join McMaster Exoskeleton
          </h1>
          <p className="text-lg sm:text-2xl mb-6">
            Are you passionate about robotics, biomechanics, and making a
            real-world impact? Our team could be the right one for you! Follow
            our
            <a
              href="https://www.instagram.com/mcmasterexo/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 p-1"
            >
              Instagram
            </a>{" "}
            for announcements about applications
          </p>
          <p className="text-lg sm:text-2xl mb-8">
            As part of our team you will get practical, hands-on experience by
            actively contributing to the design, development, and testing of
            cutting-edge technology in the field of robotics.
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="#apply"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg transition duration-300"
            >
              Apply Now
            </a>
            <a
              href="#learn-more"
              className="bg-transparent border-2 border-blue-600 hover:bg-blue-600 text-blue-600 hover:text-white px-6 py-3 rounded-lg text-lg transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team_Hero;
