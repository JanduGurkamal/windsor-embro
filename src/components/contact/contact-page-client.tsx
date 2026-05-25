"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { Mail, MapPin, Clock } from "lucide-react";

const faqs = [
  {
    q: "What is the typical turnaround for custom orders?",
    a: "Standard custom runs require 4–6 weeks from approved sample. Rush timelines available for an additional fee.",
  },
  {
    q: "Do you offer international shipping?",
    a: "Yes. We ship worldwide via tracked courier. Duties and taxes may apply depending on your region.",
  },
  {
    q: "What is your return policy?",
    a: "Ready-to-wear items may be returned within 14 days if unworn with tags attached. Custom and embroidered-to-order pieces are final sale.",
  },
  {
    q: "Can I visit the studio?",
    a: "Studio visits are by appointment only. Contact us to schedule a consultation in our East London atelier.",
  },
  {
    q: "What file formats do you accept for custom artwork?",
    a: "We prefer vector files (AI, SVG, EPS) or high-resolution PNG at 300dpi minimum. Our team can assist with digitizing.",
  },
];

export function ContactPageClient() {
  const [sent, setSent] = useState(false);

  return (
    <div className="pt-24 md:pt-28">
      <section className="section-padding pb-12">
        <Reveal>
          <p className="label-luxury mb-4">Contact</p>
          <h1 className="heading-lg">Let&apos;s create together.</h1>
        </Reveal>
      </section>

      <section className="section-padding pb-20">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <div className="space-y-8">
              {[
                { icon: Mail, label: "Email", value: "studio@windsorembro.com" },
                { icon: MapPin, label: "Studio", value: "Shoreditch, London E1" },
                { icon: Clock, label: "Hours", value: "Mon–Fri, 10:00–18:00 GMT" },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <item.icon className="h-5 w-5 mt-0.5 text-muted-foreground" strokeWidth={1.5} />
                  <div>
                    <p className="label-luxury mb-1">{item.label}</p>
                    <p className="text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            {sent ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-12"
              >
                <p className="font-display text-2xl font-semibold">Message sent.</p>
                <p className="mt-4 text-sm text-muted-foreground">
                  We&apos;ll respond within 24–48 hours.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-8"
              >
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Name</Label>
                  <Input id="contact-name" required placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email">Email</Label>
                  <Input id="contact-email" type="email" required placeholder="you@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-subject">Subject</Label>
                  <Input id="contact-subject" required placeholder="Order inquiry, custom work..." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-message">Message</Label>
                  <Textarea
                    id="contact-message"
                    required
                    rows={5}
                    placeholder="How can we help?"
                  />
                </div>
                <MagneticButton
                  type="submit"
                  className="h-14 w-full bg-[#0a0a0a] text-[#fafaf8] text-xs uppercase tracking-[0.2em]"
                >
                  Send Message
                </MagneticButton>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      <section id="faq" className="section-padding section-py bg-secondary/40">
        <Reveal>
          <p className="label-luxury mb-4">FAQ</p>
          <h2 className="heading-md mb-10">Common questions</h2>
        </Reveal>
        <Accordion type="single" collapsible className="max-w-2xl">
          {faqs.map((faq, i) => (
            <AccordionItem key={faq.q} value={`faq-${i}`}>
              <AccordionTrigger className="text-left font-display text-base font-medium">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent>{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
}
