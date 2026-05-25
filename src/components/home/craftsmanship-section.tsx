"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Reveal } from "@/components/motion/reveal";

gsap.registerPlugin(ScrollTrigger);

export function CraftsmanshipSection() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = imageRef.current;
    if (!el) return;

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

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div ref={imageRef} className="relative h-[70vh] min-h-[400px] sm:h-[85vh]">
        <Image
          src="https://images.unsplash.com/photo-1618354691373-d851ffd5ae98?w=1920&q=80"
          alt="Embroidery craftsmanship macro detail"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center section-padding">
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
