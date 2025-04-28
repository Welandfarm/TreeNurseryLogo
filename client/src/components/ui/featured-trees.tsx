import { useState, useEffect } from "react";

const trees = [
  {
    id: 1,
    name: "Acacia Tree",
    image: "https://images.unsplash.com/photo-1635197683877-0957cc74df01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Standing tall beneath the African sun, providing shade and shelter to all who gather beneath its spreading branches.",
    category: "Indigenous"
  },
  {
    id: 2,
    name: "Baobab Seedling",
    image: "https://images.unsplash.com/photo-1572862905946-52537878adab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "The iconic sentinel of the savanna, holding centuries of wisdom in its massive trunk, waiting to tell its stories.",
    category: "Indigenous"
  },
  {
    id: 3,
    name: "Nandi Flame",
    image: "https://images.unsplash.com/photo-1602067340370-caae6b4c9745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Bursting with fiery red blooms that dance in the breeze, bringing a vibrant splash of color to any landscape.",
    category: "Ornamental"
  },
  {
    id: 4,
    name: "Mango Tree",
    image: "https://images.unsplash.com/photo-1604603429872-2eda4d43c406?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Sweet promises hang from every branch, offering juicy rewards for those patient enough to nurture its growth.",
    category: "Fruit"
  },
  {
    id: 5,
    name: "Avocado Tree",
    image: "https://images.unsplash.com/photo-1635774855536-9728f2610245?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Green gold grows on these branches, a nutritious bounty that nourishes both body and soil.",
    category: "Fruit"
  },
  {
    id: 6,
    name: "Jacaranda",
    image: "https://images.unsplash.com/photo-1563246942-0a1d3ccf677e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Painting the sky with a canopy of purple-blue flowers, transforming ordinary streets into magical boulevards.",
    category: "Ornamental"
  }
];

export default function FeaturedTrees() {
  const [visibleElements, setVisibleElements] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = parseInt(entry.target.id.split('-')[1]);
          setVisibleElements(prev => [...prev, id]);
        }
      });
    }, { threshold: 0.2 });

    const elements = document.querySelectorAll('.tree-card');
    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <section id="trees" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 section-fade-in visible">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Our Favorites</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-foreground/80">
            Explore our most beloved trees, each with a unique story and purpose in Kenya's diverse ecosystems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trees.map((tree) => (
            <div 
              key={tree.id}
              id={`tree-${tree.id}`}
              className={`tree-card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:scale-105 ${visibleElements.includes(tree.id) ? 'section-fade-in visible' : 'section-fade-in'}`}
              style={{ transitionDelay: `${(tree.id - 1) * 0.1}s` }}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={tree.image} 
                  alt={tree.name} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-heading font-bold text-xl">{tree.name}</h3>
                  <span className="text-xs font-medium px-3 py-1 bg-primary/10 text-primary rounded-full">
                    {tree.category}
                  </span>
                </div>
                <p className="text-muted-foreground italic font-handwritten text-lg">
                  "{tree.description}"
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Request Custom Tree Selection
          </a>
        </div>
      </div>
    </section>
  );
}