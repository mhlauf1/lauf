import React from "react";
import { designData, devData, contentData } from "@/utils/data";
import Image from "next/image";

type ServiceProps = {
  title: string;
  services: any;
};

const Service = ({ title, services }: ServiceProps) => (
  <div className="flex flex-col items-start gap-1">
    <h3 className="tracking-tight  text-xl">{title}</h3>
    <div className="grid grid-cols-1 md:grid-col-2 gap-6 lg:grid-cols-3">
      {services.map((item: any) => (
        <div key={item.id} className=" gap-1 flex flex-col items-start">
          <h4 className="font-medium  text-neutral-700  text-lg mt-4">
            {item.title}
          </h4>
          <p className="text-sm text-neutral-600 leading-[150%] w-[90%]">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  </div>
);

const Services = () => {
  return (
    <section className="max-w-screen-xl relative mx-auto px-4 md:px-8 flex flex-col gap-2 md:gap-3 items-start md:items-center py-16 md:py-24 w-full">
      <Image src="/grid-hero.png" alt="Grid" fill className="opacity-[4%]" />
      <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-tight font-medium">
        Services
      </h2>
      <p className="text-lg  text-neutral-600">
        Powerful solutions, driving results.
      </p>

      <div className="flex flex-col mt-8 gap-16">
        <Service title={devData.title} services={devData.services} />
        <Service title={designData.title} services={designData.services} />
        <Service title={contentData.title} services={contentData.services} />
      </div>
    </section>
  );
};

export default Services;
