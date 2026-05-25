import dynamic from "next/dynamic";
import { HeroSection } from "@/components/home/hero-section";

const EmbroideryShowcase = dynamic(
  () =>
    import("@/components/home/embroidery-showcase").then((m) => ({
      default: m.EmbroideryShowcase,
    })),
  { loading: () => <SectionSkeleton /> }
);
const BrandStory = dynamic(
  () =>
    import("@/components/home/brand-story").then((m) => ({
      default: m.BrandStory,
    })),
  { loading: () => <SectionSkeleton tall /> }
);
const FeaturedCollection = dynamic(
  () =>
    import("@/components/home/featured-collection").then((m) => ({
      default: m.FeaturedCollection,
    })),
  { loading: () => <SectionSkeleton /> }
);
const ProcessSection = dynamic(
  () =>
    import("@/components/home/process-section").then((m) => ({
      default: m.ProcessSection,
    })),
  { loading: () => <SectionSkeleton /> }
);
const CraftsmanshipSection = dynamic(
  () =>
    import("@/components/home/craftsmanship-section").then((m) => ({
      default: m.CraftsmanshipSection,
    })),
  { loading: () => <SectionSkeleton tall /> }
);
const Testimonials = dynamic(
  () =>
    import("@/components/home/testimonials").then((m) => ({
      default: m.Testimonials,
    })),
  { loading: () => <SectionSkeleton /> }
);
const SocialProof = dynamic(
  () =>
    import("@/components/home/social-proof").then((m) => ({
      default: m.SocialProof,
    })),
  { loading: () => <SectionSkeleton /> }
);
const CtaSection = dynamic(
  () =>
    import("@/components/home/cta-section").then((m) => ({
      default: m.CtaSection,
    })),
  { loading: () => <SectionSkeleton /> }
);

function SectionSkeleton({ tall }: { tall?: boolean }) {
  return (
    <div
      className={`section-padding section-py animate-pulse bg-secondary/30 ${
        tall ? "min-h-[50vh]" : "min-h-[320px]"
      }`}
      aria-hidden
    />
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <EmbroideryShowcase />
      <BrandStory />
      <FeaturedCollection />
      <ProcessSection />
      <CraftsmanshipSection />
      <Testimonials />
      <SocialProof />
      <CtaSection />
    </>
  );
}
