import RecentWorks from "@/components/RecentWorks";
import TextBanner from "@/components/TextBanner";
import Services from "@/components/Services";
import Playgorund from "@/components/Playground";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main>
      <TextBanner />
      <RecentWorks />
      <Services />
      <Playgorund />
      <HowItWorks />
      <Pricing />
      <CTA />
    </main>
  );
}
