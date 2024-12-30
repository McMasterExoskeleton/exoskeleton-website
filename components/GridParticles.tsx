"use client";

import { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { MoveDirection, OutMode, tsParticles } from "@tsparticles/engine";

import { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles"; // Load all features

const GridParticles = ({ id }: { id: string }) => {
  const [init, setInit] = useState(false);

  // Initialize tsparticles engine with required features
  useEffect(() => {
    const initializeParticles = async () => {
      await loadFull(tsParticles); // Load all features
      setInit(true);
    };

    initializeParticles();
  }, []);

  const options = {
    background: {
      color: {
        value: "#0a0a0a", // Dark gray background
      },
    },
    particles: {
      color: {
        value: "#00FF00", // Neon green particles
      },
      move: {
        enable: true,
        speed: 2, // Particle movement speed
        direction: MoveDirection.none, // No specific movement direction
        outModes: {
          default: OutMode.out, // Particles exit screen once they move out
        },
        random: true, // Randomize movement direction within a set path
        straight: true, // Particles move straight in all directions
      },
      number: {
        value: 50, // Number of particles
      },
      opacity: {
        value: 0.5, // Slight opacity
      },
      shape: {
        type: "square", // Square-shaped particles
      },
      size: {
        value: { min: 2, max: 4 }, // Size range of particles
      },
      links: {
        color: "#192841", // Light gray color for links between particles
        distance: 300, // Distance for linking particles
        enable: true,
        opacity: 1, // Fully opaque links
        width: 2, // Link width
      },
    },
    emitters: [
      {
        direction: MoveDirection.none,
        rate: {
          quantity: 2, // Number of particles emitted
          delay: 0.3, // Delay between emissions
        },
        position: {
          x: 50, // Center of the screen
          y: 50, // Center of the screen
        },
        size: {
          width: 50, // Width of emission area
          height: 50, // Height of emission area
        },
      },
    ],
    fullScreen: {
      enable: false, // Full-screen effect
      zIndex: -1, // Particles stay behind other content
    },
  };

  return init ? (
    <Particles
      id={id}
      options={options}
      className="absolute w-full h-full z-0"
    />
  ) : (
    <></>
  );
};

export default GridParticles;
