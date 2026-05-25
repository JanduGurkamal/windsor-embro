"use client";

import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { ProductCard } from "@/components/shared/product-card";
import { products } from "@/lib/data/products";
import { ArrowRight } from "lucide-react";

export function FeaturedCollection() {
  const featured = products.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="section-padding section-py">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <Reveal>
          <p className="label-luxury mb-4">Curated</p>
          <h2 className="heading-lg">Featured Collection</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] link-underline"
          >
            View all
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
        {featured.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </section>
  );
}
