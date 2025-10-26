import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Gallery", id: "gallery" },
    { label: "Pricing", id: "pricing" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-elegant border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="text-2xl font-bold font-playfair text-gold hover:text-gold/80 transition-smooth"
        >
          Dermo Spa Meknes
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-foreground hover:text-gold transition-smooth font-medium"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href="tel:+2125XXXXXXXX"
            className="flex items-center text-muted-foreground hover:text-gold transition-smooth"
          >
            <Phone size={18} className="mr-2" />
            <span className="font-medium">+212 5XX-XXXXXX</span>
          </a>
          <Button
            className="bg-gold hover:bg-gold/90 text-background font-semibold shadow-glow"
            onClick={() => scrollToSection("contact")}
          >
            Book Now
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="text-gold">
              <Menu size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-card border-border w-[300px]">
            <div className="flex flex-col space-y-6 mt-8">
              <h2 className="text-2xl font-bold font-playfair text-gold mb-4">
                Menu
              </h2>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-lg text-foreground hover:text-gold transition-smooth font-medium"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-6 border-t border-border space-y-4">
                <a
                  href="tel:+2125XXXXXXXX"
                  className="flex items-center text-muted-foreground hover:text-gold transition-smooth"
                >
                  <Phone size={18} className="mr-2" />
                  <span>+212 5XX-XXXXXX</span>
                </a>
                <Button
                  className="w-full bg-gold hover:bg-gold/90 text-background font-semibold shadow-glow"
                  onClick={() => scrollToSection("contact")}
                >
                  Book Now
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
