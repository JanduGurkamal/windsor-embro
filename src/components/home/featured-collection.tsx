"use client";

import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { ProductCard } from "@/components/shared/product-card";
import { products } from "@/lib/data/products";
import { EditorialHeadline } from "@/components/editorial/editorial-headline";

export function FeaturedCollection() {
  const featured = products.filter((p) => p.featured);
  const hero = featured[0];
  const rest = featured.slice(1, 4);

  if (!hero) return null;

  return (
    <section className="relative bg-[#f4f1ec] fabric-texture overflow-hidden">
      <div className="section-padding section-py">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <EditorialHeadline eyebrow="Curated" lines={["Featured", "drops"]} />
          <Reveal delay={0.1}>
            <Link
              href="/shop"
              className="label-editorial link-underline shrink-0 text-foreground"
            >
              View all pieces — {products.length}
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 md:mt-24">
          <ProductCard product={hero} variant="hero" priority />
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:mt-8">
          {rest.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} variant="editorial" />
          ))}
        </div>
      </div>
    </section>
  );
}
