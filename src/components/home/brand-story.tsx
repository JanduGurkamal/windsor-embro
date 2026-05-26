"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import { ParallaxMedia } from "@/components/editorial/parallax-media";

export function BrandStory() {
  return (
    <section className="relative overflow-hidden bg-[#080808] text-[#fafaf8]">
      <div className="section-padding section-py relative">
        <div className="editorial-grid items-center">
          <Reveal className="relative z-20 col-span-12 lg:col-span-5">
            <p className="label-editorial mb-8 text-[#c4b5a0]">Philosophy</p>
            <h2 className="display-editorial">
              <span className="block">Built</span>
              <span className="block text-stroke-gold font-light italic normal-case">
                slow.
              </span>
            </h2>
            <blockquote className="mt-12 border-l border-[#c4b5a0] pl-6 font-display text-xl leading-snug tracking-tight text-[#d6d3d1] md:text-2xl">
              We refuse disposable fashion. Windsor is permanence — stitched into
              every fibre.
            </blockquote>
            <Link
              href="/about"
              className="btn-luxury-ghost mt-12 inline-flex border-[#fafaf8]/20"
            >
              Read the story
            </Link>
          </Reveal>

          <div className="relative col-span-12 mt-16 lg:col-span-7 lg:mt-0 lg:min-h-[70vh]">
            <motion.div
              className="relative z-10 ml-auto aspect-[4/5] w-[85%] overflow-hidden lg:w-[72%]"
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ clipPath: "inset(0 0 0 0)" }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <ParallaxMedia
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1000&q=80&auto=format"
                alt="Windsor atelier"
                className="absolute inset-0"
                sizes="50vw"
              />
            </motion.div>
            <motion.div
              className="absolute -left-4 top-12 z-20 w-[45%] overflow-hidden border border-[#fafaf8]/10 lg:-left-12 lg:top-24"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              <div className="relative aspect-square">
                <Image
                  src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&q=80&auto=format"
                  alt="Embroidery detail"
                  fill
                  className="object-cover"
                  sizes="30vw"
                />
              </div>
            </motion.div>
            <p className="absolute bottom-0 right-0 z-20 hidden max-w-[200px] text-right text-[10px] uppercase leading-relaxed tracking-[0.3em] text-[#78716c] lg:block">
              Canadian street culture × atelier craft
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
