
import { useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface Skill {
  name: string;
  percentage: number;
}

const skills: Skill[] = [
  { name: "UI/UX Design", percentage: 95 },
  { name: "Logo Design & Branding", percentage: 90 },
  { name: "Web Development", percentage: 85 },
  { name: "Mobile App Design", percentage: 92 },
  { name: "Graphic Design", percentage: 88 },
  { name: "Zoho Books Integration", percentage: 80 },
];

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Animate skill bars when visible
            if (entry.target.classList.contains('skills-container')) {
              const bars = entry.target.querySelectorAll('.skill-progress');
              bars.forEach((bar) => {
                bar.classList.add('animate-skill-progress');
              });
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = aboutRef.current?.querySelectorAll('.animate-on-scroll, .skills-container');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" ref={aboutRef} className="section-padding bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="section-title animate-on-scroll">About Me</h2>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/2 animate-on-scroll">
            <p className="text-gray-700 text-lg mb-6">
              I'm a passionate designer and developer specializing in creating stunning visual identities and digital experiences. With over 5 years of experience in the creative industry, I've helped numerous clients transform their ideas into impactful brands.
            </p>
            <p className="text-gray-700 text-lg mb-6">
              At Monster Design Factory, I combine artistic vision with technical expertise to deliver comprehensive design solutions tailored to your specific business needs.
            </p>
            <p className="text-gray-700 text-lg">
              Whether you need a complete brand identity, a user-friendly website, or eye-catching marketing materials, I'm dedicated to creating high-quality, results-driven work that helps your business stand out.
            </p>
          </div>
          
          <div className="w-full md:w-1/2">
            <Card className="shadow-lg border border-gray-100">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-6 text-monster-blue">My Skills</h3>
                
                <div className="space-y-6 skills-container">
                  {skills.map((skill) => (
                    <div key={skill.name} className="animate-on-scroll">
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-gray-700">{skill.name}</span>
                        <span className="text-monster-blue font-medium">{skill.percentage}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress bg-gradient-to-r from-monster-blue to-monster-lavender"
                          style={{ '--progress-width': `${skill.percentage}%` } as React.CSSProperties}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
