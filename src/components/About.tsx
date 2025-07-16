"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { rubik80sFade, ubuntuMono } from "@/lib/googleFonts";
import { Card } from "./Card";

export default function About() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className=" py-10 sm:py-16 md:py-20 scale-[0.97] sm:scale-100"
      ref={ref}
    >
      <div className="flex items-center relative">
        <span
          className={`absolute top-1 left-1 sm:top-2 sm:left-10 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl opacity-40  text-foreground select-none ${rubik80sFade.className}`}
        >
          ABOUT
        </span>

        <div className="mx-auto mt-8 sm:mt-12 md:mt-16 relative w-[90%] sm:w-[80%] max-w-5xl">
          {/* Alien Animation */}
          <motion.span
            initial={{ opacity: 0, scale: 0.2, x: 30, y: -20 }}
            animate={inView ? { opacity: 1, scale: 1, x: 0, y: 0 } : {}}
            transition={
              inView
                ? { type: "spring", delay: 1.8, duration: 1.4 }
                : { duration: 0 }
            }
            className="absolute -top-6 sm:-top-8 md:-top-9 right-8 sm:right-12 md:right-16 opacity-50 text-foreground"
          >
            {/* Alien SVG */}
            <svg
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary/70 dark:text-primary"
            >
              <path
                d="M195.767 176.394C117.99 94.5148 161.314 50.4971 205.98 50.4971C233.934 50.4971 263.289 67.3709 238.909 125.353C231.953 141.897 205.98 176.394 195.935 176.394"
                stroke="currentColor"
                strokeWidth="16"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M172.815 281.577C148.074 168.706 235.654 162.567 219.937 275.195"
                stroke="currentColor"
                strokeWidth="16"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M183.507 206.268C184.651 235.541 180.598 337.878 183.505 349.346L172.248 352.436M209.667 206.268C209.667 235.81 207.594 337.57 203.924 349.346L212.171 353.503"
                stroke="currentColor"
                strokeWidth="16"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M189.005 124.201C175.362 120.062 171.517 115.075 172.353 111.502C173.953 104.661 192.718 103.008 192.718 122.434"
                stroke="currentColor"
                strokeWidth="16"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M219.512 124.151C198.01 124.251 219.28 101.523 225.747 108.309C231.387 114.227 227.064 123.794 219.512 123.794"
                stroke="currentColor"
                strokeWidth="16"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.span>

          {/* UFO Animation */}
          <motion.span
            initial={{ opacity: 0, x: 100, y: -170, scale: 0.5 }}
            animate={inView ? { opacity: 1, x: 0, y: 0, scale: 1 } : {}}
            transition={
              inView ? { type: "spring", duration: 5 } : { duration: 0 }
            }
            className="absolute -top-10 sm:-top-12 md:-top-15 right-1 sm:right-2 opacity-50"
          >
            {/* UFO SVG */}
            <svg
              fill="currentColor"
              className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-primary/70 dark:text-primary"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M457.729,270.349h-46.073c-7.017-34.394-25.414-65.725-52.264-88.763c-26.678-22.893-60.226-36.23-95.23-38.032v-38.265c0-1.809-0.595-3.475-1.592-4.828c13.973-3.023,24.476-15.474,24.476-30.34c0-17.119-13.927-31.047-31.045-31.047c-17.119,0-31.047,13.928-31.047,31.047c0,14.865,10.504,27.317,24.478,30.34c-0.996,1.352-1.592,3.018-1.592,4.828v38.265c-35.006,1.802-68.554,15.139-95.232,38.032c-26.85,23.039-45.248,54.37-52.265,88.763H54.27c-29.924,0-54.27,24.346-54.27,54.27v30.741c0,15.579,12.675,28.255,28.256,28.255h78.222c-1.698,3.628-2.653,7.671-2.653,11.935v4.465c0,11.08,6.414,20.685,15.72,25.313l-23.142,34.929c-2.49,3.757-1.462,8.821,2.295,11.31c1.387,0.919,2.952,1.359,4.5,1.359c2.645,0,5.239-1.285,6.81-3.654l27.166-41.002H247.84v36.494c0,4.508,3.653,8.161,8.161,8.161s8.161-3.653,8.161-8.161v-36.494h110.663l27.163,41.002c1.569,2.37,4.164,3.654,6.81,3.654c1.548,0,3.112-0.44,4.5-1.359c3.757-2.488,4.784-7.552,2.295-11.31l-23.139-34.928c9.308-4.628,15.723-14.233,15.723-25.314v-4.465c0-4.263-0.954-8.306-2.653-11.935h78.221c15.58,0,28.256-12.675,28.256-28.255v-30.741C512,294.694,487.654,270.349,457.729,270.349z" />
            </svg>
          </motion.span>

          {/* Card */}
          <Card className="rounded-xs">
            <div className="w-full px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-6">
              <div
                className={`${ubuntuMono.className} text-primary/80 text-[13px] sm:text-base md:text-lg leading-[1.65] sm:leading-[1.75] space-y-4`}
              >
                <p>
                  Hello there 👋, I am a full-stack developer with most
                  experience in frontend development using{" "}
                  <strong className={`text-primary `}>React</strong>. I have
                  worked with several frameworks such as{" "}
                  <strong className="text-primary">NextJS</strong>,{" "}
                  <strong className="text-primary">FastApi</strong>, and{" "}
                  <strong className="text-primary">Express</strong>. I can
                  quickly adapt to new frameworks and languages, and I enjoy
                  learning new technologies. In my free time, I love creating{" "}fun {" "}
                  <strong className="text-primary">Projects</strong> and{" "} solving {" "}
                  <strong className="text-primary">DSA problems</strong> to expand
                  my knowledge in Development and problem solving.
                </p>
                <hr className="my-3 sm:my-4" />
                <p>
                  I am proficient in{" "}
                  <strong className="text-primary">
                    C, C++, Java, Python and JavaScript
                  </strong>
                  . On Codechef, I have achieved a 2-star rating with a maximum
                  rating of 1532. <strong className="text-primary">C</strong>.
                </p>
                <hr className="my-3 sm:my-4" />
                <p>
                  I also love participating in different coding competitions or
                  contests on platforms like{" "}
                  <strong className="text-primary">Leetcode</strong> and{" "}
                  <strong className="text-primary">Codeforces</strong>. While
                  competing on such platforms I have solved more than{" "}
                  <strong className="text-primary">500+</strong> problems and
                  also achieved a rating of 1620 on{" "}
                  <strong className="text-primary">Leetcode</strong> and max
                  rating of 1105 on{" "}
                  <strong className="text-primary">Codeforces</strong>.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
