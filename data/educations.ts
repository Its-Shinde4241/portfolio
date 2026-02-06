import { Education, Work } from '../types';
import accumen_money_logo from '@/assets/acumenn_money.png';
import school from '@/assets/shcool.webp';
import CET from '@/assets/CET.jpg';
import HSC from '@/assets/HSC.png';
import Engineering from '@/assets/Engineering.jpg';
export const educations: Education[] = [
  {
    end: "2021",
    start: "2020",
    title: "SSC - 10th grade",
    description:
      "Successfully completed Secondary School Certificate with an outstanding score of <strong>95.80%</strong>, laying a strong academic foundation.",
    place: "Nashik",
    institute: "Vainateya Vidyalaya, Niphad",
    logoLink: school.src,
    technologies: ["Mathematics", "Science", "English", "Sanskrit"],
  },
  {
    end: " 2023",
    start: "2021",
    title: "HSC - 12th grade",
    description:
      "Completed Higher Secondary Certificate (Science) with <strong>88.33%</strong>, demonstrating consistent performance and dedication.",
    place: "Nashik",
    institute: "H.A.L. College of Science and Commerce, Ozar (Nashik)",
    logoLink: HSC.src,
    technologies: ["Physics", "Chemistry", "Mathematics", "Biology"],
  },
  {
    start: "Apr ",
    end: "June 2023",
    title: "MHT-CET",
    description:
      "Achieved an excellent <strong>percentile of 99.71%</strong> in the Maharashtra Common Entrance Test, securing eligibility for top engineering institutes.",
    place: "Nashik",
    institute: "Ram-Raj Junior College, Nashik",
    logoLink: CET.src,
    technologies: ["Mathematics", "Physics", "Chemistry"],
  },
  {
    start: "2023",
    end: " Present",
    title: "BE Computer Engineering",
    description:
      "Currently pursuing a Bachelor's degree in Computer Engineering with a remarkable <strong>GPA of 9.80</strong>  , focusing on software development and emerging technologies.",
    place: "Pune",
    institute: "Pune Institute of Computer Technology",
    logoLink: Engineering.src,
    technologies: ["Software Engineering", "DSA", "OOP", "DBMS", "CNS", "OS"],
  },
];

export const workExperiences: Work[] = [
  {
    company_name: "Acumenn Money pvt. ltd.",
    company_logo: accumen_money_logo.src,
    role: "Software Developer Intern",
    start: "June ",
    end: "July 2025",
    place: "Hybrid",
    description:
      "Worked as a Software Developer Intern at Acumenn money, contributing to the development of dynamic web applications using React, TypeScript, and modern UI frameworks. Implemented responsive user interfaces, optimized performance, and collaborated with senior developers to deliver high-quality features within tight deadlines.",
    technologies: ["React", "TypeScript", "Node.js", "Postgres", "Supabase", "shadcn UI", "Tailwind CSS"],
  },
];