import React from "react";

const Item = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="flex flex-col flex-1 items-center gap-2">
    <div className="rounded-md h-28 w-28 bg-neutral-300"></div>
    <h4 className="font-medium mt-3 text-xl">{title}</h4>
    <p className="text-center w-[75%] md:w-[80%] leading-[150%] text-neutral-300 text-sm">
      {description}
    </p>
  </div>
);

const Solution = () => {
  return (
    <section className="px-4 md:mx-20 md:rounded-2xl text-white bg-gradient-to-b from-neutral-900  via-neutral-800 to-neutral-700  flex flex-col gap-2 md:gap-3 items-center py-24">
      <h2 className="text-3xl lg:text-4xl w-full md:w-[20ch] text-center tracking-tight font-medium">
        The Solution:
      </h2>
      <p className="text-lg mt-2 w-[75%] md:w-full text-center text-neutral-300">
        Smart, conversion-driven websites built to grow your business.
      </p>
      <div className="flex flex-col md:flex-row px-12 mt-12 gap-16">
        <Item
          title="Crafted Just for You"
          description="Custom, innovative designs tailored to meet your business needs and goals."
        />
        <Item
          title="Future-Ready & Responsive"
          description="Seamless performance across all devices, built for growth and adaptability."
        />
        <Item
          title="Unmatched Support & Speed"
          description="Fast, reliable service with ongoing assistance to ensure long-term success."
        />
      </div>
    </section>
  );
};

export default Solution;
