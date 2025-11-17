"use client";
import React from "react";
import { motion } from "framer-motion";
import { rubik80sFade, ubuntuMono } from "@/lib/googleFonts";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

function Resume() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <div id="resume" className="min-h-screen w-full py-12 px-4 sm:px-6 md:px-10 relative overflow-hidden">
      <div className="flex flex-col items-center w-full relative z-10">
        {/* Background Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-26"
        >
          <span
            className={`absolute left-8 md:left-2 text-7xl sm:text-8xl md:text-9xl opacity-30 text-foreground select-none ${rubik80sFade.className}`}
          >
            Resume
          </span>
        </motion.div>

        {/* Main Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl w-full"
        >
          {/* Header Section */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-4"
          >
            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-2">
              <Button
                variant="default"
                size="lg"
                className="group/btn bg-primary hover:bg-primary/90 text-primary-foreground border border-primary/30 rounded-full px-8 py-3 transition-all duration-300 hover:scale-105"
                asChild
              >
                <a
                  href="https://drive.google.com/uc?export=download&id=1nQhqckh4m34oQp1q8f5EHd8BIJQF6tpE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Download className="h-5 w-5 group-hover/btn:animate-bounce" />
                  Download PDF
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Resume Image Display */}
          <motion.div
            variants={itemVariants}
            className="backdrop-blur-xl bg-transparent border border-border/20 rounded-3xl p-6 hover:backdrop-blur-2xl transition-all duration-300 group shadow-2xl"
          >
            <div className="relative w-full">
              <iframe
                src="https://drive.google.com/file/d/1nQhqckh4m34oQp1q8f5EHd8BIJQF6tpE/preview"
                className="w-full h-[550px] sm:h-[720px] md:h-[950px] lg:h-[1020px] rounded-2xl border border-border/10 shadow-lg pointer-events-none"
                title="Shubham Shinde Resume"
              />

              {/* Overlay to prevent interaction with iframe */}
              <div className="absolute inset-0 bg-transparent rounded-2xl"></div>
            </div>
          </motion.div>

          {/* Visiting Greetings */}
          <motion.div
            variants={itemVariants}
            className="mt-12"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-2xl hover:scale-150 transition-all ease-in-out duration-500 cursor-pointer">👋</span>

              <h3 className={`text-2xl sm:text-3xl font-bold text-foreground ${ubuntuMono.className}`}>
                Thank You for Visiting!
              </h3>
            </div>

          </motion.div>

          {/* Additional Info Cards */}

        </motion.div>
      </div>
    </div>
  );
}

export default Resume;
