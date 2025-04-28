import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", data);
      toast({
        title: "Message Sent",
        description: "We will get back to you as soon as possible.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            <span className="text-primary">Get In</span> <span className="text-secondary">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-foreground/80">
            Have questions or ready to start your project? Reach out to our team for expert assistance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 shadow-lg overflow-hidden border border-muted">
          {/* Contact info sidebar */}
          <div className="bg-primary p-8 lg:p-10 text-white">
            <h3 className="font-heading font-semibold text-xl mb-8 border-b border-white/20 pb-4">Contact Information</h3>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <div className="bg-secondary/20 p-3 rounded-md mr-4">
                  <MapPin className="h-5 w-5 text-secondary-foreground" />
                </div>
                <div>
                  <h4 className="font-medium text-white text-sm mb-1">Our Location</h4>
                  <p className="text-white/80">Kamureito, Bomet, Kenya</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-secondary/20 p-3 rounded-md mr-4">
                  <Phone className="h-5 w-5 text-secondary-foreground" />
                </div>
                <div>
                  <h4 className="font-medium text-white text-sm mb-1">Phone Number</h4>
                  <p className="text-white/80">+254 706 932 437</p>
                  <a 
                    href="https://wa.me/254706932437" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-white bg-[#25D366] hover:bg-[#128C7E] transition-colors duration-300 px-3 py-1 rounded-md mt-2 text-sm font-medium"
                  >
                    <FaWhatsapp className="mr-1" /> Chat on WhatsApp
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-secondary/20 p-3 rounded-md mr-4">
                  <Mail className="h-5 w-5 text-secondary-foreground" />
                </div>
                <div>
                  <h4 className="font-medium text-white text-sm mb-1">Email Address</h4>
                  <p className="text-white/80">info@littleforest.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-secondary/20 p-3 rounded-md mr-4">
                  <Clock className="h-5 w-5 text-secondary-foreground" />
                </div>
                <div>
                  <h4 className="font-medium text-white text-sm mb-1">Hours of Operation</h4>
                  <p className="text-white/80">Monday-Friday: 8am-5pm</p>
                  <p className="text-white/80">Saturday: 9am-1pm</p>
                  <p className="text-white/80">Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            <div className="pt-6 border-t border-white/20">
              <h4 className="font-medium text-sm mb-4">Follow Us</h4>
              <div className="flex space-x-3">
                <a href="#" className="bg-secondary/20 hover:bg-secondary p-2 rounded-md transition-colors duration-300">
                  <Facebook className="text-white h-4 w-4" />
                </a>
                <a href="#" className="bg-secondary/20 hover:bg-secondary p-2 rounded-md transition-colors duration-300">
                  <Instagram className="text-white h-4 w-4" />
                </a>
                <a href="#" className="bg-secondary/20 hover:bg-secondary p-2 rounded-md transition-colors duration-300">
                  <Twitter className="text-white h-4 w-4" />
                </a>
                <a href="#" className="bg-secondary/20 hover:bg-secondary p-2 rounded-md transition-colors duration-300">
                  <Linkedin className="text-white h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Form section */}
          <div className="lg:col-span-2 bg-white p-8 lg:p-10">
            <h3 className="font-heading font-semibold text-xl text-foreground mb-6">Send Us a Message</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/80 font-medium">Your Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="John Doe" 
                            className="px-4 py-2 rounded-md border focus:border-primary"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/80 font-medium">Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="john@example.com" 
                            className="px-4 py-2 rounded-md border focus:border-primary"
                            type="email"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground/80 font-medium">Subject</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Inquiry about seedlings" 
                          className="px-4 py-2 rounded-md border focus:border-primary"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground/80 font-medium">Your Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Please tell us about your project or inquiry..." 
                          className="px-4 py-2 rounded-md border focus:border-primary resize-none"
                          rows={4}
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="pt-2">
                  <Button 
                    type="submit" 
                    className="bg-secondary hover:bg-secondary/90 text-white font-heading font-medium py-2 px-6 h-auto rounded-md transition duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : (
                      <span className="flex items-center">
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
