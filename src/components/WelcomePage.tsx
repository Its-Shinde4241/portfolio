"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

interface WelcomePageProps {
  onIntroComplete: () => void;
}

export default function WelcomePage({ onIntroComplete }: WelcomePageProps) {
  const [fadeOut, setFadeOut] = useState(false);
  const [hideWelcome, setHideWelcome] = useState(false);

  // make the intro longer for cinematic pacing
  const timeRemaining = useRef(4); // seconds (longer)
  const isClient = useRef(false);

  // animation controllers
  const textControls = useAnimation();
  const fillControls = useAnimation();

  // total durations used for subtle zoom/timing sync
  const STROKE_DURATION = 8; // seconds for stroke write-on
  const MASK_DURATION = 4; // seconds for mask reveal
  const MASK_DELAY = 1; // seconds delay before mask starts
  const FILL_DURATION = 3; // seconds to fade fill in
  const EXIT_DURATION = 2; // seconds to fade out the whole intro

  useEffect(() => {
    isClient.current = true;

    // orchestrated sequence: slow write-on then mask reveal then fill fade
    const runSequence = async () => {
      // slow stroke draw (write-on)
      await textControls.start({
        strokeDashoffset: 0,
        transition: { duration: STROKE_DURATION, ease: "easeInOut" },
      });

      // reveal fill via mask (mask animation is independent but keep this sync)
      // we start the mask animation via SVG's motion.rect (see JSX) which uses MASK_DURATION & MASK_DELAY

      // fade the fill more slowly after mask began
      await fillControls.start({
        opacity: 1,
        transition: { duration: FILL_DURATION, ease: "easeInOut", delay: 0.25 },
      });
    };

    runSequence();
  }, [textControls, fillControls]);

  // countdown tick — slower, cinematic
  useEffect(() => {
    const interval = setInterval(() => {
      if (timeRemaining.current <= 1) {
        clearInterval(interval);
        setFadeOut(true);
        timeRemaining.current = 0;
      } else {
        timeRemaining.current -= 1;
      }
    }, 1000); // 1 second ticks

    return () => clearInterval(interval);
  }, []);

  // when fadeOut is triggered, wait EXIT_DURATION*1000 then hide + call onIntroComplete
  useEffect(() => {
    if (fadeOut) {
      const timer = setTimeout(() => {
        setHideWelcome(true);
        if (onIntroComplete) {
          onIntroComplete();
        }
      }, EXIT_DURATION * 1000); // match exit animation duration
      return () => clearTimeout(timer);
    }
  }, [fadeOut, onIntroComplete]);

  const handleSkip = () => setFadeOut(true);

  return (
    <AnimatePresence>
      {!hideWelcome && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gradient-to-tl dark:from-black from-gray-700 via-zinc-200 to-gray-500 dark:via-zinc-900 dark:to-black"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            filter: "blur(10px)",
            transition: { duration: EXIT_DURATION, ease: "easeInOut" },
          }}
        >
          <motion.div
            className="text-primary flex flex-col items-center justify-center w-full max-w-6xl px-4 relative"
            animate={
              fadeOut
                ? {
                  opacity: 0,
                  filter: "blur(8px)",
                  scale: 1.02,
                }
                : {
                  // keep it steady while intro runs
                }
            }
            transition={{ duration: EXIT_DURATION, ease: "easeInOut" }}
          >
            {/* Animated SVG Name — slow write-on + mask reveal + gentle zoom */}
            <motion.svg
              className="w-full h-auto relative z-10"
              viewBox="0 0 800 150"
              xmlns="http://www.w3.org/2000/svg"
              // gentle cinematic zoom over the stroke duration
              initial={{ scale: 1 }}
              animate={{ scale: 1.03 }}
              transition={{ duration: STROKE_DURATION + MASK_DELAY, ease: "easeInOut" }}
            >
              <defs>
                <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: "var(--primary)" }} />
                  <stop offset="50%" style={{ stopColor: "var(--card)" }} />
                  <stop offset="100%" style={{ stopColor: "var(--primary)" }} />
                </linearGradient>

                <filter id="textGlow">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {/* Reveal mask: motion.rect animates width to reveal filled text */}
                <mask id="revealMask">
                  <rect x="0" y="0" width="800" height="150" fill="black" />
                  <motion.rect
                    id="revealRect"
                    x={0}
                    y={0}
                    height={150}
                    initial={{ width: 0 }}
                    animate={{ width: 800 }}
                    transition={{ duration: MASK_DURATION, ease: "easeInOut", delay: MASK_DELAY }}
                    fill="white"
                  />
                </mask>
              </defs>

              {/* Stroke "write-on" text */}
              <motion.text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                stroke="url(#textGradient)"
                strokeWidth="1.6"
                fill="transparent"
                fontSize="80"
                fontFamily="poppins, sans-serif"
                filter="url(#textGlow)"
                className="shubham-stroke"
                initial={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
                animate={textControls}
                // fallback transition in case textControls hasn't been started yet
                transition={{ duration: STROKE_DURATION, ease: "easeInOut" }}
              >
                SHUBHAM SHINDE
              </motion.text>

              {/* Filled text revealed via mask — opacity controlled by fillControls */}
              <motion.text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="url(#textGradient)"
                fontSize="80"
                fontFamily="poppins, sans-serif"
                filter="url(#textGlow)"
                mask="url(#revealMask)"
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
              animate={fadeOut ? { opacity: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Skip Intro
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
