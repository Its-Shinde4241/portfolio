import { Project } from '../types';
import wellify from "../assets/wellify.jpg";
import intelliroom from "../assets/intelliroom.png";
import prajanetra from "../assets/prajanetra.png";
import srjrconnect from "../assets/srjrconnect.png";
import chitchat from "../assets/chitchat.png";
export const projects: Project[] = [
  {
    name: "IntelliRoom",
    description:
      "A <strong>code editor</strong> and <strong>AI-powered project generator</strong> built with <strong>React (TypeScript)</strong> and <strong>Node.js</strong>. Includes authentication via Firebase (Email + Google). Features an in-browser editor with AI assistance.",
    technologies: ["React", "TypeScript", "Node.js", "Firebase Auth", "MySQL/PostgreSQL", "Prisma"],
    url: "https://intelli-room.vercel.app/",
    github: "https://github.com/Its-Shinde4241/intelliroom",
    backimage: intelliroom.src,
  },
  {
    name: "Wellify",
    description:
      "A smart, intuitive healthcare web application built to <strong> bridge </strong> the gap between <strong> patients </strong>  and <strong> doctors </strong>.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "TensorFlow",
      "JWT",
      "Daisy UI",
    ],
    url: null,
    github: "https://github.com/Its-Shinde4241/Wellify",
    backimage: wellify.src,
  },
  {
    name: "Prajanetra",
    description:
      "Developed a civic engagement platform enabling <strong>citizens</strong> to report <strong>municipal issues</strong> directly to corporations. Implemented <strong>real-time</strong> complaint tracking, community feedback system, and <strong>anonymous reporting</strong> with secure data handling.",
    technologies: [
      "spring boot",
      "Java",
      "react",
      "supabase buckets",
      "tailwind css",
      "shadcn ui",
    ],
    url: null,
    github: "https://github.com/Its-Shinde4241/PrajaNetra/tree/dev",
    backimage: prajanetra.src,
  },
  {
    name: "Sr-Jr Connect",
    description:
      "Developed a student networking platform connecting <strong>juniors</strong> and <strong>seniors </strong> for academic mentorship. Implemented encrypted, <strong>real-time</strong> messaging and secure data handling.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "Nodemailer",
      "JWT",
      "Daisy UI",
    ],
    url: "https://sr-jr-connect.onrender.com/",
    github: "https://github.com/Its-Shinde4241/Sr-Jr-connect",
    backimage: srjrconnect.src,
  },
  {
    name: "Chit-Chat Web",
    description:
      "Built a fully functional <strong>real-time</strong> messaging platform using the <strong> MERN </strong> stack. Integrated user authentication and user profile management.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "Socket.io",
      "MongoDB",
      "Daisy UI",
    ],
    url: "https://chitchat-kds1.onrender.com/",
    github: "https://github.com/Its-Shinde4241/Chatting-Messaging--Website",
    backimage: chitchat.src,
  },
];