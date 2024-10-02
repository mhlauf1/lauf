"use client";
import React from "react";
import Image from "next/image";
import { pricingData } from "@/utils/data";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

interface PricingOption {
  name: string;
  price: number;
  description: string;
  tags: string[];
}

const PricingTier: React.FC<PricingOption> = ({
  name,
  price,
  tags,
  description,
}) => {
  return (
    <div className="flex py-16 md:py-24 flex-col h-full justify-between flex-1 items-start gap-2">
      <div className="flex flex-col w-full gap-2 items-start">
        <div className="rounded-full h-16 w-16 bg-neutral-300"></div>
        <h4 className="font-medium text-neutral-800 mt-3 text-3xl">{name}</h4>
        <p className="w-[100%] text-lg leading-[150%] text-neutral-600">
          {description}
        </p>
        <p className="text-sm  mt-6">
          <span className="text-2xl text-neutral-700 tracking-tight">
            Starting at ${price}
          </span>
        </p>
        <div className="h-[1px] w-full bg-neutral-200 my-3"></div>
        <p className="text-neutral-600 mb-3">Includes:</p>
        <div className="flex flex-col gap-4 items-start">
          {tags.map((item) => (
            <div
              key={item}
              className="flex flex-row text-neutral-600 items-center gap-3"
            >
              <IoCheckmarkCircleOutline color="#4FAC14" size={24} />
              <p className="text-xl">{item}</p>
            </div>
          ))}
        </div>
      </div>
      <button className="w-full mt-12 border py-4 rounded-lg  bg-gradient-to-b from-white   to-neutral-50  border-neutral-200">
        Secure your Oct Spot
      </button>
    </div>
  );
};

const Pricing: React.FC = () => {
  return (
    <section className="relative  flex flex-col items-center bg-gradient-to-b from-white  via-slate-100 to-white   py-24 px-4 md:px-20">
      <Image
        src="/grid-hero.png"
        alt="Grid"
        fill
        className="opacity-[4%] -z-10"
      />

      <h2 className="text-3xl lg:text-4xl  w-full md:w-[20ch] text-center tracking-tight font-medium mb-6">
        Pricing Tailored to Your Needs
      </h2>
      <p className="text-xl text-center text-neutral-600 mb-12 md:mb-16 md:w-[42ch] mx-auto">
        Flexible packages designed to fit your business and budget, with no
        hidden fees—just results.
      </p>
      <div className="grid border px-8 md:px-20 border-neutral-200 rounded-2xl bg-gradient-to-b from-white  via-slate-50 to-white shadow-md grid-cols-1 md:grid-cols-3  w-full gap-8 md:gap-8">
        {pricingData.map((option) => (
          <div key={option.id}>
            <PricingTier
              name={option.name}
              price={option.price}
              description={option.description}
              tags={option.tags}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
