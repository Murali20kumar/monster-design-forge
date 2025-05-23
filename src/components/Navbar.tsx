
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-4 px-4 md:px-12",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-md" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-2 md:px-6 flex items-center justify-between">
        <div 
          className="flex items-center space-x-1 md:space-x-2 cursor-pointer pl-0 md:pl-0 ml-[-6px] md:ml-[-12px]"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            location.reload(); // Optional: reload the page
          }}
        >
          <img 
            src="/lovable-uploads/de51345b-424a-45d2-b9e1-4648f7d3a36a.png" 
            alt="Monster Design Factory Logo" 
            className="h-8 md:h-14 hover:opacity-80 transition-opacity"
          />
          <span className="text-sm md:text-2xl font-bold text-gray-800 whitespace-nowrap truncate max-w-[120px] sm:max-w-none">
            Monster Design Factory
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          {[
            { name: 'Home', id: 'hero' },
            { name: 'About', id: 'about' },
            { name: 'Services', id: 'services' },
            { name: 'Portfolio', id: 'portfolio' },
            { name: 'Testimonials', id: 'testimonials' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-gray-800 hover:text-monster-blue font-medium transition-colors"
            >
              {item.name}
            </button>
          ))}
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-monster-blue hover:bg-monster-blue/90 text-white"
          >
            Contact
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col space-y-1.5" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg animate-fade-in py-4">
          <div className="container mx-auto px-6">
            <nav className="flex flex-col space-y-4">
              {[
                { name: 'Home', id: 'hero' },
                { name: 'About', id: 'about' },
                { name: 'Services', id: 'services' },
                { name: 'Portfolio', id: 'portfolio' },
                { name: 'Testimonials', id: 'testimonials' },
                { name: 'Contact', id: 'contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-800 hover:text-monster-blue py-2 text-left font-medium transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
