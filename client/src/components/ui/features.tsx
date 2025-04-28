import { Sprout, Leaf, Users, TreePine, Droplet, Sun } from "lucide-react";

const features = [
  {
    icon: <TreePine className="h-6 w-6 text-white" />,
    title: "Indigenous Trees",
    description: "We cultivate a wide variety of native Kenyan trees, preserving biodiversity and supporting local ecosystems.",
    iconBg: "bg-primary"
  },
  {
    icon: <Leaf className="h-6 w-6 text-white" />,
    title: "Ornamental Trees",
    description: "Beautiful decorative trees to enhance landscapes, provide shade, and add aesthetic value to any property.",
    iconBg: "bg-secondary"
  },
  {
    icon: <Sprout className="h-6 w-6 text-white" />,
    title: "Flowers & Herbs",
    description: "Colorful flowers and useful herbs for gardens, landscaping projects, and medicinal or culinary purposes.",
    iconBg: "bg-accent"
  },
  {
    icon: <Sun className="h-6 w-6 text-white" />,
    title: "Fruit Trees",
    description: "Productive fruit trees adapted to Kenya's climate, perfect for homesteads and commercial orchards.",
    iconBg: "bg-primary"
  },
  {
    icon: <Droplet className="h-6 w-6 text-white" />,
    title: "Premium Quality",
    description: "All our plants are grown with care in controlled environments, ensuring strong root systems and healthy growth.",
    iconBg: "bg-secondary"
  },
  {
    icon: <Users className="h-6 w-6 text-white" />,
    title: "Expert Guidance",
    description: "Our team provides professional advice on selection, planting techniques, and ongoing plant maintenance.",
    iconBg: "bg-accent"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            <span className="text-primary">Our</span> <span className="text-secondary">Specialties</span>
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-foreground/80">
            Discover our extensive selection of quality plants grown specifically for Kenya's diverse climate and landscapes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-md shadow-md overflow-hidden border border-muted hover:shadow-lg transition duration-300">
              <div className={`py-3 px-6 ${feature.iconBg} flex items-center`}>
                <div className="mr-3">
                  {feature.icon}
                </div>
                <h3 className="font-heading font-semibold text-lg text-white">{feature.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-foreground/80">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
