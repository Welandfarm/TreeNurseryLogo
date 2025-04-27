import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-secondary/10 to-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-4 text-neutral-dark leading-tight">
              Kenya's Finest <span className="text-primary">Tree Nursery</span>
            </h1>
            <h2 className="font-handwritten text-2xl md:text-3xl text-accent mb-6">Growing Kenya's future, one seedling at a time</h2>
            <p className="text-lg mb-8 text-neutral-dark/80">
              At LittleForest, we specialize in indigenous trees, ornamental trees, flowers, herbs, and fruit trees. Our expert team ensures every plant is healthy, robust, and perfect for Kenya's diverse environments.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild className="bg-primary hover:bg-primary/90 text-white font-heading font-medium py-3 px-6 h-auto rounded-full text-center transition duration-300 transform hover:scale-105 focus:ring-4 focus:ring-primary/30">
                <a href="#services">Browse Our Selection</a>
              </Button>
              <Button asChild variant="outline" className="bg-white border-2 border-primary hover:bg-primary/5 text-primary font-heading font-medium py-3 px-6 h-auto rounded-full text-center transition duration-300 transform hover:scale-105 focus:ring-4 focus:ring-primary/20">
                <a href="#contact">Contact Us</a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1589923188900-85dae523342b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Young tree seedlings in a nursery" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-primary/70 text-white p-4">
                <p className="font-heading font-medium">Specializing in indigenous Kenyan varieties and more</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="hidden md:block absolute top-20 left-10 z-0">
        <svg width="80" height="80" viewBox="0 0 40 40" className="fill-current opacity-10">
          <g>
            <path d="M15 15 L20 5 L25 15 Z" fill="#2E7D32" />
          </g>
        </svg>
      </div>
      <div className="hidden md:block absolute bottom-10 right-10 z-0">
        <svg width="100" height="100" viewBox="0 0 40 40" className="fill-current opacity-10">
          <g>
            <path d="M15 15 L20 5 L25 15 Z" fill="#2E7D32" />
            <path d="M10 20 L15 10 L20 20 Z" fill="#2E7D32" />
          </g>
        </svg>
      </div>
    </section>
  );
}
