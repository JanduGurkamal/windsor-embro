"use client";

import dynamic from "next/dynamic";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { FloatingCta } from "@/components/layout/floating-cta";
import { FilmGrain } from "@/components/editorial/film-grain";

const SmoothScroll = dynamic(
  () =>
    import("@/components/motion/smooth-scroll").then((m) => ({
      default: m.SmoothScroll,
    })),
  { ssr: false }
);

const PageLoader = dynamic(
  () =>
    import("@/components/motion/page-loader").then((m) => ({
      default: m.PageLoader,
    })),
  { ssr: false }
);

export function ClientShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageLoader />
      <FilmGrain />
      <SmoothScroll>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <FloatingCta />
      </SmoothScroll>
    </>
  );
}
