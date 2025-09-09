import Link from "next/link";
import React from "react";

const Button = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => (
  <a
    href={href}
    className="inline-block bg-neutral-100 text-neutral-700 md:text-lg px-6 py-3 rounded-md font-medium text-center hover:bg-neutral-300 border duration-300 border-neutral-800 hover:border-white/50 transition-colors"
  >
    {children}
  </a>
);

const ButtonDark = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <Link href={href}>
      <button className="flex flex-row items-center gap-3 text-[#F9CDCD] font-medium px-8 py-3 border border-[#F9CDCD] text-lg cursor-pointer duration-300 rounded-md">
        <div className="size-1.5  bg-[#357DED] animate-pulse"></div>
        {children}
      </button>
    </Link>
  );
};

export { Button, ButtonDark };
