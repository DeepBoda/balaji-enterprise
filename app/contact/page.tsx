import PageHero from "@/components/PageHero";
import ContactMap from "@/components/ContactMap";
import FAQ from "@/components/FAQ";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with Balaji Enterprise. We'd love to hear from you regarding partnerships, sourcing, or general inquiries.",
};

export default function ContactPage() {
    return (
        <>
            <main className="relative z-10 bg-[#FFFBF0] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <PageHero
                    title="Get in Touch"
                    subtitle="Have questions about our sourcing? Want to partner with us? We'd love to hear from you."
                    image="/images/contact-hero.png"
                />
                <div className="container mx-auto px-4 md:px-6 py-24 text-center">

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-amber-100">
                            <h3 className="text-xl font-bold text-amber-950 mb-4">Contact Info</h3>
                            <div className="space-y-4 text-amber-900/80">
                                <p><strong>Email:</strong> support@balaji.com</p>
                                <p><strong>Phone:</strong> +91 95741 55240</p>
                                <p><strong>Address:</strong> 123 Honey Lane, Forest Edge, Gujarat</p>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-amber-100 flex items-center justify-center">
                            <a href="mailto:support@balaji.com" className="text-amber-600 font-bold hover:underline text-lg">Send us a message →</a>
                        </div>
                    </div>
                </div>

                <ContactMap />
                <FAQ />
            </main>
        </>
    );
}
