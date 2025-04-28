import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Award, CheckCircle2, TreePine, Sprout } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (
    <div>
      {/* Main Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center bg-[url('https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 mix-blend-multiply"></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="flex flex-col items-center text-center text-white max-w-4xl mx-auto">
            <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight animate-fadeIn">
              Plant Today, <span className="text-secondary">Grow Tomorrow</span>
            </h1>
            <h2 className="font-heading text-xl md:text-2xl font-medium mb-8 text-white/90 animate-fadeIn animation-delay-200">
              Nurture your dreams with LittleForest's premium trees
            </h2>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-10 w-full max-w-md mx-auto">
              <Button asChild className="bg-primary hover:bg-primary/90 text-white font-heading font-medium py-4 px-8 h-auto rounded-lg text-center transition-all duration-300 hover:shadow-lg transform hover:scale-105 focus:ring-4 focus:ring-primary/30 animate-fadeIn animation-delay-400">
                <a href="#trees" className="flex items-center justify-center text-lg">
                  Browse Trees
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-heading font-medium py-4 px-8 h-auto rounded-lg text-center transition-all duration-300 hover:shadow-lg transform hover:scale-105 focus:ring-4 focus:ring-white/20 animate-fadeIn animation-delay-600">
                <a href="#contact" className="text-lg">Make an Inquiry</a>
              </Button>
            </div>
            
            <a 
              href="https://wa.me/254706932437" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105 shadow-lg animate-fadeIn animation-delay-800"
            >
              <FaWhatsapp className="mr-2 text-xl" /> Chat with us on WhatsApp
            </a>
            
            <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
              <a href="#trust" className="text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300">
                <ArrowRight className="h-6 w-6 transform rotate-90" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badge Section */}
      <section id="trust" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center p-6 rounded-xl border border-primary/10 bg-gradient-to-b from-white to-primary/5 shadow-sm transform hover:scale-105 transition-transform duration-300">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Sprout className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">Sustainably Grown</h3>
              <p className="text-muted-foreground">Our trees are grown using sustainable practices that protect Kenya's ecosystems.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-xl border border-primary/10 bg-gradient-to-b from-white to-primary/5 shadow-sm transform hover:scale-105 transition-transform duration-300">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <TreePine className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">Locally Sourced</h3>
              <p className="text-muted-foreground">All of our seedlings are locally sourced from Bomet and surrounding regions.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-xl border border-primary/10 bg-gradient-to-b from-white to-primary/5 shadow-sm transform hover:scale-105 transition-transform duration-300">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Award className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">1000+ Trees Planted</h3>
              <p className="text-muted-foreground">Our seedlings have reforested over 1000 acres across Kenya's diverse landscapes.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
