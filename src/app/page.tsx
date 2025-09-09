import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import HomeCTA from "@/components/HomeCTA";
import WhyUs from "@/components/WhyUs";
import Intro from "@/components/Intro";
import Credibility from "@/components/Credibility";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Credibility />
      <FeaturedWork />
      <WhyUs />
      <HomeCTA />
    </>
  );
}
