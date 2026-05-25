"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Minus, Plus, Truck, Shield } from "lucide-react";
import type { Product } from "@/lib/data/products";
import { formatPrice, cn } from "@/lib/utils";
import { useCartStore } from "@/store/cart";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { Reveal } from "@/components/motion/reveal";

type ProductPageClientProps = { product: Product };

export function ProductPageClient({ product }: ProductPageClientProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedImage, setSelectedImage] = useState(0);
  const [size, setSize] = useState(product.sizes[0]);
  const [color, setColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [zoomed, setZoomed] = useState(false);
  const addItem = useCartStore((s) => s.addItem);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        slug: product.slug,
        name: product.name,
        price: product.price,
        size,
        color: color.name,
        image: product.images[selectedImage],
      });
    }
  };

  return (
    <div className="pt-20 md:pt-24">
      <div className="lg:grid lg:grid-cols-2 lg:gap-0">
        {/* Gallery */}
        <div className="relative bg-secondary">
          <div
            className={cn(
              "overflow-hidden",
              zoomed ? "cursor-zoom-out" : "cursor-zoom-in"
            )}
            ref={emblaRef}
            onClick={() => setZoomed(!zoomed)}
          >
            <div className="flex">
              {product.images.map((img, i) => (
                <div
                  key={img}
                  className={cn(
                    "relative min-w-0 flex-[0_0_100%] aspect-[4/5] sm:aspect-[3/4] lg:aspect-auto lg:min-h-screen",
                    zoomed && i === selectedImage && "scale-150 transition-transform duration-700"
                  )}
                >
                  <Image
                    src={img}
                    alt={`${product.name} view ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={i === 0}
                  />
                </div>
              ))}
            </div>
          </div>
          {product.images.length > 1 && (
            <>
              <button
                type="button"
                onClick={scrollPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center glass-elegant"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={scrollNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center glass-elegant"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {product.images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  setSelectedImage(i);
                  emblaApi?.scrollTo(i);
                }}
                className={cn(
                  "h-1 w-8 transition-colors",
                  selectedImage === i ? "bg-foreground" : "bg-foreground/30"
                )}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Buy section — sticky on desktop */}
        <div className="section-padding py-10 lg:sticky lg:top-0 lg:flex lg:min-h-screen lg:flex-col lg:justify-center lg:py-16 xl:pl-16">
          <Reveal>
            {product.tag && (
              <p className="label-luxury mb-3 text-[#c4b5a0]">{product.tag}</p>
            )}
            <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              {product.name}
            </h1>
            <p className="mt-3 text-xl">{formatPrice(product.price)}</p>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground max-w-md">
              {product.description}
            </p>
          </Reveal>

          <div className="mt-10 space-y-8">
            {/* Color */}
            <div>
              <p className="label-luxury mb-4">Color — {color.name}</p>
              <div className="flex gap-3">
                {product.colors.map((c) => (
                  <button
                    key={c.name}
                    type="button"
                    onClick={() => setColor(c)}
                    className={cn(
                      "h-10 w-10 rounded-full border-2 transition-all",
                      color.name === c.name
                        ? "border-foreground scale-110"
                        : "border-transparent ring-1 ring-foreground/20"
                    )}
                    style={{ backgroundColor: c.hex }}
                    aria-label={c.name}
                  />
                ))}
              </div>
            </div>

            {/* Size */}
            <div>
              <p className="label-luxury mb-4">Size</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <motion.button
                    key={s}
                    type="button"
                    onClick={() => setSize(s)}
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                      "min-w-[3rem] px-4 py-3 text-xs uppercase tracking-[0.1em] border transition-colors",
                      size === s
                        ? "border-foreground bg-foreground text-background"
                        : "border-foreground/20 hover:border-foreground"
                    )}
                  >
                    {s}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-6">
              <p className="label-luxury">Qty</p>
              <div className="flex items-center border border-foreground/20">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="flex h-12 w-12 items-center justify-center"
                  aria-label="Decrease"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-10 text-center text-sm">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="flex h-12 w-12 items-center justify-center"
                  aria-label="Increase"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <MagneticButton
              className="w-full h-14 bg-[#0a0a0a] text-[#fafaf8] text-xs uppercase tracking-[0.2em] font-medium"
              onClick={handleAdd}
            >
              Add to Bag — {formatPrice(product.price * quantity)}
            </MagneticButton>

            <div className="flex gap-6 text-xs text-muted-foreground">
              <span className="flex items-center gap-2">
                <Truck className="h-4 w-4" strokeWidth={1.5} />
                Free Canada shipping $250+
              </span>
              <span className="flex items-center gap-2">
                <Shield className="h-4 w-4" strokeWidth={1.5} />
                Lifetime stitch warranty
              </span>
            </div>
          </div>

          <Accordion type="single" collapsible className="mt-12">
            <AccordionItem value="details">
              <AccordionTrigger>Product Details</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2">
                  {product.details.map((d) => (
                    <li key={d}>· {d}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="delivery">
              <AccordionTrigger>Delivery & Returns</AccordionTrigger>
              <AccordionContent>
                Canada delivery 3–5 business days. US & international 7–14 days. Unworn items
                with tags may be returned within 14 days. Custom pieces are final sale.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="care">
              <AccordionTrigger>Care Guide</AccordionTrigger>
              <AccordionContent>
                Turn inside out. Cold wash only. Do not tumble dry. Steam embroidery
                gently — never iron directly on stitches.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* Detail closeups */}
      <section className="section-padding section-py border-t border-foreground/10">
        <Reveal>
          <p className="label-luxury mb-4">Embroidery Detail</p>
          <h2 className="heading-md">Macro precision.</h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {product.images.slice(0, 2).map((img) => (
            <div key={img} className="relative aspect-[16/10] overflow-hidden bg-secondary">
              <Image src={img} alt="Embroidery detail" fill className="object-cover" sizes="50vw" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
