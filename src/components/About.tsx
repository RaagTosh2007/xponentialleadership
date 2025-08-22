import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, TrendingUp, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Evidence-Based",
      description: "All solutions draw on proven OD and leadership science"
    },
    {
      icon: TrendingUp,
      title: "Practical & Sustainable",
      description: "Designed to embed change, not just deliver quick fixes"
    },
    {
      icon: Users,
      title: "Human-Centered",
      description: "Focus on people as the drivers of performance and growth"
    },
    {
      icon: Award,
      title: "Adaptive & Continuous",
      description: "Flexible support tailored to your evolving business needs"
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stronger Organizations. Resilient Leaders.{" "}
            <span className="gradient-text">Lasting Impact.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My approach is grounded in science, human values, and practical tools—so that change 
            is not just managed but embraced, and people remain energized and engaged.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="bg-gradient-card hover:shadow-medium transition-all duration-300 border-0">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-card rounded-2xl p-8 lg:p-12 shadow-soft">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Clients choose me when:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Growth has plateaued and fresh energy is needed</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Leadership teams need to align around vision and execution</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Culture feels fragmented and needs strengthening before scaling</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Change feels overwhelming and requires structure and guidance</span>
                </li>
              </ul>
            </div>
            <div className="text-center lg:text-right">
              <div className="inline-block bg-primary/10 rounded-2xl p-8">
                <div className="text-4xl font-bold gradient-text mb-2">20+</div>
                <div className="text-muted-foreground">Years of Experience</div>
                <div className="text-sm text-muted-foreground mt-2">
                  in Talent, Culture & Leadership
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;