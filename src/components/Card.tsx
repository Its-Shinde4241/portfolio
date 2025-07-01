"use client";
import { motion, useMotionTemplate, useSpring } from "framer-motion";

import { PropsWithChildren } from "react";

interface cardType extends PropsWithChildren {
  className?: string;
}
export const Card: React.FC<cardType> = ({ children, className }) => {
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

  function onMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const { left, top } = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - left);
    mouseY.set(event.clientY - top);
  }
  const maskImage = useMotionTemplate`radial-gradient(300px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div
      onMouseMove={onMouseMove}
      className={`
      overflow-hidden relative duration-700 border-2
      hover:bg-zinc-800/10 group hover:border-zinc-400/50 border-zinc-600
      backdrop-blur-[4px]
      rounded-lg sm:rounded-xl md:rounded-2xl
      w-full  
      ${className}
    `}
    >
      <div className="pointer-events-none">
        <div className="absolute inset-0 z-0 transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
        <motion.div
          className="absolute inset-0 z-10 bg-gradient-to-br opacity-100 via-zinc-100/10 transition duration-1000 group-hover:opacity-50"
          style={style}
        />
        <motion.div
          className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
          style={style}
        />
      </div>
      {children}
    </div>
  );
};
