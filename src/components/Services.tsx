import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Target, 
  ChartBar, 
  Settings, 
  Users, 
  GraduationCap, 
  ArrowRight,
  Presentation
} from "lucide-react";
import keynoteImage from "@/assets/keynote-session.jpeg";

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
      ],
      testimonial: {
        quote: "A great development consultant to work with. Absolutely thorough in his analysis of the business need and quite precise in pinning down specific challenges learners faced and potential roadblocks.",
        author: "AVP - Organisational Development, GCC of a European Banking firm"
      }
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
      ],
      caseStudy: {
        title: "Financial Services Integration",
        content: "A leading financial services organization successfully navigated a critical operational integration driven by a global financial crisis, consolidating two distinct business divisions into a single branch per location. This strategic move required thoughtful organizational redesign, including role reallocation and revamped rewards systems, orchestrated collaboratively by HR and business leadership to ensure alignment with the new operating model.\n\nTo facilitate a smooth transition at scale, the Learning & Development team conducted highly engaging regional workshops for over 100 participants at a time, leveraging the proven change framework from John Kotter's Our Iceberg Is Melting. These sessions enabled employees to honor past practices, confront the need for change, manage transitional emotions, and commit to actionable steps toward the unified approach.\n\nThe integrated change management strategy yielded measurable improvements: accelerated business turnaround, reduced attrition, enhanced employee engagement, and a seamless adoption of the new operational model. This case demonstrates how combining strategic HR design with immersive, large-scale change interventions can deliver resilient and sustainable business transformation.\n\nClients seeking to drive complex organizational change with confidence and impact are encouraged to leverage this proven blend of structure, empathy, and action planning."
      }
    },
    {
      icon: Users,
      title: "Build Leaders Who Inspire & Deliver (Leadership Development)",
      description: "Your managers and leaders are the key to scaling growth.",
      outcomes: "You'll notice:",
      features: [
        "Leaders who grow others, not just themselves",
        "More innovation, less firefighting"
      ],
      testimonial: {
        quote: "Outstanding development program that was a win-win encompassing team bonding along with learning, peer coaching, experiential/action learning activities.",
        author: "Senior Director, Consulting, Fortune 50 Technology company"
      }
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
    },
    {
      icon: Presentation,
      title: "Key notes & Sessions",
      description: "We deliver key note sessions on organization capability development and current topics that are top of mind for companies.",
      testimonial: {
        isImage: true,
        image: keynoteImage
      }
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
                {service.outcomes && <p className="text-muted-foreground text-sm mb-4">{service.outcomes}</p>}
                {service.features && (
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {service.testimonial && (
                  <Accordion type="single" collapsible className="border-t pt-4 mt-4">
                    <AccordionItem value="testimonial" className="border-0">
                      <AccordionTrigger className="text-sm font-semibold hover:no-underline">
                        {service.testimonial.isImage ? "Testimonials" : "Client Testimonial"}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                        {service.testimonial.isImage ? (
                          <img 
                            src={service.testimonial.image} 
                            alt="Testimonial" 
                            className="w-full rounded-lg object-cover"
                          />
                        ) : (
                          <>
                            "{service.testimonial.quote}"
                            <div className="mt-2 text-xs font-semibold text-accent">
                              — {service.testimonial.author}
                            </div>
                          </>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                )}
                {service.caseStudy && (
                  <Accordion type="single" collapsible className="border-t pt-4">
                    <AccordionItem value="case-study" className="border-0">
                      <AccordionTrigger className="text-sm font-semibold hover:no-underline">
                        Case Study: {service.caseStudy.title}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                        {service.caseStudy.content}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;