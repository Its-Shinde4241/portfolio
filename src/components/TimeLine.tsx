"use client";
import React from "react";
import { motion } from "framer-motion";
import { rubik80sFade, ubuntuMono } from "@/lib/googleFonts";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, GraduationCap } from "lucide-react";
import Image from "next/image";

interface Education {
  start?: string;
  end?: string;
  title: string;
  description: string | null;
  place: string | null;
  institute?: string;
  logoLink?: string;
  technologies?: string[];
}

interface Work {
  company_name: string;
  role: string;
  start?: string;
  end?: string;
  place?: string;
  company_logo?: string;
  description?: string;
  technologies?: string[];
}

export default function TimeLine() {
  const educations: Education[] = [
    {
      end: "May 2021",
      title: "SSC - 10th grade",
      description:
        "Successfully completed Secondary School Certificate with an outstanding score of 95.80%, laying a strong academic foundation.",
      place: "Nashik",
      institute: "Vainateya Vidyalaya, Niphad",
      logoLink: "/EducationInstitutes/Vainateya_school.png",
      technologies: ["Mathematics", "Science", "English", "Sanskrit"],
    },
    {
      end: "March 2023",
      title: "HSC - 12th grade",
      description:
        "Completed Higher Secondary Certificate (Science) with 88.33%, demonstrating consistent performance and dedication.",
      place: "Nashik",
      institute: "H.A.L. College of Science and Commerce, Ozar (Nashik)",
      logoLink: "/EducationInstitutes/HSC_College.png",
      technologies: ["Physics", "Chemistry", "Mathematics", "Biology"],
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
      technologies: ["Mathematics", "Physics", "Chemistry"],
    },
    {
      start: "Jul 2023",
      end: " Present",
      title: "BE Computer Engineering",
      description:
        "Currently pursuing a Bachelor's degree in Computer Engineering with a remarkable GPA of 9.80, focusing on software development and emerging technologies.",
      place: "Pune",
      institute: "Pune Institute of Computer Technology",
      logoLink: "/EducationInstitutes/PICT_College.png",
      technologies: ["Software Engineering", "Data Structures", "Algorithms", "Web Development", "OOP", "DBMS", "CNS"],
    },
  ];

  const workExperiences: Work[] = [
    {
      company_name: "Acumenn Money",
      company_logo: "/workExp/acumenn_money.png",
      role: "Software Developer Intern",
      start: "June 2025",
      end: "July 2025",
      place: "Remote",
      description:
        "Worked as a Software Developer Intern at Acumenn money, contributing to the development of dynamic web applications using React, TypeScript, and modern UI frameworks. Implemented responsive user interfaces, optimized performance, and collaborated with senior developers to deliver high-quality features within tight deadlines.",
      technologies: ["React", "TypeScript", "Node.js", "Postgres", "Supabase", "shadcn UI", "Tailwind CSS"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50, y: 20 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <div className="min-h-screen w-full py-12 px-4 sm:px-6 md:px-10 relative overflow-hidden">
      <div className="flex flex-col items-center w-full relative z-10">
        {/* Title with Space Theme */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span
            className={`absolute  left-8 md:left-2 text-7xl sm:text-8xl md:text-9xl opacity-30  text-foreground select-none ${rubik80sFade.className}`}
          >
            Timeline
          </span>
        </motion.div>

        {/* Main Container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl w-full bg-transparent/10  rounded-3xl p-6 sm:p-8 "
        >
          {/* Education Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full backdrop-blur-sm border border-primary/30">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h2 className={`text-2xl sm:text-3xl font-bold text-foreground ${ubuntuMono.className}`}>
                Education Journey
              </h2>
            </div>

            <div className="relative ml-3">
              {/* Timeline line */}
              <div className="absolute left-0 top-4 bottom-0 w-0.5 bg-border rounded-full" />

              {educations.map((education, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-8 pb-12 last:pb-0"
                >
                  {/* Glowing Timeline Dot */}
                  <div className="absolute h-4 w-4 -translate-x-1/2 left-px top-3 rounded-full bg-primary shadow-lg shadow-primary/50 border-2 border-background animate-pulse" />

                  {/* Content Card */}
                  <div className="backdrop-blur-lg bg-transparent border border-border/50 rounded-2xl p-6 hover:backdrop-blur-2xl transition-all duration-300 group shadow-lg">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="shrink-0 h-12 w-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center border border-primary/30 group-hover:scale-110 transition-transform">
                        {education.logoLink ? (
                          <Image
                            src={education.logoLink}
                            alt="Institution logo"
                            className="w-10 h-10 object-cover rounded-full"
                            width={40}
                            height={40}
                          />
                        ) : (
                          <GraduationCap className="h-6 w-6 text-primary" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {education.institute}
                        </h3>
                        <p className="text-primary font-medium">{education.title}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>
                        {education.start ? education.start : ""}{" "}
                        {education.start && education.end ? "–" : ""}
                        {education.end} • {education.place}
                      </span>
                    </div>

                    <p className="text-sm sm:text-base text-foreground/80 mb-4 leading-relaxed">
                      {education.description}
                    </p>

                    {/* {education.technologies && (
                      <div className="flex flex-wrap gap-2">
                        {education.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="rounded-full bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )} */}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Work Experience Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gradient-to-r from-accent/20 to-muted/20 rounded-full backdrop-blur-sm border border-accent/30">
                <Building2 className="h-6 w-6 text-accent-foreground" />
              </div>
              <h2 className={`text-2xl sm:text-3xl font-bold text-foreground ${ubuntuMono.className}`}>
                Experience
              </h2>
            </div>

            <div className="relative ml-3">
              {/* Timeline line */}
              <div className="absolute left-0 top-4 bottom-0 w-0.5 bg-gradient-to-b from-accent via-muted-foreground to-primary rounded-full" />

              {workExperiences.map((work, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-8 pb-12 last:pb-0"
                >
                  {/* Glowing Timeline Dot */}
                  <div className="absolute h-4 w-4 -translate-x-1/2 left-px top-3 rounded-full bg-gradient-to-r from-accent to-muted-foreground shadow-lg shadow-accent/50 border-2 border-background animate-pulse" />

                  {/* Content Card */}
                  <div className="backdrop-blur-md bg-background/20 border border-white/10 rounded-2xl p-6 hover:bg-background/30 transition-all duration-300 group shadow-lg">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="shrink-0 h-12 w-12 bg-gradient-to-br from-accent/20 to-muted/20 rounded-full flex items-center justify-center border border-accent/30 group-hover:scale-110 transition-transform">
                        {work.company_logo ? (
                          <Image
                            src={work.company_logo}
                            alt="Company logo"
                            className="w-10 h-10 object-cover rounded-full"
                            width={40}
                            height={40}
                          />
                        ) : (
                          <Building2 className="h-6 w-6 text-accent-foreground" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-foreground transition-colors">
                          {work.company_name}
                        </h3>
                        <p className="text-accent-foreground font-medium">{work.role}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 text-accent-foreground" />
                      <span>
                        {work.start ? work.start : ""}{" "}
                        {work.start && work.end ? "–" : ""}
                        {work.end} • {work.place}
                      </span>
                    </div>

                    <p className="text-sm sm:text-base text-foreground/80 mb-4 leading-relaxed">
                      {work.description}
                    </p>

                    {work.technologies && (
                      <div className="flex flex-wrap gap-2">
                        {work.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="rounded-full bg-accent/20 text-accent-foreground border border-foreground/30 hover:bg-accent/30 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
