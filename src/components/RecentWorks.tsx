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
  video: string;
  screenshots: string[];
  link: string;
};

const WorkItem = ({
  name,
  tags,
  delay,
  video,
  screenshots,
  link,
}: WorkItemProps) => {
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
        <div className="flex flex-row gap-1 md:gap-2 flex-wrap">
          {tags.map((tag) => (
            <span
              key={tag}
              className="font-medium text-neutral-600 text-xs md:text-lg rounded-full py-1.5 px-3 bg-white hover:bg-[#4782ed] duration-300 hover:text-white border"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <Link target="_blank" className="relative group" href={link}>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 rounded-lg w-full bg-[#F1EDEA] px-4 py-12 md:px-12 lg:py-36">
          <div className="w-full md:w-1/3  rounded-lg overflow-hidden shadow-md">
            <Image
              src={screenshots[0]}
              layout="responsive"
              width={16}
              height={9}
              objectFit="cover"
              alt={`${name} screenshot 1`}
            />
          </div>
          <div className="w-full md:w-1/3  rounded-lg overflow-hidden shadow-md">
            <video
              src={video}
              controls={false}
              autoPlay
              playsInline
              muted
              loop
              className="w-full h-full object-cover "
            />
          </div>
          <div className="w-full md:w-1/3  rounded-lg overflow-hidden shadow-md">
            <Image
              src={screenshots[1]}
              layout="responsive"
              width={16}
              height={9}
              objectFit="cover"
              alt={`${name} screenshot 2`}
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
      className="flex flex-col px-4 md:px-20 lg:px-36 w-full py-24 md:py-36"
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
      <div className="pt-12 flex flex-col gap-16 md:gap-24">
        {recentWorkData.map((item, index) => (
          <div className="w-full" key={item.id}>
            <WorkItem
              name={item.name}
              tags={item.tags}
              delay={0.1 + index * 0.1}
              video={item.video}
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
