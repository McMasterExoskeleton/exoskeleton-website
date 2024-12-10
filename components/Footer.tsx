"use client";

import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import ParticlesBackground from "./ParticlesBackground";

function Footer() {
  return (
    <footer className="relative bg-black text-white py-8 z-10">
      {/* Particles Background */}
      <ParticlesBackground id="footer-particles" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 py-8">
        {/* Email Section */}
        <p className="mb-4">
          Email us at:{" "}
          <a
            href="mailto:exo@mcmaster.ca"
            className="text-blue-400 hover:underline"
          >
            exo@mcmaster.ca
          </a>
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-4">
          {/* Instagram Icon */}
          <a
            href="https://www.instagram.com/mcmasterexo/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white flex items-center space-x2"
          >
            <FaInstagram size={24} />
            <span className="ml-1">@mcmasterexo</span>
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/company/mcmasterexo/?originalSubdomain=ca"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white flex"
          >
            <FaLinkedin size={24} />
            <span>McMaster Exoskeleton</span>
          </a>
        </div>

        {/* Copyright */}
        <p className="mt-4 text-sm text-gray-400">
          © {new Date().getFullYear()} McMaster Exoskeleton Team. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
