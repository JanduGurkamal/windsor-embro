import type { Metadata, Viewport } from "next";
import { geistSans, geistMono, interTight } from "@/lib/fonts";
import { AppProviders } from "@/providers/app-providers";
import { SmoothScroll } from "@/components/motion/smooth-scroll";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageLoader } from "@/components/motion/page-loader";
import { FloatingCta } from "@/components/layout/floating-cta";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Windsor Embro | Luxury Embroidery Streetwear",
    template: "%s | Windsor Embro",
  },
  description:
    "Premium embroidered streetwear crafted in Canada. Luxury hoodies, outerwear, and bespoke embroidery services.",
  keywords: [
    "luxury streetwear",
    "embroidery",
    "premium hoodies",
    "custom embroidery",
    "Windsor Embro",
  ],
  openGraph: {
    title: "Windsor Embro",
    description: "Luxury embroidery streetwear — crafted to endure.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${interTight.variable}`}
    >
      <body className="min-h-screen overflow-x-hidden">
        <AppProviders>
          <PageLoader />
          <SmoothScroll>
            <SiteHeader />
            <main>{children}</main>
            <SiteFooter />
            <FloatingCta />
          </SmoothScroll>
        </AppProviders>
      </body>
    </html>
  );
}
