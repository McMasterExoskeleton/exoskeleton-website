"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  Engine,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import whiteGear from "@/public/white_gear.svg";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { loadCogShape } from "@tsparticles/shape-cog";
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

interface ParticlesBackgroundProps {
  id: string;
}

const ParticlesBackground = ({ id }: ParticlesBackgroundProps) => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      await loadCogShape(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#000000", // Dark tech-inspired background color
        },
      },
      fpsLimit: 120, // Frame rate limit for smoother animation
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push", // Adds particles on click
          },
          onHover: {
            enable: true,
            mode: "repulse", // Particles move away from the cursor
          },
        },
        modes: {
          push: {
            quantity: 4, // Number of particles added on click
          },
          repulse: {
            distance: 100, // Distance particles are pushed away from the cursor
            duration: 0.4, // Duration of the repulse effect
          },
        },
      },
      particles: {
        color: {
          value: "#192841", // Light gray color for particles (gears)
        },
        links: {
          color: "#192841", // Light gray color for links between particles
          distance: 150, // Distance for linking particles
          enable: true,
          opacity: 1, // Fully opaque links
          width: 1, // Link width
        },
        move: {
          direction: "none", // Random movement direction
          enable: true,
          outModes: {
            default: "out", // Particles move off-screen when they reach the edges
          },
          random: true, // Particles move randomly
          speed: 3, // Particle movement speed
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800, // Area where particles are densely populated
          },
          value: 80, // Total number of particles
        },
        opacity: {
          value: 1, // Fully opaque particles
        },
        shape: {
          type: "cog",
        },
        size: {
          value: { min: 15, max: 20 },
          animation: {
            enable: true, // Particle size animation
            speed: 3, // Speed of size change
            minimumValue: 10, // Minimum size value
          },
        },
      },
      detectRetina: true, // Enable retina display support
      fullScreen: {
        enable: false, // Disable fullscreen effect
      },
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id={id}
        particlesLoaded={particlesLoaded}
        options={options}
        className="absolute w-full h-full z-0"
      />
    );
  }

  return <></>;
};

export default ParticlesBackground;
