"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";

export function AboutPageClient() {
  return (
    <div className="pt-24 md:pt-28">
      <section className="section-padding pb-16 md:pb-24">
        <Reveal>
          <p className="label-luxury mb-4">About</p>
          <h1 className="heading-xl max-w-4xl">
            We don&apos;t make clothes.
            <br />
            <span className="text-muted-foreground font-light">We make permanence.</span>
          </h1>
        </Reveal>
      </section>

      <section className="relative h-[60vh] min-h-[360px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1200&q=70&auto=format"
          alt="Windsor Embro atelier"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </section>

      <section className="section-padding section-py">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <TextReveal as="h2" className="heading-md" splitBy="words">
            Born in Canada. Built for the world.
          </TextReveal>
          <Reveal delay={0.2}>
            <div className="space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>
                Windsor Embro began in a small Windsor, Ontario studio with a single industrial
                embroidery head and a refusal to accept mediocrity. What started as custom
                work for local creatives evolved into a full luxury streetwear house.
              </p>
              <p>
                We exist at the intersection of fashion editorial and street culture —
                every garment is designed to be photographed, worn hard, and passed down.
              </p>
              <p>
                Our team of digitizers, stitch technicians, and garment specialists
                operate like an atelier, not a factory. Small batches. Obsessive QC.
                Zero compromise.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="luxury-gradient-dark section-padding section-py text-[#fafaf8]">
        <Reveal>
          <p className="label-luxury mb-8 text-[#c4b5a0]">Founder</p>
        </Reveal>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden lg:col-span-5">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=640&q=70&auto=format"
              alt="Founder portrait"
              fill
              className="object-cover grayscale"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
              Marcus Windsor
            </h2>
            <p className="mt-2 text-sm text-[#c4b5a0]">Founder & Creative Director</p>
            <blockquote className="mt-8 font-display text-xl sm:text-2xl font-medium leading-snug tracking-tight text-[#d6d3d1]">
              &ldquo;Embroidery is the only decoration that becomes part of the fabric&apos;s
              soul. Everything else sits on top — we go beneath.&rdquo;
            </blockquote>
            <p className="mt-8 text-sm leading-relaxed text-[#a8a29e] max-w-lg">
              Marcus founded Windsor after a decade in luxury fashion production. His
              vision: streetwear with the permanence of haute couture detailing.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding section-py">
        <Reveal>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
            {[
              { value: "2019", label: "Founded" },
              { value: "50K+", label: "Pieces crafted" },
              { value: "12", label: "Master stitchers" },
              { value: "100%", label: "Canadian atelier" },
            ].map((stat) => (
              <div key={stat.label} className="border-t border-foreground/10 pt-6">
                <p className="font-display text-3xl sm:text-4xl font-semibold">{stat.value}</p>
                <p className="label-luxury mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </div>
  );
}
