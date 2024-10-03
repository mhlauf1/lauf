import React from "react";
import { designData, devData, contentData } from "@/utils/data";
import Image from "next/image";

type ServiceProps = {
  title: string;
  services: ServiceDataProps[];
};

type ServiceDataProps = {
  id: number;
  title: string;
};

const Service = ({ title, services }: ServiceProps) => (
  <div className="flex flex-col items-start gap-1">
    <h3 className="font-semibold text-3xl">{title}</h3>
    <div className="flex flex-col items-start gap-2 mt-4">
      {services.map((item) => (
        <div key={item.id} className="flex flex-col items-start">
          <h4 className="font-semibold text-neutral-700  text-2xl">
            {item.title}
          </h4>
        </div>
      ))}
    </div>
  </div>
);

const Services = () => {
  return (
    <section className="flex h-auto flex-col md:flex-row rounded-xl bg-[#F1EDEA] gap-2 md:gap-3 mx-4 md:mx-20 px-4 md:px-20 lg:px-36 lg:mx-36 items-start py-16 md:py-24">
      <div className="flex flex-1 flex-col">
        <h2 className="text-3xl  lg:text-4xl  font-semibold">
          What we help with
        </h2>
        <div className="flex flex-col mt-16 gap-16">
          <Service title={devData.title} services={devData.services} />
          <Service title={designData.title} services={designData.services} />
          <Service title={contentData.title} services={contentData.services} />
        </div>
      </div>
      <div className="flex items-center justify-center w-full mt-12 md:mt-0 flex-1">
        <div className="w-full h-[300px] md:h-[400px] rounded-lg bg-white"></div>
      </div>
    </section>
  );
};

export default Services;
