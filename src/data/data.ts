import NextjsIcon from "../components/icons/NextjsIcon.astro";
import TailwindIcon from "../components/icons/TailwindIcon.astro";

export const INFORMATION = {
  NAME: "Felipe Contreras",
  TITLE: "Full Stack Developer",
  EMAIL: "confedev@gmail.com",
  SITES: {
    LINKEDIN: "https://www.linkedin.com/in/felipe-contreras-1b1b1b1b1/",
    GITHUB: "https://www.github.com/felipe-contreras-1b1b1b1b1/",
  },
};

export const TAGS = {
  NEXT: {
    name: "Next.js",
    class: "bg-black text-white",
    icon: NextjsIcon,
  },
  TAILWIND: {
    name: "Tailwind CSS",
    class: "bg-[#003159] text-white",
    icon: TailwindIcon,
  },
};

export const PROJECTS = [
  {
    title: "Project 1",
    description: "This is a project description",
    image: "/projects/base-project.webp",
    link: "https://www.google.com",
    github: "https://www.github.com",
    tags: [TAGS.NEXT, TAGS.TAILWIND],
  },
  {
    title: "Project 2",
    description: "This is a project description",
    image: "/projects/base-project.webp",
    link: "https://www.google.com",
    github: "https://www.github.com",
    tags: [TAGS.NEXT, TAGS.TAILWIND],
  },
  {
    title: "Project 3",
    description: "This is a project description",
    image: "/projects/base-project.webp",
    link: "https://www.google.com",
    github: "https://www.github.com",
    tags: [TAGS.NEXT, TAGS.TAILWIND],
  },
  {
    title: "Project 4",
    description: "This is a project description",
    image: "/projects/base-project.webp",
    link: "https://www.google.com",
    github: "https://www.github.com",
    tags: [TAGS.NEXT, TAGS.TAILWIND],
  },
  {
    title: "Project 5",
    description: "This is a project description",
    image: "/projects/base-project.webp",
    link: "https://www.google.com",
    github: "https://www.github.com",
    tags: [TAGS.NEXT, TAGS.TAILWIND],
  },
  {
    title: "Project 6",
    description: "This is a project description",
    image: "/projects/base-project.webp",
    link: "https://www.google.com",
    github: "https://www.github.com",
    tags: [TAGS.NEXT, TAGS.TAILWIND],
  },
];
