import { HeroSection } from "@/components/home/hero-section";
import { EmbroideryShowcase } from "@/components/home/embroidery-showcase";
import { BrandStory } from "@/components/home/brand-story";
import { FeaturedCollection } from "@/components/home/featured-collection";
import { ProcessSection } from "@/components/home/process-section";
import { CraftsmanshipSection } from "@/components/home/craftsmanship-section";
import { Testimonials } from "@/components/home/testimonials";
import { SocialProof } from "@/components/home/social-proof";
import { CtaSection } from "@/components/home/cta-section";

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
