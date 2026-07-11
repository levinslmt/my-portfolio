"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function About() {
  return (
    <section className="md:py-32 py-24 px-6 max-w-6xl mx-auto border-t">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl space-y-6"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-bold tracking-tighter"
        >
          About Me
        </motion.h2>

        <div className="space-y-4 mt-10 text-muted-foreground leading-relaxed">
          <motion.p variants={fadeInUp}>
            Hey! I&apos;m <b>Levin Salamat</b>, a recent Information Technology
            graduate with a passion for building modern web applications. I&apos;m
            excited to begin my career as a software developer and continue
            growing through real-world projects and continuous learning.
          </motion.p>

          <motion.p variants={fadeInUp}>
            I enjoy working across the full stack—from designing clean,
            responsive user interfaces to building scalable backend systems and
            databases. What I love most is turning an idea into a complete
            product that people can actually use.
          </motion.p>

          <motion.p variants={fadeInUp}>
            When I&apos;m not coding, you&apos;ll probably find me grinding some online
            games or experimenting in the kitchen. Cooking is basically just
            debugging with ingredients, right?
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
