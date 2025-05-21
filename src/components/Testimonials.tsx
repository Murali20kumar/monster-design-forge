
import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sanjeev Kumar",
    role: "HR Manager",
    company: "Freshworks",
    content: "Murali's commitment to the projects assigned and the quality of the work delivered have been commendable. He understands the client's needs easily and translates the vision into design outcomes seamlessly.",
    rating: 4.5,
    image: "https://muralikumar-portfolio.netlify.app/img/Sanjeev.jpeg"
  },
  {
    name: "Aakash Mayilraj",
    role: "Auditor & Founder",
    company: "Aakasha Arivagam",
    content: "The website design and development were outstanding. The attention to detail and responsive approach made the whole process smooth. Our new site has already boosted our conversions significantly.",
    rating: 5,
    image: "/lovable-uploads  /Aakash.png"
  },
  {
    name: "Arpitha Kumar",
    role: "Co-founder & Social Media Manager",
    company: "NoSwipe Dating App",
    content: "The Web design for our dating app were intuitive, modern, and exactly what we needed. The process was collaborative, and revisions were handled quickly and professionally. Murali is such a gentle guy and intellectual one to work with.",
    rating: 5,
    image: "/lovable-uploads/Arpitha4.jpeg"
  },
  // {
  //   name: "David Rodriguez",
  //   role: "Owner",
  //   company: "Artisan Cafe",
  //   content: "Our brand identity is absolutely perfect! The logo, menus, and marketing materials all work together beautifully. The attention to detail and understanding of our vision was impressive.",
  //   rating: 5,
  //   image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  // }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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

    const elements = testimonialsRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section 
      id="testimonials" 
      ref={testimonialsRef}
      className="section-padding bg-gradient-to-br from-white via-secondary/20 to-white"
    >
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="section-title animate-on-scroll">Client Testimonials</h2>
        
        <div className="max-w-4xl mx-auto animate-on-scroll">
          <Card className="border border-gray-100 shadow-lg">
            <CardContent className="p-6 md:p-10">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <img 
                      src={testimonials[activeIndex].image} 
                      alt={testimonials[activeIndex].name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className={`h-5 w-5 ${i < testimonials[activeIndex].rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 mb-8 text-lg italic">
                    "{testimonials[activeIndex].content}"
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-monster-blue">{testimonials[activeIndex].name}</h4>
                    <p className="text-gray-600">
                      {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between mt-10">
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={prevTestimonial}
                  className="border-monster-blue text-monster-blue hover:bg-monster-blue/10"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === activeIndex ? 'bg-monster-blue' : 'bg-gray-300'
                      }`}
                      aria-label={`View testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={nextTestimonial}
                  className="border-monster-blue text-monster-blue hover:bg-monster-blue/10"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
