import { Star } from "lucide-react";

const testimonials = [
  {
    rating: 5,
    text: "The seedlings we received from LittleForest exceeded our expectations. The survival rate was exceptional, and their growth rate has been impressive. Highly recommend their services!",
    name: "John Davis",
    position: "Regional Forestry Manager",
    initials: "JD"
  },
  {
    rating: 5,
    text: "Working with LittleForest on our reforestation project was a pleasure. Their expert advice on species selection was invaluable, and the quality of their seedlings is outstanding.",
    name: "Sarah Mitchell",
    position: "Conservation Project Director",
    initials: "SM"
  },
  {
    rating: 4.5,
    text: "As a landscaping company, we need reliable suppliers. LittleForest has consistently delivered healthy, vibrant seedlings on time, making them our go-to nursery for all our projects.",
    name: "Robert Kim",
    position: "CEO, GreenScape Landscaping",
    initials: "RK"
  }
];

function RatingStars({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  
  return (
    <div className="flex items-center text-accent">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} className="fill-current h-5 w-5" />
      ))}
      {hasHalfStar && (
        <div className="relative">
          <Star className="text-accent/30 fill-current h-5 w-5" />
          <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
            <Star className="fill-current h-5 w-5" />
          </div>
        </div>
      )}
      {[...Array(5 - Math.ceil(rating))].map((_, i) => (
        <Star key={`empty-${i}`} className="text-accent/30 fill-current h-5 w-5" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">What Our Clients Say</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-neutral-dark/80">
            Don't just take our word for it. Here's what our clients have to say about our seedlings and services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-neutral-light p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <div className="flex items-center mb-4">
                <RatingStars rating={testimonial.rating} />
              </div>
              <p className="italic mb-6 text-neutral-dark/80">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="font-heading font-semibold text-primary">{testimonial.initials}</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-heading font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-neutral-dark/70">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
