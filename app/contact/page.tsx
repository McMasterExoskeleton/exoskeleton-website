import React from "react";
import { FaEnvelope, FaInstagram, FaLinkedin } from "react-icons/fa";

function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-charcoal text-softWhite py-12">
      <h1 className="text-5xl font-bold mb-12 text-center">
        Contact Us
        <span className="block w-64 h-1 bg-ashGold mx-auto mt-2"></span>
      </h1>
      <div className="flex-grow flex items-start justify-center">
        <div className="flex flex-col items-center space-y-8 w-3/4">
          <div className="flex items-center space-x-4 justify-center">
            <div className="flex flex-col items-center">
              <FaEnvelope className="text-5xl" />
              <p className="text-xl">exo@mcmaster.ca</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 justify-center">
            <div className="flex flex-col items-center">
              <FaInstagram className="text-5xl" />
              <a
                href="https://www.instagram.com/mcmasterexo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-blue-400 hover:underline"
              >
                @mcmasterexo
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4 justify-center">
            <div className="flex flex-col items-center">
              <FaLinkedin className="text-5xl" />
              <a
                href="https://www.linkedin.com/company/mcmasterexo/?originalSubdomain=ca"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-blue-400 hover:underline"
              >
                McMaster Exoskeleton
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
