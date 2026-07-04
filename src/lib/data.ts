import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiGit,
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import type { IconType } from "react-icons";

export type Category = "All" | "Frontend" | "Backend" | "Tools";

export type Tech = {
  name: string;
  icon: IconType;
  color: string;
  colorDark?: string;
  category: Exclude<Category, "All">;
};

export const techStack: Tech[] = [
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", colorDark: "#F7DF1E", category: "Frontend" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", colorDark: "#82AAFF", category: "Frontend" },
  { name: "React", icon: SiReact, color: "#61DAFB", category: "Frontend" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000", colorDark: "#E0E0E0", category: "Frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", category: "Frontend" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E", category: "Backend" },
  { name: "Express", icon: SiExpress, color: "#000000", colorDark: "#E0E0E0", category: "Backend" },
  { name: "Python", icon: SiPython, color: "#3776AB", category: "Backend" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", category: "Backend" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", category: "Backend" },
  { name: "Prisma", icon: SiPrisma, color: "#2D3748", category: "Backend" },
  { name: "Git", icon: SiGit, color: "#F05032", category: "Tools" },
  { name: "VS Code", icon: DiVisualstudio, color: "#007ACC", category: "Tools" },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  liveUrl: string;
  repoUrl: string;
  images: string[];
};

// Replace these with your own images (e.g. /projects/p1-1.png)
export const projects: Project[] = [
  {
    id: "CampusCash",
    title: "Campus Cash",
    description: "A full-stack e-commerce platform with Stripe checkout and admin dashboard.",
    longDescription:
      "Atlas Commerce is a modern e-commerce platform built with Next.js and Stripe. It features server-side rendering, optimistic UI updates, an admin dashboard for inventory, and a fully typed API layer.",
    tags: ["Next.js", "TypeScript", "Stripe", "Prisma"],
    liveUrl: "https://campus-cash-mu.vercel.app",
    repoUrl: "https://github.com/levinslmt/campus-cash",
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=80",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600&q=80",
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=1600&q=80",
    ],
  },
  {
    id: "PantryPal",
    title: "Pantry Pal",
    description: "Real-time analytics dashboard with live charts and team collaboration.",
    longDescription:
      "Pulse is a real-time analytics dashboard that visualizes event streams with WebSockets. It supports custom dashboards, team workspaces, and exportable reports.",
    tags: ["React", "Node.js", "PostgreSQL", "WebSockets"],
    liveUrl: "https://pantry-pal-bay.vercel.app",
    repoUrl: "https://github.com/levinslmt/pantry-pal",
    images: [
      "/pantry-pal/PantryPal-LandingPage.png",
      "/pantry-pal/PantryPal-Dashboard.png",
      "/pantry-pal/PantryPal-SigninPage.png",
      "/pantry-pal/PantryPal-SignupPage.png",
      "/pantry-pal/PantryPal-SavedRecipe.png",
      "/pantry-pal/PantryPal-SavedPDF.png",
    ],
  },
  {
    id: "Whisper",
    title: "Whisper",
    description: "A minimal markdown blog with MDX, full-text search, and RSS.",
    longDescription:
      "Inkwell is a statically generated blog engine powered by MDX. It ships with full-text search, syntax highlighting, RSS, and a clean reading experience.",
    tags: ["Next.js", "Tailwind", "MDX", "MongoDB"],
    liveUrl: "https://whisper-chi-five.vercel.app",
    repoUrl: "https://github.com/levinslmt/whisper",
    images: [
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1600&q=80",
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1600&q=80",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1600&q=80",
    ],
  },
];

export const categories: Category[] = ["All", "Frontend", "Backend", "Tools"];