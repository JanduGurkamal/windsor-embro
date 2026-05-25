"use client";

import { Reveal, StaggerReveal, StaggerItem } from "@/components/motion/reveal";

const steps = [
  {
    num: "01",
    title: "Design",
    desc: "Every motif is digitized by hand — no auto-tracing, no shortcuts.",
  },
  {
    num: "02",
    title: "Sample",
    desc: "Physical samples on your exact fabric before production begins.",
  },
  {
    num: "03",
    title: "Stitch",
    desc: "Multi-head machines calibrated for tension, density, and durability.",
  },
  {
    num: "04",
    title: "Finish",
    desc: "Hand-trimmed backing, steamed, pressed, and quality inspected.",
  },
];

export function ProcessSection() {
  return (
    <section className="luxury-gradient-dark section-padding section-py text-[#fafaf8]">
      <Reveal>
        <p className="label-luxury mb-4 text-[#c4b5a0]">Process</p>
        <h2 className="heading-lg max-w-xl">From thread to heirloom.</h2>
      </Reveal>

      <StaggerReveal className="mt-16 grid gap-px bg-[#fafaf8]/10 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <StaggerItem key={step.num}>
            <div className="bg-[#141414] p-8 sm:p-10 h-full">
              <span className="font-display text-4xl font-light text-[#c4b5a0]/40">
                {step.num}
              </span>
              <h3 className="mt-6 font-display text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#a8a29e]">{step.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </section>
  );
}
