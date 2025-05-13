import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      {/* Placeholder for About Section if needed */}
      {/* Placeholder for Testimonials Section if needed */}
      <ContactSection />
      <Footer />
    </main>
  );
}

