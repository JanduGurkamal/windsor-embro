"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/motion/magnetic-button";
import Image from "next/image";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative min-h-[70vh] md:min-h-[80vh]">
        <Image
          src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=1600&q=80&auto=format"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#080808]/70" />
        <div className="absolute inset-0 luxury-gradient" />
        <div className="relative z-10 flex min-h-[70vh] flex-col items-center justify-center section-padding text-center md:min-h-[80vh]">
          <motion.p
            className="label-editorial text-[#c4b5a0]"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Start your project
          </motion.p>
          <motion.h2
            className="mt-8 display-editorial max-w-4xl text-[#fafaf8]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Wear something
            <span className="block text-stroke-gold font-light italic">that lasts</span>
          </motion.h2>
          <motion.div
            className="mt-12 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <MagneticButton
              className="btn-luxury-primary"
              onClick={() => (window.location.href = "/shop")}
            >
              Shop Collection
            </MagneticButton>
            <Link href="/custom" className="btn-luxury-ghost text-center">
              Custom Quote
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
