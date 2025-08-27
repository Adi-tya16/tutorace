import { Button } from "@/components/ui/button";
import { BookOpen, Menu, User } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <BookOpen className="h-8 w-8 text-primary" />
          <Link to="/" className="text-2xl font-bold">TutorConnect</Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-foreground/80 hover:text-foreground transition-smooth">
            Find Tutors
          </a>
          <a href="#" className="text-foreground/80 hover:text-foreground transition-smooth">
            Become a Tutor
          </a>
          <a href="#" className="text-foreground/80 hover:text-foreground transition-smooth">
            How it Works
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden md:flex" asChild>
            <Link to="/auth">Sign In</Link>
          </Button>
          <Button variant="hero" asChild>
            <Link to="/auth">Get Started</Link>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;