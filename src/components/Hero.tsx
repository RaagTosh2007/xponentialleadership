import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-suited.png";
import { ArrowRight, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-transparent"></div>
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
              <p className="text-lg text-white mb-8 max-w-2xl">
                I help organizations like yours strengthen leadership, align culture, and build resilience-so you can move forward with confidence, clarity, and results.
              </p>
            </div>


          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-20 scale-110"></div>
              <img
                src="/lovable-uploads/2f57c10c-6b93-4dd0-bb17-d8a4b8bb8050.png"
                alt="Satyanarayana Kumar - Management Consultant & Executive Coach"
                className="relative w-56 h-56 lg:w-72 lg:h-72 rounded-full object-cover object-center shadow-strong border-4 border-background"
                style={{ transform: 'scale(0.7)', transformOrigin: 'center' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;