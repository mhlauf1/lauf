import RecentWorks from "@/components/RecentWorks";
import TextBanner from "@/components/TextBanner";
import Services from "@/components/Services";
import Playgorund from "@/components/Playground";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";

export default function Home() {
  return (
    <main>
      <Hero />
      <TextBanner />
      <Services />
      <RecentWorks />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <Playgorund />
      <Team />
      <CTA />
    </main>
  );
}
