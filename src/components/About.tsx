import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Skill {
  name: string;
  percentage: number;
}

const skills: Skill[] = [
  { name: "Logo Design", percentage: 95 },
  { name: "Branding", percentage: 90 },
  { name: "Web Design & Dev", percentage: 91 },
  { name: "Mobile App UI Design", percentage: 92 },
  { name: "Social Media Poster Design", percentage: 90 },
  { name: "Zoho Books Invoice", percentage: 85 },
];

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const [showCertificate, setShowCertificate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
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
  I’m <b>Murali Kumar</b> — a LinkedIn Marketing Labs–trained{" "}
  <button
    onClick={() => setShowCertificate(true)}
    className="text-blue-600 underline hover:text-blue-800 transition-colors"
  >
    certified professional
  </button>{" "}
  in Content and Creative Design — as well as a passionate designer and full-stack developer who transforms ideas into
  impactful digital experiences through clean UI, efficient code,
   and smart strategy.With over 2 years of experience in the creative industry, I’ve helped startups,small businesses, and solo founders bring their visions to life — 
   from compelling brand identities to production-ready web and mobile interfaces
</p>

            <p className="text-gray-700 text-lg mb-6">
              At <b>Monster Design Factory</b>, I blend creativity with technical precision to deliver scalable,
              conversion-focused solutions. From mobile app UI design (React Native) and web design & dev to logo
              design, branding, social media creatives, and Zoho Books invoicing — I offer end-to-end services that are
              clean, strategic, and easy to scale.
            </p>
            <p className="text-gray-700 text-lg">
              My approach is collaborative, friendly, flexible, and results-driven. Whether you’re launching a new product
              or refining your brand, I’m here to help you stand out with <b>design that speaks — code that works.</b>
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

      {/* Certificate Dialog */}
      <Dialog open={showCertificate} onOpenChange={setShowCertificate}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>LinkedIn Marketing Labs Certificate</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <img
              src="/lovable-uploads/Linkedin_Certificate.png" 
              alt="LinkedIn Marketing Labs Certificate"
              className="w-full max-h-[500px] object-contain rounded-md"
              onError={(e) => {
                console.error("Failed to load certificate image.");
                e.currentTarget.src = "/placeholder.svg";
              }}
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default About;
