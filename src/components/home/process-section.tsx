"use client";

import { StaggerReveal, StaggerItem } from "@/components/motion/reveal";
import { Marquee } from "@/components/editorial/marquee";

const steps = [
  { num: "01", title: "Design", desc: "Hand-digitized motifs" },
  { num: "02", title: "Sample", desc: "Physical proof on your fabric" },
  { num: "03", title: "Stitch", desc: "Multi-head precision" },
  { num: "04", title: "Finish", desc: "Hand-trimmed & inspected" },
];

export function ProcessSection() {
  return (
    <section className="relative bg-[#080808] text-[#fafaf8] overflow-hidden">
      <Marquee
        dark
        className="border-none"
        items={["Design", "Sample", "Stitch", "Finish", "Windsor Atelier"]}
      />
      <div className="section-padding section-py-tight">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="display-section max-w-lg">
            From thread
            <span className="block text-[#c4b5a0]">to heirloom</span>
          </h2>
          <p className="max-w-xs text-[10px] uppercase leading-relaxed tracking-[0.25em] text-[#78716c]">
            Four stages. Zero shortcuts.
          </p>
        </div>

        <StaggerReveal className="mt-16 grid gap-px bg-[#fafaf8]/10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <StaggerItem key={step.num}>
              <div className="group relative bg-[#0e0e0e] p-8 transition-colors duration-500 hover:bg-[#141414] md:p-10 md:min-h-[280px] flex flex-col justify-between">
                <span className="font-display text-[clamp(3rem,8vw,5rem)] font-light leading-none text-[#fafaf8]/10 transition-colors group-hover:text-[#c4b5a0]/30">
                  {step.num}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#78716c]">
                    {step.desc}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
