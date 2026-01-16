import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import profile from "../../assets/profile.jpg";
import { TextHoverEffect } from '../ui/shadcn-io/text-hover-effect';
import { GitHubContributionGraph } from '../githubContributionGraph';

export const HomeSection: React.FC = () => {
  const [graphSize, setGraphSize] = useState<'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'>('md');

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      if (width < 735) {
        setGraphSize('lg');       // Mobile
      } else if (width < 890) {
        setGraphSize('sm');       // Small tablet
      } else if (width < 1024) {
        setGraphSize('md');       // Tablet
      } else if (width < 1280) {
        setGraphSize('lg');       // Small desktop
      } else if (width < 1536) {
        setGraphSize('xl');       // Desktop
      } else {
        setGraphSize('2xl');      // Large desktop
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return (
    <>
      {/* GitHub Contribution Graph - Fixed behind everything with fade effect */}
      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none flex items-start justify-center pt-5 -z-50">
        <div
          className="w-full  "
          style={{
            // Stronger visibility, slower fade
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.2) 80%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.2) 80%, rgba(0,0,0,0) 100%)',
          }}
        >
          {/* Higher opacity - more visible */}
          <div className="opacity-70 dark:opacity-70">
            <GitHubContributionGraph username="Its-Shinde4241" size={graphSize} minimal />
          </div>
        </div>
      </div>

      <div className={`select-none w-full h-50 absolute top-40 left-0 z-10`}>
        <TextHoverEffect text="TECHNOPHILE" automatic />
      </div>

      <div className="flex flex-col items-center justify-center h-full text-center space-y-8 pointer-events-none select-none relative z-20 -mt-16">

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-[0_0_40px_rgba(14,165,233,0.2)] mb-2 relative group pointer-events-none"
        >
          <div className="absolute inset-0 transition-colors duration-500 z-10" />
          <img src={"/logo.png"} alt="Profile" className="w-full h-full object-cover contrast-105" />
        </motion.div>

        <div className="space-y-4 pointer-events-none">
          <h1 className="font-title text-6xl md:text-8xl font-bold tracking-tighter uppercase text-foreground">
            The <span className="text-sky-500 drop-shadow-md">Engineer</span>
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            className="h-1 bg-primary mx-auto max-w-[200px]"
          />
        </div>

        <div className="max-w-3xl space-y-3 px-4">
          <p className="text-foreground text-xl md:text-2xl font-medium tracking-wide">
            Full Stack Developer | Problem Solver | Academic Scholar
          </p>
          <p className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed">
            Building scalable systems and love cracking DSA problems.
          </p>
        </div>
      </div>
    </>
  );
};