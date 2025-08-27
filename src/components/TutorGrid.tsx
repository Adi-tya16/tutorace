import TutorCard from "./TutorCard";
import tutor1 from "@/assets/tutor-1.jpg";
import tutor2 from "@/assets/tutor-2.jpg";
import tutor3 from "@/assets/tutor-3.jpg";

const mockTutors = [
  {
    id: 1,
    name: "Sarah Johnson",
    image: tutor1,
    subjects: ["Mathematics", "Algebra", "Calculus"],
    rating: 4.9,
    reviews: 127,
    hourlyRate: 45,
    experience: "PhD in Mathematics with 8 years of tutoring experience",
    isOnline: true
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    image: tutor2,
    subjects: ["Physics", "Chemistry", "Biology"],
    rating: 4.8,
    reviews: 89,
    hourlyRate: 55,
    experience: "Former university professor specializing in STEM subjects",
    isOnline: false
  },
  {
    id: 3,
    name: "Emma Williams",
    image: tutor3,
    subjects: ["English", "Literature", "Writing"],
    rating: 4.9,
    reviews: 156,
    hourlyRate: 40,
    experience: "MA in English Literature, published author and writing coach",
    isOnline: true
  },
  {
    id: 4,
    name: "Sarah Johnson",
    image: tutor1,
    subjects: ["Spanish", "French", "ESL"],
    rating: 4.7,
    reviews: 92,
    hourlyRate: 35,
    experience: "Certified language instructor with international experience",
    isOnline: true
  },
  {
    id: 5,
    name: "Dr. Michael Chen",
    image: tutor2,
    subjects: ["Computer Science", "Programming", "Web Development"],
    rating: 4.9,
    reviews: 203,
    hourlyRate: 65,
    experience: "Senior software engineer with 10+ years in tech industry",
    isOnline: false
  },
  {
    id: 6,
    name: "Emma Williams",
    image: tutor3,
    subjects: ["History", "Political Science", "Economics"],
    rating: 4.8,
    reviews: 74,
    hourlyRate: 42,
    experience: "MA in History, specialized in modern world history",
    isOnline: true
  }
];

const TutorGrid = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Expert Tutors</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our carefully vetted tutors who are passionate about helping you succeed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockTutors.map((tutor) => (
            <TutorCard
              key={tutor.id}
              name={tutor.name}
              image={tutor.image}
              subjects={tutor.subjects}
              rating={tutor.rating}
              reviews={tutor.reviews}
              hourlyRate={tutor.hourlyRate}
              experience={tutor.experience}
              isOnline={tutor.isOnline}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TutorGrid;