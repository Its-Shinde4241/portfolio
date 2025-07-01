"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

interface WelcomePageProps {
  onIntroComplete: () => void;
}

export default function WelcomePage({ onIntroComplete }: WelcomePageProps) {
  const [fadeOut, setFadeOut] = useState(false);
  const [hideWelcome, setHideWelcome] = useState(false);
  const timeRemaining = useRef(4);
  const isClient = useRef(false);

  const textControls = useAnimation();
  const fillControls = useAnimation();

  useEffect(() => {
    isClient.current = true;
    const sequence = async () => {
      await textControls.start({
        strokeDashoffset: 0,
        transition: { duration: 5, ease: "easeInOut" },
      });
      await fillControls.start({
        opacity: 1,
        transition: { duration: 2, ease: "easeInOut" },
      });
    };
    sequence();
  }, [fillControls]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeRemaining.current <= 1) {
        clearInterval(interval);
        setFadeOut(true);
        timeRemaining.current = 0;
      } else {
        timeRemaining.current -= 1;
      }
    }, 700);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (fadeOut) {
      const timer = setTimeout(() => {
        setHideWelcome(true);
        if (onIntroComplete) {
          onIntroComplete();
        }
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [fadeOut, onIntroComplete]);

  const handleSkip = () => setFadeOut(true);

  return (
    <AnimatePresence>
      {!hideWelcome && (
        <motion.div
          className="fixed inset-0 z-50 dark:bg-background flex items-center justify-center overflow-hidden bg-gradient-to-tl dark:from-black from-gray-500 via-zinc-100 to-gray-400 dark:via-zinc-900 dark:to-black bg-background"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            filter: "blur(8px)",
            transition: {
              duration: 1.5,
              ease: "easeInOut",
            },
          }}
        >
          <motion.div
            className="text-primary flex flex-col items-center justify-center w-full max-w-6xl px-4 relative"
            animate={
              fadeOut
                ? {
                    opacity: 0,
                    filter: "blur(8px)",
                  }
                : {}
            }
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          >
            {/* Animated SVG Name */}
            <motion.svg
              className="w-full h-auto relative z-10"
              viewBox="0 0 800 150"
            >
              <defs>
                <linearGradient
                  id="textGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="var(--primary)" />
                  <stop offset="50%" stopColor="var(--card)" />
                  <stop offset="100%" stopColor="var(--primary)" />
                </linearGradient>
                <filter id="textGlow">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Stroke Animation */}
              <motion.text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                stroke="url(#textGradient)"
                strokeWidth="1.5"
                fill="transparent"
                fontSize="80"
                fontFamily="poppins, sans-serif"
                filter="url(#textGlow)"
                className={`shubham-stroke`}
                initial={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
                animate={textControls}
                transition={{ duration: 2 }}
              >
                SHUBHAM SHINDE
              </motion.text>

              {/* Fill Animation */}
              <motion.text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="url(#textGradient)"
                stroke="none"
                fontSize="80"
                fontFamily="poppins, sans-serif"
                filter="url(#textGlow)"
                initial={{ opacity: 0 }}
                animate={fillControls}
              >
                SHUBHAM SHINDE
              </motion.text>
            </motion.svg>

            {/* Skip Button */}
            <motion.button
              onClick={handleSkip}
              className="mt-8 text-sm text-muted-foreground hover:text-primary transition-colors relative z-10 px-6 py-1 border border-border rounded-full hover:bg-muted"
              animate={
                fadeOut
                  ? {
                      opacity: 0,
                    }
                  : {}
              }
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
            >
              Skip Intro
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
