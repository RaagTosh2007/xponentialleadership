import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Linkedin, ArrowUp } from "lucide-react";
import xlLogoAsset from "@/assets/xl-logo-v2.png.asset.json";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "What We Do", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Clients", href: "#clients" },
    { name: "Founders", href: "#about" },
    { name: "Knowledge Hub", href: "#knowledge-hub" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start">
          <div>
            <img src={xlLogoAsset.url} alt="Xponential Leadership" className="h-16 w-auto max-w-full mb-4 bg-primary-foreground rounded-md p-2" />
            <p className="text-primary-foreground/80 max-w-md">
              Bold, boundaryless leadership development — grounded in India, connected to the world.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-primary-foreground/80 hover:text-accent transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-6 bg-primary-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-primary-foreground/80 mb-4 md:mb-0">
            © 2026 Xponential Leadership. All rights reserved.
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
