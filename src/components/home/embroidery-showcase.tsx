"use client";

import Image from "next/image";
import { Reveal, StaggerReveal, StaggerItem } from "@/components/motion/reveal";

const shots = [
  {
    src: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80",
    title: "Thread density",
    desc: "12,000+ stitches per motif",
  },
  {
    src: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80",
    title: "Fabric integrity",
    desc: "Premium organic blends",
  },
  {
    src: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
    title: "Finishing",
    desc: "Hand-trimmed, zero compromise",
  },
];

export function EmbroideryShowcase() {
  return (
    <section className="section-padding section-py bg-background">
      <Reveal>
        <p className="label-luxury mb-4">The Detail</p>
        <h2 className="heading-lg text-balance max-w-2xl">
          Where thread becomes architecture.
        </h2>
      </Reveal>

      <StaggerReveal className="mt-12 grid gap-4 sm:grid-cols-3 sm:gap-6 md:mt-16">
        {shots.map((shot) => (
          <StaggerItem key={shot.title}>
            <div className="group relative aspect-[4/5] overflow-hidden bg-secondary">
              <Image
                src={shot.src}
                alt={shot.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#c4b5a0]">
                  {shot.title}
                </p>
                <p className="mt-1 text-sm text-[#fafaf8]">{shot.desc}</p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </section>
  );
}
