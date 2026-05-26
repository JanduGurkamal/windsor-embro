"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { Marquee } from "@/components/editorial/marquee";

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "45%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] overflow-hidden bg-[#080808] text-[#fafaf8]"
    >
      <motion.div className="absolute inset-0 scale-105" style={{ y: bgY }}>
        <Image
          src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=1600&q=80&auto=format"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <motion.div
          className="absolute inset-0 bg-[#080808]/50"
          animate={{ opacity: [0.45, 0.55, 0.45] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/80 via-transparent to-[#080808]" />
        <div className="absolute inset-0 luxury-gradient mix-blend-soft-light" />
        <div className="absolute inset-0 vignette" />
      </motion.div>

      <motion.div
        className="relative z-10 flex min-h-[100dvh] flex-col"
        style={{ y: textY, opacity }}
      >
        <div className="section-padding flex flex-1 flex-col justify-between pt-28 pb-8 md:pt-36">
          <div className="flex items-start justify-between gap-8">
            <p className="label-editorial text-[#c4b5a0]">
              Windsor, ON
              <span className="mx-3 text-[#fafaf8]/20">/</span>
              Est. 2019
            </p>
            <p className="hidden max-w-[14ch] text-right text-[10px] uppercase leading-relaxed tracking-[0.25em] text-[#a8a29e] md:block">
              Small-batch embroidery atelier
            </p>
          </div>

          <div className="editorial-grid mt-auto items-end gap-y-12 pb-6 md:pb-12">
            <div className="col-span-12 lg:col-span-8">
              <motion.h1
                className="display-hero"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.15 }}
              >
                <motion.span
                  className="block overflow-hidden"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                  Craft
                </motion.span>
                <motion.span
                  className="block overflow-hidden text-[#c4b5a0]"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.1, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
                >
                  Worn
                </motion.span>
                <motion.span
                  className="block overflow-hidden pl-[0.12em] font-light italic normal-case tracking-[-0.02em] text-[#fafaf8]/90"
                  style={{ fontSize: "0.42em" }}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.1, delay: 0.44, ease: [0.22, 1, 0.36, 1] }}
                >
                  forever
                </motion.span>
              </motion.h1>
            </div>

            <div className="col-span-12 flex flex-col gap-8 lg:col-span-4 lg:items-end lg:pb-4">
              <motion.div
                className="relative aspect-[3/4] w-full max-w-[280px] overflow-hidden lg:ml-auto lg:max-w-none"
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                animate={{ clipPath: "inset(0 0 0 0)" }}
                transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80&auto=format"
                  alt="Embroidered premium hoodie"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-[#fafaf8]/10" />
              </motion.div>
              <div className="flex flex-col gap-5 sm:flex-row lg:flex-col">
                <MagneticButton
                  className="btn-luxury-primary w-full sm:w-auto"
                  onClick={() => (window.location.href = "/shop")}
                >
                  Collection
                </MagneticButton>
                <Link href="/custom" className="btn-luxury-ghost w-full text-center sm:w-auto">
                  Custom Atelier
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Marquee
          dark
          items={["Embroidery", "Streetwear", "Windsor", "Canada", "12K Stitches"]}
        />
      </motion.div>

      <div className="absolute bottom-24 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">
        <span className="label-editorial text-[#78716c]">Scroll</span>
        <motion.div
          className="h-14 w-px bg-gradient-to-b from-[#c4b5a0] to-transparent"
          animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
}
