import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import SearchFilters from "@/components/SearchFilters";
import TutorGrid from "@/components/TutorGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <HowItWorks />
        <SearchFilters />
        <TutorGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
