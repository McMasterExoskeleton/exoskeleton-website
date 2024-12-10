"use client";

import { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { Engine, tsParticles } from "@tsparticles/engine";
import { loadFull } from "tsparticles"; // Load all features
import { loadPolygonPath } from "tsparticles-path-polygon"; // Load polygon path generator

const ParticlesTest = () => {
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
    effect: {
      type: "trail",
      options: {
        trail: {
          length: 50,
          minWidth: 4,
        },
      },
    },
    particles: {
      color: {
        value: "#FF0000", // Particle color
        animation: {
          enable: true,
          speed: 10,
        },
      },
      move: {
        direction: "none",
        enable: true,
        speed: 3, // Particle speed
        outModes: {
          default: "destroy",
        },
        angle: {
          value: 0, // Angle of movement - 0 is horizontal, 90 is vertical
          offset: 15, // Slight variation around 90 degrees (vertical) for randomness
        },
        trail: {
          enable: true,
          length: 20,
          fill: {
            color: {
              value: "#000",
            },
          },
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
      },
      number: {
        value: 0, // Initial number of particles
      },
      opacity: {
        value: 1,
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
          x: 50,
          y: 50, // Position of the first emitter (center)
        },
      },
      {
        direction: "none",
        rate: {
          quantity: 1,
          delay: 0.75,
        },
        size: {
          width: 0,
          height: 0,
        },
        position: {
          x: 20, // Position of the second emitter (left)
          y: 30, // Position of the second emitter (top-left)
        },
      },
      {
        direction: "none",
        rate: {
          quantity: 1,
          delay: 0.75,
        },
        size: {
          width: 0,
          height: 0,
        },
        position: {
          x: 80, // Position of the third emitter (right)
          y: 70, // Position of the third emitter (bottom-right)
        },
      },
    ],
    fullScreen: {
      enable: false,
      zIndex: 0,
    },
  };

  return init ? (
    <Particles
      id="tsparticles"
      options={options}
      className="absolute w-full h-full z-0"
    />
  ) : (
    <></>
  );
};

export default ParticlesTest;
