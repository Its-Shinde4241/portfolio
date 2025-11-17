"use client";
import React, { useRef, useState } from "react";
import Particles from "@/components/Particals"; // your particles component
import Mylogo from "@/components/MyLogo";
import ThemeToggler from "@/components/ThemeToggler";
import WelcomePage from "@/components/WelcomePage";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import TimeLine from "@/components/TimeLine";
import HomePage from "@/components/HomePage";
import Resume from "@/components/Resume";
import { SpiralAnimation } from "@/components/ui/SpiralAnimation";


export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);
  const [showSpiral, setShowSpiral] = useState(false);
  const [showParticles, setShowParticles] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleIntroComplete = () => {
    setIntroComplete(true);
    // start the spiral immediately after intro
    setShowSpiral(true);
  };

  const handleSpiralComplete = () => {
    // spiral finished & faded out — now mount particles
    setShowSpiral(false);
    setShowParticles(true);
  };

  return (
    <>
      <main>
        <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl dark:from-black from-gray-500 via-zinc-100 to-gray-400 dark:via-zinc-900 dark:to-black bg-background">
          <AnimatePresence>
            {!introComplete && <WelcomePage onIntroComplete={handleIntroComplete} />}
          </AnimatePresence>

          <AnimatePresence>
            {introComplete && (
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
              >
                {/* Spiral (one-shot). It fades out itself and calls handleSpiralComplete */}
                {showSpiral && (
                  <SpiralAnimation
                    fullscreen
                    startOrigin={{ x: 0.5, y: 0.45 }}
                    duration={15} // seconds, tune
                    onComplete={handleSpiralComplete}
                  />
                )}

                {/* Particles mounted after spiral completes */}
                {showParticles && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                    <Particles className="fixed inset-0 pointer-events-none" quantity={300} />
                  </motion.div>
                )}

                {/* The rest of your UI */}
                <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
                  <Mylogo className="absolute top-4 -left-4 sm:left-6 md:left-7 md:top-7 scale-70 sm:scale-100" />
                </motion.div>

                <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}>
                  <ThemeToggler />
                </motion.div>

                <Navbar scrollref={scrollRef} />
                <Contact />

                <motion.div
                  className="flex flex-col items-start h-screen w-full px-4 sm:px-8 md:px-16 lg:pr-24 lg:pl-32 overflow-y-auto overflow-x-hidden scrollbar-hide"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  ref={scrollRef}
                >
                  <section id="home" className="w-full"><HomePage /></section>
                  <section id="about" className="w-full"><About /></section>
                  <section id="projects" className="w-full"><Projects /></section>
                  <section id="skills" className="w-full"><Skills /></section>
                  <section id="timeline" className="w-full mb-16"><TimeLine /></section>
                  <section id="resume" className="w-full mb-16"><Resume /></section>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
      <footer></footer>
    </>
  );
}
