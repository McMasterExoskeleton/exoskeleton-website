import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="mb-4">
          Email us at:{" "}
          <a
            href="mailto:exo@mcmaster.ca"
            className="text-blue-400 hover:underline"
          >
            exo@mcmaster.ca
          </a>
        </p>
        <div className="flex justify-center space-x-6">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/mcmasterexo/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaInstagram size={24} />
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/mcmasterexo/?originalSubdomain=ca"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
        <p className="mt-4 text-sm text-gray-400">
          © {new Date().getFullYear()} McMaster Exoskeleton Team. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
