"use client";

import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "The embroidery density is unlike anything I've owned. This feels like a $900 piece.",
    author: "James R.",
    role: "Creative Director",
  },
  {
    quote: "Windsor handled our brand drop — 200 units, flawless consistency.",
    author: "Maya K.",
    role: "Brand Founder",
  },
  {
    quote: "Finally streetwear that doesn't feel disposable. Permanent rotation.",
    author: "Alex T.",
    role: "Stylist",
  },
];

export function Testimonials() {
  const [emblaRef] = useEmblaCarousel({ align: "start", loop: true, dragFree: true });

  return (
    <section className="relative overflow-hidden bg-[#e8e4de]">
      <div className="section-padding section-py-tight">
        <p className="label-editorial mb-16 text-center text-muted-foreground">Voices</p>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-8 md:gap-12">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.author}
                className="min-w-[88vw] shrink-0 md:min-w-[55vw] lg:min-w-[42vw]"
                initial={{ opacity: 0.6 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <span className="font-display text-8xl font-light leading-none text-foreground/10">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 font-display text-[clamp(1.5rem,4vw,2.75rem)] font-medium leading-[1.15] tracking-tight">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-10 flex items-center gap-4 border-t border-foreground/15 pt-6">
                  <div className="h-px w-8 bg-[#c4b5a0]" />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.15em]">
                      {t.author}
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      {t.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
