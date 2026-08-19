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
    { 
      href: "/ace2026", 
      label: "ACE 2026",
      dropdown: [
        { href: "/ace2025", label: "ACE 2025" }
      ]
    },
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
              <div key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className="relative px-4 py-2 text-softWhite font-medium text-sm lg:text-base tracking-wide group flex items-center gap-1"
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-ashGold">
                    {link.label}
                  </span>
                  {link.dropdown && (
                    <svg className="w-4 h-4 transition-transform group-hover:rotate-180 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                  <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-gradient-to-r from-transparent via-ashGold to-transparent transition-all duration-300 ease-out group-hover:w-full group-hover:left-0" />
                  <span className="absolute inset-0 rounded-lg bg-ashGold/0 transition-all duration-300 group-hover:bg-ashGold/5" />
                </Link>

                {link.dropdown && (
                  <div className="absolute top-full left-0 w-36 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                    <div className="bg-jet/95 backdrop-blur-md border border-ashGold/10 rounded-lg shadow-xl overflow-hidden py-2">
                      {link.dropdown.map((sublink) => (
                        <Link
                          key={sublink.href}
                          href={sublink.href}
                          className="block px-4 py-2 text-sm text-softWhite hover:bg-ashGold/10 hover:text-ashGold transition-colors duration-200"
                        >
                          {sublink.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
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
            <div key={link.href}>
              <Link
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
              {link.dropdown && (
                <div className="pl-6 border-l border-white/10 ml-5 my-1">
                  {link.dropdown.map((sublink) => (
                    <Link
                      key={sublink.href}
                      href={sublink.href}
                      onClick={toggleMenu}
                      className="block px-4 py-3 text-sm text-softWhite/80 rounded-xl hover:text-ashGold hover:pl-6 transition-all duration-300"
                    >
                      {sublink.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
