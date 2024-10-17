"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { expertiseData } from "@/utils/data";
import Image from "next/image";

type ExpertiseItemProps = {
  id: number;
  services: string[];
  name: string;
  delay: number;
  image: string;
};

const ExpertiseItem = ({
  image,
  services,
  id,
  delay,
  name,
}: ExpertiseItemProps) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const animationProps = {
    initial: { opacity: 0, y: 20 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    transition: { duration: 0.7, ease: "easeOut", delay },
  };

  return (
    <motion.div
      key={id}
      className="flex flex-col rounded-md max-h-[600px] w-full flex-1 items-start gap-1"
      ref={ref}
      {...animationProps}
    >
      <div className="mt-auto flex flex-col justify-between">
        <h3 className="text-xl md:text-3xl text-neutral-700 font-semibold">
          {name}
        </h3>
        <div className="grid grid-cols-2 xl:grid-cols-3 items-start gap-2 mt-4 md:mt-6">
          {services.map((item) => (
            <div key={item} className="flex w-full flex-1 flex-col items-start">
              <h4 className="font-medium whitespace-nowrap text-neutral-500 text-xs md:text-sm  w-full text-center rounded-full py-2 px-4 bg-white hover:bg-[#4782ed] duration-500 hover:text-white border">
                {item}
              </h4>
            </div>
          ))}
        </div>
        <div className="h-auto rounded-lg mt-4  w-auto flex flex-1">
          <Image
            src={image}
            height={400}
            width={600}
            className="rounded-lg"
            alt={name}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

const Expertise: React.FC = () => {
  const headerRef = React.useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.6 });

  const headerAnimationProps = {
    initial: { opacity: 0, y: 20 },
    animate: isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    transition: { duration: 0.7, ease: "easeOut" },
  };

  return (
    <section
      id="services"
      className="flex flex-col w-full py-24 md:py-36 px-4 md:px-12 lg:px-20 xl:px-28"
    >
      <motion.div
        className="flex flex-col"
        ref={headerRef}
        {...headerAnimationProps}
      >
        <h3
          style={{ lineHeight: "120%" }}
          className="text-3xl font-semibold w-[24ch] md:text-5xl tracking-tight lg:text-6xl text-neutral-800"
        >
          Our Expertise
        </h3>
      </motion.div>
      <div className="flex flex-col mt-6 md:mt-10 md:flex-row gap-16 md:gap-8">
        {expertiseData.map((item, index) => (
          <ExpertiseItem
            key={item.id}
            id={item.id}
            services={item.tags}
            name={item.name}
            delay={0.1 + index * 0.1}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Expertise;
