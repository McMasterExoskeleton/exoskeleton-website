export type SponsorProps = {
  logo: string;
  name: string;
  website: string;
  /**
   * Set for logos supplied only as white-on-transparent artwork. Every tile
   * uses the same light plate, so these are inverted in CSS to render as
   * black-on-light. Only safe for monochrome marks — RLX and EastMount measure
   * saturation 0.03 and 0.00, so inverting produces black, not a colour shift.
   */
  invert?: boolean;
  /** @deprecated No longer read; all tiles share one plate. */
  needsBackground?: boolean;
};

export const sponsors: Record<"bronze" | "silver" | "gold", SponsorProps[]> = {
  bronze: [
    {
      name: "East Mount Chiropractic",
      logo: "/eastmount-chiro-logo.png",
      invert: true,
      website: "https://eastmountchiropractic.ca/",
    },
    {
      name: "Generations Physio",
      logo: "/generations-physio-logo.avif",
      website: "https://www.generationsphysio.com/",
    },
    {
      name: "Aegis Batteries",
      logo: "/Aegis Batteries.jpg",
      website: "https://www.aegisbattery.com/",
    },
    {
      name: "Protocase",
      logo: "/protocase.png",
      website: "https://www.protocase.com/",
      needsBackground: true,
    },
    {
      name: "Toronto Hydro",
      logo: "/toronto_hydro.png",
      website: "https://www.torontohydro.com/",
    },
  ],
  silver: [
    {
      name: "Solid Works",
      logo: "/solidworks-logo.svg",
      website: "https://www.solidworks.com/",
    },
    {
      name: "MG Chemicals",
      logo: "/mg-chemicals-logo.webp",
      website: "https://mgchemicals.com/",
    },
    {
      name: "McMaster Engineering Society",
      logo: "/MES_logo.svg",
      website: "https://www.macengsociety.ca/",
    },
  ],
  gold: [
    {
      name: "Trexo Robotics",
      logo: "/trexo-logo-dark.webp",
      website: "https://www.trexorobotics.com/",
    },
    {
      name: "CubeMars",
      logo: "/cubemars-logo.webp",
      website: "https://www.cubemars.com/",
      needsBackground: true,
    },
    {
      name: "Phoenix Contact",
      logo: "/Phoenix_Contact_Logo.png",
      website: "https://www.phoenixcontact.com/en-ca/",
      needsBackground: true,
    },
    {
      name: "PCB Libraries",
      logo: "/pcb-libraries.png",
      website: "https://www.pcblibraries.com/",
    },
    {
      name: "EZMotion",
      logo: "/ezmotion-logo-dark.png",
      website: "https://www.ezmotion.co/",
    },
    {
      name: "KISSsoft",
      logo: "/kisssoft-logo.svg",
      website: "https://www.kisssoft.com/en",
    },
    {
      name: "RLX Solutions",
      logo: "/rlx_logo.png",
      invert: true,
      website: "https://rlxsolutions.com/",
    },
    {
      name: "3JPrecision",
      logo: "/3JPrecision_logo.png",
      website: "https://www.3jprecision.com/",
    },
    {
      name: "Pfaff Technologies",
      logo: "/pfaff_logo.webp",
      website: "https://pfafftechnologies.com/",
      needsBackground: true,
    },
  ],
}; 