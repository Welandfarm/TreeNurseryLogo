import { useEffect } from "react";
import Navbar from "@/components/ui/navbar";
import Hero from "@/components/ui/hero";
import FeaturedTrees from "@/components/ui/featured-trees";
import About from "@/components/ui/about";
import Blog from "@/components/ui/blog";
import InquiryForm from "@/components/ui/inquiry-form";
import FooterNew from "@/components/ui/footer-new";

// Add metadata for SEO
const META_TITLE = "LittleForest - Premium Trees for Every Dream";
const META_DESCRIPTION = "Find indigenous, ornamental, fruit trees and more at LittleForest nursery in Kamureito, Bomet. Quality seedlings grown sustainably in Kenya.";

export default function Home() {
  // Add fade-in animation for sections
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section-fade-in');
      
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const isInView = (
          rect.top <= (window.innerHeight * 0.8) &&
          rect.bottom >= 100
        );
        
        if (isInView) {
          section.classList.add('visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check on page load
    setTimeout(handleScroll, 100);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Update the document's metadata for SEO
  useEffect(() => {
    document.title = META_TITLE;
    
    // Set meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', META_DESCRIPTION);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedTrees />
        <About />
        <Blog />
        <InquiryForm />
      </main>
      <FooterNew />
    </div>
  );
}
