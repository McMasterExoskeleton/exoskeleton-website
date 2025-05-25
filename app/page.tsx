import About from "@/components/About";
import Competition from "@/components/Competition";
import Hero from "@/components/Hero";
import PoweredBy from "@/components/PoweredBy";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <PoweredBy />
      <About></About>
      <Competition></Competition>
    </>
  );
}
