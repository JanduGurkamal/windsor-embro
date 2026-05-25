"use client";

import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useCartStore } from "@/store/cart";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";

export function CartDrawer() {
  const { items, isOpen, setOpen, updateQuantity, removeItem, totalPrice } =
    useCartStore();

  return (
    <Sheet open={isOpen} onOpenChange={setOpen}>
      <SheetContent side="right" className="flex flex-col" data-lenis-prevent>
        <div className="mt-8 flex flex-1 flex-col">
          <p className="label-luxury mb-2">Your Bag</p>
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            {items.length === 0 ? "Empty" : `${items.length} piece${items.length > 1 ? "s" : ""}`}
          </h2>

          <div className="mt-8 flex-1 space-y-6 overflow-y-auto no-scrollbar">
            {items.length === 0 ? (
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your selection awaits. Explore the collection.
              </p>
            ) : (
              items.map((item) => (
                <div key={`${item.id}-${item.size}-${item.color}`} className="flex gap-4">
                  <div className="relative h-24 w-20 shrink-0 overflow-hidden bg-secondary">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {item.color} · {item.size}
                    </p>
                    <p className="mt-1 text-sm">{formatPrice(item.price)}</p>
                    <div className="mt-3 flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.id, item.size, item.color, item.quantity - 1)
                        }
                        className="flex h-8 w-8 items-center justify-center border border-foreground/10"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="text-xs w-4 text-center">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.id, item.size, item.color, item.quantity + 1)
                        }
                        className="flex h-8 w-8 items-center justify-center border border-foreground/10"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id, item.size, item.color)}
                        className="ml-auto text-muted-foreground hover:text-foreground"
                        aria-label="Remove item"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {items.length > 0 && (
            <div className="border-t border-foreground/10 pt-6 mt-6">
              <div className="flex justify-between text-sm mb-6">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">{formatPrice(totalPrice())}</span>
              </div>
              <Button variant="luxury" size="lg" className="w-full rounded-none">
                Checkout
              </Button>
              <Link
                href="/shop"
                onClick={() => setOpen(false)}
                className="mt-4 block text-center text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground"
              >
                Continue shopping
              </Link>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
