import { useEffect } from "react";
import { CalendarDays, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "5 Indigenous Trees That Thrive in Kenya's Highland Regions",
    excerpt: "Discover the best native tree species that flourish in Bomet's unique climate and soil conditions, perfect for conservation and land restoration projects.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    date: "April 22, 2025",
    author: "James Kimani"
  },
  {
    id: 2,
    title: "The Art of Growing Healthy Fruit Trees in Your Backyard",
    excerpt: "Learn expert techniques for nurturing productive fruit trees that will provide your family with fresh, organic produce for years to come.",
    image: "https://images.unsplash.com/photo-1591025810539-4cdaf521f27a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    date: "April 15, 2025",
    author: "Sarah Wangari"
  },
  {
    id: 3,
    title: "Planting for the Future: How Trees Combat Climate Change",
    excerpt: "Explore the vital role of tree planting in carbon sequestration and how local communities in Kenya are making a global impact through reforestation.",
    image: "https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    date: "April 10, 2025",
    author: "Daniel Mutai"
  }
];

export default function Blog() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.blog-fade-in');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 section-fade-in visible">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            From Our Forest Journal
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-foreground/80">
            Insights, tips, and stories from our journey of growing Kenya's green future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div 
              key={post.id} 
              className="blog-fade-in section-fade-in rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-white"
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <CalendarDays className="h-4 w-4 mr-2" />
                  <span>{post.date}</span>
                </div>
                <h3 className="font-heading font-bold text-xl mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors duration-300"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-primary text-primary font-medium hover:bg-primary hover:text-white transition-colors duration-300"
          >
            View All Articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}