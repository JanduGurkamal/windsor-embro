"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";

const socialImages = [
  "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=480&q=70&auto=format",
  "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=480&q=70&auto=format",
  "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=480&q=70&auto=format",
  "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=480&q=70&auto=format",
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=480&q=70&auto=format",
  "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=480&q=70&auto=format",
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
