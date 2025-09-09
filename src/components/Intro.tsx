import React from "react";
import Image from "next/image";

const Intro = () => {
  return (
    <section className="flex flex-col md:px-[6%] py-16 md:py-24 mx-4">
      <h2
        style={{ lineHeight: 1.15 }}
        className="text-4xl md:text-7xl lg:text-[84px] tracking-tight text-neutral-900"
      >
        Lauf partners with financial companies and founders to design and
        develop websites that build credibility and confidence online.
      </h2>

      <span className="uppercase font-medium mt-16  tracking-widest text-xs font-mono">
        Trusted by leading companies
      </span>
      <div className="border-b border-dashed  pb-12 md:pb-16 border-neutral-400  gap-8 md:gap-16 mt-8 flex overflow-hidden flex-row w-full md:items-center">
        <div className="relative w-[110px] h-[28px] ">
          <Image
            src="/brady-hero.svg"
            className=" h-auto w-auto flex "
            fill
            alt="Hero Client Logo"
          />
        </div>
        <div className="relative  w-[129px] h-[28px] ">
          <Image
            src="/cadence-hero.svg"
            className=" h-auto w-auto flex "
            fill
            alt="Hero Client Logo"
          />
        </div>
        <div className="relative  w-[216px] h-[20px] ">
          <Image
            src="/stoc-hero.svg"
            className=" h-auto w-auto flex "
            fill
            alt="Hero Client Logo"
          />
        </div>
        <div className="relative  w-[90px] h-[29px] ">
          <Image
            src="/embark-hero.svg"
            className=" h-auto w-auto flex "
            fill
            alt="Hero Client Logo"
          />
        </div>
      </div>
      <div className="pt-16 flex flex-col md:gap-10 items-center md:flex-row">
        <div className="flex md:w-1/2 flex-col item-start">
          <span className="uppercase font-mono tracking-widest text-xs">
            Win more deals
          </span>
          <h2
            style={{ lineHeight: 1.15 }}
            className="text-4xl sm:text-5xl tracking-tight md:text-6xl capitalize mt-4 md:max-w-[25ch]"
          >
            Turn interest into action, bringing the right opportunities your
            way.
          </h2>
          <div className="flex flex-col md:max-w-xl border-l pl-4 md:pl-6 border-dashed border-neutral-500 py-2 mt-6 mb-12 md:mb-0 md:mt-16 gap-6 md:gap-8">
            <p className=" text-neutral-600 text-lg md:text-xl">
              &quot;The personal attention, availability, and attention to
              detail made this a great all-around experience. We highly
              recommend Lauf for any website design or development
              services.&quot;
            </p>
            <div className="flex flex-row  justify-between items-end">
              <div className="flex flex-col gap-2">
                <span className="text-lg md:text-xl">Peter Mark</span>
                <span className="uppercase font-mono tracking-widest text-xs">
                  Cadence Private Capital
                </span>
              </div>
              <div className="relative  w-[115px] h-[28px] ">
                <Image
                  src="/cadence-hero.svg"
                  className=" h-auto w-auto flex "
                  fill
                  alt="Hero Client Logo"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-end">
          <Image
            src="/desk.png"
            alt="Desk"
            height={750}
            width={550}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
