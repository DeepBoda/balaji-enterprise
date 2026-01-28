import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Uses from "@/components/Uses";
import Recipes from "@/components/Recipes";
import Ayurveda from "@/components/Ayurveda";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Rituals & Uses",
    description: "Discover the myriad ways nature's liquid gold can enhance your life, from Ayurvedic remedies to daily wellness rituals.",
};

export default function ServicesPage() {
    return (
        <>
            <main className="relative z-10 bg-[#FFFBF0] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <Navbar />
                <PageHero
                    title="Daily Rituals"
                    subtitle="Discover the myriad ways nature's liquid gold can enhance your life, from morning elixirs to nightly calm."
                    image="/images/services-hero.png"
                />
                <Recipes />
                <Ayurveda />
                <Uses />
            </main>
            <Footer />
        </>
    );
}
