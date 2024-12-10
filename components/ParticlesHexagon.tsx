"use client";

import { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { Engine, tsParticles } from "@tsparticles/engine";
import { loadFull } from "tsparticles"; // Load all features
import { loadPolygonPath } from "tsparticles-path-polygon"; // Load polygon path generator

const ParticlesTest = ({ id }: { id: string }) => {
  const [init, setInit] = useState(false);

  // Initialize tsparticles engine with required features
  useEffect(() => {
    const initializeParticles = async () => {
      await loadFull(tsParticles); // Load all features
      await loadPolygonPath(tsParticles); // Load polygon path generator
      setInit(true);
    };

    initializeParticles();
  }, []);

  const options = {
    background: {
      color: {
        value: "#000000", // Background color
      },
    },
    particles: {
      color: {
        value: "#8B0000", // Particle color
        animation: {
          enable: false,
          speed: 10,
        },
      },
      move: {
        direction: "none",
        enable: true,
        speed: 3, // Particle speed
        outModes: {
          default: "destroy", // Ensure particles are destroyed after moving
        },
        path: {
          clamp: false, // Don't restrict particles to the canvas
          enable: true, // Enable custom path
          delay: {
            value: 0,
          },
          generator: "polygonPathGenerator", // Use polygon path generator
          options: {
            sides: 6, // Hexagonal shape
            turnSteps: 30, // Number of steps to complete a side
            angle: 30, // Starting angle
          },
        },
        random: false,
        straight: false,
        trail: {
          enable: true,
          length: 30, // Set a reasonable trail length (can adjust)
          fill: {
            color: {
              value: "#000", // Match the particle color
            },
            opacity: {
              value: 0, // Ensure the trail fades fully
              animation: {
                enable: true, // Enable fading animation
                speed: 0.2, // Slow fade speed (adjust as needed)
                startValue: 1, // Start fully visible
                destroy: true, // Destroy trail after fading
              },
            },
          },
        },
      },
      number: {
        value: 0, // Initial number of particles
      },
      opacity: {
        value: 1, // Keep opacity constant for particles
      },
      shape: {
        type: "circle",
      },
      size: {
        value: 2,
      },
    },
    emitters: [
      {
        direction: "none",
        rate: {
          quantity: 1,
          delay: 0.25,
        },
        size: {
          width: 0,
          height: 0,
        },
        position: {
          x: 50, // Position of the second emitter (left)
          y: 50, // Position of the second emitter (top-left)
        },
      },
      // {
      //   direction: "none",
      //   rate: {
      //     quantity: 1,
      //     delay: 0.75,
      //   },
      //   size: {
      //     width: 0,
      //     height: 0,
      //   },
      //   position: {
      //     x: 75, // Position of the third emitter (right)
      //     y: 50, // Position of the third emitter (bottom-right)
      //   },
      // },
    ],
    fullScreen: {
      enable: false,
      zIndex: 0,
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

export default ParticlesTest;
