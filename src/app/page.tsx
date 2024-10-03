import Hero from "@/components/Hero";
import RecentWorks from "@/components/RecentWorks";
import TextBanner from "@/components/TextBanner";
import Services from "@/components/Services";
import Playgorund from "@/components/Playground";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import FeaturedWork from "@/components/FeaturedWork";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedWork />
      <TextBanner />
      <RecentWorks />
      <Services />
      <Playgorund />
      <Solution />
      <HowItWorks />
      <Pricing />
    </main>
  );
}
