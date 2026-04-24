import { Hero } from '@/components/sections/hero';
import { Features } from '@/components/sections/features';
import { Pricing } from '@/components/sections/pricing';
import { Testimonials } from '@/components/sections/testimonials';
import { Cta } from '@/components/sections/cta';
import { Footer } from '@/components/sections/footer';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <Cta />
      <Footer />
    </>
  );
}
