import { Sprout, Leaf, Users, TreePine } from "lucide-react";

const features = [
  {
    icon: <TreePine className="h-6 w-6 text-primary" />,
    title: "Indigenous Trees",
    description: "We cultivate a wide variety of native Kenyan trees, preserving biodiversity and supporting local ecosystems."
  },
  {
    icon: <Leaf className="h-6 w-6 text-primary" />,
    title: "Ornamental Trees",
    description: "Beautiful decorative trees to enhance landscapes, provide shade, and add aesthetic value to any property."
  },
  {
    icon: <Sprout className="h-6 w-6 text-primary" />,
    title: "Flowers & Herbs",
    description: "Colorful flowers and useful herbs for gardens, landscaping projects, and medicinal or culinary purposes."
  },
  {
    icon: <Leaf className="h-6 w-6 text-accent" />,
    title: "Fruit Trees",
    description: "Productive fruit trees adapted to Kenya's climate, perfect for homesteads and commercial orchards."
  },
  {
    icon: <Sprout className="h-6 w-6 text-primary" />,
    title: "Premium Quality",
    description: "All our plants are grown with care in controlled environments, ensuring strong root systems and healthy growth."
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: "Expert Guidance",
    description: "Our team provides professional advice on selection, planting techniques, and ongoing plant maintenance."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Our <span className="text-accent">Specialties</span></h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-neutral-dark/80">
            Discover our extensive selection of quality plants grown specifically for Kenya's diverse climate and landscapes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-neutral-light rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300 transform hover:scale-[1.02] flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">{feature.title}</h3>
              <p className="text-neutral-dark/80">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
