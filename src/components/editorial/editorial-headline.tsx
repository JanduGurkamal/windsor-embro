"use client";

import { cn } from "@/lib/utils";

type EditorialHeadlineProps = {
  eyebrow?: string;
  lines: string[];
  accentLine?: number;
  className?: string;
  dark?: boolean;
};

export function EditorialHeadline({
  eyebrow,
  lines,
  accentLine,
  className,
  dark = false,
}: EditorialHeadlineProps) {
  return (
    <div className={cn("max-w-none", className)}>
      {eyebrow && (
        <p
          className={cn(
            "label-editorial mb-6 md:mb-8",
            dark ? "text-[#c4b5a0]" : "text-muted-foreground"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2 className="display-editorial">
        {lines.map((line, i) => (
          <span
            key={line}
            className={cn(
              "block",
              accentLine === i && "text-stroke-gold font-light italic"
            )}
          >
            {line}
          </span>
        ))}
      </h2>
    </div>
  );
}
