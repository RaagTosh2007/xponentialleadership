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
      title: "Organization Development Strategy",
      description: "Transform your organization with science-based OD roadmaps.",
      features: [
        "Diagnose organizational strengths and challenges",
        "Design science-based OD roadmaps aligned to business goals",
        "Facilitate structured change using the 5-step OD process"
      ]
    },
    {
      icon: ChartBar,
      title: "Diagnostics & Assessments",
      description: "Understand your current state with comprehensive assessments.",
      features: [
        "Employee engagement and culture surveys",
        "Leadership effectiveness assessments", 
        "Team effectiveness workshops and feedback loops"
      ]
    },
    {
      icon: Settings,
      title: "Change & Intervention Design",
      description: "Strategic interventions that drive lasting organizational change.",
      features: [
        "Human process interventions (team building, conflict resolution)",
        "Structural redesign (workflows, role clarity, agility frameworks)",
        "Strategic change programs to future-proof the business"
      ]
    },
    {
      icon: Users,
      title: "Leadership Coaching & Development",
      description: "Develop resilient leaders who can navigate complex challenges.",
      features: [
        "One-on-one coaching for senior leaders",
        "Group coaching and team offsites",
        "Programs to build psychological safety, resilience, and innovation"
      ]
    },
    {
      icon: GraduationCap,
      title: "Learning & Culture Enablement",
      description: "Build learning cultures that adapt and thrive.",
      features: [
        "Workshops on trust, collaboration, and adaptive leadership",
        "Culture transformation journeys rooted in purpose and values",
        "Creation of in-house OD capability within HR and leadership teams"
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