const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1591161555818-7b9caaba2c52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    alt: "Rows of seedling trays in greenhouse"
  },
  {
    src: "https://images.unsplash.com/photo-1580367486779-0612be56f169?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    alt: "Young tree saplings in nursery"
  },
  {
    src: "https://images.unsplash.com/photo-1636732057526-f8db90d58800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    alt: "Staff caring for seedlings"
  },
  {
    src: "https://images.unsplash.com/photo-1631209121750-a9f656d28f74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    alt: "Close-up of seedling"
  },
  {
    src: "https://images.unsplash.com/photo-1599454400465-651a5be90280?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    alt: "Irrigation system in nursery"
  },
  {
    src: "https://images.unsplash.com/photo-1598902108854-0e05b1ffd7ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    alt: "Mature trees ready for planting"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Our Nursery Gallery</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-neutral-dark/80">
            Take a visual tour of our facilities and see the care that goes into every seedling we grow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition duration-300 group">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
