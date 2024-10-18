import React from "react";
import Image from "next/image";
import { FaDribbble, FaLinkedin, FaTwitter } from "react-icons/fa";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex md:flex-row flex-col-reverse gap-8 items-center justify-between w-full py-12 px-4 md:px-20 lg:px-36">
      <div className="flex flex-1">
        <p className="text-sm text-neutral-500">
          © Lauf Co. All rights reserved
        </p>
      </div>
      <div className="flex justify-center flex-1">
        <div className="h-auto w-[48px] md:w-[56px]">
          <Image
            src="/black-text.png"
            alt="Brady Digital Consulting Logo"
            layout="responsive"
            width={56}
            height={40}
            objectFit="cover"
          />
        </div>
      </div>
      <div className="flex  text-neutral-800 justify-end flex-1">
        <div className="flex flex-row items-center gap-3 md:gap-4">
          <Link target="_blank" href="https://www.linkedin.com/company/laufco/">
            <FaLinkedin size={24} />
          </Link>
          <Link target="_blank" href="https://dribbble.com/laufco">
            <FaDribbble size={24} />
          </Link>
          <Link href="/">
            <FaTwitter size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
