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
            <Link href="/">
              <a className="font-heading font-medium hover:text-primary transition">Home</a>
            </Link>
            <Link href="#about">
              <a className="font-heading font-medium hover:text-primary transition">About</a>
            </Link>
            <Link href="#services">
              <a className="font-heading font-medium hover:text-primary transition">Services</a>
            </Link>
            <Link href="#gallery">
              <a className="font-heading font-medium hover:text-primary transition">Gallery</a>
            </Link>
            <Link href="#contact">
              <a className="font-heading font-medium hover:text-primary transition">Contact</a>
            </Link>
            <Button className="bg-primary hover:bg-secondary text-white font-heading font-medium rounded-full transition">
              Get a Quote
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
              <Link href="/">
                <a className="font-heading font-medium hover:text-primary transition">Home</a>
              </Link>
              <Link href="#about">
                <a className="font-heading font-medium hover:text-primary transition">About</a>
              </Link>
              <Link href="#services">
                <a className="font-heading font-medium hover:text-primary transition">Services</a>
              </Link>
              <Link href="#gallery">
                <a className="font-heading font-medium hover:text-primary transition">Gallery</a>
              </Link>
              <Link href="#contact">
                <a className="font-heading font-medium hover:text-primary transition">Contact</a>
              </Link>
              <Button className="bg-primary hover:bg-secondary text-white font-heading font-medium rounded-full transition w-full">
                Get a Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
