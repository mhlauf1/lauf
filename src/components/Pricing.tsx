"use client";
import React from "react";
import { TrendingUp, Rocket, Users, ShieldCheck } from "lucide-react";

// --- Data for the "Why Lauf" section ---
// This array holds the content for each feature card, making it easy to manage.
const whyLaufData = [
  {
    id: 1,
    icon: <TrendingUp className="h-8 w-8 text-blue-500" />,
    title: "Strategic Design for Growth",
    description:
      "We don't just build websites; we design experiences. Our focus is on creating intuitive, engaging platforms that convert visitors into loyal customers.",
  },
  {
    id: 2,
    icon: <Rocket className="h-8 w-8 text-blue-500" />,
    title: "Agency Quality, Startup Speed",
    description:
      "Get top-tier design and development without the agency bloat. We operate with the agility and speed that modern startups require to stay ahead.",
  },
  {
    id: 3,
    icon: <Users className="h-8 w-8 text-blue-500" />,
    title: "Your Embedded Partner",
    description:
      "We integrate directly with your team, aligning with your goals and pace. It's like having a dedicated in-house team with the flexibility of an external partner.",
  },
  {
    id: 4,
    icon: <ShieldCheck className="h-8 w-8 text-blue-500" />,
    title: "Smarter Than Hiring",
    description:
      "Access a full suite of design and development experts without the overhead, salaries, or benefits of a full-time hire. Scale up or down as you need.",
  },
];

// --- Feature Card Component ---
// This component renders an individual feature card.
const FeatureCard = ({ icon, title, description }) => (
  <div className="flex flex-col gap-3 rounded-md border border-neutral-200 bg-white p-6 ">
    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
      {icon}
    </div>
    <h3 className="text-lg tracking-tighter text-neutral-900">{title}</h3>
    <p className="text-neutral-600 ">{description}</p>
  </div>
);

// --- Main 'WhyLauf' Section Component ---
const WhyLauf = () => {
  return (
    <section className="w-full py-24 md:py-32">
      <div className=" px-4 md:px-12">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-start">
          {/* Left Column: Section Header */}
          <div className="flex flex-col items-start text-left">
            <h2
              style={{ lineHeight: "120%" }}
              className="text-xl md:text-xl tracking-tight text-neutral-900"
            >
              Why founders choose Lauf
            </h2>

            <p className="mt-4 w-[95%] md:w-[42ch] text-neutral-600">
              Early-stage startups need a development partner who understands
              the web deeply. At Lauf, we help you build software that looks
              great and works even better.
            </p>
          </div>

          {/* Right Column: Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whyLaufData.map((feature) => (
              <FeatureCard
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyLauf;
