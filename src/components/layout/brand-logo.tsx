import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const sizes = {
  header: "h-9 w-9 sm:h-10 sm:w-10",
  footer: "h-11 w-11 sm:h-12 sm:w-12",
  menu: "h-10 w-10",
  loader: "h-14 w-14 sm:h-16 sm:w-16",
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
