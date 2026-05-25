import Link from "next/link";
import { Instagram, Mail } from "lucide-react";

const footerLinks = {
  Shop: [
    { href: "/shop", label: "All Products" },
    { href: "/shop?category=hoodies", label: "Hoodies" },
    { href: "/shop?category=outerwear", label: "Outerwear" },
  ],
  Brand: [
    { href: "/about", label: "Our Story" },
    { href: "/custom", label: "Custom Embroidery" },
    { href: "/contact", label: "Contact" },
  ],
  Support: [
    { href: "/contact#faq", label: "FAQ" },
    { href: "/contact", label: "Shipping" },
    { href: "/contact", label: "Returns" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="bg-[#0a0a0a] text-[#fafaf8]">
      <div className="section-padding section-py">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Link href="/" className="font-display text-2xl font-semibold tracking-tight">
              Windsor<span className="font-normal text-[#a8a29e]">.</span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-[#a8a29e]">
              Precision embroidery for those who demand more. Crafted in small batches,
              designed to become heirlooms of streetwear.
            </p>
            <div className="mt-8 flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center border border-[#fafaf8]/20 transition-colors hover:border-[#c4b5a0] hover:text-[#c4b5a0]"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href="mailto:studio@windsorembro.com"
                className="flex h-10 w-10 items-center justify-center border border-[#fafaf8]/20 transition-colors hover:border-[#c4b5a0] hover:text-[#c4b5a0]"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="lg:col-span-2">
              <p className="label-luxury mb-4 text-[#78716c]">{title}</p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#d6d3d1] transition-colors hover:text-[#fafaf8] link-underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-[#fafaf8]/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[#78716c]">
            © {new Date().getFullYear()} Windsor Embro. All rights reserved.
          </p>
          <p className="text-xs text-[#78716c]">
            Crafted with intention · London, UK
          </p>
        </div>
      </div>
    </footer>
  );
}
