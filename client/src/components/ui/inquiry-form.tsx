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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaLeaf, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

const inquiryFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  treeType: z.string().min(1, { message: "Please select a tree type" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type InquiryFormValues = z.infer<typeof inquiryFormSchema>;

export default function InquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<InquiryFormValues>({
    resolver: zodResolver(inquiryFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      treeType: "",
      message: ""
    }
  });

  async function onSubmit(data: InquiryFormValues) {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", data);
      toast({
        title: "Inquiry Sent",
        description: "We will get back to you as soon as possible.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your inquiry. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 section-fade-in visible">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Let's Grow Together</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg text-foreground/80">
              Ready to start your green journey? Get in touch with us for expert advice, custom orders, or any questions about our trees and services.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div className="bg-primary p-8 text-white">
                <h3 className="font-heading font-semibold text-xl mb-8">Contact Information</h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-center">
                    <div className="bg-white/10 p-3 rounded-full mr-4">
                      <FaEnvelope className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium opacity-75 mb-1">Email Us</h4>
                      <p className="text-white">info@littleforest.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-white/10 p-3 rounded-full mr-4">
                      <FaPhoneAlt className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium opacity-75 mb-1">Call Us</h4>
                      <p className="text-white">+254 706 932 437</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-white/10 p-3 rounded-full mr-4">
                      <FaLeaf className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium opacity-75 mb-1">Visit Our Nursery</h4>
                      <p className="text-white">Kamureito, Bomet, Kenya</p>
                    </div>
                  </div>
                </div>
                
                <div className="py-6 border-t border-white/20">
                  <h4 className="font-medium text-sm mb-3">Hours of Operation</h4>
                  <p className="text-white/80">Monday-Friday: 8am-5pm</p>
                  <p className="text-white/80">Saturday: 9am-1pm</p>
                  <p className="text-white/80">Sunday: Closed</p>
                </div>
              </div>
              
              <div className="lg:col-span-2 p-8">
                <h3 className="font-heading font-semibold text-xl text-foreground mb-6">Send an Inquiry</h3>
                
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
                                className="rounded-lg bg-muted/30 border-muted focus:border-primary"
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
                                className="rounded-lg bg-muted/30 border-muted focus:border-primary"
                                type="email"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground/80 font-medium">Phone Number (Optional)</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="+254 7XX XXX XXX" 
                                className="rounded-lg bg-muted/30 border-muted focus:border-primary"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="treeType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground/80 font-medium">Tree Type</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="rounded-lg bg-muted/30 border-muted focus:border-primary">
                                  <SelectValue placeholder="Select tree type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="indigenous">Indigenous Trees</SelectItem>
                                <SelectItem value="fruit">Fruit Trees</SelectItem>
                                <SelectItem value="ornamental">Ornamental Trees</SelectItem>
                                <SelectItem value="herbs">Herbs & Flowers</SelectItem>
                                <SelectItem value="mixed">Mixed Selection</SelectItem>
                                <SelectItem value="other">Other/Not Sure</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground/80 font-medium">Your Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your project, the types of trees you're interested in, or any specific requirements..." 
                              className="rounded-lg bg-muted/30 border-muted focus:border-primary resize-none min-h-[120px]"
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
                        className="bg-primary hover:bg-primary/90 text-white font-heading font-medium py-3 px-8 h-auto rounded-lg transition-all duration-300 hover:shadow-md"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : (
                          <span className="flex items-center">
                            Submit Inquiry
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </span>
                        )}
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}