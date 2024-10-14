"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { serviceData } from "@/utils/data";
import Image from "next/image";

type ServiceProps = {
  id: number;
  services: string[];
  name: string;
  delay: number;
  image: string;
};

const Service = ({ image, services, id, delay, name }: ServiceProps) => {
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
      className="flex flex-col rounded-md h-[600px] w-full flex-1 items-start gap-1"
      ref={ref}
      {...animationProps}
    >
      <div className="mt-auto p-6">
        <h3 className="text-3xl font-semibold">{name}</h3>
        <div className="flex flex-wrap gap-1 md:gap-2 mt-4">
          {services.map((item) => (
            <div key={item} className="flex flex-col items-start">
              <h4 className="font-medium text-neutral-600 text-sm md:text-lg rounded-full py-2 px-4 bg-white hover:bg-[#4782ed] duration-500 hover:text-white border">
                {item}
              </h4>
            </div>
          ))}
        </div>
        <div className="h-auto w-auto flex flex-1">
          <Image
            src={image}
            height={400}
            width={600}
            alt={name}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

const Services: React.FC = () => {
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
      className="flex flex-col w-full py-24 md:py-36 px-4 md:px-20 lg:px-36"
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
          Services
        </h3>
        <p className="mt-1 md:mt-2 text-lg text-neutral-600">
          What we help with.
        </p>
      </motion.div>
      <div className="flex flex-col mt-6 md:mt-12 md:flex-row gap-16 md:gap-4">
        {serviceData.map((item, index) => (
          <Service
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

export default Services;
