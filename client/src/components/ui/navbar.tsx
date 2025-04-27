import { useState } from "react";
import { Link } from "wouter";
import Logo from "./logo";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Logo />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="font-heading font-medium hover:text-primary transition-colors duration-300">
              Home
            </a>
            <a href="#features" className="font-heading font-medium hover:text-primary transition-colors duration-300">
              Products
            </a>
            <a href="#services" className="font-heading font-medium hover:text-primary transition-colors duration-300">
              Services
            </a>
            <a href="#contact" className="font-heading font-medium hover:text-primary transition-colors duration-300">
              Contact
            </a>
            <Button className="bg-primary hover:bg-primary/90 text-white font-heading font-medium rounded-full transition duration-300 transform hover:scale-105 active:scale-95 focus:ring-4 focus:ring-primary/30">
              Contact Us
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="text-neutral-dark hover:text-primary focus:outline-none"
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
              <a href="/" className="font-heading font-medium hover:text-primary transition-colors duration-300">
                Home
              </a>
              <a href="#features" className="font-heading font-medium hover:text-primary transition-colors duration-300">
                Products
              </a>
              <a href="#services" className="font-heading font-medium hover:text-primary transition-colors duration-300">
                Services
              </a>
              <a href="#contact" className="font-heading font-medium hover:text-primary transition-colors duration-300">
                Contact
              </a>
              <Button className="bg-primary hover:bg-primary/90 text-white font-heading font-medium rounded-full transition duration-300 active:scale-95 w-full">
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
