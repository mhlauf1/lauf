import React from "react";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex md:flex-row flex-col-reverse gap-4 md:gap-8 items-start md:items-center justify-between w-full py-8 md:py-12 px-4 md:px-[6%]">
      <div className="md:hidden flex justify-center flex-1">
        <h2 className="font-black uppercase text-base text-black tracking-tight">
          Lauf
        </h2>
      </div>
      <div className="flex flex-1">
        <p className="text-sm text-neutral-500">
          © Lauf 2025. All rights reserved
        </p>
      </div>
      <Link
        target="_blank"
        className="text-sm md:hidden flex text-neutral-500"
        href="https://www.freeprivacypolicy.com/live/cccd5a99-7062-45b2-ad92-67711ce00348"
      >
        <p>Privacy Policy</p>
      </Link>
      <div className="hidden md:flex justify-center flex-1">
        <h2 className="font-medium text-lg text-black tracking-tight">Lauf</h2>
      </div>
      <div className="flex  text-neutral-800 justify-end flex-1">
        <div className="flex flex-row items-center gap-3 md:gap-4">
          <Link
            target="_blank"
            className="text-sm hidden md:flex text-neutral-500"
            href="https://www.freeprivacypolicy.com/live/cccd5a99-7062-45b2-ad92-67711ce00348"
          >
            <p>Privacy Policy</p>
          </Link>
          <Link target="_blank" href="https://www.linkedin.com/company/laufco/">
            <FaLinkedin size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
