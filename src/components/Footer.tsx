import { BookOpen, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">TutorConnect</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Connecting students with expert tutors for personalized learning experiences.
            </p>
            <div className="flex gap-4">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-smooth" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-smooth" />
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-smooth" />
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-smooth" />
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">For Students</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Find Tutors</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">How it Works</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Pricing</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Student Dashboard</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">For Tutors</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Become a Tutor</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Tutor Resources</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Earnings</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Tutor Dashboard</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Help Center</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Contact Us</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 TutorConnect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;