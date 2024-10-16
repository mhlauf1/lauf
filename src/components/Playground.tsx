"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { playgroundData } from "@/utils/data";
import Image from "next/image";

type PlaygroundItemProps = {
  name: string;
  image: string;
  delay: number;
};

const PlaygroundItem = ({ name, image, delay }: PlaygroundItemProps) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const animationProps = {
    initial: { opacity: 0, y: 20 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    transition: { duration: 0.7, ease: "easeOut", delay },
  };

  return (
    <motion.div
      className="w-full flex flex-1 gap-3 flex-col"
      ref={ref}
      {...animationProps}
    >
      <h3 className="tracking-tight mt-1 text-xl md:text-3xl font-semibold md:mt-3 text-neutral-700">
        {name}
      </h3>
      <div className="h-auto rounded-lg w-full">
        <div className="h-auto w-auto p-2  flex flex-1">
          <Image
            src={image}
            height={100}
            className="rounded-lg"
            width={100}
            alt={name}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

const Playground: React.FC = () => {
  const headerRef = React.useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.6 });

  const headerAnimationProps = {
    initial: { opacity: 0, y: 20 },
    animate: isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    transition: { duration: 0.7, ease: "easeOut" },
  };

  return (
    <section className="flex flex-col w-full px-4 md:px-20 lg:px-36 py-24 md:py-32">
      <motion.div
        className="mb-6 md:mb-10"
        ref={headerRef}
        {...headerAnimationProps}
      >
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-neutral-800">
          More Works
        </h2>
        <p className="mt-2 md:text-lg w-[75%] text-neutral-600">
          Explore our creative experiments and side projects.
        </p>
      </motion.div>
      <div className="px-0 w-full flex-1 flex flex-col md:flex-row items-row gap-6 md:gap-3">
        {playgroundData.map((item, index) => (
          <div className="w-full" key={item.id}>
            <PlaygroundItem
              image={item.image}
              name={item.title}
              delay={0.1 + index * 0.1}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Playground;
