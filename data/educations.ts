import { Education, Work } from '../types';

export const educations: Education[] = [
  {
    end: "May 2021",
    title: "SSC - 10th grade",
    description:
      "Successfully completed Secondary School Certificate with an outstanding score of <strong>95.80%</strong>, laying a strong academic foundation.",
    place: "Nashik",
    institute: "Vainateya Vidyalaya, Niphad",
    logoLink: "/EducationInstitutes/Vainateya_school.png",
    technologies: ["Mathematics", "Science", "English", "Sanskrit"],
  },
  {
    end: "March 2023",
    title: "HSC - 12th grade",
    description:
      "Completed Higher Secondary Certificate (Science) with <strong>88.33%</strong>, demonstrating consistent performance and dedication.",
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
      "Achieved an excellent <strong>percentile of 99.71%</strong> in the Maharashtra Common Entrance Test, securing eligibility for top engineering institutes.",
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
      "Currently pursuing a Bachelor's degree in Computer Engineering with a remarkable <strong>GPA of 9.80</strong>  , focusing on software development and emerging technologies.",
    place: "Pune",
    institute: "Pune Institute of Computer Technology",
    logoLink: "/EducationInstitutes/PICT_College.png",
    technologies: ["Software Engineering", "DSA", "OOP", "DBMS", "CNS", "OS"],
  },
];

export const workExperiences: Work[] = [
  {
    company_name: "Acumenn Money pvt. ltd.",
    company_logo: "/workExp/acumenn_money.png",
    role: "Software Developer Intern",
    start: "June 2025",
    end: "July 2025",
    place: "Hybrid",
    description:
      "Worked as a Software Developer Intern at Acumenn money, contributing to the development of dynamic web applications using React, TypeScript, and modern UI frameworks. Implemented responsive user interfaces, optimized performance, and collaborated with senior developers to deliver high-quality features within tight deadlines.",
    technologies: ["React", "TypeScript", "Node.js", "Postgres", "Supabase", "shadcn UI", "Tailwind CSS"],
  },
];