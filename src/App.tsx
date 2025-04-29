import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import InvestmentOpportunitiesSection from "./components/sections/InvestmentOpportunitiesSection";
import ServicesSection from "./components/sections/ServicesSection";
import AboutSection from "./components/sections/AboutSection";
// import TestimonialsSection from "./components/sections/TestimonialsSection";
import ContactSection from "./components/sections/ContactSection";
import CTASection from "./components/sections/CTASection";
import WhyChooseUsSection from "./components/sections/WhyChooseUsSection";

function App() {
  return (
    <main className="font-sans">
      <Header />

      <main>
        <HeroSection />
        <InvestmentOpportunitiesSection />
        <ServicesSection />
        <AboutSection />
        {/* <TestimonialsSection /> */}
        <WhyChooseUsSection />
        <CTASection />
        <ContactSection />
      </main>

      <Footer />
    </main>
  );
}

export default App;
