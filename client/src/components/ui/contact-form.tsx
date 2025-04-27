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
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

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
    <section id="contact" className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Get In Touch</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-neutral-dark/80">
            Have questions or ready to start your project? Reach out to our team for expert assistance.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="lg:w-1/2 p-8 lg:p-12">
            <h3 className="font-heading font-semibold text-2xl mb-6">Send Us a Message</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-neutral-dark font-medium">Your Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="John Doe" 
                          className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
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
                      <FormLabel className="text-neutral-dark font-medium">Email Address</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="john@example.com" 
                          className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                          type="email"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-neutral-dark font-medium">Subject</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Inquiry about seedlings" 
                          className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
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
                      <FormLabel className="text-neutral-dark font-medium">Your Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Please tell us about your project or inquiry..." 
                          className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                          rows={5}
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-white font-heading font-medium py-3 px-6 h-auto rounded-lg transition duration-300 transform hover:scale-[1.02] hover:shadow-md focus:ring-4 focus:ring-primary/30 active:scale-[0.98]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
          
          <div className="lg:w-1/2 bg-primary text-white p-8 lg:p-12 flex flex-col justify-between">
            <div>
              <h3 className="font-heading font-semibold text-2xl mb-6">Contact Information</h3>
              
              <div className="mb-8">
                <div className="flex items-start mb-4">
                  <div className="text-accent mr-4 mt-1">
                    <MapPin />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Our Location</h4>
                    <p>Nairobi, Kenya</p>
                  </div>
                </div>
                
                <div className="flex items-start mb-4">
                  <div className="text-accent mr-4 mt-1">
                    <Phone />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone Number</h4>
                    <p>+254 706 932 437</p>
                  </div>
                </div>
                
                <div className="flex items-start mb-4">
                  <div className="text-accent mr-4 mt-1">
                    <Mail />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email Address</h4>
                    <p>info@littleforest.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-accent mr-4 mt-1">
                    <Clock />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Hours of Operation</h4>
                    <p>Monday-Friday: 8am-5pm</p>
                    <p>Saturday: 9am-1pm</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-white/20 hover:bg-accent p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-accent/40 hover:shadow-md">
                  <Facebook className="text-white h-5 w-5" />
                </a>
                <a href="#" className="bg-white/20 hover:bg-accent p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-accent/40 hover:shadow-md">
                  <Instagram className="text-white h-5 w-5" />
                </a>
                <a href="#" className="bg-white/20 hover:bg-accent p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-accent/40 hover:shadow-md">
                  <Twitter className="text-white h-5 w-5" />
                </a>
                <a href="#" className="bg-white/20 hover:bg-accent p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-accent/40 hover:shadow-md">
                  <Linkedin className="text-white h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
