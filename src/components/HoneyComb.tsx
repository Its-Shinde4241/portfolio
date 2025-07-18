"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

interface AnimatedLinesProps {
  size?: number;
  className?: string;
}
interface Line {
  x: number;
  y: number;
  addedX: number;
  addedY: number;
  rad: number;
  lightInputMultiplier: number;
  cumulativeTime: number;
  time: number;
  targetTime: number;
  reset: () => void;
  beginPhase: () => void;
  step: (ctx: CanvasRenderingContext2D) => void;
}
const AnimatedHoneyComb: React.FC<AnimatedLinesProps> = ({
  size = 400,
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const linesRef = useRef<Line[]>([]);
  const tickRef = useRef(0);

  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const currentColor = theme === "dark" ? "#fff" : "#000";

    canvas.width = size;
    canvas.height = size;

    const opts = {
      len: 30,
      count: 100, 
      baseTime: 10, 
      addedTime: 10, 
      dieChance: 0.03, 
      spawnChance: 1, 
      sparkChance: 0.15,
      sparkDist: 10,
      sparkSize: 2,
      baseLight: 50,
      addedLight: 10,
      shadowToTimePropMult: 3,
      baseLightInputMultiplier: 0.01,
      addedLightInputMultiplier: 0.02,
      cx: size / 2,
      cy: size / 2,
      repaintAlpha: 0.02,
    };

    const dieX = size / 2 / opts.len;
    const dieY = size / 2 / opts.len;
    const baseRad = (Math.PI * 2) / 6;

    class Line {
      x: number = 0;
      y: number = 0;
      addedX: number = 0;
      addedY: number = 0;
      rad: number = 0;
      lightInputMultiplier: number = 0;
      cumulativeTime: number = 0;
      time: number = 0;
      targetTime: number = 0;

      constructor() {
        this.reset();
      }

      reset() {
        this.x = 0;
        this.y = 0;
        this.addedX = 0;
        this.addedY = 0;
        this.rad = 0;
        this.lightInputMultiplier =
          opts.baseLightInputMultiplier +
          opts.addedLightInputMultiplier * Math.random();
        this.cumulativeTime = 0;
        this.beginPhase();
      }

      beginPhase() {
        this.x += this.addedX;
        this.y += this.addedY;
        this.time = 0;
        this.targetTime = (opts.baseTime + opts.addedTime * Math.random()) | 0;
        this.rad += baseRad * (Math.random() < 0.5 ? 1 : -1);
        this.addedX = Math.cos(this.rad);
        this.addedY = Math.sin(this.rad);

        if (
          Math.random() < opts.dieChance ||
          this.x > dieX ||
          this.x < -dieX ||
          this.y > dieY ||
          this.y < -dieY
        ) {
          this.reset();
        }
      }

      step(ctx: CanvasRenderingContext2D) {
        ++this.time;
        ++this.cumulativeTime;

        if (this.time >= this.targetTime) {
          this.beginPhase();
        }

        const prop = this.time / this.targetTime;
        const wave = Math.sin((prop * Math.PI) / 2);
        const x = this.addedX * wave;
        const y = this.addedY * wave;

        ctx.shadowBlur = prop * opts.shadowToTimePropMult;

        const lightness =
          opts.baseLight +
          opts.addedLight *
            Math.sin(this.cumulativeTime * this.lightInputMultiplier);
        const opacity = Math.max(0.1, Math.min(1, lightness / 100));

        ctx.fillStyle = currentColor;
        ctx.shadowColor = currentColor;
        ctx.globalAlpha = opacity;

        ctx.fillRect(
          opts.cx + (this.x + x) * opts.len,
          opts.cy + (this.y + y) * opts.len,
          2,
          2
        );

        if (Math.random() < opts.sparkChance) {
          ctx.fillRect(
            opts.cx +
              (this.x + x) * opts.len +
              Math.random() * opts.sparkDist * (Math.random() < 0.5 ? 1 : -1) -
              opts.sparkSize / 2,
            opts.cy +
              (this.y + y) * opts.len +
              Math.random() * opts.sparkDist * (Math.random() < 0.5 ? 1 : -1) -
              opts.sparkSize / 2,
            opts.sparkSize,
            opts.sparkSize
          );
        }
      }
    }

    const loop = () => {
      tickRef.current++;

      ctx.globalCompositeOperation = "destination-out";
      ctx.shadowBlur = 1;
      ctx.globalAlpha = opts.repaintAlpha;
      ctx.fillRect(0, 0, size, size);
      ctx.globalCompositeOperation = "source-over";

      if (
        linesRef.current.length < opts.count &&
        Math.random() < opts.spawnChance
      ) {
        linesRef.current.push(new Line());
      }

      linesRef.current.forEach((line) => {
        line.step(ctx);
      });

      animationRef.current = requestAnimationFrame(loop);
    };

    ctx.clearRect(0, 0, size, size);
    linesRef.current = [];
    loop();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [size, className, theme]);

  return (
    <div ref={containerRef} className={className}>
      <canvas
        ref={canvasRef}
        className={className}
        width={size}
        height={size}
        style={{
          display: "block",
          background: "transparent",
        }}
      />
    </div>
  );
};

export default AnimatedHoneyComb;
