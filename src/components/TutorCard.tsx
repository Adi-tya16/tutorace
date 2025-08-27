import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, CheckCircle } from "lucide-react";

interface TutorCardProps {
  name: string;
  image: string;
  subjects: string[];
  rating: number;
  reviews: number;
  hourlyRate: number;
  experience: string;
  isOnline?: boolean;
}

const TutorCard = ({ 
  name, 
  image, 
  subjects, 
  rating, 
  reviews, 
  hourlyRate, 
  experience,
  isOnline = false 
}: TutorCardProps) => {
  return (
    <Card className="overflow-hidden card-shadow hover:card-shadow-hover transform hover:-translate-y-1 transition-smooth cursor-pointer">
      <div className="p-6 space-y-4">
        <div className="flex items-start gap-4">
          <div className="relative">
            <img 
              src={image} 
              alt={`${name} - Tutor`}
              className="w-16 h-16 rounded-full object-cover"
            />
            {isOnline && (
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-accent rounded-full border-2 border-background flex items-center justify-center">
                <div className="w-2 h-2 bg-background rounded-full" />
              </div>
            )}
          </div>
          
          <div className="flex-1 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg">{name}</h3>
              {isOnline && (
                <Badge variant="secondary" className="text-xs">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Online
                </Badge>
              )}
            </div>
            
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-current text-yellow-500" />
                <span className="font-medium">{rating}</span>
                <span className="text-sm text-muted-foreground">({reviews} reviews)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {subjects.slice(0, 3).map((subject) => (
              <Badge key={subject} variant="outline" className="text-xs">
                {subject}
              </Badge>
            ))}
            {subjects.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{subjects.length - 3} more
              </Badge>
            )}
          </div>

          <p className="text-sm text-muted-foreground">{experience}</p>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <span className="font-semibold text-lg">${hourlyRate}/hr</span>
            </div>
            <Button size="sm" variant="hero">
              Book Session
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TutorCard;