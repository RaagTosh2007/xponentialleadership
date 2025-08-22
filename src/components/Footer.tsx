import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Linkedin, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Resources", href: "#resources" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Organization Development Strategy",
    "Diagnostics & Assessments", 
    "Change & Intervention Design",
    "Leadership Coaching",
    "Learning & Culture Enablement"
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Xponential Leadership</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Stronger Organizations. Resilient Leaders. Lasting Impact.
            </p>
            <p className="text-primary-foreground/80 mb-6">
              Partnering with leaders and teams to strengthen organizations from the inside out 
              through proven OD practices and leadership coaching.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4" />
                <a href="mailto:satya@xponentiallead.com" className="hover:text-accent transition-colors">
                  satya@xponentiallead.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4" />
                <span>+91 9606110860 | +44 7443731001</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="text-sm">
                  109/195/4, Chikkathayappa Reddy Road, Chelekere, 
                  Kalyan Nagar PO, Bengaluru - 560 043
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/80 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-primary-foreground/80 mb-4 md:mb-0">
            © 2024 Xponential Leadership. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://www.linkedin.com/in/satyanarayanankumar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-accent transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-primary-foreground/80 hover:text-accent hover:bg-primary-foreground/10"
            >
              <ArrowUp className="h-4 w-4 mr-1" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;