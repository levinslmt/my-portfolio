"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { fadeIn } from "@/lib/animations";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <motion.footer
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="border-t border-border"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center">
        <div className="text-sm text-muted-foreground">
          © {year} levinjstn. Designed & built with care.
        </div>
        <div className="flex items-center gap-4 text-muted-foreground">
          <a href="https://github.com/levinslmt" target="_blank" rel="noreferrer" aria-label="GitHub"
             className="transition hover:text-foreground">
             <FaGithub className="h-4 w-4" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"
             className="transition hover:text-foreground">
             <FaLinkedin className="h-4 w-4" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"
             className="transition hover:text-foreground">
             <FaTwitter className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
