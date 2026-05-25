"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/store/cart";
import { CartDrawer } from "@/components/layout/cart-drawer";
import { MobileMenu } from "@/components/layout/mobile-menu";

const navLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/custom", label: "Custom" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const totalItems = useCartStore((s) => s.totalItems());
  const setCartOpen = useCartStore((s) => s.setOpen);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const toggleMenu = useCallback(() => setMenuOpen((open) => !open), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    document.body.style.touchAction = menuOpen ? "none" : "";
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [menuOpen]);

  const isHome = pathname === "/";

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 isolate transition-all duration-500",
          menuOpen ? "z-[9999]" : "z-[100]",
          scrolled || !isHome || menuOpen
            ? "glass-elegant border-b border-foreground/5 py-3"
            : "bg-transparent py-5 md:py-6"
        )}
      >
        <div className="section-padding flex items-center justify-between">
          <Link
            href="/"
            className="relative z-[1] font-display text-lg font-semibold tracking-tight sm:text-xl"
            aria-label="Windsor Embro Home"
          >
            Windsor<span className="text-muted-foreground font-normal">.</span>
          </Link>

          <nav className="hidden items-center gap-10 md:flex" aria-label="Main">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "label-luxury link-underline transition-colors hover:text-foreground",
                  pathname === link.href
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="relative z-[1] flex items-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => setCartOpen(true)}
              className="relative flex h-11 w-11 cursor-pointer touch-manipulation items-center justify-center transition-opacity hover:opacity-70 active:opacity-50"
              aria-label={`Cart, ${totalItems} items`}
            >
              <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#0a0a0a] text-[9px] font-medium text-[#fafaf8]">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              type="button"
              className="relative flex h-11 w-11 cursor-pointer touch-manipulation items-center justify-center md:hidden"
              onClick={toggleMenu}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              {menuOpen ? (
                <X className="h-5 w-5" strokeWidth={1.5} />
              ) : (
                <Menu className="h-5 w-5" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={closeMenu} />

      <CartDrawer />
    </>
  );
}
