import Hero from "@/components/Hero";
import RecentWorks from "@/components/RecentWorks";
import TextBanner from "@/components/TextBanner";
import Services from "@/components/Services";
import Playgorund from "@/components/Playground";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <main>
      <Hero />
      <RecentWorks />
      <TextBanner />
      <Services />
      <Playgorund />
      <div className="relative">
        <Problem />
        <div className="relative z-10">
          <Solution />
        </div>
      </div>
      <HowItWorks />
      <Pricing />
    </main>
  );
}
