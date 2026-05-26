"use client";

import { Reveal } from "@/components/motion/reveal";
import { ParallaxMedia } from "@/components/editorial/parallax-media";

export function CraftsmanshipSection() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      <ParallaxMedia
        src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=1600&q=80&auto=format"
        alt="Embroidery craftsmanship"
        className="absolute inset-0 min-h-[85vh]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#080808]/55 vignette" />
      <div className="relative z-10 flex min-h-[85vh] items-center section-padding">
        <Reveal className="max-w-4xl">
          <p className="label-editorial mb-6 text-[#c4b5a0]">Craftsmanship</p>
          <h2 className="display-editorial text-[#fafaf8]">
            <span className="block">Every stitch</span>
            <span className="block pl-[0.15em] font-light italic normal-case text-[#fafaf8]/80" style={{ fontSize: "0.55em" }}>
              placed with intention
            </span>
          </h2>
          <p className="mt-10 max-w-md text-sm leading-[1.9] tracking-wide text-[#d6d3d1] md:text-base">
            We engineer garments — not decorate them. Windsor embroidery is built
            to outlast trends and become uniform.
          </p>
        </Reveal>
        <div className="absolute bottom-12 right-8 hidden text-right md:block section-padding">
          <p className="font-display text-6xl font-light text-[#fafaf8]/20">12K</p>
          <p className="label-editorial text-[#78716c]">stitches per motif</p>
        </div>
      </div>
    </section>
  );
}
