import Navbar from "@/components/ui/navbar";
import Hero from "@/components/ui/hero";
import Features from "@/components/ui/features";
import About from "@/components/ui/about";
import Services from "@/components/ui/services";
import Gallery from "@/components/ui/gallery";
import Testimonials from "@/components/ui/testimonials";
import ContactForm from "@/components/ui/contact-form";
import CallToAction from "@/components/ui/call-to-action";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <ContactForm />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
