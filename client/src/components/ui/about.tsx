import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const environmentalPractices = [
  "Sustainable practices",
  "Water conservation", 
  "Organic fertilizers",
  "Community education"
];

export default function About() {
  return (
    <section id="about" className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Tree nursery workers caring for seedlings" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-3 rounded-lg shadow-lg hidden md:block">
                <p className="font-heading font-bold text-primary text-2xl">15+ <span className="text-accent text-lg">Years Experience</span></p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">About <span className="text-accent">Little</span><span className="text-primary">Forest</span></h2>
            <div className="w-16 h-1 bg-primary mb-6"></div>
            <p className="text-lg mb-4 text-neutral-dark/80">
              Founded in 2008, LittleForest began as a small family operation with a big vision: to contribute to reforestation efforts across the country through sustainable nursery practices.
            </p>
            <p className="text-lg mb-6 text-neutral-dark/80">
              Today, we operate on 25 acres of land dedicated to growing over 500,000 seedlings annually. Our state-of-the-art growing facilities allow us to maintain optimal conditions for each species we cultivate.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              {environmentalPractices.map((practice, index) => (
                <div key={index} className="flex items-center">
                  <Check className="text-primary mr-2 h-5 w-5" />
                  <span>{practice}</span>
                </div>
              ))}
            </div>
            
            <Button asChild className="bg-primary hover:bg-primary/90 text-white font-heading font-medium py-3 px-6 h-auto rounded-full transition">
              <a href="#contact">Learn More About Us</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
