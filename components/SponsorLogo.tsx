import React from "react";
import Image from "next/image";
import type { SponsorProps } from "@/data/sponsorsData";

/**
 * One sponsor logo tile.
 *
 * The backdrop is chosen per logo, because the set splits both ways. Measuring
 * the mean luminance of each logo's opaque pixels showed 15 of 17 are dark-inked
 * (Phoenix Contact 33, MG Chemicals 32, CubeMars 43, Pfaff 60, 3JPrecision 71,
 * Protocase 81, plus all three SVGs — SolidWorks #DA291C, MES #A71D30,
 * KISSsoft #1875BB) and would be near-invisible on the dark ground. But two
 * (RLX at 255, EastMount at 252) are essentially white with transparency, and
 * those vanish on a light plate instead.
 *
 * So `plate` is stored per sponsor in the data file rather than guessed here.
 */
export default function SponsorLogo({
  sponsor,
  size = "md",
}: {
  sponsor: SponsorProps;
  size?: "md" | "lg";
}) {
  const tile = size === "lg" ? "h-28 sm:h-32" : "h-24";
  const cap = size === "lg" ? "max-h-14" : "max-h-11";

  // Dark-inked logos get a light plate; near-white logos would disappear on one,
  // so they sit directly on the dark card. See `plate` in data/sponsorsData.ts.
  const surface =
    sponsor.plate === "dark"
      ? "bg-hairline/[0.05] border-hairline/10 hover:bg-hairline/[0.09]"
      : "bg-white/[0.93] border-hairline/10 hover:bg-white";

  return (
    <a
      href={sponsor.website}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex ${tile} items-center justify-center rounded-xl border px-5 py-4 transition-all duration-300 hover:border-ashGold/50 hover:-translate-y-0.5 ${surface}`}
    >
      <Image
        src={sponsor.logo}
        alt={sponsor.name}
        width={240}
        height={96}
        // next/image rejects SVG unless dangerouslyAllowSVG is enabled globally,
        // which would also let SVGs served from public/ run script. These are
        // small vector files, so skip the optimizer for them instead.
        unoptimized={sponsor.logo.endsWith(".svg")}
        className={`${cap} w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]`}
      />
    </a>
  );
}
