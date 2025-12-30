"use client";

import React, { useEffect, useState } from "react";
import { FaEnvelope, FaInstagram, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

const contactMethods = [
  {
    icon: FaEnvelope,
    title: "Email",
    value: "exo@mcmaster.ca",
    href: "mailto:exo@mcmaster.ca",
    description: "For general inquiries and sponsorship",
  },
  {
    icon: FaInstagram,
    title: "Instagram",
    value: "@mcmasterexo",
    href: "https://www.instagram.com/mcmasterexo/",
    description: "Follow our journey and updates",
  },
  {
    icon: FaLinkedin,
    title: "LinkedIn",
    value: "McMaster Exoskeleton",
    href: "https://www.linkedin.com/company/mcmasterexo/",
    description: "Connect with us professionally",
  },
];

function ContactPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-charcoal text-softWhite">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-ashGold/50 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-ashGold/10 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div
            className={`mb-6 transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-widest uppercase bg-ashGold/20 text-ashGold border border-ashGold/30 rounded-full">
              Get in Touch
            </span>
          </div>

          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Contact <span className="text-gradient-gold">Us</span>
          </h1>

          <p
            className={`text-lg sm:text-xl text-softWhite/70 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Have questions about our team, sponsorship opportunities, or want to
            collaborate? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="relative py-20 bg-jet overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ashGold/30 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-ashGold/5 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <a
                key={method.title}
                href={method.href}
                target={method.href.startsWith("mailto") ? undefined : "_blank"}
                rel={method.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className={`group p-8 rounded-2xl bg-charcoal/50 border border-white/5 hover:border-ashGold/30 transition-all duration-500 hover:bg-charcoal text-center ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-ashGold/10 mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-ashGold/20">
                  <method.icon
                    size={28}
                    className="text-ashGold"
                  />
                </div>
                <h3 className="text-xl font-bold text-softWhite mb-2 group-hover:text-ashGold transition-colors duration-300">
                  {method.title}
                </h3>
                <p className="text-ashGold font-medium mb-2">{method.value}</p>
                <p className="text-sm text-softWhite/50">{method.description}</p>
              </a>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ashGold/30 to-transparent" />
      </section>

      {/* Location Section */}
      <section className="relative py-20 bg-charcoal overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Location</h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-ashGold to-transparent" />
          </div>

          <div
            className={`p-8 rounded-2xl bg-jet/50 border border-white/5 text-center transition-all duration-1000 delay-900 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-ashGold/10 mb-6">
              <FaMapMarkerAlt size={28} className="text-ashGold" />
            </div>
            <h3 className="text-2xl font-bold text-softWhite mb-2">
              McMaster University
            </h3>
            <p className="text-lg text-softWhite/70 mb-1">
              Faculty of Engineering
            </p>
            <p className="text-softWhite/50">
              1280 Main Street West, Hamilton, ON L8S 4L8
            </p>
          </div>

          <p className="text-center mt-8 text-softWhite/50">
            We're a student team based at McMaster University's Engineering campus.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 bg-jet">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ashGold/30 to-transparent" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-softWhite/60 mb-6">
            Interested in sponsoring or partnering with us?
          </p>
          <a
            href="/sponsor_proposal.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-ashGold text-charcoal font-bold rounded-lg hover:bg-goldLight transition-all duration-300 shadow-lg hover:shadow-glow"
          >
            View Sponsorship Package
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
