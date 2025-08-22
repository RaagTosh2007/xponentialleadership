import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-image.jpg";
import { ArrowRight, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent-foreground rounded-full text-sm font-medium mb-4">
                20+ Years of Excellence
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                When your business is changing faster than your{" "}
                <span className="gradient-text">people and culture</span> can keep up...
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                I help organizations like yours strengthen leadership, align culture, and build resilience—so you can move forward with confidence, clarity, and results.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-gradient-accent hover:shadow-strong transition-all duration-300">
                Book Discovery Session
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="hover:shadow-medium transition-all duration-300">
                Download Free OD Guide
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center justify-center lg:justify-start">
                <CheckCircle className="h-5 w-5 text-accent mr-2" />
                <span>It's Practical</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <CheckCircle className="h-5 w-5 text-accent mr-2" />
                <span>It Lasts</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <CheckCircle className="h-5 w-5 text-accent mr-2" />
                <span>It's Human</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <CheckCircle className="h-5 w-5 text-accent mr-2" />
                <span>It Fits You</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-20 scale-110"></div>
              <img
                src={profileImage}
                alt="Satyanarayana Kumar - Management Consultant & Executive Coach"
                className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-strong border-4 border-background"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;