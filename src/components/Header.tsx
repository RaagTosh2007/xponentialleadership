import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "What We Do", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Clients", href: "#clients" },
    { name: "Founders", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];


  return (
    <header className="fixed top-0 w-full z-50 glass-effect">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 md:h-28">
          <a href="#home" className="flex-shrink-0 flex items-center group">
            <img 
              src="/xponential-leadership-logo.webp" 
              alt="Xponential Leadership" 
              className="h-20 md:h-24 w-auto max-w-[420px] object-contain bg-primary-foreground rounded-lg px-3 py-1.5 shadow-soft transition-transform duration-300 group-hover:scale-105" 
            />
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-medium text-foreground hover:text-accent transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>


          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card/80 backdrop-blur rounded-lg mt-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;