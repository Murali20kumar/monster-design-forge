
import { useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    title: "NoSwipe Dating App Branding",
    category: "branding",
    image: "/lovable-uploads/NoSwipeLogo.png",
    description: "Complete brand identity design for NoSwipe Dating App, including logo, banner images & Posters."
  },
  {
    title: "Github Clone UI",
    category: "mobile",
    image: "/lovable-uploads/Github-Clone.jpeg",
    description: "UI design for a mobile application that mimics GitHub functionality."
  },
  {
    title: "To-do-List Website",
    category: "web",
    image: "/lovable-uploads/To-do-List.png",
    description: "Modern responsive website for managing everyday tasks."
  },
  {
    title: "Restaurant Brand Identity",
    category: "branding",
    image: "/lovable-uploads/Welcome.png",
    description: "Complete branding package for an upscale restaurant."
  },
  {
    title: "MuscleTech App Model Design ",
    category: "mobile",
    image: "/lovable-uploads/MuscleTech.jpeg",
    description: "Mobile app model design cloned from MuscleTech fitness nutrition."
  },
  {
    title: "NoSwipe Official Website",
    category: "web",
    image: "/lovable-uploads/NoSwipeWeb.png",
    description: "Landing page for NoSwipe dating platform."
  }
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);

  // Filter projects based on active tab
  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  useEffect(() => {
    console.log("Active tab:", activeTab);
    console.log("Filtered projects:", filteredProjects);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const elements = portfolioRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, [activeTab, filteredProjects]);

  return (
    <section id="portfolio" ref={portfolioRef} className="section-padding bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="section-title animate-on-scroll">My Portfolio</h2>

        <div className="w-full animate-on-scroll">
          <div className="flex justify-center mb-12">
            <div className="inline-flex h-10 items-center justify-center rounded-md bg-gray-100 p-1">
              <button 
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${activeTab === 'all' ? 'bg-white text-foreground shadow-sm' : 'text-muted-foreground'}`}
                onClick={() => setActiveTab('all')}>
                All Projects
              </button>
              <button 
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${activeTab === 'branding' ? 'bg-white text-foreground shadow-sm' : 'text-muted-foreground'}`}
                onClick={() => setActiveTab('branding')}>
                Branding
              </button>
              <button 
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${activeTab === 'web' ? 'bg-white text-foreground shadow-sm' : 'text-muted-foreground'}`}
                onClick={() => setActiveTab('web')}>
                Web Design
              </button>
              <button 
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${activeTab === 'mobile' ? 'bg-white text-foreground shadow-sm' : 'text-muted-foreground'}`}
                onClick={() => setActiveTab('mobile')}>
                Mobile UI
              </button>
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {filteredProjects.length === 0 ? (
              <p className="col-span-full text-center text-gray-500">No projects found.</p>
            ) : (
              filteredProjects.map((project, index) => (
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
                      loading="lazy"
                      onError={(e) => {
                        console.error(`Failed to load image: ${project.image}`);
                        e.currentTarget.src = "/placeholder.svg";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-white text-xl font-semibold">{project.title}</h3>
                      <p className="text-white/80 mt-2 capitalize">{project.category}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
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
                  className="w-full max-h-[400px] object-contain rounded-md mb-4"
                  onError={(e) => {
                    console.error(`Failed to load dialog image: ${selectedProject.image}`);
                    e.currentTarget.src = "/placeholder.svg";
                  }}
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
      </div>
    </section>
  );
};

export default Portfolio;
