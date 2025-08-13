"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const time = new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
      setCurrentTime(time);
    };
    updateTime();
    const timerId = setInterval(updateTime, 60000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <header className=" z-50  w-full flex flex-col">
      <div className="bg-[#6a59ff] h-2 w-full"></div>
      <nav className="bg-white w-full">
        <div className="flex pb-4  border-b px-8 bg-neutral-900 md:px-12 border-neutral-600 flex-row ] flex-1 items-center justify-between pt-4">
          <div className="flex">
            <a href="/">
              <h2 className="font-black uppercase text-white tracking-tight">
                Lauf
              </h2>
            </a>
          </div>

          <div className="flex">
            <div className="flex flex-row items-center gap-12">
              <a
                href="/contact"
                className="border border-neutral-600 hover:border-neutral-300 duration-300 px-6 py-3 text-neutral-200 rounded-full flex items-center text-sm justify-center cursor-pointer"
              >
                <p>Become a partner</p>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
