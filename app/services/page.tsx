import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Uses from "@/components/Uses";
import Recipes from "@/components/Recipes";
import Ayurveda from "@/components/Ayurveda";
import Footer from "@/components/Footer";

export default function ServicesPage() {
    return (
        <>
            <main className="relative z-10 bg-[#FFFBF0] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <Navbar />
                <PageHero
                    title="Daily Rituals"
                    subtitle="Discover the myriad ways nature's liquid gold can enhance your life, from morning elixirs to nightly calm."
                    image="https://images.unsplash.com/photo-1615485925763-867862780132?q=80&w=2069&auto=format&fit=crop"
                />
                <Recipes />
                <Ayurveda />
                <Uses />
            </main>
            <Footer />
        </>
    );
}
