import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0057ff] text-white py-12">
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
                onClick={() =>
                  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
                }
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
  <a
    href="https://www.behance.net/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white hover:text-[#0057ff] transition-colors"
  >
    <FontAwesomeIcon icon={faBehance} className="h-5 w-5" />
  </a>
  <a
    href="https://www.linkedin.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white hover:text-[#0057ff] transition-colors"
  >
    <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5" />
  </a>
  <a
    href="https://github.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white hover:text-[#0057ff] transition-colors"
  >
    <FontAwesomeIcon icon={faGithub} className="h-5 w-5" />
  </a>
</div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
