"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, StaggerReveal, StaggerItem } from "@/components/motion/reveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { Check } from "lucide-react";

const steps = [
  { title: "Vision", desc: "Tell us your concept" },
  { title: "Garment", desc: "Choose your canvas" },
  { title: "Quote", desc: "Receive your estimate" },
];

const fabrics = [
  { name: "French Terry", color: "#292524" },
  { name: "Organic Cotton", color: "#f5f5f0" },
  { name: "Wool Melton", color: "#44403c" },
  { name: "Nylon Shell", color: "#1e293b" },
];

const threads = [
  { name: "Matte Black", hex: "#0a0a0a" },
  { name: "Stone", hex: "#a8a29e" },
  { name: "Gold", hex: "#c4b5a0" },
  { name: "Ivory", hex: "#fafaf8" },
  { name: "Navy", hex: "#1e3a5f" },
];

export function CustomPageClient() {
  const [formStep, setFormStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [selectedFabric, setSelectedFabric] = useState(0);
  const [selectedThread, setSelectedThread] = useState(2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formStep < 2) {
      setFormStep(formStep + 1);
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="pt-24 md:pt-28">
      <section className="relative min-h-[50vh] overflow-hidden bg-[#0a0a0a] text-[#fafaf8] section-padding flex items-end pb-16 pt-32">
        <Image
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1920&q=80"
          alt="Custom embroidery studio"
          fill
          className="object-cover opacity-40"
          priority
          sizes="100vw"
        />
        <div className="relative z-10 max-w-2xl">
          <p className="label-luxury mb-4 text-[#c4b5a0]">Custom Studio</p>
          <h1 className="heading-lg">Your vision. Our needles.</h1>
          <p className="mt-6 text-sm text-[#a8a29e] leading-relaxed max-w-md">
            From brand drops to one-off heirlooms — Windsor crafts bespoke embroidery
            with atelier precision.
          </p>
        </div>
      </section>

      {/* Process steps */}
      <section className="section-padding section-py">
        <StaggerReveal className="grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <StaggerItem key={step.title}>
              <div className="border-t border-foreground pt-6">
                <span className="font-display text-5xl font-light text-muted-foreground/30">
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </section>

      {/* Fabric / thread viz */}
      <section className="bg-secondary/40 section-padding section-py">
        <Reveal>
          <p className="label-luxury mb-4">Visualization</p>
          <h2 className="heading-md">Fabric & thread pairing</h2>
        </Reveal>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div>
            <p className="label-luxury mb-4">Select fabric</p>
            <div className="grid grid-cols-2 gap-3">
              {fabrics.map((f, i) => (
                <button
                  key={f.name}
                  type="button"
                  onClick={() => setSelectedFabric(i)}
                  className={`relative aspect-video overflow-hidden border-2 transition-all ${
                    selectedFabric === i ? "border-foreground" : "border-transparent"
                  }`}
                  style={{ backgroundColor: f.color }}
                >
                  <span className="absolute bottom-3 left-3 text-xs uppercase tracking-[0.1em] text-white mix-blend-difference">
                    {f.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="label-luxury mb-4">Select thread</p>
            <div className="flex flex-wrap gap-4">
              {threads.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  onClick={() => setSelectedThread(i)}
                  className={`flex flex-col items-center gap-2 ${
                    selectedThread === i ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <span
                    className={`h-12 w-12 rounded-full border-2 ${
                      selectedThread === i ? "border-foreground" : "border-foreground/20"
                    }`}
                    style={{ backgroundColor: t.hex }}
                  />
                  <span className="text-[10px] uppercase tracking-[0.1em]">{t.name}</span>
                </button>
              ))}
            </div>
            <motion.div
              key={`${selectedFabric}-${selectedThread}`}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-8 relative aspect-[16/9] overflow-hidden"
              style={{ backgroundColor: fabrics[selectedFabric].color }}
            >
              <div
                className="absolute inset-0 flex items-center justify-center font-display text-4xl sm:text-6xl font-semibold tracking-tight"
                style={{ color: threads[selectedThread].hex }}
              >
                W.
              </div>
              <p className="absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.15em] text-white/70 mix-blend-difference">
                Preview — {fabrics[selectedFabric].name} × {threads[selectedThread].name}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote form */}
      <section className="section-padding section-py border-t border-foreground/10">
        <Reveal>
          <p className="label-luxury mb-4">Request Quote</p>
          <h2 className="heading-md mb-2">Start your project</h2>
          <div className="flex gap-2 mt-6">
            {steps.map((_, i) => (
              <div
                key={i}
                className={`h-px flex-1 transition-colors ${
                  i <= formStep ? "bg-foreground" : "bg-foreground/20"
                }`}
              />
            ))}
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-16 max-w-md text-center mx-auto py-20"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-foreground text-background">
                <Check className="h-8 w-8" />
              </div>
              <h3 className="mt-8 font-display text-2xl font-semibold">Request received</h3>
              <p className="mt-4 text-sm text-muted-foreground">
                Our studio will respond within 48 hours with your bespoke quote.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key={formStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onSubmit={handleSubmit}
              className="mt-12 max-w-xl space-y-8"
            >
              {formStep === 0 && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" required placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required placeholder="you@brand.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vision">Project Vision</Label>
                    <Textarea
                      id="vision"
                      required
                      placeholder="Describe your embroidery concept, placement, and inspiration..."
                      rows={5}
                    />
                  </div>
                </>
              )}
              {formStep === 1 && (
                <>
                  <div className="space-y-2">
                    <Label>Garment Type</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select garment" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hoodie">Hoodie</SelectItem>
                        <SelectItem value="tee">T-Shirt</SelectItem>
                        <SelectItem value="jacket">Jacket / Outerwear</SelectItem>
                        <SelectItem value="cap">Cap</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="qty">Estimated Quantity</Label>
                    <Input id="qty" type="number" min={1} placeholder="e.g. 50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="deadline">Target Timeline</Label>
                    <Input id="deadline" placeholder="e.g. 6 weeks" />
                  </div>
                </>
              )}
              {formStep === 2 && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="500">Under £500</SelectItem>
                        <SelectItem value="2000">£500 – £2,000</SelectItem>
                        <SelectItem value="5000">£2,000 – £5,000</SelectItem>
                        <SelectItem value="5000+">£5,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Textarea id="notes" placeholder="File references, brand guidelines, etc." rows={4} />
                  </div>
                </>
              )}
              <MagneticButton
                type="submit"
                className="h-14 w-full bg-[#0a0a0a] text-[#fafaf8] text-xs uppercase tracking-[0.2em]"
              >
                {formStep < 2 ? "Continue" : "Submit Quote Request"}
              </MagneticButton>
            </motion.form>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
