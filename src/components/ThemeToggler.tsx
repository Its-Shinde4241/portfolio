"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    setAnimKey((prev) => prev + 1); 
  };

  return (
    <div className="absolute lg:right-10 lg:bottom-10 md:right-7 md:bottom-7 right-3 bottom-3 z-50 scale-90 sm:scale-100">
      <div className="flex flex-col items-center justify-center cursor-pointer">
        <button
          type="button"
          onClick={toggleTheme}
          className="cursor-pointer rounded-full p-2 bg-background/70 d backdrop-blur-lg 
                     ring-1 ring-foreground/20 dark:shadow-[0_0_30px_rgba(255,255,255,0.3)] shadow-[0_0_30px_rgba(0,0,0,0.7)
                     dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.8)] hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]  transition duration-300"
        >
          {mounted && (
            <AnimatePresence mode="wait">
              <motion.div
                key={animKey}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {theme === "light" ? (
                  <div className="w-6 h-6">
                    <svg
                      fill="currentColor"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12s-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6z" />
                    </svg>
                  </div>
                ) : (
                  <div className="w-6 h-6">
                    <svg
                      fill="currentColor"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
                    </svg>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          )}
        </button>
      </div>
    </div>
  );
};

export default ThemeToggler;
