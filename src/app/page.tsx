import RecentWorks from "@/components/RecentWorks";
import TextBanner from "@/components/TextBanner";
import Expertise from "@/components/Expertise";
import MoreWorks from "@/components/MoreWorks";
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
      <Expertise />
      <RecentWorks />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <MoreWorks />
      <Team />
      <CTA />
    </main>
  );
}
