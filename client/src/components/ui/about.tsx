import { useEffect, useRef } from "react";
import { Leaf } from "lucide-react";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="section-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1591132536948-586232e3a9f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Tree nursery workers planting seedlings" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <div className="flex items-center">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Leaf className="h-10 w-10 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-heading font-bold text-primary">15+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="inline-block bg-primary/10 text-primary font-medium px-4 py-2 rounded-full mb-4">
                About LittleForest
              </div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
                Cultivating Kenya's Green Future From Kamureito, Bomet
              </h2>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded with a passion for Kenya's biodiversity, LittleForest has been nurturing seedlings and growing dreams from our home in Kamureito, Bomet County. What started as a small family initiative has blossomed into one of the region's most trusted tree nurseries.
                </p>
                
                <p>
                  Our mission is deeply rooted in sustainability. We believe that every tree planted is a step toward a greener, more resilient Kenya. Through careful selection of indigenous species, thoughtful cultivation practices, and community education, we're helping to restore Kenya's natural heritage while supporting sustainable livelihoods.
                </p>
                
                <p>
                  From majestic indigenous trees that have shaped our landscapes for centuries to productive fruit trees that nourish communities, every plant in our nursery is grown with care and expertise. Our team combines traditional knowledge with modern sustainable practices to ensure each seedling thrives when it leaves our care.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-lg bg-white shadow-sm">
                  <div className="text-3xl font-heading font-bold text-primary mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Tree Species</div>
                </div>
                
                <div className="text-center p-4 rounded-lg bg-white shadow-sm">
                  <div className="text-3xl font-heading font-bold text-primary mb-1">10k+</div>
                  <div className="text-sm text-muted-foreground">Trees Supplied</div>
                </div>
                
                <div className="text-center p-4 rounded-lg bg-white shadow-sm">
                  <div className="text-3xl font-heading font-bold text-primary mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}