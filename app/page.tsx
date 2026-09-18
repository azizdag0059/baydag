import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BeforeAfterDeck from "@/components/BeforeAfterDeck";
import AIAssistantSection from "@/components/AIAssistantSection";
import ProjectsGallery from "@/components/ProjectsGallery";
import AboutCraftsmanship from "@/components/AboutCraftsmanship";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingAIWidget from "@/components/FloatingAIWidget";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d0f12] text-white selection:bg-[#ff5e14] selection:text-white">
      <Navbar />
      <HeroSection />
      <BeforeAfterDeck />
      <AIAssistantSection />
      <ProjectsGallery />
      <AboutCraftsmanship />
      <ContactSection />
      <Footer />
      <FloatingAIWidget />
    </main>
  );
}
