"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { Reveal } from "@/components/motion/reveal";

export function CraftsmanshipSection() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = imageRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isCoarse = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    if (prefersReduced || isCoarse || window.innerWidth < 1024) return;

    let killed = false;

    const run = async () => {
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (killed || !el) return;

      gsap.to(el, {
        yPercent: -12,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    };

    run();

    return () => {
      killed = true;
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        ScrollTrigger.getAll().forEach((t) => {
          if (t.trigger === el) t.kill();
        });
      });
    };
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[70vh] min-h-[400px] overflow-hidden bg-[#1c1917] sm:h-[85vh]">
        <div ref={imageRef} className="absolute inset-0 will-change-transform">
          <Image
            src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=1400&q=75&auto=format"
            alt="Embroidery craftsmanship macro detail"
            fill
            className="object-cover"
            sizes="100vw"
            priority={false}
          />
        </div>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 z-10 flex items-center justify-center section-padding">
          <Reveal className="text-center max-w-2xl">
            <p className="label-luxury mb-4 text-[#c4b5a0]">Craftsmanship</p>
            <h2 className="heading-lg text-[#fafaf8] text-balance">
              Every stitch placed with intention.
            </h2>
            <p className="mt-6 text-sm text-[#d6d3d1] sm:text-base leading-relaxed">
              We don&apos;t decorate garments — we engineer them. Windsor embroidery
              is built to outlast trends.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
