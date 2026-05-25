"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ProductCard } from "@/components/shared/product-card";
import { products, categories, type Product, type ProductCategory } from "@/lib/data/products";
import { Reveal } from "@/components/motion/reveal";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";
import { SlidersHorizontal } from "lucide-react";

type SortOption = "featured" | "price-asc" | "price-desc" | "newest";

export function ShopPageClient() {
  const [category, setCategory] = useState<ProductCategory | "all">("all");
  const [sort, setSort] = useState<SortOption>("featured");
  const [quickView, setQuickView] = useState<Product | null>(null);
  const [filterOpen, setFilterOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = [...products];
    if (category !== "all") list = list.filter((p) => p.category === category);
    switch (sort) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        list = list.filter((p) => p.new).concat(list.filter((p) => !p.new));
        break;
      default:
        list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
    return list;
  }, [category, sort]);

  return (
    <div className="pt-24 md:pt-28">
      <section className="section-padding pb-12 md:pb-16">
        <Reveal>
          <p className="label-luxury mb-4">Collection</p>
          <h1 className="heading-lg">Shop</h1>
          <p className="mt-4 max-w-lg text-sm text-muted-foreground leading-relaxed">
            Precision-embroidered streetwear. Small batches. No compromises.
          </p>
        </Reveal>
      </section>

      <div className="sticky top-[52px] z-30 glass-elegant border-y border-foreground/5 section-padding py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="hidden gap-2 overflow-x-auto no-scrollbar md:flex">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setCategory(cat.id)}
                className={`shrink-0 px-4 py-2 text-xs uppercase tracking-[0.15em] transition-colors ${
                  category === cat.id
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] md:hidden"
            onClick={() => setFilterOpen(true)}
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filter
          </button>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="bg-transparent text-xs uppercase tracking-[0.15em] focus:outline-none"
            aria-label="Sort products"
          >
            <option value="featured">Featured</option>
            <option value="newest">Newest</option>
            <option value="price-asc">Price: Low</option>
            <option value="price-desc">Price: High</option>
          </select>
        </div>
      </div>

      <section className="section-padding section-py">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={`${category}-${sort}`}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-3 xl:grid-cols-4"
          >
            {filtered.map((product, i) => (
              <ProductCard
                key={product.id}
                product={product}
                index={i}
                onQuickView={setQuickView}
              />
            ))}
          </motion.div>
        </AnimatePresence>
        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-20">No products found.</p>
        )}
      </section>

      {/* Mobile filter sheet */}
      <Sheet open={filterOpen} onOpenChange={setFilterOpen}>
        <SheetContent side="bottom" className="rounded-t-2xl" data-lenis-prevent>
          <p className="label-luxury mb-6">Filter by category</p>
          <div className="grid grid-cols-2 gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setCategory(cat.id);
                  setFilterOpen(false);
                }}
                className={`py-4 text-sm uppercase tracking-[0.1em] border ${
                  category === cat.id
                    ? "border-foreground bg-foreground text-background"
                    : "border-foreground/20"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </SheetContent>
      </Sheet>

      {/* Quick preview */}
      <Sheet open={!!quickView} onOpenChange={() => setQuickView(null)}>
        <SheetContent side="bottom" className="max-h-[90vh] overflow-y-auto" data-lenis-prevent>
          {quickView && (
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div className="relative aspect-[3/4] bg-secondary">
                <Image
                  src={quickView.images[0]}
                  alt={quickView.name}
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
              <div>
                <p className="label-luxury mb-2">{quickView.category}</p>
                <h2 className="font-display text-2xl font-semibold">{quickView.name}</h2>
                <p className="mt-2 text-lg">{formatPrice(quickView.price)}</p>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {quickView.description}
                </p>
                <Link
                  href={`/product/${quickView.slug}`}
                  onClick={() => setQuickView(null)}
                  className="mt-8 inline-flex h-12 w-full items-center justify-center bg-foreground text-background text-xs uppercase tracking-[0.15em]"
                >
                  View Full Details
                </Link>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}
