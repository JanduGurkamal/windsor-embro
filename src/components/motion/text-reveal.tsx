"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type TextRevealProps = {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  splitBy?: "words" | "chars";
};

export function TextReveal({
  children,
  className,
  as: Tag = "h2",
  splitBy = "words",
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const parts =
      splitBy === "words"
        ? children.split(" ").map((w) => `<span class="inline-block overflow-hidden"><span class="inline-block translate-y-full">${w}&nbsp;</span></span>`)
        : children.split("").map((c) => `<span class="inline-block overflow-hidden"><span class="inline-block translate-y-full">${c === " " ? "&nbsp;" : c}</span></span>`);

    el.innerHTML = parts.join("");

    const inner = el.querySelectorAll("span > span");
    gsap.to(inner, {
      y: 0,
      duration: 1,
      stagger: splitBy === "words" ? 0.04 : 0.02,
      ease: "power4.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [children, splitBy]);

  return (
    <Tag
      ref={ref as React.RefObject<HTMLHeadingElement & HTMLParagraphElement>}
      className={cn(className)}
      aria-label={children}
    />
  );
}
