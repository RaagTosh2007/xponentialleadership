import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  ChartBar, 
  Settings, 
  Users, 
  GraduationCap, 
  ArrowRight 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Target,
      title: "Get Clear on What's Really Going On (Organizational Assessment)",
      description: "You don't just need more data-you need insight.",
      outcomes: "You'll walk away with:",
      features: [
        "A clear picture of what's working and what's holding you back",
        "Prioritized areas for action, not endless reports"
      ]
    },
    {
      icon: ChartBar,
      title: "Align Your Teams & Leadership (Leadership Alignment)",
      description: "When leadership isn't aligned, the whole company feels it.",
      outcomes: "You'll get:",
      features: [
        "A leadership team that pulls in the same direction",
        "Teams that collaborate with trust and accountability"
      ]
    },
    {
      icon: Settings,
      title: "Make Change Stick (Change Management)",
      description: "Change is hard when it's done \"to\" people instead of \"with\" them.",
      outcomes: "You'll see:",
      features: [
        "Less resistance, more ownership",
        "Smoother transitions that don't derail day-to-day business"
      ]
    },
    {
      icon: Users,
      title: "Build Leaders Who Inspire & Deliver (Leadership Development)",
      description: "Your managers and leaders are the key to scaling growth.",
      outcomes: "You'll notice:",
      features: [
        "Leaders who grow others, not just themselves",
        "More innovation, less firefighting"
      ]
    },
    {
      icon: GraduationCap,
      title: "Strengthen Your Culture (Culture Transformation)",
      description: "A fragmented culture slows growth.",
      outcomes: "You'll gain:",
      features: [
        "Higher engagement and retention",
        "A culture that attracts talent and drives performance"
      ]
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Services & <span className="gradient-text">Offerings</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive organization development solutions tailored to your business needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-gradient-card hover:shadow-medium transition-all duration-300 border-0 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <p className="text-muted-foreground">{service.description}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">{service.outcomes}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-hero rounded-2xl p-8 lg:p-12 text-center shadow-strong">
          <h3 className="text-2xl font-bold text-primary-foreground mb-4">
            Ready to Transform Your Organization?
          </h3>
          <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
            Let's start with a discovery conversation to explore your challenges and map out the right next step.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-accent hover:shadow-strong transition-all duration-300"
          >
            Schedule Discovery Session
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;