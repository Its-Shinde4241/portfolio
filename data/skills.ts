
import { ReactNode } from "react";
import {
  SiJavascript,
  SiTypescript,
  SiC,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiGit,
  SiGithub,
  SiVercel,
  SiPostman,
  SiSupabase,
  SiPrisma,
  SiPostgresql,
  SiPython,
  SiMysql,
  SiFirebase,
  SiSpringboot,
  SiJira,
  SiSlack,
  SiDocker,
  SiBootstrap,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaJava, FaMicrosoft } from "react-icons/fa";
import { SiIntellijidea } from "react-icons/si";
import { FaBookSkull } from "react-icons/fa6";
import { PiGraph, PiNetworkFill } from "react-icons/pi";
import { BsDatabaseFillGear } from "react-icons/bs";

export interface Skill {
  name: string;
  icon: ReactNode;
}

// Languages
export const languages: Skill[] = [
  { name: "JavaScript", icon: SiJavascript({ color: "#F7DF1E" }) },
  { name: "TypeScript", icon: SiTypescript({ color: "#3178C6" }) },
  { name: "C", icon: SiC({ color: "#283593" }) },
  { name: "C++", icon: SiCplusplus({ color: "#00599C" }) },
  { name: "Java", icon: FaJava({ color: "#007396" }) },
  { name: "Python", icon: SiPython({ color: "#3776AB" }) },
  { name: "HTML", icon: SiHtml5({ color: "#E44D26" }) },
  { name: "CSS", icon: SiCss3({ color: "#264DE4" }) },
];

// Frameworks & Libraries
export const frameworksAndLibraries: Skill[] = [
  { name: "React", icon: SiReact({ color: "#61DBFB" }) },
  { name: "Next.js", icon: SiNextdotjs({}) },
  { name: "Express.js", icon: SiExpress({}) },
  { name: "Node.js", icon: SiNodedotjs({ color: "#3C873A" }) },
  { name: "Tailwind CSS", icon: SiTailwindcss({ color: "#38BDF8" }) },
  { name: "Bootstrap", icon: SiBootstrap({ color: "#7952B3" }) },
  { name: "Spring Boot", icon: SiSpringboot({ color: "#6DB33F" }) },
];

// Databases & Backend Services
export const databases: Skill[] = [
  { name: "MongoDB", icon: SiMongodb({ color: "#4DB33D" }) },
  { name: "PostgreSQL", icon: SiPostgresql({ color: "#4169E1" }) },
  { name: "MySQL", icon: SiMysql({ color: "#4479A1" }) },
  { name: "Supabase", icon: SiSupabase({ color: "#3ECF8E" }) },
  { name: "Firebase", icon: SiFirebase({ color: "#FFCA28" }) },
  { name: "Prisma", icon: SiPrisma({}) },
];

// Developer Tools
export const devTools: Skill[] = [
  { name: "Git", icon: SiGit({ color: "#F05032" }) },
  { name: "GitHub", icon: SiGithub({}) },
  { name: "VS Code", icon: VscVscode({ color: "#0078d7" }) },
  { name: "IntelliJ IDEA", icon: SiIntellijidea({ color: "#000000" }) },
  { name: "Vercel", icon: SiVercel({}) },
  { name: "Postman", icon: SiPostman({ color: "#FF6C37" }) },
  { name: "Docker", icon: SiDocker({ color: "#2496ED" }) },
  { name: "Jira", icon: SiJira({ color: "#0052CC" }) },
  { name: "Slack", icon: SiSlack({ color: "#4A154B" }) },
];

// All skills combined
export const allSkills: Skill[] = [
  ...languages,
  ...frameworksAndLibraries,
  ...databases,
  ...devTools,
];

export const coreSubjects: Skill[] = [
  { name: "Data Structures & Algorithms", icon: PiGraph({}) },
  { name: "Object-Oriented Programming", icon: FaBookSkull({}) },
  { name: "Database Management Systems", icon: BsDatabaseFillGear({}) },
  { name: "Computer Networks", icon: PiNetworkFill({}) },
  { name: "Operating Systems", icon: FaMicrosoft({}) },
]