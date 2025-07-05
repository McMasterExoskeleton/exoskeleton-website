import React from "react";
import Link from "next/link";

function Team_Hero() {
  return (
    <div
      className="relative text-softWhite py-10 min-h-[700px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/team/obstacle_course.jpg')" }}
    >
      {/* Black overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

      {/* Content */}
      <div className="relative z-20 w-full px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            We Are Recruiting! Join McMaster Exoskeleton
          </h1>
          <p className="text-lg sm:text-2xl mb-6">
            Are you passionate about robotics, biomechanics, and making a
            real-world impact? Our team could be the right one for you!
          </p>
          <p className="text-lg sm:text-2xl mb-4">
            As part of our team you will get practical, hands-on experience by
            actively contributing to the design, development, and testing of
            cutting-edge technology in the field of robotics.
          </p>
          <p className="text-lg sm:text-2xl mb-8">
            Check{" "}
            <Link href="/recruiting" className="relative group px-1">
              <span className="text-gray-500">here</span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-ashGold transition-all duration-300 group-hover:w-full" />
            </Link>{" "}
            for more information on applications, or follow our{" "}
            <a
              href="https://www.instagram.com/mcmasterexo/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group px-1 text-blue-400"
            >
              <span className="text-gray-500">Instagram</span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-ashGold transition-all duration-300 group-hover:w-full" />
            </a>{" "}
            for regular updates.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team_Hero;
