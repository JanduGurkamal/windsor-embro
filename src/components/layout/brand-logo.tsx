import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const sizes = {
  header: "h-10 w-10 sm:h-11 sm:w-11",
  footer: "h-12 w-12 sm:h-14 sm:w-14",
  menu: "h-11 w-11",
  loader: "h-16 w-16 sm:h-20 sm:w-20",
} as const;

type BrandLogoProps = {
  size?: keyof typeof sizes;
  className?: string;
  href?: string;
  linked?: boolean;
  priority?: boolean;
};

export function BrandLogo({
  size = "header",
  className,
  href = "/",
  linked = true,
  priority = false,
}: BrandLogoProps) {
  const image = (
    <Image
      src="/logo.png"
      alt="Windsor Embro"
      width={256}
      height={256}
      priority={priority}
      className={cn(
        "object-contain",
        sizes[size],
        className
      )}
    />
  );

  if (!linked) {
    return <span className={cn("inline-flex shrink-0 items-center", className)}>{image}</span>;
  }

  return (
    <Link
      href={href}
      className={cn("inline-flex shrink-0 items-center", className)}
      aria-label="Windsor Embro Home"
    >
      {image}
    </Link>
  );
}
