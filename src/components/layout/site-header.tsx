"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/store/cart";
import { CartDrawer } from "@/components/layout/cart-drawer";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { BrandLogo } from "@/components/layout/brand-logo";

const navLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/custom", label: "Atelier" },
  { href: "/about", label: "Story" },
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
    const onScroll = () => setScrolled(window.scrollY > 24);
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
  const onDark = isHome && !scrolled && !menuOpen;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 isolate transition-all duration-700",
          menuOpen ? "z-[9999]" : "z-[100]",
          scrolled || !isHome || menuOpen
            ? "glass-elegant py-3"
            : "bg-transparent py-6 md:py-8"
        )}
      >
        <div className="section-padding flex items-center justify-between">
          <BrandLogo
            priority
            className={cn("relative z-[1]", onDark && "brightness-110")}
          />

          <nav className="hidden items-center gap-12 lg:flex" aria-label="Main">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "label-editorial link-underline transition-colors",
                  onDark ? "text-[#fafaf8]/70 hover:text-[#fafaf8]" : "text-muted-foreground hover:text-foreground",
                  pathname === link.href && (onDark ? "text-[#fafaf8]" : "text-foreground")
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="relative z-[1] flex items-center gap-5">
            <button
              type="button"
              onClick={() => setCartOpen(true)}
              className={cn(
                "label-editorial flex items-center gap-2 transition-opacity hover:opacity-60",
                onDark ? "text-[#fafaf8]" : "text-foreground"
              )}
              aria-label={`Cart, ${totalItems} items`}
            >
              <span className="hidden sm:inline">Bag</span>
              <ShoppingBag className="h-4 w-4" strokeWidth={1.25} />
              {totalItems > 0 && (
                <span className="text-[#c4b5a0]">({totalItems})</span>
              )}
            </button>
            <button
              type="button"
              className={cn(
                "label-editorial flex h-11 items-center gap-2 lg:hidden",
                onDark ? "text-[#fafaf8]" : "text-foreground"
              )}
              onClick={toggleMenu}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <>
                  Close <X className="h-4 w-4" strokeWidth={1.25} />
                </>
              ) : (
                <>
                  Menu <Menu className="h-4 w-4" strokeWidth={1.25} />
                </>
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
