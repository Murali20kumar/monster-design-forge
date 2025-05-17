
import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
}

// Sample projects - in a real scenario you'd replace these with actual projects
const projects: Project[] = [
  {
    title: "Artisan Bakery Branding",
    category: "branding",
    image: "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Complete brand identity design for an artisan bakery, including logo, packaging, and marketing materials."
  },
  {
    title: "Financial App UI",
    category: "mobile",
    image: "https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Mobile app interface design for a financial service, focusing on user experience and clean information display."
  },
  {
    title: "Tech Startup Website",
    category: "web",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Modern website design and development for a tech startup with responsive layouts and smooth animations."
  },
  {
    title: "Restaurant Brand Identity",
    category: "branding",
    image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Complete branding package for an upscale restaurant, including logo, menus, and interior design elements."
  },
  {
    title: "Health & Fitness App",
    category: "mobile",
    image: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Comprehensive mobile app design for a fitness platform with workout tracking and nutrition monitoring."
  },
  {
    title: "E-commerce Platform",
    category: "web",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Full-featured e-commerce website with product catalog, user accounts, and secure checkout system."
  }
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  
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

    const elements = portfolioRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <section id="portfolio" ref={portfolioRef} className="section-padding bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="section-title animate-on-scroll">My Portfolio</h2>
        
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full animate-on-scroll">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-gray-100">
              <TabsTrigger value="all" className="data-[state=active]:bg-monster-blue data-[state=active]:text-white">
                All Projects
              </TabsTrigger>
              <TabsTrigger value="branding" className="data-[state=active]:bg-monster-blue data-[state=active]:text-white">
                Branding
              </TabsTrigger>
              <TabsTrigger value="web" className="data-[state=active]:bg-monster-blue data-[state=active]:text-white">
                Web Design
              </TabsTrigger>
              <TabsTrigger value="mobile" className="data-[state=active]:bg-monster-blue data-[state=active]:text-white">
                Mobile UI
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value={activeTab} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div 
                  key={`${project.title}-${index}`} 
                  className="animate-on-scroll group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div 
                    className="relative overflow-hidden rounded-lg shadow-md cursor-pointer h-64"
                    onClick={() => setSelectedProject(project)}
                  >
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-white text-xl font-semibold">{project.title}</h3>
                      <p className="text-white/80 mt-2 capitalize">{project.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="sm:max-w-[700px]">
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
              <DialogDescription className="text-gray-500 capitalize">
                {selectedProject.category} Project
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <p className="text-gray-600 mb-6">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Design</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">{selectedProject.category}</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Creative</span>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};

export default Portfolio;
