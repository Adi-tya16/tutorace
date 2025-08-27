import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Mail, Lock, User, GraduationCap } from "lucide-react";

const AuthModal = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md p-8 card-shadow">
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
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input id="email" type="email" placeholder="your@email.com" className="pl-10" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input id="password" type="password" placeholder="Enter your password" className="pl-10" />
                </div>
              </div>

              <Button className="w-full" variant="hero">
                Sign In
              </Button>

              <div className="text-center">
                <a href="#" className="text-sm text-primary hover:underline">
                  Forgot your password?
                </a>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="signup" className="space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input id="name" placeholder="Enter your full name" className="pl-10" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="signup-email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input id="signup-email" type="email" placeholder="your@email.com" className="pl-10" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="signup-password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input id="signup-password" type="password" placeholder="Create a password" className="pl-10" />
                </div>
              </div>

              <div className="space-y-3">
                <Label>I want to:</Label>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="flex flex-col gap-2 h-auto py-4">
                    <GraduationCap className="h-6 w-6" />
                    <span className="text-sm">Learn as a Student</span>
                  </Button>
                  <Button variant="outline" className="flex flex-col gap-2 h-auto py-4">
                    <BookOpen className="h-6 w-6" />
                    <span className="text-sm">Teach as a Tutor</span>
                  </Button>
                </div>
              </div>

              <Button className="w-full" variant="hero">
                Create Account
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By signing up, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default AuthModal;