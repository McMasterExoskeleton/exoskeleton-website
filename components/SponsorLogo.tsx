import React from "react";
import Image from "next/image";
import type { SponsorProps } from "@/data/sponsorsData";

/**
 * One sponsor logo tile.
 *
 * Every tile uses the same light plate, because a wall of sponsor logos reads
 * as sloppy the moment the backdrops differ.
 *
 * Most of the set is dark-inked and would be near-invisible on the dark ground
 * (Phoenix Contact, MG Chemicals, CubeMars, Pfaff, 3JPrecision, Protocase, and
 * all three SVGs). The handful supplied as white-on-transparent artwork are
 * handled per logo rather than by changing the plate:
 *   - RLX and EastMount are monochrome, so CSS inverts them to black.
 *   - Trexo only ships a light-on-dark wordmark, so public/trexo-logo-dark.webp
 *     recolours the white text and keeps the purple ring intact.
 */
export default function SponsorLogo({
  sponsor,
  size = "md",
}: {
  sponsor: SponsorProps;
  size?: "md" | "lg";
}) {
  const tile = size === "lg" ? "h-28 sm:h-32" : "h-24";

  // Base box each mark is fitted into, then scaled per logo so a square mark
  // and a very wide one carry the same visual weight. object-contain keeps the
  // aspect ratio; the scale only changes how much of the box the mark gets.
  const base = size === "lg" ? { h: 60, w: 210 } : { h: 46, w: 165 };
  const k = sponsor.scale ?? 1;
  const aspect = sponsor.aspect ?? 2.5;
  const intrinsicW = 240;
  const intrinsicH = Math.round(intrinsicW / aspect);

  return (
    <a
      href={sponsor.website}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex ${tile} items-center justify-center rounded-xl border border-hairline/10 bg-white/[0.93] px-5 py-4 transition-all duration-300 hover:border-ashGold/50 hover:bg-white hover:-translate-y-0.5`}
    >
      <Image
        src={sponsor.logo}
        alt={sponsor.name}
        width={intrinsicW}
        height={intrinsicH}
        // next/image rejects SVG unless dangerouslyAllowSVG is enabled globally,
        // which would also let SVGs served from public/ run script. These are
        // small vector files, so skip the optimizer for them instead.
        unoptimized={sponsor.logo.endsWith(".svg")}
        style={{ maxHeight: base.h * k, maxWidth: base.w * k }}
        className={`h-auto w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03] ${
          sponsor.invert ? "invert" : ""
        }`}
      />
    </a>
  );
}
