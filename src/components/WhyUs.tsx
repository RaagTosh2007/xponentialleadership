import { Card, CardContent } from "@/components/ui/card";
import { Globe, Medal, Layers, Users } from "lucide-react";

const stats = [
  { value: "45+", label: "Years of founding team experience developing people & organisations" },
  { value: "30+", label: "Companies have gained value from the team's expertise" },
  { value: "10,000+", label: "Hours coaching leaders & developing top talent" },
  { value: "50,000+", label: "People positively impacted" },
];

const pillars = [
  {
    icon: Globe,
    title: "Global exposure & dual operational base",
    description:
      "Authorised to live and work in both India and the UK — genuine cross-border delivery, without the need for visa or sponsorship.",
  },
  {
    icon: Medal,
    title: "Credentialed coaches & certified facilitators",
    description:
      "Robust experience developing people in-house and as consultant coaches and facilitators.",
  },
  {
    icon: Layers,
    title: "Expert leaders with a global partner network",
    description:
      "High Performance Leadership, Top Talent Development, Capabilities & Culture — built to move with a client from strategy to shop floor.",
  },
  {
    icon: Users,
    title: "Depth in building capability for high performance",
    description:
      "Talent pipeline development for expanding IDCs and GCCs, high-potential development, and organisation performance systems, processes and practices.",
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-12 lg:py-16 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why <span className="gradient-text">Xponential Leadership</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Your trusted partner in building sustainable high-performance leadership teams.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {stats.map((stat) => (
            <Card key={stat.value} className="bg-gradient-card border-0 shadow-soft">
              <CardContent className="p-5 text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <p className="text-xs text-muted-foreground leading-snug">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map((pillar) => (
            <Card
              key={pillar.title}
              className="bg-gradient-card border-0 hover:shadow-medium transition-all duration-300"
            >
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <pillar.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1.5">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
