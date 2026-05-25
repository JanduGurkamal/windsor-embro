"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-[#0a0a0a] text-[#fafaf8]">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=1920&q=85"
          alt="Premium embroidered streetwear"
          fill
          priority
          className="object-cover opacity-50"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-[#0a0a0a]/30 to-[#0a0a0a]" />
        <div className="absolute inset-0 luxury-gradient opacity-40" />
      </div>

      <div className="relative z-10 flex min-h-[100dvh] flex-col justify-end section-padding pb-16 pt-32 sm:pb-20 md:pb-28">
        <motion.p
          className="label-luxury mb-6 text-[#c4b5a0]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Windsor, ON · Est. 2019
        </motion.p>

        <motion.h1
          className="heading-xl max-w-[14ch] text-[#fafaf8]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Embroidery
          <br />
          <span className="text-[#a8a29e] font-light">redefined.</span>
        </motion.h1>

        <motion.p
          className="mt-8 max-w-md text-sm leading-relaxed text-[#d6d3d1] sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          Windsor Embro crafts luxury streetwear with obsessive stitch precision.
          Every piece is a statement of permanence.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <MagneticButton
            className="inline-flex h-14 items-center justify-center gap-2 bg-[#fafaf8] px-10 text-xs font-medium uppercase tracking-[0.2em] text-[#0a0a0a]"
            onClick={() => (window.location.href = "/shop")}
          >
            Explore Collection
            <ArrowRight className="h-4 w-4" />
          </MagneticButton>
          <Link
            href="/custom"
            className="inline-flex h-14 items-center justify-center border border-[#fafaf8]/30 px-10 text-xs font-medium uppercase tracking-[0.2em] transition-colors hover:border-[#c4b5a0] hover:text-[#c4b5a0]"
          >
            Custom Studio
          </Link>
        </motion.div>

        <motion.div
          className="mt-16 hidden items-end justify-between border-t border-[#fafaf8]/10 pt-8 md:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
        >
          {[
            { value: "12K+", label: "Stitches per motif" },
            { value: "480GSM", label: "Premium fleece" },
            { value: "100%", label: "Small batch" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-2xl font-semibold">{stat.value}</p>
              <p className="label-luxury mt-1 text-[#78716c]">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <div className="h-12 w-px bg-[#fafaf8]/30" />
      </motion.div>
    </section>
  );
}
