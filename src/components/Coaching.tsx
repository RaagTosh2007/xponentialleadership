import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  TrendingUp, 
  Users, 
  Briefcase, 
  ArrowRight,
  CheckCircle,
  Award
} from "lucide-react";

const Coaching = () => {
  const coachingAreas = [
    {
      icon: Target,
      title: "Career & Business Coaching",
      description: "Strategic guidance for professional growth and business development",
      details: "Navigate career transitions, develop leadership capabilities, and achieve business objectives"
    },
    {
      icon: TrendingUp,
      title: "Leadership Transformation",
      description: "Developing leaders who inspire and deliver results",
      details: "Build executive presence, enhance decision-making, and drive organizational change"
    },
    {
      icon: Users,
      title: "Women Leaders Coaching",
      description: "Specialized support for women in leadership roles",
      details: "Break through barriers, build confidence, and create inclusive leadership styles"
    },
    {
      icon: Briefcase,
      title: "Breakthrough Coaching",
      description: "Overcome limiting beliefs and unlock potential",
      details: "Transform mindsets, develop resilience, and accelerate personal and professional growth"
    }
  ];

  const experience = [
    {
      industry: "IT & ITeS",
      description: "Technology leaders, product managers, and digital transformation executives"
    },
    {
      industry: "BFSI, Telecom & Pharma",
      description: "Senior executives navigating regulatory changes and market disruption"
    },
    {
      industry: "Human Resources",
      description: "HR leaders driving organizational change and talent strategies"
    },
    {
      industry: "Services & Marketing",
      description: "Client-facing leaders and marketing executives scaling their impact"
    }
  ];

  const levels = [
    "Executive Leadership",
    "Business & Functional Leaders", 
    "Middle Management",
    "High Potentials & Top Talent"
  ];

  return (
    <section id="coaching" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Executive <span className="gradient-text">Coaching</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            One-on-one coaching for leaders who want to enhance their impact, navigate complex challenges, 
            and accelerate their professional growth with clarity and confidence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {coachingAreas.map((area, index) => (
            <Card key={index} className="bg-gradient-card hover:shadow-medium transition-all duration-300 border-0 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <area.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl mb-2">{area.title}</CardTitle>
                <p className="text-muted-foreground">{area.description}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{area.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="bg-gradient-card border-0">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Briefcase className="h-6 w-6 text-accent mr-3" />
                <h3 className="text-xl font-bold">Industry Experience</h3>
              </div>
              <div className="space-y-4">
                {experience.map((exp, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-accent mb-1">{exp.industry}</h4>
                    <p className="text-sm text-muted-foreground">{exp.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Award className="h-6 w-6 text-accent mr-3" />
                <h3 className="text-xl font-bold">Leadership Levels</h3>
              </div>
              <div className="space-y-3">
                {levels.map((level, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-3" />
                    <span className="text-sm">{level}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-border/50">
                <div className="flex items-center">
                  <Award className="h-4 w-4 text-accent mr-2" />
                  <span className="text-sm font-semibold text-accent">PCC - International Coach Federation (ICF)</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Certified Advanced Coaching Professional</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-hero rounded-2xl p-8 lg:p-12 text-center shadow-strong">
          <h3 className="text-2xl font-bold text-primary-foreground mb-4">
            Ready to Accelerate Your Leadership Journey?
          </h3>
          <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
            Whether you're navigating a career transition, leading transformation, or looking to enhance your executive presence, 
            let's explore how coaching can unlock your next level of impact.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-accent hover:shadow-strong transition-all duration-300"
          >
            Schedule Coaching Session
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Coaching;