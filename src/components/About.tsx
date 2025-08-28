import { Card, CardContent } from "@/components/ui/card";
import { Building2, Globe, Users, Award, GraduationCap, Languages } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Award,
      title: "23+ Years Experience",
      description: "Leadership positions in Indian and multinational organizations"
    },
    {
      icon: Building2,
      title: "Corporate Leadership",
      description: "Partner to C-suite on performance, talent, and culture matters"
    },
    {
      icon: Globe,
      title: "Global Experience", 
      description: "Worked across India, UK, USA, EMEA, and APAC regions"
    },
    {
      icon: Users,
      title: "Scale Impact",
      description: "Delivered solutions for 130,000+ employees across 100+ countries"
    }
  ];

  const companies = ["TATAs", "Swiss Re", "Oracle", "Fullerton", "Polaris Management Services"];
  
  const certifications = [
    "MBA - HR & Marketing, IPE",
    "Level 5 - CIPD, UK", 
    "PCC - International Coach Federation (ICF)",
    "Certified Advanced Coaching Professional (CACP)",
    "Korn Ferry 360 Profilor, MBTI, FIRO-B"
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About <span className="gradient-text">Satyanarayana Kumar</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            A seasoned organizational development expert with over two decades of experience partnering with C-suite leaders 
            to drive performance, talent development, and culture transformation across global organizations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((highlight, index) => (
            <Card key={index} className="bg-gradient-card hover:shadow-medium transition-all duration-300 border-0">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <highlight.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2 text-sm leading-tight">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="bg-gradient-card border-0">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Building2 className="h-6 w-6 text-accent mr-3" />
                <h3 className="text-xl font-bold">Corporate Experience</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-accent mb-2">Key Organizations</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {companies.map((company, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                        <span>{company}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-accent mb-2">Industry Focus</h4>
                  <p className="text-sm text-muted-foreground">
                    Telecom, BFSI, IT, Automotive, Energy, Consulting, Manufacturing, Pharmaceuticals
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <GraduationCap className="h-6 w-6 text-accent mr-3" />
                <h3 className="text-xl font-bold">Education & Certifications</h3>
              </div>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{cert}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-border/50">
                <div className="flex items-center mb-3">
                  <Languages className="h-4 w-4 text-accent mr-2" />
                  <h4 className="font-semibold text-accent">Languages</h4>
                </div>
                <p className="text-sm text-muted-foreground">English, Hindi, Telugu, Tamil</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 bg-gradient-hero rounded-2xl p-8 lg:p-12 shadow-soft text-center">
          <h3 className="text-2xl font-bold text-primary-foreground mb-4">
            Transforming Organizations Through People
          </h3>
          <p className="text-lg text-primary-foreground/90 mb-6 max-w-3xl mx-auto">
            From designing talent management systems for global expansions to coaching C-suite leaders through 
            role transitions, I bring practical solutions that drive lasting organizational change.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-primary-foreground/80 text-sm">
            <div>
              <div className="font-medium mb-1">Proven Scale</div>
              <div className="text-xs">130,000+ employees across 100+ countries</div>
            </div>
            <div>
              <div className="font-medium mb-1">Global Reach</div>
              <div className="text-xs">India, UK, USA, EMEA, APAC</div>
            </div>
            <div>
              <div className="font-medium mb-1">Results Focused</div>
              <div className="text-xs">Clear link to business priorities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;