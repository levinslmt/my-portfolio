"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { categories, techStack, type Category } from "@/lib/data";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

export function TechStack() {
  const [active, setActive] = useState<Category>("All");
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  const isDark = mounted && resolvedTheme === "dark";

  const filtered =
    active === "All" ? techStack : techStack.filter((t) => t.category === active);

  return (
    <section id="stack" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            variants={fadeInUp}
            className="text-xs uppercase tracking-[0.2em] text-muted-foreground"
          >
             Toolkit
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl"
          >
            Tech stack
          </motion.h2>

          {/* Filter buttons */}
          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-wrap gap-2"
          >
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={cn(
                  "rounded-md border px-4 py-1.5 text-sm transition",
                  active === c
                    ? "border-foreground bg-foreground text-background"
                    : "border-border text-muted-foreground hover:text-foreground"
                )}
              >
                {c}
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* Tech grid */}
        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">
          <AnimatePresence mode="popLayout">
            {filtered.map((tech) => (
              <motion.div
                key={tech.name}
                layout
                variants={scaleIn}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="flex flex-col items-center gap-3 p-4"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-background">
                  <tech.icon className="h-10 w-10" style={{ color: isDark && tech.colorDark ? tech.colorDark : tech.color }} />
                </div>
                <span className="text-xs font-semibold">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
