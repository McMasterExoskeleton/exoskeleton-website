import About from "@/components/About";
import Competition from "@/components/Competition";
import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <About></About>
      <Competition></Competition>
    </>
  );
}
