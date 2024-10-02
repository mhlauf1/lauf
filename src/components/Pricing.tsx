"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const PricingTier = ({ title, price, features, isPopular }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`flex flex-col items-stretch bg-white border border-neutral-200 rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${
        isPopular ? "md:-mt-4 md:mb-4" : ""
      } ${isHovered ? "transform md:scale-105" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {isPopular && (
        <div className="bg-neutral-800 text-white w-full py-3 text-center text-sm font-semibold uppercase tracking-wider">
          Most Popular
        </div>
      )}
      <div
        className={`px-8 ${
          isPopular ? "py-12" : "py-16"
        }  flex flex-col items-center flex-grow w-full`}
      >
        <h3 className="text-2xl tracking-tight text-neutral-800 font-medium mb-6">
          {title}
        </h3>
        <div className="text-5xl font-semibold  text-neutral-800 tracking-tight mb-8">
          ${price}
        </div>
        <ul className="text-left w-full mb-8 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center mb-4">
              <svg
                className="w-5 h-5 mr-3 text-neutral-700"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-neutral-700 text-lg">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full p-8 ">
        <button
          className={`w-full py-4 px-6 rounded-xl font-medium text-lg transition-colors duration-200 ${
            isPopular
              ? "bg-neutral-800 text-white hover:bg-neutral-800"
              : "bg-white border border-neutral-800 text-neutral-800 hover:bg-neutral-100"
          }`}
        >
          Secure your Oct Spot
        </button>
      </div>
    </motion.div>
  );
};

const Pricing = () => {
  const pricingOptions = [
    {
      title: "Just Design",
      price: 1500,
      features: [
        "Custom Website Design",
        "Responsive Layout",
        "5 Design Revisions",
        "Design Files Included",
        "SEO-Friendly Structure",
      ],
      isPopular: false,
    },
    {
      title: "Design & Development",
      price: 3000,
      features: [
        "Everything in Just Design",
        "Frontend Development",
        "CMS Integration",
        "Basic SEO Optimization",
        "1 Month of Support",
      ],
      isPopular: true,
    },
    {
      title: "Full Stack Solution",
      price: 5000,
      features: [
        "Everything in Design & Development",
        "Backend Development",
        "Database Integration",
        "User Authentication",
        "Custom Forms & CRUD Operations",
        "3 Months of Support",
      ],
      isPopular: false,
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white  flex flex-col items-center via-gray-100 to-white py-24 px-4 md:px-20">
      <Image src="/grid-hero.png" alt="Grid" fill className="opacity-[4%]" />

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
