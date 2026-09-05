import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Rocket, TrendingUp, Layers, Presentation } from "lucide-react";
import keynoteImage from "@/assets/keynote-session.jpeg";

const Services = () => {
  const pillars = [
    {
      icon: Rocket,
      title: "High Performance Leadership",
      description: "Leadership teams that set direction together and hold it under pressure.",
      groups: [
        { heading: "Springboards", items: ["Vision, mission and team charters"] },
        { heading: "Crucible", items: ["Identity & value clarification", "Habit formation"] },
        { heading: "Unblocker — Coaching for Impact", items: ["Hogan, FIRO-B, TKI"] },
        { heading: "Embedding change at scale", items: ["Process design", "Rituals & practices"] },
        { heading: "Mentoring ecosystem", items: [] },
      ],
      caseStudy: {
        title: "Financial Services Integration",
        content:
          "A leading financial services organization successfully navigated a critical operational integration driven by a global financial crisis, consolidating two distinct business divisions into a single branch per location. This strategic move required thoughtful organizational redesign, including role reallocation and revamped rewards systems, orchestrated collaboratively by HR and business leadership to ensure alignment with the new operating model.\n\nTo facilitate a smooth transition at scale, the Learning & Development team conducted highly engaging regional workshops for over 100 participants at a time, leveraging the proven change framework from John Kotter's Our Iceberg Is Melting. These sessions enabled employees to honor past practices, confront the need for change, manage transitional emotions, and commit to actionable steps toward the unified approach.\n\nThe integrated change management strategy yielded measurable improvements: accelerated business turnaround, reduced attrition, enhanced employee engagement, and a seamless adoption of the new operational model. This case demonstrates how combining strategic HR design with immersive, large-scale change interventions can deliver resilient and sustainable business transformation.",
      },
      testimonial: {
        quote:
          "Outstanding development program that was a win-win encompassing team bonding along with learning, peer coaching, experiential/action learning activities.",
        author: "Senior Director, Consulting, Fortune 50 Technology company",
      },
    },
    {
      icon: TrendingUp,
      title: "Top Talent Development",
      description: "A pipeline of ready leaders, not a list of names on a slide.",
      groups: [
        { heading: "Talent review & succession planning", items: [] },
        { heading: "Talent pipeline development", items: [] },
        {
          heading: "Talent actualisation for high-potentials",
          items: ["Acceleration coaching", "Mentoring"],
        },
      ],
      testimonial: {
        quote:
          "A great development consultant to work with. Absolutely thorough in his analysis of the business need and quite precise in pinning down specific challenges learners faced and potential roadblocks.",
        author: "AVP — Organization Development, GCC of a German Bank",
      },
    },
    {
      icon: Layers,
      title: "Capabilities & Culture",
      description: "The systems, skills and practices that make performance repeatable.",
      groups: [
        { heading: "Business model canvas", items: [] },
        { heading: "Capability assessment & development roadmap", items: [] },
        { heading: "Learning architecture", items: [] },
        { heading: "Elevating performance management systems", items: [] },
        { heading: "Culture audit", items: [] },
        { heading: "Psychological safety", items: [] },
        { heading: "Coaching for performance", items: [] },
        { heading: "Agile", items: [] },
      ],
    },
  ];

  return (
    <section id="services" className="py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What <span className="gradient-text">We Do</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From strategy design to embedded, on-the-ground delivery.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <Card
              key={pillar.title}
              className="bg-gradient-card hover:shadow-medium transition-all duration-300 border-0 group flex flex-col"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <pillar.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl mb-2">{pillar.title}</CardTitle>
                <p className="text-muted-foreground text-sm">{pillar.description}</p>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <ul className="space-y-3 flex-1">
                  {pillar.groups.map((group) => (
                    <li key={group.heading}>
                      <div className="flex items-start text-sm">
                        <div className="w-2 h-2 bg-accent rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                        <span className="font-medium">{group.heading}</span>
                      </div>
                      {group.items.length > 0 && (
                        <ul className="mt-1 ml-5 space-y-0.5">
                          {group.items.map((item) => (
                            <li key={item} className="text-xs text-muted-foreground">
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>

                {(pillar.testimonial || pillar.caseStudy) && (
                  <Accordion type="single" collapsible className="border-t pt-2 mt-4">
                    {pillar.testimonial && (
                      <AccordionItem value="testimonial" className="border-0">
                        <AccordionTrigger className="text-sm font-semibold hover:no-underline">
                          Client testimonial
                        </AccordionTrigger>
                        <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                          "{pillar.testimonial.quote}"
                          <div className="mt-2 text-xs font-semibold text-accent">
                            — {pillar.testimonial.author}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    )}
                    {pillar.caseStudy && (
                      <AccordionItem value="case-study" className="border-0">
                        <AccordionTrigger className="text-sm font-semibold hover:no-underline">
                          Case study: {pillar.caseStudy.title}
                        </AccordionTrigger>
                        <AccordionContent className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                          {pillar.caseStudy.content}
                        </AccordionContent>
                      </AccordionItem>
                    )}
                  </Accordion>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-card border-0 mt-6">
          <CardContent className="p-6 grid md:grid-cols-2 gap-6 items-center">
            <div>
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-3">
                <Presentation className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">Keynotes & Sessions</h3>
              <p className="text-muted-foreground text-sm">
                We deliver keynote sessions on organisation capability development and the topics
                that are top of mind for companies today.
              </p>
            </div>
            <img
              src={keynoteImage}
              alt="Satya Kumar delivering a keynote session"
              className="w-full rounded-lg object-cover"
              loading="lazy"
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Services;
