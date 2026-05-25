"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";

const socialImages = [
  "https://images.unsplash.com/photo-1529139573326-2c4b3a246a38?w=600&q=80",
  "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
  "https://images.unsplash.com/photo-1469334031218-e42a55436061?w=600&q=80",
  "https://images.unsplash.com/photo-1515886657613-9f3525f0cc69?w=600&q=80",
  "https://images.unsplash.com/photo-1483985988350-763728e6675b?w=600&q=80",
  "https://images.unsplash.com/photo-1496747611176-843222e1e14c?w=600&q=80",
];

export function SocialProof() {
  return (
    <section className="section-py overflow-hidden">
      <Reveal className="section-padding mb-10">
        <p className="label-luxury mb-4">Community</p>
        <a
          href="https://www.instagram.com/windsor.embro"
          target="_blank"
          rel="noopener noreferrer"
          className="heading-md link-underline inline-block"
        >
          @windsor.embro
        </a>
      </Reveal>

      <div className="flex gap-3 overflow-x-auto no-scrollbar section-padding pb-2">
        {socialImages.map((src, i) => (
          <div
            key={i}
            className="relative h-64 w-48 shrink-0 overflow-hidden bg-secondary sm:h-80 sm:w-60"
          >
            <Image
              src={src}
              alt={`Windsor Embro community ${i + 1}`}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="240px"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
