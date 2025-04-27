import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    image: "https://images.unsplash.com/photo-1611295619193-511ba6df9bf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Indigenous Trees Nursery",
    description: "Specializing in native Kenyan tree species for conservation projects, land restoration, and environmental preservation."
  },
  {
    image: "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", 
    title: "Ornamental & Fruit Trees",
    description: "Beautiful ornamental trees for landscaping and productive fruit trees perfect for Kenyan climate and soil conditions."
  },
  {
    image: "https://images.unsplash.com/photo-1620055366299-b3e4a0a73826?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Flowers & Herbs Collection",
    description: "Diverse selection of flowers and herbs for gardens, medicinal purposes, and culinary uses, suited to Kenya's climate."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">What We <span className="text-primary">Offer</span></h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-neutral-dark/80">
            Discover our range of plants and trees carefully selected and nurtured for Kenya's unique environments.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 bg-white">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-3">{service.title}</h3>
                <p className="text-neutral-dark/80 mb-4">
                  {service.description}
                </p>
                <a href="#" className="text-primary font-medium hover:text-accent flex items-center transition duration-300 transform hover:translate-x-1 group">
                  Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button asChild className="bg-primary hover:bg-primary/90 text-white font-heading font-medium py-3 px-8 h-auto rounded-full transition duration-300 transform hover:scale-105 hover:shadow-lg focus:ring-4 focus:ring-primary/30 active:scale-95">
            <a href="#contact">Contact Us Today</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
