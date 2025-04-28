import { useState } from "react";
import { Link } from "wouter";
import Logo from "./logo";
import { Button } from "@/components/ui/button";
import { Menu, Phone, Mail, MapPin } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <Logo />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="/" className="font-heading font-medium text-foreground hover:text-primary transition-colors duration-300">
                Home
              </a>
              <a href="#features" className="font-heading font-medium text-foreground hover:text-primary transition-colors duration-300">
                Products
              </a>
              <a href="#services" className="font-heading font-medium text-foreground hover:text-primary transition-colors duration-300">
                Services
              </a>
              <a href="#contact" className="font-heading font-medium text-foreground hover:text-primary transition-colors duration-300">
                Contact
              </a>
              <Button className="bg-secondary hover:bg-secondary/90 text-white font-heading font-medium rounded-md transition duration-300 focus:ring-4 focus:ring-secondary/30">
                Contact Us
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
                <Button className="bg-secondary hover:bg-secondary/90 text-white font-heading font-medium rounded-md transition duration-300 w-full">
                  Contact Us
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
