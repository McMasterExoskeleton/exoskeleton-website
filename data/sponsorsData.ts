export type SponsorProps = {
  logo: string;
  name: string;
  website: string;
  needsBackground?: boolean;
};

export const sponsors = {
  bronze: [
    {
      name: "East Mount Chiropractic",
      logo: "/eastmount-chiro-logo.png",
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
    {
      name: "Phoenix Contact",
      logo: "/Phoenix_Contact_Logo.png",
      website: "https://www.phoenixcontact.com/en-ca/",
      needsBackground: true,
    },
  ],
  gold: [
    {
      name: "PCB Libraries",
      logo: "/pcb-libraries.png",
      website: "https://www.pcblibraries.com/",
    },
    {
      name: "EZMotion",
      logo: "/ezmotion-logo.png",
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