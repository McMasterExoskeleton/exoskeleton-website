import React from "react";
import Headshot from "./Headshot"; // Assuming you have the Headshot component created
import execs from "../public/data/execs.json";
import { HeadshotProps } from "./Headshot";

function TeamLeads() {
  return (
    <div className="relative p-4 text-softWhite bg-charcoal">
      {/* Title */}
      <h2 className="text-5xl font-bold text-center mb-6">
        Team Leads
        <span className="block w-64 h-1 bg-ashGold mx-auto mt-2"></span>
      </h2>

      {/* Flex container for the headshots */}
      <div className="flex flex-wrap justify-center gap-6">
        {execs.map((exec: HeadshotProps) => (
          <div key={exec.name} className="min-w-64 flex-shrink-0 w-32">
            <Headshot
              name={exec.name}
              title={exec.title}
              linkedin_url={exec.linkedin_url}
              image_url={exec.image_url}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamLeads;
