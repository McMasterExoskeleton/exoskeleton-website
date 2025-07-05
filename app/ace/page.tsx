import React from "react";
import Image from "next/image";
import ace2025Images from "./ace2025Images";

const EVENTS = [
  "Design Review",
  "Safety Check",
  "Emergency Doff",
  "Don/Doff Test",
  "Stair Climbing",
  "Obstacle Course",
];

export default function AceCompetitionPage() {
  return (
    <div className="min-h-screen flex flex-col bg-charcoal text-softWhite">
      {/* Hero Section */}
      <div className="relative min-h-[100vh] flex items-center justify-center text-center bg-charcoal overflow-hidden">
        <Image
          src="/ace_2025/vineet_obstacle.JPG"
          alt="Vineet performing the obstacle at ACE"
          fill
          priority
          className="object-cover w-full h-full z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70 z-0" />
        <div className="relative z-10 px-4">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4">
            Applied Collegiate Exoskeleton (ACE) Competition
            <span className="block w-64 h-1 bg-ashGold mx-auto mt-4"></span>
          </h1>
          <p className="text-2xl max-w-2xl mx-auto font-light">
            Building the future of first responder strength and mobility.
          </p>
        </div>
      </div>

      {/* About ACE Section */}
      <section className="py-16 px-4 bg-charcoal text-softWhite text-center">
        <h2 className="text-4xl font-bold mb-6">
          What is ACE?
          <span className="block w-64 h-1 bg-ashGold mx-auto mt-2"></span>
        </h2>
        <p className="text-xl max-w-3xl mx-auto mb-6">
          The Applied Collegiate Exoskeleton (ACE) Competition is an annual
          event where university teams design and build lower-limb exoskeleton
          suits. The goal: enhance the strength and mobility of first responders
          through cutting-edge wearable robotics.
        </p>
        <p className="text-xl max-w-3xl mx-auto">
          Teams are challenged to innovate, engineer, and compete in a series of
          rigorous events that test both the technology and the team behind it.
        </p>
      </section>

      {/* Our 2025 Competition Experience */}
      <section className="py-16 px-4 bg-jet text-softWhite text-center">
        <h2 className="text-4xl font-bold mb-6">
          Our 2025 ACE Experience
          <span className="block w-64 h-1 bg-ashGold mx-auto mt-2"></span>
        </h2>
        <p className="text-xl max-w-3xl mx-auto mb-6">
          In our first year competing at ACE (2025), hosted at the University of
          Michigan, our team built a functional exoskeleton in just 5 months and
          placed 5th overall!
        </p>
        <h3 className="text-2xl font-semibold mb-4 text-ashGold">
          Events We Participated In:
        </h3>
        <ul className="flex flex-wrap justify-center gap-6 mb-8">
          {EVENTS.map((event) => (
            <li
              key={event}
              className="bg-black bg-opacity-60 rounded-lg px-6 py-3 text-xl font-medium border-l-4 border-ashGold min-w-[200px]"
            >
              {event}
            </li>
          ))}
        </ul>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          From design review and safety checks to stair climbing and obstacle
          courses, our team proved what's possible with passion, teamwork, and
          innovation.
        </p>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 bg-charcoal text-softWhite text-center">
        <h2 className="text-4xl font-bold mb-6">
          Gallery
          <span className="block w-64 h-1 bg-ashGold mx-auto mt-2"></span>
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {ace2025Images.map((img, idx) => (
            <div
              key={img}
              className="w-[28rem] h-80 relative rounded-lg overflow-hidden shadow-lg border-4 border-ashGold"
            >
              <Image
                src={img}
                alt={`ACE 2025 photo ${idx + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <div className="flex justify-center py-12 bg-jet">
        <a
          href="/recruiting"
          className="bg-ashGold text-charcoal font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-yellow-400 transition-colors text-xl"
        >
          Join the Team
        </a>
      </div>
    </div>
  );
}
