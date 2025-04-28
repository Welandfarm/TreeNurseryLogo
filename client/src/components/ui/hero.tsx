import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Award, CheckCircle2, TreePine } from "lucide-react";

export default function Hero() {
  return (
    <div>
      {/* Main Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/95 to-primary/90">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="tree-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M10 2 L15 10 L12 10 L15 15 L5 15 L8 10 L5 10 Z" fill="#FFFFFF" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#tree-pattern)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 py-12 md:py-20 relative">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 text-white">
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight">
                Kenya's Finest <span className="text-secondary">Tree Nursery</span>
              </h1>
              <h2 className="font-heading text-xl md:text-2xl font-medium mb-6 text-white/90">Growing Kenya's future, one seedling at a time</h2>
              <p className="text-lg mb-8 text-white/80">
                At LittleForest in Kamureito, Bomet, we specialize in indigenous trees, ornamental trees, flowers, herbs, and fruit trees. Our expert team ensures every plant is healthy, robust, and perfect for Kenya's diverse environments.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button asChild className="bg-secondary hover:bg-secondary/90 text-white font-heading font-medium py-3 px-6 h-auto rounded-md text-center transition duration-300 focus:ring-4 focus:ring-secondary/30">
                  <a href="#services" className="flex items-center">
                    Browse Our Selection
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-heading font-medium py-3 px-6 h-auto rounded-md text-center transition duration-300 focus:ring-4 focus:ring-white/20">
                  <a href="#contact">Contact Us</a>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative rounded-md overflow-hidden shadow-xl bg-white p-1">
                <img 
                  src="/images/seedlings.jpg" 
                  alt="Young tree seedlings in nursery bags" 
                  className="w-full h-auto object-cover rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick info section */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center p-4 rounded-md border border-muted bg-gradient-to-br from-white to-primary/5">
              <div className="mr-4 bg-primary/10 p-3 rounded-full">
                <TreePine className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground">Largest Variety</h3>
                <p className="text-sm text-muted-foreground">Indigenous & exotic trees and plants</p>
              </div>
            </div>
            <div className="flex items-center p-4 rounded-md border border-muted bg-gradient-to-br from-white to-secondary/5">
              <div className="mr-4 bg-secondary/10 p-3 rounded-full">
                <Award className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground">Premium Quality</h3>
                <p className="text-sm text-muted-foreground">Healthy and robust seedlings</p>
              </div>
            </div>
            <div className="flex items-center p-4 rounded-md border border-muted bg-gradient-to-br from-white to-accent/5">
              <div className="mr-4 bg-accent/10 p-3 rounded-full">
                <CheckCircle2 className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground">Expert Guidance</h3>
                <p className="text-sm text-muted-foreground">Professional planting & care advice</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
