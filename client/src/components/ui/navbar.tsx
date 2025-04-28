import { useState, useEffect } from "react";
import Logo from "./logo";
import { Button } from "@/components/ui/button";
import { Menu, Phone, Mail, MapPin } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scrolling and active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state for shadow effect
      setIsScrolled(window.scrollY > 50);
      
      // Determine active section based on scroll position
      const sections = ['hero', 'trees', 'blog', 'about', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section === 'hero' ? 'home' : section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-primary text-white py-1 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone className="h-3 w-3 mr-1" />
              <span>+254 706932437</span>
            </div>
            <div className="hidden sm:flex items-center">
              <Mail className="h-3 w-3 mr-1" />
              <span>info@littleforest.com</span>
            </div>
            <div className="hidden md:flex items-center">
              <MapPin className="h-3 w-3 mr-1" />
              <span>Kamureito, Bomet, Kenya</span>
            </div>
          </div>
          <div className="text-xs">
            <span>Kenya's Premier Tree Nursery</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className={`bg-white ${isScrolled ? 'shadow-lg' : 'shadow-md'} transition-shadow duration-300`}>
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <Logo />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <a 
                href="#hero" 
                className={`font-heading font-medium transition-colors duration-300 ${activeSection === 'home' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
              >
                Home
              </a>
              <a 
                href="#trees" 
                className={`font-heading font-medium transition-colors duration-300 ${activeSection === 'trees' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
              >
                Trees
              </a>
              <a 
                href="#blog" 
                className={`font-heading font-medium transition-colors duration-300 ${activeSection === 'blog' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
              >
                Blog
              </a>
              <a 
                href="#about" 
                className={`font-heading font-medium transition-colors duration-300 ${activeSection === 'about' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
              >
                About
              </a>
              <a 
                href="#contact" 
                className={`font-heading font-medium transition-colors duration-300 ${activeSection === 'contact' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
              >
                Contact
              </a>
              <Button asChild className="bg-primary hover:bg-primary/90 text-white font-heading font-medium rounded-lg transition duration-300 focus:ring-4 focus:ring-primary/30">
                <a href="#contact">Make an Inquiry</a>
              </Button>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={toggleMenu}
                className="text-foreground hover:text-primary focus:outline-none"
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4">
              <div className="flex flex-col space-y-4 px-2 pb-3">
                <a 
                  href="#hero" 
                  className={`font-heading font-medium transition-colors duration-300 ${activeSection === 'home' ? 'text-primary' : 'hover:text-primary'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
                <a 
                  href="#trees" 
                  className={`font-heading font-medium transition-colors duration-300 ${activeSection === 'trees' ? 'text-primary' : 'hover:text-primary'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Trees
                </a>
                <a 
                  href="#blog" 
                  className={`font-heading font-medium transition-colors duration-300 ${activeSection === 'blog' ? 'text-primary' : 'hover:text-primary'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </a>
                <a 
                  href="#about" 
                  className={`font-heading font-medium transition-colors duration-300 ${activeSection === 'about' ? 'text-primary' : 'hover:text-primary'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                <a 
                  href="#contact" 
                  className={`font-heading font-medium transition-colors duration-300 ${activeSection === 'contact' ? 'text-primary' : 'hover:text-primary'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
                <Button asChild className="bg-primary hover:bg-primary/90 text-white font-heading font-medium rounded-lg transition duration-300 w-full">
                  <a href="#contact" onClick={() => setIsMenuOpen(false)}>Make an Inquiry</a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
