"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowForward, IoMdClose } from "react-icons/io";
import Script from "next/script";

interface FormProps {
  isCTA?: boolean;
}

const FormModal = ({ isCTA }: FormProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden"; // Prevent body scrolling when modal is open
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset"; // Restore body scrolling when modal is closed
    };
  }, [isOpen]);

  const modalVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`${
          isCTA
            ? "bg-neutral-50 hover:bg-white text-[#4782ed]"
            : "bg-[#4782ed] hover:bg-[#5a91f5] text-white"
        } mt-4 duration-300 flex items-center gap-4 font-semibold rounded-full py-4 px-8 `}
      >
        Let&apos;s work together
        <IoIosArrowForward />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              ref={modalRef}
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white  shadow-2xl w-full max-w-screen-lg relative my-8"
            >
              <div className="sticky top-0 bg-white z-10 px-12 py-6 flex justify-between items-center border-b">
                <h2 className="text-2xl font-bold text-gray-800">
                  Let&apos;s Work Together
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <IoMdClose size={24} />
                </button>
              </div>

              <div className="px-12 py-6 overflow-y-auto max-h-[calc(100vh-10rem)]">
                <p className="text-gray-800 text-xl md:text-2xl mb-6">
                  Fill out the form below and we&apos;ll get back to you as soon
                  as possible.
                </p>
                <div className="hb-p-6703e04b7b400700392b6ee6-1 w-full"></div>
                <img
                  height="1"
                  width="1"
                  style={{ display: "none" }}
                  src="https://www.honeybook.com/p.png?pid=6703e04b7b400700392b6ee6"
                  alt=""
                />
              </div>

              <Script
                id="honeybook-script"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                  __html: `
                    (function(h,b,s,n,i,p,e,t) {
                      h._HB_ = h._HB_ || {};h._HB_.pid = i;;;;
                      t=b.createElement(s);t.type="text/javascript";t.async=!0;t.src=n;
                      e=b.getElementsByTagName(s)[0];e.parentNode.insertBefore(t,e);
                    })(window,document,"script","https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js","6703e04b7b400700392b6ee6");
                  `,
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FormModal;
