import { Button } from "@/components/ui/button";

const Hero = () => {
  const pillars = [
    "High Performance Leadership",
    "Top Talent Development",
    "Capabilities & Culture",
  ];

  return (
    <section id="home" className="pt-16 pb-10 lg:pt-20 lg:pb-14 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-transparent"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent-foreground rounded-full text-sm font-medium mb-4">
            Boutique leadership practice — UK & India
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Bold, boundaryless leadership development —{" "}
            <span className="gradient-text">grounded in India, connected to the world.</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Your trusted partner in building sustainable high-performance leadership teams.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-5">
            {pillars.map((pillar) => (
              <span
                key={pillar}
                className="text-xs md:text-sm px-3 py-1.5 rounded-full bg-background/40 border border-border/50 text-muted-foreground"
              >
                {pillar}
              </span>
            ))}
          </div>

          <p className="text-sm text-muted-foreground mb-6">
            Office base camp — London, UK • Bengaluru, India
            <span className="hidden sm:inline"> | </span>
            <span className="block sm:inline">Development Centres — Bengaluru • Coimbatore</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg">
              <a href="#contact">Book a conversation</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#services">Explore what we do</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
