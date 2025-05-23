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
      className={`flex flex-col h-full border shadow-md rounded-2xl px-6 md:px-[5%] py-12 justify-between flex-1 items-start gap-2 ${
        featured ? "bg-neutral-950" : ""
      }`}
    >
      <div className="flex flex-col  w-full gap-1 items-start">
        <h4
          className={`font-medium text-2xl md:text-3xl ${
            featured ? "text-neutral-50" : "text-neutral-800"
          } h-auto md:h-20 flex items-center`} // Added fixed height
        >
          {name}
        </h4>
        <p
          className={`w-full md:w-[30ch] text-md md:text-lg leading-[140%] ${
            featured ? "text-neutral-200" : "text-neutral-600"
          } h-auto md:h-24`} // Added fixed height
        >
          {description}
        </p>
        <div className="flex flex-col md:items-center mt-6 md:mt-0 w-full mb-2 gap-2">
          <span
            className={`text-md md:text-xl tracking-tight ${
              featured ? "text-neutral-300" : "text-neutral-700"
            }`}
          >
            Starting at
          </span>
          <h2
            className={`text-4xl md:text-5xl mt-2 font-semibold ${
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
              className={`flex flex-row items-center gap-2 md:gap-3 ${
                featured ? "text-neutral-300" : "text-neutral-600"
              }`}
            >
              <IoCheckmarkCircleOutline
                color="#4782ed"
                className="h-[18px] w-[18px] md:h-[24px] md:w-[24px]"
              />
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

  const tagRef = useRef(null);
  const isTagInView = useInView(tagRef, { once: true, amount: 0.5 });

  const spanRef = useRef(null);
  const isSpanInView = useInView(spanRef, { once: true, amount: 0.5 });

  const tagAnimationProps = {
    initial: { opacity: 0, y: 10 },
    animate: isTagInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 },
    transition: { duration: 0.7, ease: "easeOut", delay: 0.5 },
  };

  const spanAnimationProps = {
    initial: { opacity: 0, y: 10 },
    animate: isSpanInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 },
    transition: { duration: 0.7, ease: "easeOut", delay: 0.5 },
  };

  return (
    <section
      id="pricing"
      className="flex flex-col w-full py-24 md:py-36 px-4 md:px-12 lg:px-20 xl:px-28"
    >
      <motion.div
        className="flex text-center items-center flex-col"
        ref={headerRef}
        {...headerAnimationProps}
      >
        <h3
          style={{ lineHeight: "120%" }}
          className="text-3xl font-semibold md:w-[24ch] md:text-5xl tracking-tight lg:text-6xl text-neutral-800"
        >
          Pricing Tailored to Your Needs
        </h3>
        <p className="mt-4 w-[95%] md:text-lg md:w-[38ch] text-neutral-600">
          Flexible packages designed to fit your business and budget, with no
          hidden fees—just results.
        </p>
      </motion.div>
      <div className="flex mt-12 justify-start md:justify-end">
        <motion.span
          ref={tagRef}
          {...tagAnimationProps}
          className="bg-blue-100 text-[#4782ed] text-xs font-semibold px-2 py-1 rounded-md"
        >
          Designed for individuals and teams!
        </motion.span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3  mt-4 w-full gap-8 md:gap-4">
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
      <motion.div
        ref={spanRef}
        {...spanAnimationProps}
        className="flex mt-8  justify-center"
      >
        <span className="md:w-[52ch]  text-center text-neutral-600">
          For ongoing website maintenance, hosting assistance and updates, we
          provide 24/7 support for{" "}
          <span className="underline">$59.99 per month.</span>
        </span>
      </motion.div>
    </section>
  );
};

export default Pricing;
