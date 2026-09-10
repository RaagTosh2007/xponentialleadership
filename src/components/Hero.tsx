import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-14 lg:pt-28 lg:pb-20 bg-gradient-hero text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Bold, boundaryless leadership development -{" "}
            <span className="gradient-text">grounded in India, connected to the world.</span>
          </h1>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Your trusted partner in building sustainable high-performance leadership teams.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <a href="#contact">Book a conversation</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/60 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <a href="#services">Explore what we do</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
