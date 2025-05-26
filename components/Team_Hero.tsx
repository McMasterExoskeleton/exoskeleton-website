import React from "react";

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
            real-world impact? Our team could be the right one for you! Follow
            our{" "}
            <a
              href="https://www.instagram.com/mcmasterexo/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 p-1"
            >
              Instagram
            </a>{" "}
            for announcements about applications opening in the Fall Semester!.
          </p>
          <p className="text-lg sm:text-2xl mb-8">
            As part of our team you will get practical, hands-on experience by
            actively contributing to the design, development, and testing of
            cutting-edge technology in the field of robotics.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team_Hero;
