import About from "@/components/About";
import Competition from "@/components/Competition";
import Hero from "@/components/Hero";
import YouTube from "@/components/YouTube";
import PoweredBy from "@/components/PoweredBy";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <About></About>
      <Competition></Competition>
      <YouTube />
      <PoweredBy />
    </>
  );
}
