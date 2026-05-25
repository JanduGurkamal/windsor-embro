import type { Metadata, Viewport } from "next";
import { geistSans, interTight } from "@/lib/fonts";
import { AppProviders } from "@/providers/app-providers";
import { ClientShell } from "@/components/layout/client-shell";
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
      className={`${geistSans.variable} ${interTight.variable}`}
    >
      <body className="min-h-screen overflow-x-hidden">
        <AppProviders>
          <ClientShell>{children}</ClientShell>
        </AppProviders>
      </body>
    </html>
  );
}
