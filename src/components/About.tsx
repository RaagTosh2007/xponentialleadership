import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, TrendingUp, Award } from "lucide-react";

const About = () => {
  const challenges = [
    {
      icon: Target,
      title: "Growth has slowed or plateaued",
      description: "Your business momentum isn't what it used to be"
    },
    {
      icon: Users,
      title: "Teams are pulling in different directions",
      description: "Lack of alignment is creating friction and confusion"
    },
    {
      icon: TrendingUp,
      title: "Change feels exhausting, not energizing",
      description: "Your people are tired of constant shifts and uncertainty"
    },
    {
      icon: Award,
      title: "Leaders are stretched thin and struggling to align",
      description: "Your leadership team needs clarity and unified direction"
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            You may be noticing...
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            When business moves faster than culture, these warning signs start showing up
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((challenge, index) => (
            <Card key={index} className="bg-gradient-card hover:shadow-medium transition-all duration-300 border-0">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <challenge.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2 text-sm leading-tight">{challenge.title}</h3>
                <p className="text-sm text-muted-foreground">{challenge.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-hero rounded-2xl p-8 lg:p-12 shadow-soft text-center">
          <h3 className="text-2xl font-bold text-primary-foreground mb-6">That's where I come in.</h3>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            For leaders who want their people and business to <span className="gradient-text font-semibold">thrive—together</span>.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-primary-foreground/80">
            <div>
              <div className="text-sm font-medium mb-1">It's Practical</div>
              <div className="text-xs">No jargon, just steps you can use</div>
            </div>
            <div>
              <div className="text-sm font-medium mb-1">It Lasts</div>
              <div className="text-xs">Change sticks beyond the workshop</div>
            </div>
            <div>
              <div className="text-sm font-medium mb-1">It's Human</div>
              <div className="text-xs">People feel heard and included</div>
            </div>
            <div>
              <div className="text-sm font-medium mb-1">It Fits You</div>
              <div className="text-xs">Tailored to your unique challenges</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;