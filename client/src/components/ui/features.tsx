import { Sprout, Leaf, Users } from "lucide-react";

const features = [
  {
    icon: <Sprout className="h-6 w-6 text-primary" />,
    title: "Premium Quality Seedlings",
    description: "Our seedlings are grown with care in controlled environments, ensuring strong root systems and healthy growth."
  },
  {
    icon: <Leaf className="h-6 w-6 text-primary" />,
    title: "Native & Exotic Species",
    description: "We specialize in a diverse range of both native species for conservation and exotic varieties for specialized projects."
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: "Expert Consultation",
    description: "Our team of forestry experts provides guidance on species selection, planting techniques, and ongoing maintenance."
  }
];

export default function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Why Choose <span className="text-accent">Little</span><span className="text-primary">Forest</span>?</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-neutral-dark/80">
            We combine passion for plants with scientific expertise to deliver premium quality seedlings that grow into thriving forests.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-neutral-light rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col items-center text-center">
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
