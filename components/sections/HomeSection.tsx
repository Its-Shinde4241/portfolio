import React from 'react';
import { motion } from 'framer-motion';
import profile from "../../assets/profile.jpg";
import { TextHoverEffect } from '../ui/shadcn-io/text-hover-effect';
export const HomeSection: React.FC = () => {
  return (
    <>
      <div className={`select-none w-full h-50 absolute top-50 left-0`}>
        <TextHoverEffect text="TECHNOPHILE" automatic />
      </div>
      <div className="flex flex-col items-center justify-center h-full text-center space-y-8">

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-[0_0_40px_rgba(200,0,0,0.2)] mb-2 relative group pointer-events-none"
        >
          <div className="absolute inset-0   transition-colors duration-500 z-10 " />
          <img src={profile.src} alt="Profile" className="w-full h-full object-cover contrast-105" />
        </motion.div>

        <div className="space-y-4 pointe">
          <h1 className="font-title text-6xl md:text-8xl font-bold tracking-tighter uppercase text-foreground">
            The <span className="text-rose-700 drop-shadow-md">Engineer</span>
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