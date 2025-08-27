import { Card } from "@/components/ui/card";
import { Search, Calendar, CreditCard, GraduationCap } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Find Your Tutor",
    description: "Browse through our verified tutors and filter by subject, price, and availability."
  },
  {
    icon: Calendar,
    title: "Book a Session",
    description: "Select your preferred time slot and send a booking request to your chosen tutor."
  },
  {
    icon: CreditCard,
    title: "Secure Payment",
    description: "Pay securely through our platform to confirm your booking and protect both parties."
  },
  {
    icon: GraduationCap,
    title: "Start Learning",
    description: "Join your scheduled session and start your personalized learning journey."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-muted/10">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How TutorConnect Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting started with personalized tutoring is simple and straightforward
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="p-6 text-center card-shadow hover:card-shadow-hover transition-smooth">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full hero-gradient flex items-center justify-center">
                <step.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;