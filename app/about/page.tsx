import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Story from "@/components/Story";
import Process from "@/components/Process";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Story",
    description: "From the untouched canopy of the Gir forest to your table. A story of preservation, passion, and purity.",
};

export default function AboutPage() {
    return (
        <>
            <main className="relative z-10 bg-[#FFFBF0] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <Navbar />
                <PageHero
                    title="Our Journey"
                    subtitle="From the untouched canopy of the Gir forest to your table. A story of preservation, passion, and purity."
                    image="/images/about-hero.png"
                />
                <Story />
                <Process />
            </main>
            <Footer />
        </>
    );
}
