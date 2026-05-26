"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

type ParallaxMediaProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
};

export function ParallaxMedia({
  src,
  alt,
  className,
  imageClassName,
  priority,
  sizes = "100vw",
}: ParallaxMediaProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const isCoarse = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    if (isCoarse || window.innerWidth < 1024) return;

    let killed = false;

    const run = async () => {
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (killed || !el) return;

      gsap.to(el.querySelector("[data-parallax-img]"), {
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    };

    run();
    return () => {
      killed = true;
    };
  }, []);

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <div data-parallax-img className="absolute inset-0 scale-110">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className={cn("object-cover", imageClassName)}
          sizes={sizes}
        />
      </div>
    </div>
  );
}
