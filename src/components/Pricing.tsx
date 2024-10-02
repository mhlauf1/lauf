"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Feature {
  text: string;
}

interface PricingOption {
  title: string;
  price: number;
  features: Feature[];
}

const PricingTier: React.FC<PricingOption> = ({ title, price, features }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col">
      <h3 className="text-lg tracking-tight mb-8">{title}</h3>
      <div className="text-sm text-gray-500 mb-2">Starting at</div>
      <div className="text-4xl font-medium tracking-tight mb-8">${price}</div>
      <ul className="flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center mb-2">
            <svg
              className="w-4 h-4 mr-2 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-neutral-700">{feature.text}</span>
          </li>
        ))}
      </ul>
      <button
        className={` w-full py-4 px-4 rounded-lg mt-4 ${
          title === "Pro"
            ? "bg-black text-white"
            : "bg-white border border-black text-black"
        }`}
      >
        Secure your Oct Spot
      </button>
    </div>
  );
};

const Pricing: React.FC = () => {
  const pricingOptions: PricingOption[] = [
    {
      title: "Design",
      price: 1000,
      features: [
        { text: "Custom Website Design" },
        { text: "Responsive Layout" },
        { text: "5 Design Revisions" },
        { text: "Design Files Included" },
        { text: "SEO-Friendly Structure" },
      ],
    },
    {
      title: "Design & Development",
      price: 3000,
      features: [
        { text: "Everything in Just Design" },
        { text: "Frontend Development" },
        { text: "CMS Integration" },
        { text: "Basic SEO Optimization" },
        { text: "1 Month of Support" },
      ],
    },
    {
      title: "Full Stack Solution",
      price: 5000,
      features: [
        { text: "Everything in Design & Development" },
        { text: "Backend Development" },
        { text: "Database Integration" },
        { text: "User Authentication" },
        { text: "Custom Forms & CRUD Operations" },
        { text: "3 Months of Support" },
      ],
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white  flex flex-col items-center via-gray-100 to-white py-24 px-4 md:px-20">
      <Image
        src="/grid-hero.png"
        alt="Grid"
        fill
        className="opacity-[4%] -z-1"
      />

      <h2 className="text-3xl lg:text-4xl  w-full md:w-[20ch] text-center tracking-tight font-medium mb-6">
        Pricing Tailored to Your Needs
      </h2>
      <p className="text-xl text-center text-neutral-600 mb-16 md:w-[42ch] mx-auto">
        Flexible packages designed to fit your business and budget, with no
        hidden fees—just results.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-8 w-full gap-8 md:gap-4">
        {pricingOptions.map((option, index) => (
          <PricingTier key={index} {...option} />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
