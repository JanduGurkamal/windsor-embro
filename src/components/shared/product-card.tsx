"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/lib/data/products";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  product: Product;
  index?: number;
  variant?: "default" | "editorial" | "hero";
  priority?: boolean;
  onQuickView?: (product: Product) => void;
};

export function ProductCard({
  product,
  index = 0,
  variant = "default",
  priority = false,
  onQuickView,
}: ProductCardProps) {
  const isHero = variant === "hero";

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={cn("group", isHero && "w-full")}
    >
      <Link href={`/product/${product.slug}`} className="block">
        <div
          className={cn(
            "relative overflow-hidden bg-[#0a0a0a]",
            isHero ? "aspect-[16/9] md:aspect-[21/9]" : "aspect-[3/4]"
          )}
        >
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            priority={priority}
            className="object-cover transition-transform duration-[1.6s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
            sizes={
              isHero
                ? "100vw"
                : "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            }
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

          {(product.new || product.tag) && (
            <div className="absolute left-0 top-0 flex gap-px">
              {product.new && (
                <span className="bg-[#c4b5a0] px-3 py-2 text-[9px] font-medium uppercase tracking-[0.2em] text-[#0a0a0a]">
                  New
                </span>
              )}
              {product.tag && (
                <span className="bg-[#fafaf8]/10 px-3 py-2 text-[9px] font-medium uppercase tracking-[0.2em] text-[#fafaf8] backdrop-blur-sm">
                  {product.tag}
                </span>
              )}
            </div>
          )}

          <div
            className={cn(
              "absolute flex items-end justify-between gap-4 text-[#fafaf8]",
              isHero ? "bottom-0 left-0 right-0 p-8 md:p-12" : "bottom-0 left-0 right-0 p-5 md:p-6"
            )}
          >
            <div>
              <p className="label-editorial mb-2 text-[#c4b5a0]">{product.category}</p>
              <h3
                className={cn(
                  "font-display font-semibold tracking-tight",
                  isHero ? "text-3xl md:text-5xl" : "text-lg md:text-xl"
                )}
              >
                {product.name}
              </h3>
            </div>
            <p
              className={cn(
                "shrink-0 font-display font-medium",
                isHero ? "text-2xl md:text-3xl" : "text-base"
              )}
            >
              {formatPrice(product.price)}
            </p>
          </div>

          {onQuickView && !isHero && (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                onQuickView(product);
              }}
              className="absolute right-4 top-4 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 label-editorial border border-[#fafaf8]/30 bg-[#080808]/60 px-3 py-2 text-[#fafaf8] backdrop-blur-md"
            >
              Preview
            </button>
          )}
        </div>

        {variant === "default" && (
          <div className="mt-4 flex items-center justify-between md:hidden">
            <h3 className="text-sm font-medium">{product.name}</h3>
            <p className="text-sm">{formatPrice(product.price)}</p>
          </div>
        )}
      </Link>
    </motion.article>
  );
}
