"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { BrandLogo } from "@/components/layout/brand-logo";

const navLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/custom", label: "Custom" },
  { href: "/about", label: "About" },
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
          className="fixed inset-0 z-[9998] flex flex-col bg-[#0a0a0a] text-[#fafaf8] md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <div className="section-padding flex items-center justify-between py-5 pt-[max(1.25rem,env(safe-area-inset-top))]">
            <BrandLogo size="menu" href="/" />
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="flex h-11 w-11 touch-manipulation cursor-pointer items-center justify-center"
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
          <nav className="flex flex-1 flex-col justify-center gap-2 section-padding pb-24">
            {[{ href: "/", label: "Home" }, ...navLinks].map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 + i * 0.05, duration: 0.4 }}
              >
                <Link
                  href={link.href}
                  className="font-display block py-3 text-4xl font-semibold tracking-tight sm:text-5xl touch-manipulation"
                  onClick={onClose}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>
          <div className="section-padding pb-[max(2.5rem,env(safe-area-inset-bottom))]">
            <Link
              href="/shop"
              className="flex h-14 w-full touch-manipulation items-center justify-center bg-[#fafaf8] text-sm font-medium uppercase tracking-[0.15em] text-[#0a0a0a]"
              onClick={onClose}
            >
              Shop Collection
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
