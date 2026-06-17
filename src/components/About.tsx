import { Card, CardContent } from "@/components/ui/card";
import { Building2, Globe, Users, Award, GraduationCap, Languages, Mail, Linkedin, Briefcase } from "lucide-react";
import hariniPhoto from "@/assets/harini-papanna.png.asset.json";

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

  const satyaCompanies = [
    { name: "Xponential Leadership", domain: "xponentiallead.com" },
    { name: "Tatas", domain: "tata.com" },
    { name: "Swiss Re", domain: "swissre.com" },
    { name: "Oracle", domain: "oracle.com" },
    { name: "Fullerton India", domain: "fullertonindia.com" },
    { name: "Polaris Management Services", domain: "polarisgroup.in" },
    { name: "United Telecoms", domain: "utlnet.com" },
  ];

  const hariniCompanies = [
    { name: "Infosys", domain: "infosys.com" },
    { name: "HP", domain: "hp.com" },
    { name: "Amadeus", domain: "amadeus.com" },
    { name: "ITC Infotech", domain: "itcinfotech.com" },
    { name: "Vodafone UK", domain: "vodafone.co.uk" },
    { name: "Capgemini UK", domain: "capgemini.com" },
  ];

  const satyaCertifications = [
    "MBA - HR & Marketing, IPE",
    "Level 5 - CIPD, UK",
    "PCC - International Coach Federation (ICF)",
    "Certified Advanced Coaching Professional (CACP)",
    "Korn Ferry 360 Profilor, MBTI, FIRO-B",
  ];

  const hariniCertifications = [
    "Capgemini Certified Senior Architect L2",
    "Mulesoft Certified Platform Architect",
    "Certified SAFe 5 Agilist",
    "Professional Scrum Master",
  ];

  const CompanyChips = ({ items }: { items: { name: string; domain: string }[] }) => (
    <div className="flex flex-wrap gap-2">
      {items.map((co) => (
        <div
          key={co.name}
          className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-background/40 border border-border/50"
        >
          <img
            src={`https://logo.clearbit.com/${co.domain}`}
            alt={`${co.name} logo`}
            className="h-5 w-5 object-contain bg-white rounded-sm p-0.5"
            loading="lazy"
          />
          <span className="text-xs text-muted-foreground">{co.name}</span>
        </div>
      ))}
    </div>
  );

  return (
    <section id="about" className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet the <span className="gradient-text">Founders</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Partners driving Xponential Leadership across India and the UK — blending
            decades of organizational development, coaching, and technology transformation
            experience.
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

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {[
            {
              name: "Satya Kumar",
              title: "Founder & Head — People, Organization & Culture",
              location: "Hyderabad, India",
              image: "/lovable-uploads/2f57c10c-6b93-4dd0-bb17-d8a4b8bb8050.png",
              alt: "Satyanarayana Kumar - Management Consultant & Executive Coach",
              bio: "A seasoned organizational development expert with over two decades of experience partnering with C-suite leaders to drive performance, talent development, and culture transformation across global organizations.",
              tags: ["Leadership Coaching", "Talent & OD", "Culture Transformation", "C-Suite Advisory"],
              companies: satyaCompanies,
              credentials: satyaCertifications,
              industries: "Telecom, BFSI, IT, Automotive, Energy, Consulting, Manufacturing, Pharmaceuticals",
              languages: "English, Hindi, Telugu, Tamil",
              email: "satya@xponentiallead.com",
              linkedin: "https://www.linkedin.com/in/satyanarayanankumar",
            },
            {
              name: "Harini Papanna",
              title: "Co-Founder, Managing Partner & Head — Technology & Women Leadership",
              location: "Bengaluru, India",
              image: hariniPhoto.url,
              alt: "Harini Papanna, Co-Founder of Xponential Leadership",
              bio: "A seasoned Principal Architect and Senior Integration Architect with a proven track record of building high-performing teams and delivering innovative enterprise solutions across IT strategy, modernization, API management, and AI transformation.",
              tags: ["IT Strategy & Architecture", "Modernization", "API Management", "AI & Data Analytics"],
              companies: hariniCompanies,
              credentials: hariniCertifications,
              industries: "Technology, Telecom, Travel, Consumer Goods, Consulting",
              languages: "English, Hindi, Kannada, Tamil",
              email: "harini@xponentiallead.com",
              linkedin: "https://www.linkedin.com/in/harinipapanna/",
            },
          ].map((founder) => (
            <Card key={founder.name} className="bg-gradient-card border-0 h-full">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-20 scale-110"></div>
                    <img
                      src={founder.image}
                      alt={founder.alt}
                      className="relative w-32 h-32 rounded-full object-cover object-center shadow-strong border-4 border-background ring-2 ring-accent/30"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl font-bold">{founder.name}</h3>
                  <p className="text-accent font-medium text-sm mt-1 min-h-[2.5rem]">{founder.title}</p>
                  <p className="text-muted-foreground text-xs mt-1">{founder.location}</p>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4 text-center">
                  {founder.bio}
                </p>

                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {founder.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="space-y-6 flex-1">
                  <div>
                    <div className="flex items-center mb-3">
                      <Briefcase className="h-4 w-4 text-accent mr-2" />
                      <h5 className="font-semibold text-accent text-sm">Corporate Experience</h5>
                    </div>
                    <CompanyChips items={founder.companies} />
                  </div>

                  <div>
                    <div className="flex items-center mb-3">
                      <GraduationCap className="h-4 w-4 text-accent mr-2" />
                      <h5 className="font-semibold text-accent text-sm">Education & Certifications</h5>
                    </div>
                    <ul className="space-y-2">
                      {founder.credentials.map((cert) => (
                        <li key={cert} className="flex items-start text-xs text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                          <span>{cert}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-center mb-2">
                      <Building2 className="h-4 w-4 text-accent mr-2" />
                      <h5 className="font-semibold text-accent text-sm">Industry Focus</h5>
                    </div>
                    <p className="text-xs text-muted-foreground">{founder.industries}</p>
                  </div>

                  <div>
                    <div className="flex items-center mb-2">
                      <Languages className="h-4 w-4 text-accent mr-2" />
                      <h5 className="font-semibold text-accent text-sm">Languages</h5>
                    </div>
                    <p className="text-xs text-muted-foreground">{founder.languages}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm mt-6 pt-6 border-t border-border/50">
                  <a
                    href={`mailto:${founder.email}`}
                    className="flex items-center text-muted-foreground hover:text-accent transition-colors"
                  >
                    <Mail className="h-4 w-4 text-accent mr-2" />
                    {founder.email}
                  </a>
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-muted-foreground hover:text-accent transition-colors"
                  >
                    <Linkedin className="h-4 w-4 text-accent mr-2" />
                    LinkedIn Profile
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-gradient-hero rounded-2xl p-8 lg:p-12 shadow-soft text-center">
          <h3 className="text-2xl font-bold text-primary-foreground mb-4">
            Transforming Organizations Through People
          </h3>
          <p className="text-lg text-primary-foreground/90 mb-6 max-w-3xl mx-auto">
            From designing talent management systems for global expansions to coaching C-suite leaders through
            role transitions, we bring practical solutions that drive lasting organizational change.
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
