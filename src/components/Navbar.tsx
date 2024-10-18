"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Navbar as LaufNav,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import useIsDesktop from "@/hooks/useIsDesktop"; // Adjust the path based on your project structure

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDesktop = useIsDesktop(); // Determine if the screen is desktop size

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <LaufNav className="bg-white w-full z-20" shouldHideOnScroll={isDesktop}>
      <div className=" px-4 md:px-20 lg:px-28 flex w-full justify-between items-center py-6">
        {/* Left side: Logo and Links */}
        <div className="flex flex-1 items-center gap-8">
          <NavbarBrand className="flex gap-6 items-center">
            <Link href="/">
              <motion.div
                className="h-auto w-[56px]"
                whileHover={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Image
                  src="/black-text.png"
                  alt="Brady Digital Consulting Logo"
                  layout="responsive"
                  width={56}
                  height={40}
                  objectFit="cover"
                />
              </motion.div>
            </Link>
          </NavbarBrand>
        </div>
        <NavbarContent className="hidden md:flex flex-1 justify-center text-neutral-500 gap-8">
          <NavbarItem>
            <Link
              color="foreground"
              className="hover:text-neutral-900 duration-300"
              href="#work"
            >
              Projects
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              className="hover:text-neutral-900 duration-300"
              href="#how-it-works"
            >
              How It Works
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              className="hover:text-neutral-900 duration-300"
              href="#pricing"
            >
              Pricing
            </Link>
          </NavbarItem>
        </NavbarContent>
        {/* Right side: CTA Button */}
        <div className="hidden md:flex flex-row justify-end flex-1 items-center gap-4">
          <p className="bg-neutral-50 hover:bg-neutral-100 bg-text-neutral-950 duration-300 font-semibold  rounded-full py-3 px-4 text-sm  text-neutral-800">
            <a href="mailto:michael@lauf.co">michael@lauf.co</a>
          </p>
        </div>
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden z-50 flex items-center text-neutral-900"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            ></path>
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 bg-white z-20 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <ul className="flex flex-col items-center mt-[10vh] bg-neutral-50 h-auto mx-8 py-12 rounded-md text-neutral-900 text-lg space-y-6">
            <li>
              <Link
                className="hover:text-neutral-500 transition"
                onClick={toggleMenu}
                href="#work"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-neutral-500 transition"
                onClick={toggleMenu}
                href="#how-it-works"
              >
                How It Works
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-neutral-500 transition"
                onClick={toggleMenu}
                href="#pricing"
              >
                Pricing
              </Link>
            </li>
            <p>
              <a className="text-neutral-500" href="mailto:michael@lauf.co">
                michael@lauf.co
              </a>
            </p>
            <li>
              <a
                href="https://www.honeybook.com/widget/lauf_283541/cf_id/6703e04b7b400700392b6ee8"
                target="_blank"
              >
                <button className="bg-[#4782ed] hover:bg-[#5a91f5] mt-4 duration-300 flex items-center gap-4 font-semibold rounded-full py-4 px-8 text-white">
                  Get in touch
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </LaufNav>
  );
}
