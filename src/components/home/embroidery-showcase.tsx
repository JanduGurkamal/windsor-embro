"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { StaggerReveal, StaggerItem } from "@/components/motion/reveal";
import { EditorialHeadline } from "@/components/editorial/editorial-headline";
import { SectionDivider } from "@/components/editorial/section-divider";

const details = [
  {
    src: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=900&q=80&auto=format",
    num: "01",
    title: "Density",
    metric: "12,000+",
    unit: "stitches",
  },
  {
    src: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=900&q=80&auto=format",
    num: "02",
    title: "Fabric",
    metric: "480",
    unit: "gsm",
  },
  {
    src: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=900&q=80&auto=format",
    num: "03",
    title: "Finish",
    metric: "100%",
    unit: "hand-trimmed",
  },
];

export function EmbroideryShowcase() {
  return (
    <section className="relative overflow-hidden bg-[#f4f1ec] fabric-texture">
      <SectionDivider />
      <div className="section-padding section-py">
        <div className="editorial-grid items-end gap-y-16">
          <div className="col-span-12 lg:col-span-5">
            <EditorialHeadline
              eyebrow="The Detail"
              lines={["Thread", "becomes", "architecture"]}
              accentLine={1}
            />
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <p className="body-editorial max-w-md lg:ml-auto">
              Macro-level precision. Every motif digitized by hand, stitched with
              tension calibrated for decades of wear — not seasons.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-block label-editorial link-underline text-foreground"
            >
              Our process
            </Link>
          </div>
        </div>

        <StaggerReveal className="mt-20 flex gap-4 overflow-x-auto no-scrollbar pb-4 md:mt-28 md:gap-6">
          {details.map((item, i) => (
            <StaggerItem
              key={item.num}
              className="group relative min-w-[78vw] shrink-0 md:min-w-[38vw] lg:min-w-[28vw]"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#0a0a0a]">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                  sizes="40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <span className="label-editorial text-[#c4b5a0]">{item.num}</span>
                  <p className="mt-4 font-display text-4xl font-semibold text-[#fafaf8] md:text-5xl">
                    {item.metric}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#a8a29e]">
                    {item.unit}
                  </p>
                </div>
              </div>
              <motion.p
                className="mt-4 font-display text-lg tracking-tight"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.4 }}
              >
                {item.title}
              </motion.p>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
