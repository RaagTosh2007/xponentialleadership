import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, BarChart3, Dumbbell, Download } from "lucide-react";

const Resources = () => {
  const resources = [
    {
      icon: FileText,
      title: "OD Roadmap Cheat Sheet",
      description: "The 5 essential steps to successful Organization Development",
      type: "Free Download",
      action: "Download Now"
    },
    {
      icon: BarChart3,
      title: "HR & OD Metrics Toolkit",
      description: "Eight key measures for tracking organizational health",
      type: "Toolkit",
      action: "Get Toolkit"
    },
    {
      icon: Dumbbell,
      title: "OD Boot Camps",
      description: "Immersive 6-month learning journeys to build OD muscles within your leadership team",
      type: "Program",
      action: "Learn More"
    }
  ];

  return (
    <section id="resources" className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Resources & <span className="gradient-text">Toolkits</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Practical tools and insights to accelerate your organization's development journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <Card key={index} className="bg-gradient-card hover:shadow-medium transition-all duration-300 border-0 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <resource.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="inline-block px-3 py-1 bg-accent/10 text-accent-foreground rounded-full text-xs font-medium mb-3">
                  {resource.type}
                </div>
                <CardTitle className="text-xl mb-3">{resource.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">{resource.description}</p>
                <Button 
                  variant="outline" 
                  className="w-full hover:shadow-medium transition-all duration-300"
                >
                  <Download className="w-4 h-4 mr-2" />
                  {resource.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-card rounded-2xl p-8 lg:p-12 shadow-soft">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with Latest Insights</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get exclusive access to research, case studies, and practical tips for building stronger organizations.
            </p>
            <Button size="lg" className="bg-gradient-accent hover:shadow-strong transition-all duration-300">
              Subscribe for Insights
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;