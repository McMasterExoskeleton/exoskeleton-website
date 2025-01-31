"use client";

import { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { MoveDirection, OutMode, tsParticles } from "@tsparticles/engine";

import { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles"; // Load all features
import { loadLineShape } from "@tsparticles/shape-line";

const CircuitParticles = ({ id }: { id: string }) => {
  const [init, setInit] = useState(false);

  // Initialize tsparticles engine with required features
  useEffect(() => {
    const initializeParticles = async () => {
      await loadFull(tsParticles); // Load all features
      // @ts-ignore
      await loadLineShape(tsParticles); // Load line path generator
      setInit(true);
    };

    initializeParticles();
  }, []);

  const options = {
    background: {
      color: {
        value: "#000000", // Dark background
      },
    },
    particles: {
      color: {
        value: ["#00FFFF", "#FFFFFF"], // Electric blue and white
      },
      move: {
        enable: true,
        speed: 2, // Particle movement speed
        path: {
          enable: true, // Enable custom path
          generator: "linePathGenerator", // Use line path generator
          options: {
            angle: 90, // Particles move in straight vertical lines
          },
        },
        outModes: {
          default: OutMode.out, // Allow particles to exit the screen
        },
        random: false,
        straight: true,
      },
      number: {
        value: 50, // Number of particles
      },
      opacity: {
        value: { min: 0.4, max: 0.8 }, // Particles fade in and out
      },
      shape: {
        type: "circle", // Circular particles
      },
      size: {
        value: { min: 1, max: 3 }, // Varying particle sizes
      },
      lineLinked: {
        enable: true,
        distance: 100, // Connection distance between particles
        color: "#00FFFF", // Line color
        opacity: 0.3,
        width: 1,
      },
      links: {
        color: "#192841", // Light gray color for links between particles
        distance: 150, // Distance for linking particles
        enable: true,
        opacity: 1, // Fully opaque links
        width: 1, // Link width
      },
    },
    emitters: [
      {
        direction: MoveDirection.top,
        rate: {
          quantity: 3, // Number of particles per emission
          delay: 0.1, // Delay between emissions
        },
        position: {
          x: 50, // Center of the screen
          y: 100, // Bottom of the screen
        },
        size: {
          width: 100, // Width of emission area
          height: 0, // No height (line-shaped emitter)
        },
      },
    ],
    fullScreen: {
      enable: false, // Cover entire screen
      zIndex: -1, // Behind other elements
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

export default CircuitParticles;
