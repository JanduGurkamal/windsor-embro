"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";

export function BrandStory() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] text-[#fafaf8]">
      <div className="grid lg:grid-cols-2">
        <div className="relative aspect-square lg:aspect-auto lg:min-h-[80vh]">
          <Image
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1200&q=80"
            alt="Windsor Embro craftsmanship"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="flex flex-col justify-center section-padding section-py lg:pl-16 xl:pl-24">
          <Reveal>
            <p className="label-luxury mb-4 text-[#c4b5a0]">Our Philosophy</p>
          </Reveal>
          <TextReveal
            as="h2"
            className="heading-md text-[#fafaf8] max-w-lg"
            splitBy="words"
          >
            Built slow. Worn forever.
          </TextReveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-md text-sm leading-relaxed text-[#a8a29e] sm:text-base">
              Windsor Embro was born from a refusal to accept disposable fashion.
              We merge London street culture with atelier-level embroidery — each
              garment engineered to age beautifully, not deteriorate.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-block text-xs uppercase tracking-[0.2em] text-[#c4b5a0] link-underline"
            >
              Read our story
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
