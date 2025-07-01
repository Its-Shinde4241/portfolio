"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { rubik80sFade, ubuntuMono } from "@/lib/googleFonts";
import { Card } from "./Card";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

interface Education {
  start?: string;
  end?: string;
  title: string;
  description: string | null;
  place: string | null;
  institute?: string;
  logoLink?: string;
}

interface Work {
  company_name: string;
  role: string;
  start?: string;
  end?: string;
  place?: string;
  company_logo?: string;
  description?: string;
}

export default function TimeLine() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openIndexWRK, setOpenIndexWRK] = useState<number | null>(null);

  const educations: Education[] = [
    {
      end: "May 2021",
      title: "SSC - 10th grade",
      description:
        "Successfully completed Secondary School Certificate with an outstanding score of 95.80%, laying a strong academic foundation.",
      place: "Nashik",
      institute: "Vainateya Vidyalaya, Niphad",
      logoLink: "/EducationInstitutes/Vainateya_school.png",
    },
    {
      end: "March 2023",
      title: "HSC - 12th grade",
      description:
        "Completed Higher Secondary Certificate (Science) with 88.33%, demonstrating consistent performance and dedication.",
      place: "Nashik",
      institute: "H.A.L. College of Science and Commerce, Ozar (Nashik)",
      logoLink: "/EducationInstitutes/HSC_College.png",
    },
    {
      start: "Apr 2023",
      end: "June 2023",
      title: "MHT-CET",
      description:
        "Achieved an excellent percentile of 99.71 in the Maharashtra Common Entrance Test, securing eligibility for top engineering institutes.",
      place: "Nashik",
      institute: "Ram-Raj Junior College, Nashik",
      logoLink: "/EducationInstitutes/Ramraj_College.png",
    },
    {
      start: "Jul 2023",
      end: " Present",
      title: "BE Computer Engineering",
      description:
        "Currently pursuing a Bachelor’s degree in Computer Engineering with a remarkable GPA of 9.86, focusing on software development and emerging technologies.",
      place: "Pune",
      institute: "Pune Institute of Computer Technology",
      logoLink: "/EducationInstitutes/PICT_College.png",
    },
  ];

  const Workexp: Work[] = [
    {
      company_name: "Acumenn money",
      company_logo: "/workExp/acumenn_money.png",
      role: "Software Developer Intern",
      start: "June 2025",
      end: "July 2025",
      description:
        "Worked as a Software Developer Intern at Acummen money, contributing to the development of dynamic web applications using React, TypeScript, and modern UI frameworks. Implemented responsive user interfaces, optimized performance, and collaborated with senior developers to deliver high-quality features within tight deadlines.",
    },
  ];

  const toggleOpen = (index: number, name: string) => {
    if (name === "EDU") {
      setOpenIndex((prev) => (prev === index ? null : index));
    } else if (name === "WRK") {
      setOpenIndexWRK((prev) => (prev === index ? null : index));
    }
  };

  return (
    <div className="min-h-screen w-full py-12 px-4 sm:px-6 md:px-10">
      <div className="flex flex-col items-center w-full relative">
        <span
          className={`absolute top-10 right-4 text-5xl sm:text-7xl md:text-8xl opacity-30  text-foreground select-none ${rubik80sFade.className}`}
        >
          TimeLine
        </span>

        <Card className="w-full max-w-4xl mt-18 sm:mt-22 md:mt-26 lg:mt-36 space-y-1 p-4 sm:p-6 md:p-8 rounded-2xl">
          <h2
            className={`text-xl sm:text-2xl font-bold text-foreground mb-4 ${ubuntuMono.className}`}
          >
            Education Timeline
          </h2>

          {educations.map((education, index) => (
            <div
              key={index}
              className="rounded-xl p-4 transition border border-border"
            >
              <div
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 cursor-pointer"
                onClick={() => toggleOpen(index, "EDU")}
              >
                {/* Left Side: Logo + Info */}
                <div className="flex items-start sm:items-center gap-3 flex-1">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent flex items-center justify-center text-[10px] sm:text-xs text-muted-foreground shrink-0">
                    {education.logoLink ? (
                      <Image
                        src={education.logoLink}
                        alt="logo"
                        className="w-full h-full object-cover rounded-full"
                        width={200}
                        height={200}
                      />
                    ) : (
                      "null"
                    )}
                  </div>

                  <div className="min-w-0 space-y-1">
                    <div className="flex items-center justify-between sm:justify-start gap-2 ">
                      <h3 className="text-[13px] sm:text-base font-semibold text-foreground leading-tight break-words">
                        {education.institute}
                      </h3>

                      <ChevronDown
                        className={`w-4 h-4 text-muted-foreground transform transition-transform ${
                          openIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {education.title}
                    </p>
                  </div>
                </div>

                {/* Right Side: Location & Duration */}
                <div className="text-left sm:text-right min-w-[120px] sm:min-w-[140px]">
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {education.place}
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-primary">
                    {education.start ? education.start : ""}{" "}
                    {education.start && education.end ? "–" : ""}
                    {education.end}
                  </p>
                </div>
              </div>

              {/* Expandable Description */}
              <AnimatePresence initial={false}>
                {openIndex === index && education.description && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className="mt-3 text-xs sm:text-sm text-foreground/70 text-center px-10 sm:px-20"
                      dangerouslySetInnerHTML={{
                        __html: education.description || "",
                      }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          <hr className="my-6" />

          <h2
            className={`text-xl sm:text-2xl font-bold text-foreground mb-4 ${ubuntuMono.className}`}
          >
            Work Experience Timeline
          </h2>

          {Workexp.map((work, index) => (
            <div
              key={index}
              className="rounded-xl p-4 transition border border-border"
            >
              <div
                className="flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer"
                onClick={() => toggleOpen(index, "WRK")}
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-xs text-muted-foreground shrink-0">
                    {work.company_logo ? (
                      <Image
                        src={work.company_logo}
                        alt="logo"
                        className="w-full h-full object-cover rounded-full"
                        height={200}
                        width={200}
                      />
                    ) : (
                      "null"
                    )}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-base sm:text-lg font-semibold text-foreground truncate">
                        {work.company_name}
                      </h3>
                      <button
                        type="button"
                        aria-label="Toggle details"
                        className="cursor-pointer"
                      >
                        <ChevronDown
                          className={`w-4 h-4 text-muted-foreground transform transition-transform ${
                            openIndexWRK === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>
                    <p className="text-sm text-muted-foreground">{work.role}</p>
                  </div>
                </div>

                <div className="text-left md:text-right min-w-[140px]">
                  <p className="text-sm text-muted-foreground">{work.place}</p>
                  <p className="text-sm font-medium text-primary">
                    {work.start ? work.start : ""}{" "}
                    {work.start && work.end ? "–" : ""}
                    {work.end}
                  </p>
                </div>
              </div>

              <AnimatePresence initial={false}>
                {openIndexWRK === index && work.description && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className="mt-4 text-sm text-foreground/70 text-center xs:px-6 sm:px-20"
                      dangerouslySetInnerHTML={{
                        __html: work.description || "",
                      }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
}
