import Hero from "@/components/Hero";
import Features from "@/components/Features";
import PurityAttributes from "@/components/PurityAttributes";
import Products from "@/components/Products";
import Process from "@/components/Process";
import Uses from "@/components/Uses";
import Testimonials from "@/components/Testimonials";
import Marquee from "@/components/Marquee";

export default function Home() {
  return (
    <>
      <main className="relative z-10 bg-[#FFFBF0] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <Hero />
        <Marquee />
        <Features />
        <PurityAttributes />

        {/* Restored Sections per user request for "Heavy" feel */}
        <Products />
        <Process />
        <Uses />

        <Testimonials />
      </main>
    </>
  );
}
