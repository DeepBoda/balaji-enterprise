import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterSpacer from "@/components/ui/FooterSpacer";

export default function PoliciesPage() {
    return (
        <>
            <main className="relative z-10 bg-[#FFFBF0] shadow-[0_20px_50px_rgba(0,0,0,0.5)] pt-20">
                <Navbar />
                <div className="container mx-auto px-4 md:px-6 py-24 max-w-3xl">
                    <h1 className="text-4xl font-serif font-bold text-amber-950 mb-8">Store Policies</h1>

                    <div className="space-y-12 text-amber-900/80 leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-bold text-amber-900 mb-4">Shipping Policy</h2>
                            <p className="mb-4">
                                We ship all orders within 24-48 hours of receiving them. Standard delivery takes 3-5 business days across India.
                                We take extra care in packaging our glass jars to ensure they arrive safely.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-amber-900 mb-4">Returns & Refunds</h2>
                            <p className="mb-4">
                                Due to the nature of food products, we cannot accept returns on opened bottles.
                                However, if you receive a damaged product or are unsatisfied with the quality, please contact us within 48 hours for a full replacement or refund.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-amber-900 mb-4">Privacy Policy</h2>
                            <p className="mb-4">
                                Your privacy is paramount. We only collect necessary information to process your orders and do not share your data with third parties.
                            </p>
                        </section>
                    </div>
                </div>
                <FooterSpacer />
            </main>
            <Footer />
        </>
    );
}
