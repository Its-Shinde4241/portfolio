"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "./ui/badge";
import { ChevronDown } from "lucide-react";
import { audiowide } from "@/lib/googleFonts";

const iconWrapperVariants = {
  initial: { scale: 0 },
  animate: { scale: 1 },
};

const Contact = () => {
  const contactLinks = [
    {
      title: "github",
      href: "https://github.com/Its-Shinde4241",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 496 512"
          className="group-hover:scale-110 transition-all duration-300 ease-in-out size-6"
        >
          <path
            fill="currentColor"
            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
          />
        </svg>
      ),
    },
    {
      title: "linkedin",
      href: "https://www.linkedin.com/in/shubham-shinde-3a36b528a/",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="group-hover:scale-110 transition-all duration-300 ease-in-out size-6"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
          />
        </svg>
      ),
    },
    {
      title: "instagram",
      href: "https://www.instagram.com/shubhamn.shinde/",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="group-hover:scale-110 transition-all duration-300 ease-in-out size-6"
        >
          <path
            fill="currentColor"
            d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0-59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12-18.1-7.1-57.6-6.8-83.1-6.5-4.1 0-7.9.1-11.2.1-3.3 0-7.2 0-11.4-.1-25.5-.3-64.8-.7-82.9 6.5-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2 0 4.1.1 7.9.1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2 2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5 4.1 0 7.9-.1 11.2-.1 3.3 0 7.2 0 11.4.1 25.5.3 64.8.7 82.9-6.5 6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83 0-4.2-.1-8.1-.1-11.4s0-7.1.1-11.4c.3-25.5.7-64.9-6.5-83-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5a82 82 0 1 1-91.2 136.4 82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1 2.6-7.1 5.2-9.8 6.1-4.5 9.8-5.2 7.6-.4 11.1 1.1 6.5 3.9 8.6 7 3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2-3.9 3.2-6.2 4.2-4.8 1.5-7.3 1.5c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96zm-91 293c-18.7 18.7-41.4 24.6-67 25.9-26.4 1.5-105.6 1.5-132 0-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132 1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0 25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9-1.3 25.6-7.1 48.3-25.8 67z"
          />
        </svg>
      ),
    },
    {
      title: "mail",
      href: "mailto:shindeshubham4241@gmail.com",

      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="group-hover:scale-110 transition-all duration-300 ease-in-out size-6"
        >
          <path
            fill="currentColor"
            d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4l217.6 163.2c11.4 8.5 27 8.5 38.4 0l217.6-163.2c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48H48zM0 176v208c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V176L294.4 339.2a63.9 63.9 0 0 1-76.8 0L0 176z"
          />
        </svg>
      ),
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [targetHeight, setTargetHeight] = useState("12rem");
  useEffect(() => {
    const checkHeight = () => {
      if (window.innerHeight <= 500) {
        setTargetHeight("1.5rem"); // Smaller height for short screens
      } else if (window.innerHeight <= 600) {
        setTargetHeight("5rem");
      } else {
        setTargetHeight("12rem");
      }
    };

    checkHeight(); // Initial check
    window.addEventListener("resize", checkHeight);

    return () => window.removeEventListener("resize", checkHeight);
  }, []);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Desktop version - unchanged */}
      <div className="fixed hidden top-0 right-3 sm:right-9 z-30 sm:flex flex-col items-center gap-4">
        {/* Vertical animated line */}
        <motion.span
          className=" w-[2px] sm:w-[4px] rounded-full"
          style={{ backgroundColor: "var(--primary)" }}
          initial={{ height: 0 }}
          animate={{ height: targetHeight }}
          transition={{ type: "spring", duration: 1, delay: 0.8 }}
        />

        {contactLinks.map((link, index) => (
          <motion.div
            key={link.title}
            initial="initial"
            animate="animate"
            variants={iconWrapperVariants}
            transition={{
              type: "spring",
              duration: 1,
              delay: 0.6 + index * 0.2,
            }}
            className="cursor-pointer rounded-full flex items-center justify-center"
          >
            <div className="group relative flex items-center justify-center">
              <a
                aria-label=""
                title={link.title}
                rel="noopener"
                href={link.href}
                target="_blank"
                className="p-2 rounded-full bg-background/70 dark:bg-foreground/10 backdrop-blur-xs transition-colors "
              >
                {link.svg}
              </a>
              <Badge
                className={`absolute bg-foreground/50 text-background scale-0 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-hover:scale-100 translate-x-7 group-hover:-translate-x-14 transition-all duration-300 origin-left ease-in-out`}
                variant={"outline"}
              >
                {link.title == "instagram" ? "insta" : link.title}
              </Badge>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile version with toggle button */}
      <div className="fixed top-4 right-4 z-30 sm:hidden">
        {/* Toggle Button */}
        <div className="fixed top-4 right-4 z-30 sm:hidden">
          <div className="flex items-center">
            <AnimatePresence>
              {!isOpen && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute right-9"
                >
                  <Badge
                    variant={"secondary"}
                    className={`block text-sm ${audiowide.className} scale-80 `}
                  >
                    connect
                  </Badge>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              onClick={toggleOpen}
              className="bg-transparent backdrop-blur-sm border border-border rounded-full p-2 shadow-lg"
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </motion.button>
          </div>
        </div>

        {isOpen && (
          <AnimatePresence>
            {isOpen && (
              <div className="flex flex-col items-center gap-3">
                <motion.span
                  className=" w-[2px] sm:w-[4px] rounded-full"
                  style={{ backgroundColor: "var(--primary)" }}
                  initial={{ height: 0 }}
                  animate={{ height: "8rem" }}
                  transition={{ type: "spring", duration: 1 }}
                />
                {contactLinks.map((link, index) => (
                  <motion.div
                    key={link.title}
                    initial="initial"
                    animate="animate"
                    variants={iconWrapperVariants}
                    transition={{
                      type: "spring",
                      duration: 1,
                      delay: 0.6 + index * 0.2,
                    }}
                    className="cursor-pointer rounded-full flex items-center justify-center "
                  >
                    <div className="group relative flex items-center justify-center">
                      <a
                        title={link.title}
                        rel="noopener"
                        href={link.href}
                        target="_blank"
                        className="p-2 rounded-full bg-background/40 backdrop-blur-xs transition-colors dark:bg-foreground/10"
                      >
                        {link.svg}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>
        )}
      </div>
    </>
  );
};

export default Contact;
