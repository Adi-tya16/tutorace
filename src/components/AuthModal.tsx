import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Mail, Lock, User, GraduationCap, ArrowLeft, Github } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";

const AuthModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [selectedRole, setSelectedRole] = useState<'student' | 'tutor'>('student');
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const { signIn, signUp, signInWithGitHub, user } = useAuth();
  const navigate = useNavigate();

  // Redirect if already authenticated
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    
    setIsLoading(true);
    await signIn(email, password);
    setIsLoading(false);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!signUpEmail || !signUpPassword || !fullName) return;
    
    setIsLoading(true);
    await signUp(signUpEmail, signUpPassword, fullName, selectedRole);
    setIsLoading(false);
  };

  const handleGitHubSignIn = async () => {
    setIsLoading(true);
    await signInWithGitHub();
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="relative w-full max-w-md">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          size="sm" 
          className="absolute -top-16 left-0 text-muted-foreground hover:text-foreground" 
          asChild
        >
          <Link to="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </Button>

        <Card className="w-full p-8 card-shadow">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">TutorConnect</span>
          </div>
          <p className="text-muted-foreground">Join our learning community</p>
        </div>

        <Tabs defaultValue="signin" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          
          <TabsContent value="signin" className="space-y-4">
            <form onSubmit={handleSignIn} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your@email.com" 
                    className="pl-10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="Enter your password" 
                    className="pl-10"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <Button className="w-full" variant="hero" type="submit" disabled={isLoading}>
                {isLoading ? "Signing In..." : "Sign In"}
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>

              <Button 
                type="button" 
                variant="outline" 
                className="w-full"
                onClick={handleGitHubSignIn}
                disabled={isLoading}
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>

              <div className="text-center">
                <a href="#" className="text-sm text-primary hover:underline">
                  Forgot your password?
                </a>
              </div>
            </form>
          </TabsContent>
          
          <TabsContent value="signup" className="space-y-4">
            <form onSubmit={handleSignUp} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input 
                    id="name" 
                    placeholder="Enter your full name" 
                    className="pl-10"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="signup-email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input 
                    id="signup-email" 
                    type="email" 
                    placeholder="your@email.com" 
                    className="pl-10"
                    value={signUpEmail}
                    onChange={(e) => setSignUpEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="signup-password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input 
                    id="signup-password" 
                    type="password" 
                    placeholder="Create a password (min 6 characters)" 
                    className="pl-10"
                    value={signUpPassword}
                    onChange={(e) => setSignUpPassword(e.target.value)}
                    minLength={6}
                    required
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label>I want to:</Label>
                <div className="grid grid-cols-2 gap-3">
                  <Button 
                    type="button"
                    variant={selectedRole === 'student' ? 'default' : 'outline'} 
                    className="flex flex-col gap-2 h-auto py-4"
                    onClick={() => setSelectedRole('student')}
                  >
                    <GraduationCap className="h-6 w-6" />
                    <span className="text-sm">Learn as a Student</span>
                  </Button>
                  <Button 
                    type="button"
                    variant={selectedRole === 'tutor' ? 'default' : 'outline'} 
                    className="flex flex-col gap-2 h-auto py-4"
                    onClick={() => setSelectedRole('tutor')}
                  >
                    <BookOpen className="h-6 w-6" />
                    <span className="text-sm">Teach as a Tutor</span>
                  </Button>
                </div>
              </div>

              <Button className="w-full" variant="hero" type="submit" disabled={isLoading}>
                {isLoading ? "Creating Account..." : "Create Account"}
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>

              <Button 
                type="button" 
                variant="outline" 
                className="w-full"
                onClick={handleGitHubSignIn}
                disabled={isLoading}
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By signing up, you agree to our Terms of Service and Privacy Policy
              </p>
            </form>
          </TabsContent>
        </Tabs>
      </Card>
      </div>
    </div>
  );
};

export default AuthModal;