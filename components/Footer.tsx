"use client";

import React from "react";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  const navLinks = [
    { href: "/recruiting", label: "Join the Team" },
    { href: "/ace", label: "ACE 2025" },
    { href: "/team", label: "Team" },
    { href: "/design", label: "Design" },
    { href: "/sponsors", label: "Sponsors" },
    { href: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      href: "https://www.instagram.com/mcmasterexo/",
      icon: FaInstagram,
      label: "@mcmasterexo",
    },
    {
      href: "https://www.linkedin.com/company/mcmasterexo/",
      icon: FaLinkedin,
      label: "McMaster Exoskeleton",
    },
  ];

  return (
    <footer className="relative bg-jet text-softWhite">
      {/* Top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ashGold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <img
                src="/exo_logo_gold_black.png"
                alt="McMaster Exoskeleton Logo"
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-softWhite/60 text-lg max-w-md mb-6">
              A student-run technical team designing and building lower-limb
              exoskeletons to enhance human strength and mobility.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-charcoal rounded-lg border border-white/5 hover:border-ashGold/30 hover:bg-ashGold/10 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon
                    size={20}
                    className="text-softWhite/60 group-hover:text-ashGold transition-colors duration-300"
                  />
                </a>
              ))}
              <a
                href="mailto:exo@mcmaster.ca"
                className="p-3 bg-charcoal rounded-lg border border-white/5 hover:border-ashGold/30 hover:bg-ashGold/10 transition-all duration-300 group"
                aria-label="Email us"
              >
                <FaEnvelope
                  size={20}
                  className="text-softWhite/60 group-hover:text-ashGold transition-colors duration-300"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-softWhite mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-softWhite/60 hover:text-ashGold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-softWhite mb-6">
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:exo@mcmaster.ca"
                  className="flex items-center gap-3 text-softWhite/60 hover:text-ashGold transition-colors duration-300"
                >
                  <FaEnvelope className="text-ashGold" />
                  <span>exo@mcmaster.ca</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/mcmasterexo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-softWhite/60 hover:text-ashGold transition-colors duration-300"
                >
                  <FaInstagram className="text-ashGold" />
                  <span>@mcmasterexo</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/mcmasterexo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-softWhite/60 hover:text-ashGold transition-colors duration-300"
                >
                  <FaLinkedin className="text-ashGold" />
                  <span>McMaster Exoskeleton</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-softWhite/40">
              {new Date().getFullYear()} McMaster Exoskeleton Team. All rights
              reserved.
            </p>
            <p className="text-sm text-softWhite/40">
              McMaster University, Hamilton, ON
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
