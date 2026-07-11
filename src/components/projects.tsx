"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ProjectModal } from "./project-modal";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-end justify-between gap-6"
          >
            <div>
              <motion.p
                variants={fadeInUp}
                className="text-xs uppercase tracking-[0.2em] text-muted-foreground"
              >
                 Selected Work
              </motion.p>
              <motion.h2
                variants={fadeInUp}
                className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl"
              >
                Projects
              </motion.h2>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((p) => (
              <motion.div key={p.id} variants={fadeInUp}>
                <button
                  onClick={() => setActive(p)}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card text-left transition hover:border-foreground/40"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
                    <img
                      src={p.images[0]}
                      alt={p.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg font-medium">{p.title}</h3>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-border px-2.5 py-0.5 text-[11px] text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex flex-wrap gap-2 pt-4">
                      <Button asChild size="sm" className="rounded-md px-3">
                        <a href={p.liveUrl} target="_blank" rel="noreferrer">
                          Live demo <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                        </a>
                      </Button>
                      <Button asChild variant="outline" size="sm" className="rounded-md px-3">
                        <a href={p.repoUrl} target="_blank" rel="noreferrer">
                          Source code
                        </a>
                      </Button>
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </>
  );
}
