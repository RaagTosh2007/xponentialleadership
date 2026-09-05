import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const partners = [
  "Hogan Assessments",
  "The Myers-Briggs Company",
  "Google Workspace",
  "REDD Network",
];

const Partners = () => {
  return (
    <section id="partners" className="py-12 lg:py-16 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Collaborators & <span className="gradient-text">Partners</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {partners.map((partner) => (
              <span
                key={partner}
                className="px-5 py-2.5 rounded-lg bg-gradient-card border border-border/50 text-sm font-medium shadow-soft"
              >
                {partner}
              </span>
            ))}
          </div>

          <Card className="bg-gradient-card border-0 shadow-soft">
            <CardContent className="p-6">
              <Quote className="h-6 w-6 text-accent mb-3" />
              <p className="text-sm text-muted-foreground leading-relaxed italic">
                "A great development consultant to work with — absolutely thorough in their analysis
                of the business need and precise in pinning down specific challenges and potential
                roadblocks."
              </p>
              <p className="mt-3 text-xs font-semibold text-accent">
                — AVP, Organization Development, GCC of a German Bank
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Partners;
