import React from "react";
import Image from "next/image";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { TbAutomaticGearbox } from "react-icons/tb";
import { MdLockOutline } from "react-icons/md";

const Credibility = () => {
  return (
    <section className="bg-neutral-950 px-4 md:px-[6%]">
      <div className="flex  flex-col-reverse items-center gap-12 py-24 md:py-36 md:flex-row md:gap-16">
        {/* Left / Image */}
        <div className="w-full md:w-1/2">
          <div className="relative aspect-[4/3] md:aspect-[3/3] overflow-hidden">
            <Image
              src="/trail.png"
              alt="Trail"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority={false}
            />
          </div>
        </div>

        {/* Right / Text */}
        <div className="flex w-full flex-col items-start md:w-1/2">
          <span className="uppercase text-neutral-100 font-mono tracking-widest text-sm">
            Instant Credibility Online
          </span>

          <h2
            style={{ lineHeight: 1.15 }}
            className="mt-4 capitalize text-4xl sm:text-5xl md:text-6xl text-white tracking-tight md:max-w-[23ch]"
          >
            Build trust from the start.
          </h2>

          <div className="mt-6 md:mt-10 flex w-full flex-col divide-y divide-dashed divide-neutral-600">
            <div className="flex flex-row gap-4 py-4 md:py-6 items-center md:items-start">
              <BsFillLightningChargeFill
                className="shrink-0 text-white"
                size={24}
              />
              <p className="text-neutral-300 text-lg md:text-xl">
                <span className="text-white font-medium">Fast & Reliable.</span>{" "}
                Sites that load instantly and run without friction
              </p>
            </div>
          </div>
          <div className=" flex w-full flex-col divide-y divide-dashed divide-neutral-600">
            <div className="flex flex-row gap-4 py-4 md:py-6 items-center md:items-start">
              <TbAutomaticGearbox className="shrink-0 text-white" size={24} />
              <p className="text-neutral-300 text-lg md:text-xl">
                <span className="text-white font-medium">
                  Automated Workflows.{" "}
                </span>{" "}
                Integrations that remove bottlenecks and save hours
              </p>
            </div>
          </div>
          <div className=" flex w-full flex-col divide-y divide-dashed divide-neutral-600">
            <div className="flex flex-row gap-4 py-4 md:py-6 items-center md:items-start">
              <MdLockOutline className="shrink-0 text-white" size={24} />
              <p className="text-neutral-300 text-lg md:text-xl">
                <span className="text-white font-medium">
                  Secure by Design.
                </span>{" "}
                Enterprise-grade security you can trust
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credibility;
