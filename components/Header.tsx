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
                className="relative px-4 py-2 text-softWhite font-medium text-sm lg:text-base tracking-wide group"
              >
                {/* Text with hover effect */}
                <span className="relative z-10 transition-colors duration-300 group-hover:text-ashGold">
                  {link.label}
                </span>
                {/* Animated underline - improved */}
                <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-gradient-to-r from-transparent via-ashGold to-transparent transition-all duration-300 ease-out group-hover:w-full group-hover:left-0" />
                {/* Subtle background glow on hover */}
                <span className="absolute inset-0 rounded-lg bg-ashGold/0 transition-all duration-300 group-hover:bg-ashGold/5" />
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

      {/* Mobile Dropdown Menu - Enhanced */}
      <div
        className={`md:hidden fixed inset-x-0 top-[60px] z-40 transition-all duration-500 ease-out ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="mx-4 mt-2 p-2 rounded-2xl bg-jet/98 backdrop-blur-xl border border-ashGold/10 shadow-2xl">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={toggleMenu}
              className={`block px-5 py-4 text-softWhite font-medium rounded-xl transition-all duration-300 hover:bg-ashGold/10 hover:text-ashGold hover:pl-7 ${
                menuOpen ? "animate-fade-in-up" : ""
              }`}
              style={{
                animationDelay: menuOpen ? `${index * 50}ms` : "0ms",
                animationFillMode: "both",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
