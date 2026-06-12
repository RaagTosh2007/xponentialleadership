import { Card, CardContent } from "@/components/ui/card";
import { Building2, Globe, Users, Award, GraduationCap, Languages, UserCircle2, Mail } from "lucide-react";

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
            About <span className="gradient-text">Satya Kumar</span>
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

        <div className="mt-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Meet Our <span className="gradient-text">Co-Founder</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Partnering with Satya to lead Xponential Leadership across India and the UK.
            </p>
          </div>

          <Card className="bg-gradient-card border-0 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0 mx-auto md:mx-0">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center">
                    <UserCircle2 className="h-14 w-14 text-primary-foreground" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-xl font-bold mb-1">Harini Papanna</h4>
                  <p className="text-accent font-medium mb-1">Managing Partner & Co-Founder, Xponential Leadership</p>
                  <p className="text-muted-foreground text-xs mb-4">Bengaluru, India</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Harini is a seasoned Principal Architect and Senior Integration Architect with a
                    proven track record of building high-performing teams and delivering innovative
                    enterprise solutions. Her expertise spans IT strategy and architecture, application
                    modernization, API management, and AI transformation and data analytics.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    As Co-Founder of Xponential Leadership, she brings deep technology and
                    transformation acumen to the firm — partnering with leaders across India and the UK
                    to unlock exponential growth through the intersection of people, capability, and
                    modern technology.
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                    {["IT Strategy & Architecture", "Modernization", "API Management", "AI & Data Analytics"].map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6 mb-6 text-left">
                    <div>
                      <div className="flex items-center mb-3">
                        <Award className="h-4 w-4 text-accent mr-2" />
                        <h5 className="font-semibold text-accent text-sm">Licenses & Certifications</h5>
                      </div>
                      <ul className="space-y-2">
                        {[
                          "Capgemini Certified Senior Architect L2",
                          "Mulesoft Certified Platform Architect",
                          "Certified SAFe 5 Agilist",
                          "Professional Scrum Master",
                        ].map((cert) => (
                          <li key={cert} className="flex items-start text-xs text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                            <span>{cert}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="flex items-center mb-3">
                        <GraduationCap className="h-4 w-4 text-accent mr-2" />
                        <h5 className="font-semibold text-accent text-sm">Education</h5>
                      </div>
                      <ul className="space-y-3">
                        <li className="text-xs text-muted-foreground">
                          <div className="font-medium text-foreground">Indian Institute of Management Bangalore</div>
                          <div>Management Program for Women Entrepreneurs, Entrepreneurship/Entrepreneurial Studies — 2012</div>
                        </li>
                        <li className="text-xs text-muted-foreground">
                          <div className="font-medium text-foreground">Visvesvaraya Technological University</div>
                          <div>Bachelor of Engineering, Computer Science — 2001–2005</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-center justify-center md:justify-start text-sm">
                    <Mail className="h-4 w-4 text-accent mr-2" />
                    <a href="mailto:harini@xponentiallead.com" className="text-muted-foreground hover:text-accent transition-colors">
                      harini@xponentiallead.com
                    </a>
                  </div>
                </div>
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