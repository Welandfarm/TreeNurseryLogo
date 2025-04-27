import Logo from "./logo";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Facebook, Instagram, Twitter, Linkedin, Send } from "lucide-react";

interface NewsletterForm {
  email: string;
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubscribing(true);
    try {
      await apiRequest("POST", "/api/newsletter", { email });
      toast({
        title: "Subscribed!",
        description: "You've been added to our newsletter.",
      });
      setEmail("");
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem subscribing you. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <footer className="bg-neutral-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-white/70 mb-4">
              Growing quality seedlings for a greener tomorrow. Our commitment to sustainable forestry practices drives everything we do.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-accent transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-accent transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-accent transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-accent transition">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-accent transition">Home</a></li>
              <li><a href="#about" className="text-white/70 hover:text-accent transition">About Us</a></li>
              <li><a href="#services" className="text-white/70 hover:text-accent transition">Services</a></li>
              <li><a href="#gallery" className="text-white/70 hover:text-accent transition">Gallery</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-accent transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-accent transition">Seedling Production</a></li>
              <li><a href="#" className="text-white/70 hover:text-accent transition">Forestry Consultation</a></li>
              <li><a href="#" className="text-white/70 hover:text-accent transition">Custom Growing Programs</a></li>
              <li><a href="#" className="text-white/70 hover:text-accent transition">Reforestation Projects</a></li>
              <li><a href="#" className="text-white/70 hover:text-accent transition">Landscaping Supply</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Newsletter</h4>
            <p className="text-white/70 mb-4">
              Subscribe to our newsletter for the latest updates, tips, and special offers.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary/50 flex-grow"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button 
                type="submit" 
                className="bg-primary hover:bg-primary/90 text-white px-4 py-2 h-auto rounded-r-lg transition"
                disabled={isSubscribing}
              >
                <Send className="h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/20 text-center sm:text-left sm:flex sm:justify-between sm:items-center">
          <p className="text-white/70">
            &copy; {new Date().getFullYear()} LittleForest. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0">
            <a href="#" className="text-white/70 hover:text-accent mr-4 transition">Privacy Policy</a>
            <a href="#" className="text-white/70 hover:text-accent mr-4 transition">Terms of Service</a>
            <a href="#" className="text-white/70 hover:text-accent transition">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
