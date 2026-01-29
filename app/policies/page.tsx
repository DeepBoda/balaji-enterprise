import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Metadata } from "next";
import { Shield, Truck, RefreshCcw, Lock } from "lucide-react";

export const metadata: Metadata = {
    title: "Store Policies",
    description: "Learn about our shipping, returns, refunds, and privacy policies. Your trust is our priority.",
};

const policies = [
    {
        icon: Truck,
        title: "Shipping Policy",
        content: [
            "We ship all orders within 24-48 hours of receiving them.",
            "Standard delivery takes 3-5 business days across India.",
            "We take extra care in packaging our glass jars to ensure they arrive safely.",
            "Free shipping on orders above ₹999.",
            "Tracking details are shared via SMS and email once dispatched."
        ]
    },
    {
        icon: RefreshCcw,
        title: "Returns & Refunds",
        content: [
            "Due to the nature of food products, we cannot accept returns on opened bottles.",
            "If you receive a damaged product, please contact us within 48 hours with photos.",
            "We offer full replacement or refund for quality issues.",
            "Refunds are processed within 5-7 business days to your original payment method.",
            "For any concerns, reach out to support@balaji.com"
        ]
    },
    {
        icon: Lock,
        title: "Privacy Policy",
        content: [
            "Your privacy is paramount to us.",
            "We only collect necessary information to process your orders.",
            "Your data is never shared with third parties for marketing purposes.",
            "All payments are processed through secure, encrypted gateways.",
            "You can request deletion of your data at any time."
        ]
    },
    {
        icon: Shield,
        title: "Quality Guarantee",
        content: [
            "Every batch of honey is lab-tested for purity and authenticity.",
            "We guarantee 100% natural, unprocessed honey with no additives.",
            "Our honey is sourced directly from forest beekeepers in Gir.",
            "If you're not satisfied with the quality, we'll make it right.",
            "Shelf life is 24 months from the date of packaging."
        ]
    }
];

export default function PoliciesPage() {
    return (
        <>
            <main className="relative z-10 bg-[#FFFBF0] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <Navbar />
                <PageHero
                    title="Store Policies"
                    subtitle="Transparency and trust are at the heart of everything we do. Here's everything you need to know."
                    image="/images/contact-hero.png"
                />

                <section className="py-24">
                    <div className="container mx-auto px-4 md:px-6 max-w-5xl">
                        <div className="grid md:grid-cols-2 gap-8">
                            {policies.map((policy, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white rounded-3xl p-8 shadow-sm border border-amber-100 hover:shadow-lg hover:border-amber-200 transition-all duration-300"
                                >
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600">
                                            <policy.icon size={24} />
                                        </div>
                                        <h2 className="text-xl font-bold text-amber-950">{policy.title}</h2>
                                    </div>
                                    <ul className="space-y-3">
                                        {policy.content.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-amber-900/70">
                                                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* Contact CTA */}
                        <div className="mt-16 text-center">
                            <p className="text-amber-900/60 mb-4">Have questions about our policies?</p>
                            <a
                                href="/contact"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 text-white font-bold rounded-full hover:bg-amber-700 transition-colors"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
