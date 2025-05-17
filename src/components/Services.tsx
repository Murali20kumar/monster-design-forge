
import { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PenTool, Palette, Smartphone, Globe, Image, FileSpreadsheet } from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: "Logo Design",
    description: "Creating unique, memorable brand marks that capture your company's essence and vision.",
    icon: <PenTool className="h-10 w-10 text-monster-blue" />,
  },
  {
    title: "Branding",
    description: "Developing comprehensive brand identities including guidelines, color palettes, and visual assets.",
    icon: <Palette className="h-10 w-10 text-monster-blue" />,
  },
  {
    title: "Mobile App UI",
    description: "Designing intuitive, engaging user interfaces for iOS and Android mobile applications.",
    icon: <Smartphone className="h-10 w-10 text-monster-blue" />,
  },
  {
    title: "Web Design & Development",
    description: "Building responsive, modern websites optimized for performance and user experience.",
    icon: <Globe className="h-10 w-10 text-monster-blue" />,
  },
  {
    title: "Social Media Posters",
    description: "Creating eye-catching graphics and animations for effective social media marketing.",
    icon: <Image className="h-10 w-10 text-monster-blue" />,
  },
  {
    title: "Zoho Books Invoicing",
    description: "Setting up and customizing professional invoicing systems using Zoho Books.",
    icon: <FileSpreadsheet className="h-10 w-10 text-monster-blue" />,
  },
];

const Services = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  
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

    const elements = servicesRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section 
      id="services" 
      ref={servicesRef}
      className="section-padding bg-gradient-to-br from-white via-accent/30 to-white"
    >
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="section-title mb-12 animate-on-scroll">My Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={service.title} className="animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
              <Card className="h-full border border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                <div className="absolute -right-10 -top-10 w-24 h-24 rounded-full bg-monster-blue/10 group-hover:bg-monster-blue/20 transition-all duration-300"></div>
                <CardHeader>
                  <div className="flex items-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
