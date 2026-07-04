"use client";

import { useEffect } from "react";
import { ArrowUpRight, X } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  useCarousel,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { Project } from "@/lib/data";

type Props = {
  project: Project | null;
  onClose: () => void;
};

function CarouselPagination() {
  const { api, selectedIndex, count } = useCarousel();

  if (count <= 1) return null;

  return (
    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-black/40 px-3 py-1.5">
      <div className="flex items-center gap-1.5">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            onClick={() => api?.scrollTo(i)}
            className={`rounded-full transition-all ${
              i === selectedIndex
                ? "w-4 h-1.5 bg-white"
                : "w-1.5 h-1.5 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export function ProjectModal({ project, onClose }: Props) {
  // Lock body scroll when open
  useEffect(() => {
    if (!project) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [project]);

  return (
    <Dialog open={!!project} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-6xl overflow-hidden p-0 sm:rounded-2xl">
        <DialogHeader className="sr-only">
          <DialogTitle>{project?.title}</DialogTitle>
        </DialogHeader>

        {project && (
          <>
            <Carousel
              opts={{ loop: true }}
              className="w-full"
            >
              <CarouselContent className="m-0">
                {project.images.map((src, i) => (
                  <CarouselItem key={i} className="pl-0">
                    <div className="aspect-16/10 w-full bg-muted">
                      <img
                        src={src}
                        alt={`${project.title} screenshot ${i + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-3 h-9 w-9" />
              <CarouselNext className="right-3 h-9 w-9" />
              <CarouselPagination />
            </Carousel>

            <div className="flex flex-col gap-5 p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border px-2.5 py-0.5 text-[11px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {project.longDescription}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                <Button asChild size="sm" className="rounded-md px-3">
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    Live demo <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm" className="rounded-md px-3">
                  <a href={project.repoUrl} target="_blank" rel="noreferrer">
                    Source code
                  </a>
                </Button>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}