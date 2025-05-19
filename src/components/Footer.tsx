import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#0057ff] text-white py-12"> {/* Monster blue background */}
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <img 
              src="/lovable-uploads/de51345b-424a-45d2-b9e1-4648f7d3a36a.png" 
              alt="Monster Design Factory Logo" 
              className="h-16 mb-2"
            />
            <p className="text-white/80 max-w-md">
              Creating stunning designs and digital experiences that elevate your brand.
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
            {["home", "about", "services", "portfolio", "contact"].map((id) => (
              <Button 
                key={id}
                variant="link" 
                className="text-white hover:text-black"
                onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </Button>
            ))}
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            © {currentYear} Monster Design Factory. All rights reserved.
          </p>

          <div className="mt-4 md:mt-0 flex space-x-4">
            {/* Behance */}
            <a href="https://www.behance.net/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-black transition-colors">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 6.75h4.5A3.75 3.75 0 0 1 11.25 10.5 3.75 3.75 0 0 1 7.5 14.25H3V6.75Zm1.5 1.5v4.5h3a2.25 2.25 0 0 0 0-4.5h-3ZM15.75 6h4.5v1.5h-4.5V6ZM15 10.5a3.75 3.75 0 0 1 7.5 0v.375h-6a2.25 2.25 0 0 0 4.312.75H21a3.75 3.75 0 0 1-7.5-.75v-.375ZM19.5 11.25A2.25 2.25 0 0 0 15 12h4.5v-.75Z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-black transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.07c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 6 3.32 6 7.63V24h-5V14.1c0-2.37-.04-5.42-3.3-5.42-3.3 0-3.8 2.58-3.8 5.24V24h-5V8z" />
              </svg>
            </a>

            {/* GitHub */}
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-black transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12a10 10 0 006.84 9.5c.5.09.66-.22.66-.47v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.91-.62.07-.61.07-.61 1.01.07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.56 9.56 0 015 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.95.36.31.68.91.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0022 12c0-5.52-4.48-10-10-10z" clipRule="evenodd" />
              </svg>
            </a>

            {/* Commented out others */}
            {/*
            <a href="#" className="text-gray-400 hover:text-monster-blue transition-colors">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-monster-blue transition-colors">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-monster-blue transition-colors">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-monster-blue transition-colors">Reddit</a>
            */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
