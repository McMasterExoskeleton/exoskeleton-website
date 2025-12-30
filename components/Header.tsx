"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navLinks = [
    { href: "/recruiting", label: "Join the Team" },
    { href: "/ace", label: "ACE 2025" },
    { href: "/team", label: "Team" },
    { href: "/design", label: "Design" },
    { href: "/sponsors", label: "Sponsors" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-jet/95 backdrop-blur-md shadow-lg border-b border-ashGold/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center group transition-transform duration-300 hover:scale-105"
          >
            <img
              src="/exo_logo_gold_black.png"
              alt="McMaster Exoskeleton Logo"
              className={`transition-all duration-300 ${
                scrolled ? "h-12 w-auto" : "h-14 sm:h-16 w-auto"
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-softWhite font-medium text-sm lg:text-base tracking-wide group transition-colors duration-300 hover:text-ashGold"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-ashGold transition-all duration-300 group-hover:w-3/4 rounded-full" />
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg transition-all duration-300 hover:bg-white/10"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 bg-ashGold rounded-full transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-ashGold rounded-full transition-all duration-300 ${
                  menuOpen ? "opacity-0 scale-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-ashGold rounded-full transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-jet/98 backdrop-blur-lg border-t border-ashGold/10">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={toggleMenu}
                className="block px-4 py-3 text-softWhite font-medium rounded-lg transition-all duration-300 hover:bg-ashGold/10 hover:text-ashGold hover:pl-6"
                style={{
                  transitionDelay: menuOpen ? `${index * 50}ms` : "0ms",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
