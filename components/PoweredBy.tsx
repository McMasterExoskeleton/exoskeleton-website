import React from "react";
import { SponsorCard } from "./Sponsors";
import { sponsors, SponsorProps } from "@/data/sponsorsData"; // Import data and types from the new data file

const PoweredBy = () => {
  const desiredSponsorNames = ["EZMotion", "RLX Solutions", "3JPrecision", "PCB Libraries", "KISSsoft"];
  const topSponsors = sponsors.gold.filter((sponsor) =>
    desiredSponsorNames.includes(sponsor.name)
  );

  return (
    <section className="py-12 bg-black text-white text-center">
      <h2 className="text-5xl font-bold mb-4">
        Powered By
        <span className="block w-64 h-1 bg-ashGold mx-auto mt-2"></span>
      </h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-center">
        {topSponsors.map((sponsor: SponsorProps) => (
          <SponsorCard key={sponsor.name} {...sponsor} />
        ))}
      </div>
    </section>
  );
};

export default PoweredBy; 