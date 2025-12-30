"use client";

import React from "react";
import { FaLinkedin } from "react-icons/fa";

export interface HeadshotProps {
  name: string;
  title: string;
  linkedin_url: string;
  image_url: string;
}

const Headshot: React.FC<HeadshotProps> = ({
  name,
  title,
  linkedin_url,
  image_url,
}) => {
  const getBorderColor = (title: string) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes("principal")) return "border-ashGold";
    if (lowerTitle.includes("software")) return "border-mutedBlue";
    if (lowerTitle.includes("electrical")) return "border-yellow-400";
    if (lowerTitle.includes("mechanical")) return "border-gray-400";
    if (lowerTitle.includes("safety")) return "border-dustyRose";
    return "border-ashGold/50";
  };

  const getGlowColor = (title: string) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes("principal"))
      return "group-hover:shadow-[0_0_30px_rgba(189,169,104,0.3)]";
    if (lowerTitle.includes("software"))
      return "group-hover:shadow-[0_0_30px_rgba(93,173,226,0.3)]";
    if (lowerTitle.includes("electrical"))
      return "group-hover:shadow-[0_0_30px_rgba(250,204,21,0.3)]";
    if (lowerTitle.includes("mechanical"))
      return "group-hover:shadow-[0_0_30px_rgba(156,163,175,0.3)]";
    if (lowerTitle.includes("safety"))
      return "group-hover:shadow-[0_0_30px_rgba(185,124,143,0.3)]";
    return "group-hover:shadow-[0_0_30px_rgba(189,169,104,0.2)]";
  };

  return (
    <div className="group flex flex-col items-center p-6 rounded-2xl bg-black/20 border border-white/5 hover:border-ashGold/20 transition-all duration-500 hover:bg-black/30">
      {/* Image container */}
      <div className="relative mb-4">
        {/* Decorative ring */}
        <div
          className={`absolute inset-0 rounded-full ${getBorderColor(
            title
          )} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm scale-110`}
        />

        <div
          className={`relative w-40 h-40 rounded-full overflow-hidden border-4 ${getBorderColor(
            title
          )} transition-all duration-500 ${getGlowColor(title)} bg-white`}
        >
          <img
            src={image_url}
            alt={`${name}'s headshot`}
            className="w-full h-full object-cover object-[center_10%] transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </div>

      {/* Text content */}
      <div className="text-center space-y-1">
        <h3 className="text-xl font-bold text-softWhite group-hover:text-ashGold transition-colors duration-300">
          {name}
        </h3>
        <p className="text-sm text-softWhite/60">{title}</p>
      </div>

      {/* LinkedIn link */}
      <a
        href={linkedin_url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 p-2 rounded-lg bg-charcoal border border-white/10 hover:border-ashGold/30 hover:bg-ashGold/10 transition-all duration-300 group/link"
        aria-label={`${name}'s LinkedIn profile`}
      >
        <FaLinkedin
          size={20}
          className="text-softWhite/60 group-hover/link:text-ashGold transition-colors duration-300"
        />
      </a>
    </div>
  );
};

export default Headshot;
