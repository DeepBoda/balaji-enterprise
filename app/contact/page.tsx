import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ContactMap from "@/components/ContactMap";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with Balaji Enterprise. We'd love to hear from you regarding partnerships, sourcing, or general inquiries.",
};

export default function ContactPage() {
    return (
        <>
            <main className="relative z-10 bg-[#FFFBF0] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <Navbar />
                <PageHero
                    title="Get in Touch"
                    subtitle="Have questions about our sourcing? Want to partner with us? We'd love to hear from you."
                    image="/images/contact-hero.png"
                />
                <ContactContent />
                <ContactMap />
                <FAQ />
            </main>
            <Footer />
        </>
    );
}
