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
  // Determine border color class based on title keywords
  const getBorderColor = (title: string) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes("principal")) return "border-ashGold";
    if (lowerTitle.includes("software")) return "border-mutedBlue";
    if (lowerTitle.includes("electrical")) return "border-yellow-400";
    if (lowerTitle.includes("mechanical")) return "border-gray-400";
    if (lowerTitle.includes("safety")) return "border-dustyRose";
    return "border-white"; // Default fallback
  };

  return (
    <div className="flex flex-col items-center gap-2 p-4 min-w-128">
      <img
        src={image_url}
        alt={`${name}'s headshot`}
        className={`w-48 h-48 rounded-full object-cover object-[center_10%] border-4 bg-white ${getBorderColor(
          title
        )} shadow-lg`}
      />
      <div className="text-center">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-md text-gray-600">{title}</p>
      </div>
      <a
        href={linkedin_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline flex items-center gap-2"
      >
        <FaLinkedin size={24} />
      </a>
    </div>
  );
};

export default Headshot;
