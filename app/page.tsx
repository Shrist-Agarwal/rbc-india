import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import ProductCategoriesGrid from "@/components/sections/ProductCategoriesGrid";
import BrandPartners from "@/components/sections/BrandPartners";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ProductCategoriesGrid />
      <WhyChooseUs />
      <BrandPartners />
      <Testimonials />
      <CTABanner />
    </>
  );
}
