import ParticlesBackground from "@/components/ParticlesBackground";
import ParticlesWord from "@/components/ParticlesWord";
import React from "react";

function ContactPage() {
  return (
    <>
      <div className="relative z-10">
        {/* <ParticlesBackground id="test-2"></ParticlesBackground> */}
        <ParticlesWord id="test-parts"></ParticlesWord>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
