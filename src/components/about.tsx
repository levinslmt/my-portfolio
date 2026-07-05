// components/About.tsx

export default function About() {
  return (
    <section className="md:py-32 py-24 px-6 max-w-6xl mx-auto border-t">
      {/* Removed the grid, used max-w-3xl to make it wider, and kept it left-aligned */}
      <div className="max-w-4xl space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
          About Me
        </h2>

        <div className="space-y-4 mt-10 text-muted-foreground leading-relaxed">
          <p>
            Hey! I'm <b>Levin Salamat</b>, a recent Information Technology
            graduate with a passion for building modern web applications. I'm
            excited to begin my career as a software developer and continue
            growing through real-world projects and continuous learning.
          </p>

          <p>
            I enjoy working across the full stack—from designing clean,
            responsive user interfaces to building scalable backend systems and
            databases. What I love most is turning an idea into a complete
            product that people can actually use.
          </p>

          <p>
            When I'm not coding, you'll probably find me grinding some online
            games or experimenting in the kitchen. Cooking is basically just
            debugging with ingredients, right?
          </p>
        </div>
      </div>
    </section>
  );
}
