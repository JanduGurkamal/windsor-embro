"use client";

import useEmblaCarousel from "embla-carousel-react";
import { Reveal } from "@/components/motion/reveal";

const testimonials = [
  {
    quote:
      "The embroidery density is unlike anything I've owned. This feels like a $900 piece.",
    author: "James R.",
    role: "Creative Director",
  },
  {
    quote:
      "Windsor handled our brand drop — 200 units, flawless consistency across every piece.",
    author: "Maya K.",
    role: "Brand Founder",
  },
  {
    quote:
      "Finally streetwear that doesn't feel disposable. The Monarch Crew is permanent rotation.",
    author: "Alex T.",
    role: "Stylist",
  },
];

export function Testimonials() {
  const [emblaRef] = useEmblaCarousel({ align: "start", loop: true, dragFree: true });

  return (
    <section className="section-padding section-py bg-secondary/50">
      <Reveal>
        <p className="label-luxury mb-4">Voices</p>
        <h2 className="heading-md">Trusted by creators.</h2>
      </Reveal>

      <div className="mt-12 overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="min-w-[85vw] shrink-0 sm:min-w-[400px] md:min-w-[480px] border border-foreground/10 bg-background p-8 sm:p-10"
            >
              <p className="font-display text-xl sm:text-2xl font-medium leading-snug tracking-tight">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-8">
                <p className="text-sm font-medium">{t.author}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
