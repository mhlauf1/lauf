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
    <p className="text-center w-[75%] md:w-[80%] leading-[150%] text-neutral-600 text-sm">
      {description}
    </p>
  </div>
);

const Problem = () => {
  return (
    <section className="md:max-w-screen-xl mx-auto px-4 md:px-8 flex flex-col gap-2 md:gap-3  items-center py-24 md:py-36 w-full">
      <h2 className="text-3xl hidden md:block lg:text-4xl  w-full md:w-[20ch] text-center tracking-tight font-medium">
        Tired of Wasting Time Getting Your Business Online?
      </h2>
      <h2 className="text-3xl block md:hidden lg:text-4xl  w-full md:w-[20ch] text-center tracking-tight font-medium">
        Tired of Wasting Time <br /> Getting Your Business Online?
      </h2>
      <p className="text-lg mt-2 w-[75%] md:w-full text-center text-neutral-600">
        Discover why typical solutions hold your business back.
      </p>
      <div className="flex flex-col md:flex-row mt-16 gap-16">
        <Item
          title="Stuck in the Template Trap"
          description="Generic, cookie-cutter designs that fail to capture attention or reflect your brand."
        />
        <Item
          title="Frustrating User Experience"
          description="Poor navigation and usability leave users confused and disengaged."
        />
        <Item
          title="Doesn’t Work as Intended"
          description="Outdated, rigid websites limit functionality and hurt your business growth."
        />
      </div>
    </section>
  );
};

export default Problem;
