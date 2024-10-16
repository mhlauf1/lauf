"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { teamData } from "@/utils/data";

type MemberProps = {
  image: string;
  name: string;
  position: string;
  delay: number;
};

const Member = ({ image, name, position, delay }: MemberProps) => {
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
      className="flex w-full flex-col flex-1"
    >
      <div className="flex flex-col relative flex-1  w-auto">
        <Image
          width={100}
          className="rounded-xl flex max-h-[500px] object-cover flex-1"
          height={100}
          layout="responsive"
          objectFit="cover"
          src={image}
          alt={name}
        />
        <div className="flex mt-4 flex-col">
          <h3 className="text-xl text-neutral-900 font-medium">{name}</h3>
          <p className="text-neutral-600">{position}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Team = () => {
  const headerRef = useRef(null);
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
          Meet The Team
        </h2>
      </motion.div>
      <div className="mt-6 flex flex-col md:flex-row gap-12 items-start">
        {teamData.map((item, index) => (
          <Member
            key={item.id}
            image={item.image}
            name={item.name}
            position={item.position}
            delay={0.1 + index * 0.1}
          />
        ))}
      </div>
    </section>
  );
};

export default Team;
