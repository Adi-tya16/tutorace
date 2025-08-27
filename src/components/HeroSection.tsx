import { Button } from "@/components/ui/button";
import { Search, Star, Users, Clock } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Students and tutors learning together"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-2xl space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold leading-tight">
              Find Your Perfect 
              <span className="hero-gradient bg-clip-text text-transparent"> Tutor</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Connect with expert tutors for personalized learning. Book sessions, 
              learn at your pace, and achieve your academic goals.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="hero" className="text-lg px-8 py-6">
              <Search className="mr-2 h-5 w-5" />
              Find a Tutor
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Become a Tutor
            </Button>
          </div>

          <div className="flex items-center gap-8 pt-8">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-sm text-muted-foreground">1000+ Tutors</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-primary" />
              <span className="text-sm text-muted-foreground">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <span className="text-sm text-muted-foreground">24/7 Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;