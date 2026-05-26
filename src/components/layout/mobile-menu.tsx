"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { BrandLogo } from "@/components/layout/brand-logo";

const navLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/custom", label: "Atelier" },
  { href: "/about", label: "Story" },
  { href: "/contact", label: "Contact" },
];

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="fixed inset-0 z-[9998] flex flex-col overflow-hidden bg-[#080808] text-[#fafaf8] lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=70&auto=format"
              alt=""
              fill
              className="object-cover opacity-30"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[#080808]/85" />
          </div>

          <div className="relative z-10 flex items-center justify-between section-padding py-6 pt-[max(1.5rem,env(safe-area-inset-top))]">
            <BrandLogo size="menu" href="/" />
            <button
              type="button"
              onClick={onClose}
              className="label-editorial text-[#c4b5a0]"
            >
              Close
            </button>
          </div>

          <nav className="relative z-10 flex flex-1 flex-col justify-center section-padding">
            {[{ href: "/", label: "Home" }, ...navLinks].map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 + i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="group flex items-baseline gap-4 border-b border-[#fafaf8]/10 py-5"
                >
                  <span className="label-editorial text-[#78716c]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-[clamp(2.5rem,10vw,4rem)] font-semibold uppercase tracking-tight transition-colors group-active:text-[#c4b5a0]">
                    {link.label}
                  </span>
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="relative z-10 section-padding pb-[max(2rem,env(safe-area-inset-bottom))]">
            <Link
              href="/shop"
              onClick={onClose}
              className="btn-luxury-primary flex w-full"
            >
              Enter Collection
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
