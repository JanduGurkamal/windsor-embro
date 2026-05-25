"use client";

import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { MagneticButton } from "@/components/motion/magnetic-button";

export function CtaSection() {
  return (
    <section className="section-padding section-py">
      <Reveal>
        <div className="relative overflow-hidden bg-[#0a0a0a] px-8 py-20 text-[#fafaf8] sm:px-16 sm:py-28 md:px-24">
          <div className="absolute inset-0 luxury-gradient opacity-30" />
          <div className="relative z-10 max-w-2xl">
            <p className="label-luxury mb-4 text-[#c4b5a0]">Start Your Project</p>
            <h2 className="heading-lg text-balance">
              Ready to wear something that lasts?
            </h2>
            <p className="mt-6 text-sm text-[#a8a29e] leading-relaxed max-w-md">
              Shop the collection or commission bespoke embroidery for your brand,
              team, or personal wardrobe.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <MagneticButton
                className="h-14 bg-[#fafaf8] px-10 text-xs font-medium uppercase tracking-[0.2em] text-[#0a0a0a]"
                onClick={() => (window.location.href = "/shop")}
              >
                Shop Now
              </MagneticButton>
              <Link
                href="/custom"
                className="inline-flex h-14 items-center justify-center border border-[#fafaf8]/30 px-10 text-xs font-medium uppercase tracking-[0.2em] transition-colors hover:border-[#c4b5a0]"
              >
                Request Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
