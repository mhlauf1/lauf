"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { recentWorkData } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";

type WorkItemProps = {
  name: string;
  tags: string[];
  delay: number;
  screenshots: string[];
  link: string;
};

const WorkItem = ({ name, tags, delay, screenshots, link }: WorkItemProps) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const animationProps = {
    initial: { opacity: 0, y: 20 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    transition: { duration: 0.7, ease: "easeOut", delay },
  };

  return (
    <motion.div
      className="flex-1 w-full flex gap-6 flex-col"
      ref={ref}
      {...animationProps}
    >
      <div className="flex flex-col items-start gap-3">
        <h3 className="text-xl md:text-3xl tracking-tight font-semibold text-neutral-900">
          {name}
        </h3>
        <div className="grid grid-cols-2 md:flex flex-row gap-2 md:whitespace-nowrap w-full overflow-x-auto">
          {tags.map((tag) => (
            <span
              key={tag}
              className="font-medium text-neutral-500 text-xs md:text-sm rounded-full py-2 px-2 w-full flex-1 text-center bg-white hover:bg-[#4782ed] duration-300 hover:text-white border"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <Link target="_blank" className="relative group" href={link}>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 rounded-lg w-full ">
          <div className="w-full  rounded-lg overflow-hidden shadow-md">
            <Image
              src={screenshots[0]}
              layout="responsive"
              width={16}
              height={9}
              objectFit="cover"
              alt={`${name} screenshot 1`}
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-end p-4 justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
          <span className="text-white text-2xl font-semibold">
            Visit Live Site
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

const RecentWorks: React.FC = () => {
  const headerRef = React.useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.6 });

  const headerAnimationProps = {
    initial: { opacity: 0, y: 20 },
    animate: isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    transition: { duration: 0.7, ease: "easeOut" },
  };

  return (
    <section
      id="work"
      className="flex flex-col px-4 md:px-12 lg:px-20 xl:px-28 w-full py-24 md:py-36"
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
          Recent Projects
        </h3>
      </motion.div>
      <div className="pt-6 md:pt-12 flex flex-col gap-16 md:gap-24">
        {recentWorkData.map((item, index) => (
          <div className="w-full" key={item.id}>
            <WorkItem
              name={item.name}
              tags={item.tags}
              delay={0.1 + index * 0.1}
              screenshots={item.screenshots}
              link={item.link}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentWorks;
