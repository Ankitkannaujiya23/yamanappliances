import HeroSlider from "@/components/HeroSlider";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import BookSection from "@/components/BookSection";
import Testimonials from "@/components/Testimonials";
import BlogPreview from "@/components/BlogPreview";
import ContactSection from "@/components/ContactSection";
import { site } from "@/data/site";

export const metadata = {
  title: `Home Appliance Repair Service in ${site.city}`,
  description:
    "Book trusted doorstep repair for AC, TV, Refrigerator, Washing Machine, Cooler and more home appliances across Delhi NCR. Transparent pricing, verified technicians, same-day service.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <ServicesSection />
      <WhyChooseUs />
      <BookSection />
      <Testimonials />
      <BlogPreview />
      <ContactSection />
    </>
  );
}
