import { rubik80sFade, ubuntuMono } from "@/lib/googleFonts";
import { Button } from "./ui/button";
import React, { useRef, useEffect, useState } from "react";
import { Card } from "./Card";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";
import Image from "next/image";

interface project {
  name: string;
  description?: string;
  template?: string;
  post?: string;
  technologies: string[];
  homepage?: string;
  url: string | null;
  timestamp?: string;
  github?: string;
}

function Projects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Then export the projects array
  const projects: project[] = [
    {
      name: "Wellyfy Pro",
      description:
        "A smart, intuitive healthcare web application built to <strong> bridge </strong> the gap between <strong> patients </strong>  and <strong> doctors </strong>.",
      technologies: [
        "React",
        "Javascript",
        "Node.js",
        "MongoDB",
        "Socket.io",
        "tensorFlow",
        "Python",
      ],
      url: null,
      timestamp: "Mar.2025",
      template: "web-App",
      github: "https://github.com/Its-Shinde4241/Wellify",
      homepage: "/Wellify.png",
    },
    {
      name: "Sr-Jr Connect",
      description:
        "Developed a student networking platform connecting <strong>juniors</strong> and <strong>seniors </strong> for academic mentorship.Implemented encrypted, <strong>real-time</strong> messaging and secure data handling .",
      technologies: ["React", "MongoDB", "Crypto.js", "Express", "Socket.io"],
      url: "https://sr-jr-connect.onrender.com/",
      timestamp: "Jan.2025 - Feb.2025",
      template: "Web-App",
      github: "https://github.com/Its-Shinde4241/Sr-Jr-connect",
      homepage: "/SrJr.png",
    },
    {
      name: "Chit-Chat Web",
      description:
        "Built a fully functional <strong>real-time</strong> messaging platform using the <strong> MERN </strong> stack.Integrated user authentication and user profile management .",
      technologies: ["Python", "FastAPI", "OpenAI API", "PostgreSQL", "Docker"],
      url: "https://chitchat-kds1.onrender.com/",
      timestamp: "Dec 2024",
      template: "web-app",
      github: "https://github.com/Its-Shinde4241/Chatting-Messaging--Website",
      homepage: "/ChitChat.png",
    },
    {
      name: "Sodoku Game",
      description:
        "A simple game created using <strong>java GUI</strong> and core java backend to create and solve <strong>different levels</strong> of sudoku .",
      technologies: ["Java", "GUI", "Intellij"],
      url: null,
      timestamp: "Apr.2025",
      template: "Core Java",
      github: "https://github.com/Its-Shinde4241/Sudoku-Java",
      homepage: "/Sudoku.png",
    },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 420);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scrollToCard = (index: number) => {
    if (!scrollContainerRef.current || !cardRefs.current[index] || isMobile)
      return;

    const container = scrollContainerRef.current;
    const card = cardRefs.current[index];

    if (card) {
      const containerRect = container.getBoundingClientRect();
      const cardRect = card.getBoundingClientRect();

      const containerCenter = containerRect.width / 2;
      const cardCenter = cardRect.width / 2;
      const cardLeft = card.offsetLeft;

      const scrollLeft = cardLeft - containerCenter + cardCenter;

      container.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      if (!scrollContainerRef.current) return;

      const container = scrollContainerRef.current;
      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const distance = Math.abs(cardCenter - containerCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial call

      setTimeout(() => scrollToCard(1), 100);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isMobile]);

  const getDistance = (index: number) => {
    return Math.abs(index - activeIndex);
  };

  const cardVariants = {
    center: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      z: 0,
      transition: {
        type: "tween" as const,
        stiffness: 100,
        damping: 10,
      },
    },
    side: (distance: number) => ({
      scale: Math.max(0.7, 1 - distance * 0.15),
      opacity: Math.max(0.4, 1 - distance * 0.2),
      rotateY: distance > 0 ? 5 : -5,
      z: -distance * 50,
      transition: {
        type: "tween" as const,
        stiffness: 200,
        damping: 10,
      },
    }),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const handleCardClick = (index: number) => {
    if (!isMobile) {
      setActiveIndex(index);
      scrollToCard(index);
    }
  };

  // Mobile Grid Layout
  if (isMobile) {
    return (
      <div className=" py-10 px-4">
        <div className="relative mb-8">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.25, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={`absolute -top-2 -right-2 text-5xl xs:text-6xl opacity-30 dark:opacity-15 select-none ${rubik80sFade.className}`}
          >
            PROJECTS
          </motion.span>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-6 mt-16"
        >
          {projects.map((project: project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="w-full"
            >
              <Card className="rounded-sm overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="p-4">
                  {/* Project embed */}
                  <div className="w-full h-32 flex items-center mb-3 rounded-xs overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <Image
                      width={200}
                      height={150}
                      src={`${project.homepage}`}
                      alt={project.name}
                      className="rounded-xs w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Project Name */}
                  <h3
                    className={`text-base mb-2 text-primary ${ubuntuMono.className}`}
                  >
                    <strong>{project.name}</strong>
                  </h3>
                  <h2 className="text-foreground/60 text-sm">
                    {project.timestamp}
                  </h2>
                  <hr className="border-foreground/20 mb-3" />

                  {/* Project Description */}
                  <div
                    className="text-xs text-gray-600 dark:text-gray-400 mb-3 line-clamp-4"
                    dangerouslySetInnerHTML={{
                      __html: project.description || "No description available",
                    }}
                  />

                  <hr className="border-foreground/20 mb-3" />

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 justify-items-start items-center mb-3">
                    {project.technologies.map((tool, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="bg-foreground/10 text-xs px-2 py-1"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>

                  <hr className="border-foreground/20 mb-3" />

                  {/* Project Links */}
                  <div className="flex gap-2 mb-3 flex-wrap">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Badge
                          variant="outline"
                          className="py-1 bg-foreground text-background hover:bg-foreground/80 transition-colors text-xs"
                        >
                          Github
                        </Badge>
                      </a>
                    )}

                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Badge
                          variant="outline"
                          className="py-1 bg-primary text-primary-foreground hover:bg-primary/80 transition-colors text-xs"
                        >
                          Live Demo
                        </Badge>
                      </a>
                    )}

                    {project.post && (
                      <Button size="sm" className="text-xs py-1 px-2 h-auto">
                        Blog post
                      </Button>
                    )}
                  </div>

                  {/* Template Badge */}
                  {project.template && (
                    <Badge variant="secondary" className="text-xs">
                      {project.template}
                    </Badge>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  }

  // Desktop Horizontal Carousel Layout
  return (
    <div className=" py-10 sm:py-16 md:py-20">
      <div className="flex items-center justify-center w-full relative">
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.25, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`absolute top-1 right-1 sm:top-2 sm:right-2 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl opacity-30 select-none ${rubik80sFade.className}`}
        >
          PROJECTS
        </motion.span>

        {/* Container for project cards */}
        <div className=" w-[90%] md:w-full max-w-7xl mx-auto px-2 sm:px-4">
          <div className="flex items-center justify-center my-10 sm:my-16 md:my-20">
            {/* Navigation dots */}
            <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1 sm:gap-2 z-10">
              {projects.map((_, index) => (
                <button
                  type="button"
                  key={index}
                  onClick={() => handleCardClick(index)}
                  className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-600 ${
                    index === activeIndex
                      ? "bg-primary scale-125"
                      : "bg-gray-400 hover:bg-gray-600"
                  }`}
                  title={`Go to project ${index + 1}`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>

            {/* Scrollable container for cards */}
            <motion.div
              ref={scrollContainerRef}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex focus:outline-0 gap-4 sm:gap-6 md:gap-8 overflow-x-auto w-full pb-4 px-8 sm:px-12 md:px-16 lg:px-20 scrollbar-hide"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                scrollBehavior: "smooth",
                perspective: "1000px",
              }}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "ArrowRight") {
                  handleCardClick(
                    Math.min(activeIndex + 1, projects.length - 1)
                  );
                }
                if (e.key === "ArrowLeft") {
                  handleCardClick(Math.max(activeIndex - 1, 0));
                }
              }}
            >
              <div className="w-[calc(50%-8rem)] sm:w-[calc(50%-10rem)] shrink-0" />
              {projects.map((project: project, index) => {
                const distance = getDistance(index);
                const isCenter = index === activeIndex;

                return (
                  <motion.div
                    key={index}
                    ref={(el) => {
                      cardRefs.current[index] = el;
                    }}
                    className="flex-shrink-0 w-64 sm:w-72 md:w-80 min-w-64 sm:min-w-72 md:min-w-80 cursor-pointer"
                    variants={cardVariants}
                    animate={isCenter ? "center" : "side"}
                    custom={distance}
                    onClick={() => handleCardClick(index)}
                    whileHover={!isCenter ? { scale: 0.85 } : {}}
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <motion.div className="h-full">
                      <Card
                        className={`h-full rounded-sm overflow-hidden transition-all duration-600 ease-in-out ${
                          isCenter
                            ? "shadow-2xl border-zinc-400/50 cursor-default"
                            : "shadow-md hover:shadow-lg"
                        }`}
                      >
                        <div className="p-3 sm:p-4">
                          {/* Project embed */}
                          <motion.div
                            className="w-full h-32 sm:h-36 md:h-40 flex items-center mb-3 rounded-xs overflow-hidden bg-gray-100 dark:bg-gray-800"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Image
                              src={`${project.homepage}`}
                              alt={project.name}
                              className="rounded-xs w-full h-full object-cover"
                              loading="lazy"
                              width={200}
                              height={150}
                            />
                          </motion.div>

                          {/* Project Name */}
                          <motion.h3
                            className={`text-base sm:text-lg mb-2 truncate ${ubuntuMono.className}`}
                            animate={{
                              color: isCenter
                                ? "var(--primary)"
                                : "var(--foreground)",
                            }}
                          >
                            <strong>{project.name}</strong>
                          </motion.h3>

                          <h2 className="text-foreground/60 text-sm">
                            {project.timestamp}
                          </h2>
                          <hr className="border-foreground/20 mb-3" />

                          {/* Project Description */}
                          <div
                            className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-5"
                            dangerouslySetInnerHTML={{
                              __html:
                                project.description ||
                                "No description available",
                            }}
                          />

                          <hr className="border-foreground/20 mb-3" />

                          {/* Technologies */}
                          <div className="flex flex-wrap gap-1 sm:gap-2 justify-items-start items-center mb-3">
                            {project.technologies.map((tool, techIndex) => (
                              <motion.div
                                key={techIndex}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: techIndex * 0.1 }}
                              >
                                <Badge
                                  variant="outline"
                                  className="bg-foreground/10 text-xs px-2 py-1"
                                >
                                  {tool}
                                </Badge>
                              </motion.div>
                            ))}
                            {/* {project.technologies.length > 4 && (
                              <Badge variant="outline" className="bg-foreground/10 text-xs px-2 py-1">
                                +{project.technologies.length - 4}
                              </Badge>
                            )} */}
                          </div>

                          <hr className="border-foreground/20 mb-3" />

                          {/* Project Links */}
                          <div className="flex gap-1 sm:gap-2 mb-3 flex-wrap">
                            {project.github && (
                              <motion.a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <Badge
                                  variant="outline"
                                  className="py-1 bg-foreground text-background hover:bg-foreground/80 transition-colors text-xs"
                                >
                                  Source
                                </Badge>
                              </motion.a>
                            )}

                            {project.url && (
                              <motion.a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <Badge
                                  variant="outline"
                                  className="py-1 bg-primary text-primary-foreground hover:bg-primary/80 transition-colors text-xs"
                                >
                                  Live
                                </Badge>
                              </motion.a>
                            )}

                            {project.post && (
                              <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <Button
                                  size="sm"
                                  className="text-xs py-1 px-2 h-auto"
                                >
                                  Blog post
                                </Button>
                              </motion.div>
                            )}
                          </div>

                          {/* Template Badge */}
                          {project.template && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3 }}
                            >
                              <Badge variant="secondary" className="text-xs">
                                {project.template}
                              </Badge>
                            </motion.div>
                          )}
                        </div>
                      </Card>
                    </motion.div>
                  </motion.div>
                );
              })}
              <div className="w-[calc(50%-8rem)] sm:w-[calc(50%-10rem)] shrink-0" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
