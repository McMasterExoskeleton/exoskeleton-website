export type SponsorProps = {
  logo: string;
  name: string;
  website: string;
  /**
   * Which backdrop this logo reads best on, assigned by measuring the mean
   * luminance of each logo's opaque pixels:
   *   "light" — dark-inked logo, needs a light plate (11 of 17 are like this,
   *             e.g. Phoenix Contact at 33, MG Chemicals at 32, and all three
   *             SVGs: SolidWorks #DA291C, MES #A71D30, KISSsoft #1875BB)
   *   "dark"  — near-white logo with transparency, which would vanish on a
   *             light plate, so it sits directly on the dark card
   */
  plate: "light" | "dark";
  /** @deprecated Superseded by `plate`. */
  needsBackground?: boolean;
};

export const sponsors: Record<"bronze" | "silver" | "gold", SponsorProps[]> = {
  bronze: [
    {
      name: "East Mount Chiropractic",
      logo: "/eastmount-chiro-logo.png",
      plate: "dark",
      website: "https://eastmountchiropractic.ca/",
    },
    {
      name: "Generations Physio",
      logo: "/generations-physio-logo.avif",
      plate: "light",
      website: "https://www.generationsphysio.com/",
    },
    {
      name: "Aegis Batteries",
      logo: "/Aegis Batteries.jpg",
      plate: "light",
      website: "https://www.aegisbattery.com/",
    },
    {
      name: "Protocase",
      logo: "/protocase.png",
      plate: "light",
      website: "https://www.protocase.com/",
      needsBackground: true,
    },
    {
      name: "Toronto Hydro",
      logo: "/toronto_hydro.png",
      plate: "light",
      website: "https://www.torontohydro.com/",
    },
  ],
  silver: [
    {
      name: "Solid Works",
      logo: "/solidworks-logo.svg",
      plate: "light",
      website: "https://www.solidworks.com/",
    },
    {
      name: "MG Chemicals",
      logo: "/mg-chemicals-logo.webp",
      plate: "light",
      website: "https://mgchemicals.com/",
    },
    {
      name: "McMaster Engineering Society",
      logo: "/MES_logo.svg",
      plate: "light",
      website: "https://www.macengsociety.ca/",
    },
  ],
  gold: [
    {
      name: "Trexo Robotics",
      logo: "/trexo-logo-light.webp",
      plate: "light",
      website: "https://www.trexorobotics.com/",
    },
    {
      name: "CubeMars",
      logo: "/cubemars-logo.webp",
      plate: "light",
      website: "https://www.cubemars.com/",
      needsBackground: true,
    },
    {
      name: "Phoenix Contact",
      logo: "/Phoenix_Contact_Logo.png",
      plate: "light",
      website: "https://www.phoenixcontact.com/en-ca/",
      needsBackground: true,
    },
    {
      name: "PCB Libraries",
      logo: "/pcb-libraries.png",
      plate: "light",
      website: "https://www.pcblibraries.com/",
    },
    {
      name: "EZMotion",
      logo: "/ezmotion-logo.png",
      plate: "light",
      website: "https://www.ezmotion.co/",
    },
    {
      name: "KISSsoft",
      logo: "/kisssoft-logo.svg",
      plate: "light",
      website: "https://www.kisssoft.com/en",
    },
    {
      name: "RLX Solutions",
      logo: "/rlx_logo.png",
      plate: "dark",
      website: "https://rlxsolutions.com/",
    },
    {
      name: "3JPrecision",
      logo: "/3JPrecision_logo.png",
      plate: "light",
      website: "https://www.3jprecision.com/",
    },
    {
      name: "Pfaff Technologies",
      logo: "/pfaff_logo.webp",
      plate: "light",
      website: "https://pfafftechnologies.com/",
      needsBackground: true,
    },
  ],
}; 