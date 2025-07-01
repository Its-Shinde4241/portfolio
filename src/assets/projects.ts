// Define the Project type first
export interface Project {
  name: string;
  description: string;
  technologies: string[];
  url: string | null;
  timstamp: string;
  template: string;
  github: string;
  homepage: string;
}

// Then export the projects array
export const projects: Project[] = [
  {
    name: "Wellyfy Pro",
    description:
      "A smart, intuitive healthcare web application built to <strong> bridge </strong> the gap between <strong> patients </strong>  and <strong> doctors </strong> .",
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
    timstamp: "Mar.2025",
    template: "web-App",
    github: "https://github.com/Its-Shinde4241/Wellify",
    homepage: "/projectPreviews/Wellify.png",
  },
  {
    name: "Sr-Jr Connect",
    description:
      "Developed a student networking platform connecting <strong>juniors</strong> and <strong>seniors </strong> for academic mentorship.Implemented encrypted, <strong>real-time</strong> messaging and secure data handling",
    technologies: ["React", "MongoDB", "Crypto.js", "Express", "Socket.io"],
    url: "https://sr-jr-connect.onrender.com/",
    timstamp: "Jan.2025 - Feb.2025",
    template: "Web-App",
    github: "https://github.com/Its-Shinde4241/Sr-Jr-connect",
    homepage: "/projectPreviews/SrJr.png",
  },
  {
    name: "Chit-Chat Web",
    description:
      "Built a fully functional <strong>real-time</strong> messaging platform using the <strong> MERN </strong> stack.Integrated user authentication and user profile management",
    technologies: [
      "Python",
      "FastAPI",
      "OpenAI API",
      "PostgreSQL",
      "Docker",
    ],
    url: "https://chitchat-kds1.onrender.com/",
    timstamp: "Jan.2025 - Feb.2025",
    template: "web-app",
    github: "https://github.com/Its-Shinde4241/Chatting-Messaging--Website",
    homepage: "/projectPreviews/ChitChat.png",
  },
  {
    name: "Sodoku Game",
    description:
      "A simple game created using <strong>java GUI</strong> and core java backend to create and solve <strong>different levels</strong> of sudoku .",
    technologies: ["Java", "GUI", "Intellij"],
    url: null,
    timstamp: "Apr.2025",
    template: "Core Java",
    github: "https://github.com/Its-Shinde4241/Sudoku-Java",
    homepage: "/projectPreviews/Sudoku.png",
  },
];
