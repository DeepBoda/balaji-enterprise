import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Products from "@/components/Products";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import Uses from "@/components/Uses";
import FooterSpacer from "@/components/ui/FooterSpacer";

export default function Home() {
  return (
    <>
      <main className="relative z-10 bg-[#FFFBF0] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <Navbar />
        <Hero />
        <Marquee />
        <Features />
        <Uses />
        <Products />
        <Process />
        <Testimonials />
        <Newsletter />

        <FooterSpacer />
      </main>
      <Footer />
    </>
  );
}
