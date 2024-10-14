import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-row items-center justify-between w-full py-16 px-4 md:px-20 lg:px-36">
      <div className="flex flex-1">
        <div className="h-auto w-[56px]">
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

      <ul className="flex flex-1 justify-center items-center gap-6">
        <li>
          <Link href="#work">Work</Link>
        </li>
        <li>
          <Link href="#services">Services</Link>
        </li>
        <li>
          <Link href="#how-it-works">How it works</Link>
        </li>
        <li>
          <Link href="#pricng">Pricing</Link>
        </li>
      </ul>
      <div className="flex justify-end flex-1">
        <p>@Lauf Co. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
