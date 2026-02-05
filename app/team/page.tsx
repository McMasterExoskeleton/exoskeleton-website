import Faculty from "@/components/Faculty";
import Team_Hero from "@/components/Team_Hero";
import TeamLeads from "@/components/TeamLeads";
import ArchivedTeam from "@/components/ArchivedTeam";
import React from "react";

function page() {
  return (
    <>
      <Team_Hero />
      <TeamLeads />
      <ArchivedTeam />
      <Faculty />
    </>
  );
}

export default page;
