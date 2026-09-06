import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Globe, Building2 } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "satya@xponentiallead.com",
      href: "mailto:satya@xponentiallead.com",
    },
    {
      icon: Mail,
      label: "Email",
      value: "harini@xponentiallead.com",
      href: "mailto:harini@xponentiallead.com",
    },
    {
      icon: Phone,
      label: "Phone (India)",
      value: "+91 96061 10860",
      href: "tel:+919606110860",
    },
    {
      icon: Phone,
      label: "Phone (UK)",
      value: "+44 7443 731001",
      href: "tel:+447443731001",
    },
    {
      icon: Globe,
      label: "Website",
      value: "www.xponentiallead.com",
      href: "https://www.xponentiallead.com",
    },
    {
      icon: MapPin,
      label: "Offices",
      value: "Greater London, UK • Bengaluru, India",
      href: null,
    },
    {
      icon: Building2,
      label: "Development Centres",
      value: "Bengaluru • Coimbatore",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Book a <span className="gradient-text">conversation</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Let's talk about the leadership outcomes you are working towards.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-card rounded-2xl p-6 shadow-soft">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-muted-foreground mb-1">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Card className="bg-gradient-card border-0 shadow-soft mt-6">
            <CardContent className="p-6 text-center">
              <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Dual operational base</h3>
              <p className="text-sm text-muted-foreground">
                Working across the UK and India — with global delivery, and no visa sponsorship needed.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
