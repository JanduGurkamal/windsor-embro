"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/lib/data/products";

type ProductCardProps = {
  product: Product;
  index?: number;
  onQuickView?: (product: Product) => void;
};

export function ProductCard({ product, index = 0, onQuickView }: ProductCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          {(product.new || product.tag) && (
            <div className="absolute left-3 top-3 flex gap-2">
              {product.new && (
                <span className="bg-[#fafaf8] px-2 py-1 text-[9px] font-medium uppercase tracking-[0.15em] text-[#0a0a0a]">
                  New
                </span>
              )}
              {product.tag && (
                <span className="glass-elegant px-2 py-1 text-[9px] font-medium uppercase tracking-[0.15em]">
                  {product.tag}
                </span>
              )}
            </div>
          )}
          {onQuickView && (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                onQuickView(product);
              }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 glass-elegant px-4 py-2 text-[10px] uppercase tracking-[0.15em]"
            >
              Quick View
            </button>
          )}
        </div>
        <div className="mt-4 flex items-start justify-between gap-2">
          <div>
            <h3 className="text-sm font-medium leading-snug group-hover:opacity-70 transition-opacity">
              {product.name}
            </h3>
            <p className="mt-1 text-xs text-muted-foreground capitalize">
              {product.category}
            </p>
          </div>
          <p className="text-sm font-medium shrink-0">{formatPrice(product.price)}</p>
        </div>
      </Link>
    </motion.article>
  );
}
