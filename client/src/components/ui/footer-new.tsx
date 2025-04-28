import { Facebook, Instagram, Linkedin, ArrowUp } from "lucide-react";
import Logo from "./logo";

export default function FooterNew() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-primary/95 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="text-white font-heading font-bold text-2xl">LittleForest</div>
            <p className="text-white/80 mt-4">
              Nurturing Kenya's green future, one seedling at a time from our home in Kamureito, Bomet.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300 flex items-center justify-center">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300 flex items-center justify-center">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300 flex items-center justify-center">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-white/70 hover:text-white transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="#trees" className="text-white/70 hover:text-white transition-colors duration-300">Trees</a>
              </li>
              <li>
                <a href="#blog" className="text-white/70 hover:text-white transition-colors duration-300">Blog</a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors duration-300">About</a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">Tree Categories</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Indigenous Trees</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Ornamental Trees</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Fruit Trees</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Herbs & Flowers</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Medicinal Plants</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-white/70">
                Kamureito, Bomet, Kenya
              </li>
              <li>
                <a href="tel:+254706932437" className="text-white/70 hover:text-white transition-colors duration-300">+254 706 932 437</a>
              </li>
              <li>
                <a href="mailto:info@littleforest.com" className="text-white/70 hover:text-white transition-colors duration-300">info@littleforest.com</a>
              </li>
              <li className="text-white/70">
                Monday-Friday: 8am-5pm <br />
                Saturday: 9am-1pm
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            &copy; {new Date().getFullYear()} LittleForest. All Rights Reserved.
          </p>
          <div className="flex items-center mt-4 md:mt-0">
            <button 
              onClick={scrollToTop}
              className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}