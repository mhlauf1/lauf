"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { testimonialData } from "@/utils/data";

type TestimonialPersonProps = {
  image: string;
  name: string;
  position: string;
};

type TestimonialProps = {
  url: string;
  quote: string;
  client: TestimonialPersonProps;
  logo: string;
  delay: number;
};

const Testimonial = ({ url, quote, client, logo, delay }: TestimonialProps) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const animationProps = {
    initial: { opacity: 0, y: 20 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    transition: { duration: 0.7, ease: "easeOut", delay },
  };

  return (
    <motion.div
      ref={ref}
      {...animationProps}
      className="mt-6 md:mt-12 rounded-xl px-4 md:px-16 bg-[#FBF9F7] py-12"
    >
      <div>
        <Link
          target="_blank"
          className="border rounded-full px-4 py-3"
          href={url}
        >
          Visit the site
        </Link>
      </div>
      <div className="mt-24">
        <h3
          style={{ lineHeight: "130%" }}
          className="text-xl md:text-2xl md:w-[95%] text-neutral-700 lg:text-4xl font-medium"
        >
          &ldquo;{quote}&ldquo;
        </h3>
      </div>
      <div className="h-[1px] bg-black/10 w-full mt-12"></div>
      <div className="flex md:flex-row flex-col mt-12 justify-between items-start gap-10 md:items-center">
        <div className="flex items-center gap-4 md:gap-8">
          <div className="h-[80px] md:h-[100px] relative w-[80px] md:w-[100px]">
            <Image
              src={client.image}
              fill
              className="rounded-xl"
              alt={client.name}
            />
          </div>
          <div className="flex flex-col items-start">
            <h4 className="text-lg md:text-xl font-semibold">{client.name}</h4>
            <p className="text-neutral-600">{client.position}</p>
          </div>
        </div>
        <div className="h-[28px] relative w-[114px] md:h-[36px]  md:w-[140px]">
          <Image src={logo} fill alt="Company Logo" />
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const headerRef = React.useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.6 });

  const headerAnimationProps = {
    initial: { opacity: 0, y: 20 },
    animate: isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    transition: { duration: 0.7, ease: "easeOut" },
  };

  return (
    <section className="flex flex-col px-4 md:px-12 lg:px-20 xl:px-28 my-24 md:my-36">
      <motion.h3
        ref={headerRef}
        {...headerAnimationProps}
        style={{ lineHeight: "120%" }}
        className="text-3xl font-semibold w-[24ch] md:text-5xl tracking-tight lg:text-6xl text-neutral-800"
      >
        Testimonials
      </motion.h3>
      <div className="flex flex-col gap-4">
        {testimonialData.map((item, index) => (
          <Testimonial
            key={item.id}
            url={item.url}
            quote={item.quote}
            client={item.client}
            logo={item.logo}
            delay={0.1 + index * 0.1}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
