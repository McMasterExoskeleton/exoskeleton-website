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
  return (
    <div className="flex flex-col items-center gap-2 p-4 min-w-128">
      <img
        src={image_url}
        alt={`${name}'s headshot`}
        className="w-48 h-48 rounded-full object-cover"
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
