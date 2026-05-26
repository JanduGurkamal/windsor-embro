import { cn } from "@/lib/utils";

export function SectionDivider({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "section-padding flex items-center gap-6 py-2 md:py-4",
        className
      )}
      aria-hidden
    >
      <span className="h-px flex-1 bg-foreground/15" />
      <span className="font-display text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
        Windsor
      </span>
      <span className="h-px flex-1 bg-foreground/15" />
    </div>
  );
}
