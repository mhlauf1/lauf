"use client";
import React, { useRef } from "react";
import { pricingData } from "@/utils/data";
import { motion, useInView } from "framer-motion";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

interface PricingOption {
  name: string;
  price: number;
  description: string;
  tags: string[];
  featured: boolean;
}

const PricingTier: React.FC<PricingOption & { delay: number }> = ({
  name,
  price,
  tags,
  description,
  featured,
  delay,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const animationProps = {
    initial: { opacity: 0, y: 20 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    transition: { duration: 0.7, ease: "easeOut", delay },
  };

  return (
    <motion.div
      ref={ref}
      {...animationProps}
      whileHover={{ scale: 1.01, opacity: 1 }}
      className={`flex flex-col h-full border shadow-md rounded-2xl px-8 py-12 justify-between flex-1 items-start gap-2 ${
        featured ? "bg-neutral-950" : ""
      }`}
    >
      <div className="flex flex-col mt-8 md:mt-16 w-full gap-2 items-start">
        <h4
          className={`font-medium text-3xl md:text-4xl ${
            featured ? "text-neutral-50" : "text-neutral-800"
          }`}
        >
          {name}
        </h4>
        <p
          className={`w-[30ch] text-md md:text-lg mt-2 leading-[140%] ${
            featured ? "text-neutral-200" : "text-neutral-600"
          }`}
        >
          {description}
        </p>
        <div className="flex flex-col md:items-center w-full my-8 md:my-10 gap-2">
          <span
            className={`text-md md:text-xl tracking-tight ${
              featured ? "text-neutral-300" : "text-neutral-700"
            }`}
          >
            Starting at
          </span>
          <h2
            className={`text-4xl md:text-6xl mt-2 font-semibold ${
              featured ? "text-neutral-200" : ""
            }`}
          >
            ${price}
          </h2>
        </div>
        <p
          className={`text-sm md:text-md mb-2 md:mb-4 ${
            featured ? "text-neutral-300" : "text-neutral-600"
          }`}
        >
          Includes:
        </p>
        <div className="flex flex-col gap-6 items-start">
          {tags.map((item) => (
            <div
              key={item}
              className={`flex flex-row items-center gap-3 ${
                featured ? "text-neutral-300" : "text-neutral-600"
              }`}
            >
              <IoCheckmarkCircleOutline color="#4782ed" size={24} />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Pricing: React.FC = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.5 });

  const headerAnimationProps = {
    initial: { opacity: 0, y: 20 },
    animate: isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    transition: { duration: 0.7, ease: "easeOut" },
  };

  return (
    <section
      id="pricing"
      className="flex flex-col w-full py-24 md:py-36 px-4 md:px-20 lg:px-36"
    >
      <motion.div
        className="flex text-center items-center flex-col"
        ref={headerRef}
        {...headerAnimationProps}
      >
        <h3
          style={{ lineHeight: "120%" }}
          className="text-3xl font-semibold w-[24ch] md:text-5xl tracking-tight lg:text-6xl text-neutral-800"
        >
          Pricing Tailored to Your Needs
        </h3>
        <p className="mt-4 text-lg w-[38ch] text-neutral-600">
          Flexible packages designed to fit your business and budget, with no
          hidden fees—just results.
        </p>
      </motion.div>
      <div className="flex flex-col md:flex-row mt-16 w-full gap-8 md:gap-4">
        {pricingData.map((option, index) => (
          <div className="flex flex-1" key={option.id}>
            <PricingTier
              name={option.name}
              price={option.price}
              description={option.description}
              tags={option.tags}
              featured={option.featured}
              delay={0.1 + index * 0.1}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
