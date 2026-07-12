import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-transparent"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent-foreground rounded-full text-sm font-medium mb-6">
            ICF-Certified · 20+ Years of Executive Coaching
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Executive Coaching Services That Grow{" "}
            <span className="gradient-text">Leaders, Culture & Results</span>
          </h1>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
            Leadership coaching, CEO coaching, and organization development for companies scaling faster than their people and culture can keep up — so you move forward with clarity, confidence, and measurable results.
          </p>

        </div>
      </div>
    </section>
  );
};

export default Hero;