import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    image: "/images/seedlings.jpg",
    title: "Indigenous Trees Nursery",
    description: "Specializing in native Kenyan tree species for conservation projects, land restoration, and environmental preservation.",
    color: "bg-primary"
  },
  {
    image: "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", 
    title: "Ornamental & Fruit Trees",
    description: "Beautiful ornamental trees for landscaping and productive fruit trees perfect for Kenyan climate and soil conditions.",
    color: "bg-secondary"
  },
  {
    image: "https://images.unsplash.com/photo-1620055366299-b3e4a0a73826?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Flowers & Herbs Collection",
    description: "Diverse selection of flowers and herbs for gardens, medicinal purposes, and culinary uses, suited to Kenya's climate.",
    color: "bg-accent"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            <span className="text-secondary">What We</span> <span className="text-primary">Offer</span>
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-foreground/80">
            Discover our range of plants and trees carefully selected and nurtured for Kenya's unique environments.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="overflow-hidden shadow-md hover:shadow-xl transition duration-300 bg-white border border-muted group">
              <div className="relative">
                <div className={`absolute top-0 left-0 w-full h-1 ${service.color}`}></div>
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-3">{service.title}</h3>
                <p className="text-foreground/80 mb-4">
                  {service.description}
                </p>
                <Button 
                  variant="outline" 
                  className="mt-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                >
                  <span>Learn More</span>
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-md shadow-md border border-muted text-center">
          <h3 className="font-heading font-bold text-2xl mb-4">Ready to Enhance Your Landscape?</h3>
          <p className="text-foreground/80 max-w-2xl mx-auto mb-6">
            Contact our team today to discuss your tree and plant needs. We offer expert advice and high-quality plants to suit any project in Kenya.
          </p>
          <Button asChild className="bg-secondary hover:bg-secondary/90 text-white font-heading font-medium py-3 px-8 h-auto rounded-md transition duration-300 focus:ring-4 focus:ring-secondary/30">
            <a href="#contact" className="flex items-center">
              Contact Us Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
