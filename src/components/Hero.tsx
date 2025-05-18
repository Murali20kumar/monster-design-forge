
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="min-h-screen flex items-center bg-gradient-to-br from-white via-accent/30 to-white pt-24"
    >
      <div className="container mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold animate-on-scroll">
              <span className="block text-gray-800">Designs that speak</span>
              <span className="block text-monster-blue mt-2">Code that works.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mt-6 animate-on-scroll">
              Monster Design Factory combines creativity and technical expertise to build powerful digital experiences 
              that elevate your brand.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4 animate-on-scroll">
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-monster-blue hover:bg-monster-blue/90 text-white"
              >
                Get Started
              </Button>
              <Button 
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline" 
                size="lg"
                className="border-monster-blue text-monster-blue hover:bg-monster-blue/10"
              >
                View My Work
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center animate-on-scroll">
            <div className="relative">
              <div className="bg-monster-blue/10 rounded-full w-72 h-72 md:w-96 md:h-96 flex items-center justify-center animate-pulse">
                <div className="absolute animate-float">
                  <img 
                    src="/lovable-uploads/de51345b-424a-45d2-b9e1-4648f7d3a36a.png" 
                    alt="Monster Design Factory Logo" 
                    className="w-48 h-48 md:w-64 md:h-64 object-contain"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-monster-lavender/20 rounded-full w-24 h-24 animate-float" style={{ animationDelay: "0.5s" }}></div>
              <div className="absolute -bottom-8 -left-8 bg-monster-blue/20 rounded-full w-32 h-32 animate-float" style={{ animationDelay: "1s" }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
