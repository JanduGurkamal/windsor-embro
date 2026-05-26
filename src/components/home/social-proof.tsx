"use client";

import Image from "next/image";
import { Marquee } from "@/components/editorial/marquee";

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
    <section className="relative overflow-hidden bg-[#080808] py-20 md:py-28">
      <div className="section-padding mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="label-editorial text-[#c4b5a0]">Community</p>
          <a
            href="https://www.instagram.com/windsor.embro"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block font-display text-[clamp(2rem,6vw,4rem)] font-semibold tracking-tight text-[#fafaf8] link-underline"
          >
            @windsor.embro
          </a>
        </div>
        <p className="max-w-xs text-[10px] uppercase leading-relaxed tracking-[0.25em] text-[#78716c]">
          Tag us. Join the Windsor uniform.
        </p>
      </div>

      <div className="flex gap-3 overflow-hidden">
        <div className="marquee-slow flex min-w-max shrink-0 gap-3">
          {[...socialImages, ...socialImages].map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="relative h-72 w-52 shrink-0 overflow-hidden md:h-96 md:w-64"
            >
              <Image
                src={src}
                alt={`Windsor community ${(i % socialImages.length) + 1}`}
                fill
                className="object-cover opacity-90 transition-all duration-700 hover:scale-105 hover:opacity-100"
                sizes="256px"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-[#fafaf8]/10" />
            </div>
          ))}
        </div>
      </div>

      <Marquee
        dark
        className="mt-12 border-[#fafaf8]/10"
        items={["Instagram", "Lookbook", "Campaign", "Windsor"]}
      />
    </section>
  );
}
