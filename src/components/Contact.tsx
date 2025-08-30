import { Card, CardContent } from "@/components/ui/card";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "satya@xponentiallead.com",
      href: "mailto:satya@xponentiallead.com"
    },
    {
      icon: Phone,
      label: "Phone (India)",
      value: "+91 9606110860",
      href: "tel:+919606110860"
    },
    {
      icon: Phone,
      label: "Phone (UK)",
      value: "+44 7443731001",
      href: "tel:+447443731001"
    },
    {
      icon: MapPin,
      label: "Office Address",
      value: "109/195/4, Chikkathayappa Reddy Road, Chelekere, Kalyan Nagar PO, Bengaluru - 560 043",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-hero rounded-2xl p-8 lg:p-12 text-center shadow-strong mb-16">
          <h2 className="text-2xl font-bold text-primary-foreground mb-4">
            If your organization feels{" "}
            <span className="gradient-text">stuck</span>-or stretching in too many directions-let's talk.
          </h2>
          <p className="text-primary-foreground/80 max-w-3xl mx-auto">
            I'll help you cut through the noise, focus on what matters most, and build the leadership and culture you need to thrive.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
            <div className="bg-gradient-card rounded-2xl p-8 shadow-soft">
              <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-sm text-muted-foreground mb-1">
                        {info.label}
                      </p>
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

            <Card className="bg-gradient-card border-0 shadow-soft">
              <CardContent className="p-6 text-center">
                <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Global Reach</h3>
                <p className="text-sm text-muted-foreground">
                  Serving organizations across India, UK, and globally through virtual consulting
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;