"use client";

import { motion } from "framer-motion";
import { FiArrowDownRight, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <motion.div
        className="mx-auto max-w-6xl px-6 pt-24 pb-32 md:pt-36 md:pb-40"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={fadeInUp}
          className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-foreground" />
          Available for work · July 2026
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl"
        >
          Hi, Levin here
          <br />
          <span className="text-muted-foreground">I build things for the web</span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="mt-8 max-w-xl text-base text-muted-foreground md:text-lg"
        >
          Full-stack developer focused on crafting clean, performant, and accessible
          digital experiences. I turn complex problems into simple, elegant interfaces.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Button asChild size="lg" className="rounded-md px-4">
            <a href="#contact">
              Let&apos;s work together
               <FiArrowDownRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-md px-4">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          </Button>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mt-14 flex items-center gap-5 text-muted-foreground"
        >
          <a href="https://github.com/levinslmt" target="_blank" rel="noreferrer" aria-label="GitHub"
             className="transition hover:text-foreground">
             <FaGithub className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"
             className="transition hover:text-foreground">
             <FaLinkedin className="h-5 w-5" />
          </a>
          <a href="mailto:hello@levin.dev" aria-label="Email"
             className="transition hover:text-foreground">
             <FiMail className="h-5 w-5" />
          </a>
        </motion.div>
      </motion.div>

      {/* subtle grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035] dark:opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
    </section>
  );
}
