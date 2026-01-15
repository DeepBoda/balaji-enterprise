import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Products from "@/components/Products";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFBF0]">
      <Navbar />
      <Hero />
      <Features />
      <Products />
      <Process />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}
