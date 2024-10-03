import React from "react";

const TextBanner = () => {
  return (
    <div className="py-36 flex px-4 md:px-20 lg:px-36">
      <p
        style={{ lineHeight: "130%" }}
        className="text-3xl md:text-4xl lg:text-5xl text-neutral-500 tracking-tighter md:tracking-normal font-semibold md:w-[50ch]"
      >
        <span className="text-neutral-900">
          We create websites with modern, effective design and smart
          functionality,
        </span>{" "}
        focused on solving your challenges and streamlining operations, so you
        can run things more efficiently.
      </p>
    </div>
  );
};

export default TextBanner;
