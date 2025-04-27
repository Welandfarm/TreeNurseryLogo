import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">Ready to Start Your Project?</h2>
        <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
          Whether you're planning a reforestation project, landscaping, or conservation effort, we have the seedlings and expertise you need.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button asChild className="bg-white text-primary hover:bg-neutral-light font-heading font-medium py-3 px-6 h-auto rounded-full transition">
            <a href="#contact">Get a Quote</a>
          </Button>
          <Button asChild className="bg-accent hover:bg-accent/90 text-white font-heading font-medium py-3 px-6 h-auto rounded-full transition">
            <a href="#">View Our Catalog</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
