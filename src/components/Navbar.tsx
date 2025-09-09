"use client";

import { useState } from "react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { text: "Case Studies", link: "/case-studies" },
    { text: "About", link: "/about" },
    { text: "Testimonials", link: "/testimonials" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 px-4 md:px-6 z-30 h-16 w-full border-b border-neutral-300 bg-[#f8f9fd] ">
      <nav className="h-full w-full flex items-center justify-between ">
        <div className="flex gap-2 md:gap-4 items-center">
          {/* Brand wordmark (inside the rule) */}
          <Link href="/" className="block">
            <h2 className="font-medium  text-xl text-black tracking-tight">
              Lauf
            </h2>
          </Link>
          <div className="h-[16px] md:w-[1px] bg-neutral-400"></div>
          <span className="hidden md:block text-sm text-neutral-600">
            Working with PE, VC, Advisory Firms & Founders
          </span>
        </div>
        <div className="flex items-center gap-6 md:gap-8">
          <Link
            href="/contact"
            className="inline-flex gap-2 items-center bg-neutral-900 border border-neutral-700 hover:border-neutral-500 transition-colors px-5 py-2 text-white rounded-full"
          >
            Hire us
            <MdArrowOutward size={20} />
          </Link>
        </div>
      </nav>

      {/* Mobile Drawer + Backdrop */}
      <div
        className={`md:hidden fixed inset-0 z-50 ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
        <aside
          className={`absolute right-0 top-0 h-full w-72 max-w-[80vw] bg-white shadow-xl transition-transform duration-300 will-change-transform ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
        >
          <div className="flex items-center justify-between px-4 py-4 border-b border-neutral-100">
            <span className=" tracking-tight text-black text-xl">Lauf</span>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 hover:bg-neutral-100"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <ul className="flex flex-col px-2 py-4">
            {navLinks.map((item) => (
              <li key={item.link}>
                <Link
                  href={item.link}
                  className="block rounded-md px-4 py-3 text-base text-neutral-700 hover:bg-neutral-100"
                  onClick={() => setOpen(false)}
                >
                  {item.text}
                </Link>
              </li>
            ))}
            <li className="mt-2 px-2">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-md border bg-neutral-900 border-neutral-700 px-4 py-3 text-sm text-white hover:bg-neutral-800 transition-colors"
                onClick={() => setOpen(false)}
              >
                Become a partner
              </Link>
            </li>
          </ul>
        </aside>
      </div>
    </header>
  );
}
