"use client";

import { cn } from "@/lib/utils";

type MarqueeProps = {
  items: string[];
  className?: string;
  speed?: "slow" | "normal";
  dark?: boolean;
};

export function Marquee({
  items,
  className,
  speed = "slow",
  dark = false,
}: MarqueeProps) {
  const text = items.join(" · ");
  const doubled = `${text} · ${text} · `;

  return (
    <div
      className={cn(
        "overflow-hidden border-y py-4 md:py-5",
        dark
          ? "border-[#fafaf8]/10 bg-[#0a0a0a] text-[#fafaf8]/90"
          : "border-foreground/10 bg-secondary/30",
        className
      )}
    >
      <div
        className={cn(
          "marquee-track flex whitespace-nowrap font-display text-[clamp(1.25rem,4vw,2.5rem)] font-medium uppercase tracking-[0.12em]",
          speed === "slow" ? "marquee-slow" : "marquee-normal"
        )}
      >
        <span className="px-4">{doubled}</span>
        <span className="px-4" aria-hidden>
          {doubled}
        </span>
      </div>
    </div>
  );
}
