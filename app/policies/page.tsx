import FooterSpacer from "@/components/ui/FooterSpacer";
import TableOfContents from "@/components/legal/TableOfContents";
import { cn } from "@/lib/utils";

export default function PoliciesPage() {
    const sections = [
        { id: "shipping", title: "Shipping Policy" },
        { id: "returns", title: "Returns & Refunds" },
        { id: "privacy", title: "Privacy Policy" },
        { id: "terms", title: "Terms & Conditions" },
    ];

    const lastUpdated = "January 28, 2026";

    return (
        <>
            <main className="relative z-10 bg-[#FFFBF0] min-h-screen">

                {/* Header */}
                <div className="bg-amber-50 pt-32 pb-16 border-b border-amber-900/5">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="max-w-4xl">
                            <h1 className="text-4xl md:text-5xl font-serif font-bold text-amber-950 mb-4">
                                Legal Centre
                            </h1>
                            <p className="text-amber-900/60 text-lg">
                                Transparency and trust are at the core of our business. Please read our policies carefully.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 md:px-6 py-16">
                    <div className="flex flex-col lg:flex-row gap-16">
                        {/* TOC - Desktop */}
                        <div className="lg:w-64 flex-shrink-0">
                            <TableOfContents items={sections} />
                        </div>

                        {/* Content */}
                        <div className="flex-1 max-w-3xl">
                            <p className="text-sm text-amber-900/40 mb-12">Last Updated: {lastUpdated}</p>

                            <div className="space-y-16">
                                {/* Shipping Policy */}
                                <section id="shipping" className="scroll-mt-32">
                                    <h2 className="text-3xl font-serif font-bold text-amber-950 mb-6">Shipping Policy</h2>
                                    <div className="prose prose-amber max-w-none text-amber-900/80 leading-relaxed space-y-4">
                                        <p>
                                            At Balaji Enterprise, we take immense pride in delivering the finest Gir Forest Honey directly to your doorstep. We ensure that every jar is packed with care to preserve its raw, natural quality.
                                        </p>
                                        <h3 className="text-xl font-bold text-amber-900 mt-6 mb-2">Processing Time</h3>
                                        <p>
                                            All orders are processed within 24-48 hours of receipt. Orders placed on weekends or holidays will be processed on the following business day.
                                        </p>
                                        <h3 className="text-xl font-bold text-amber-900 mt-6 mb-2">Delivery Timelines</h3>
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li><strong>Metro Cities:</strong> 2-4 business days</li>
                                            <li><strong>Rest of India:</strong> 3-7 business days</li>
                                            <li><strong>Remote Areas:</strong> 7-10 business days</li>
                                        </ul>
                                    </div>
                                </section>

                                <div className="h-px bg-amber-900/10 w-full" />

                                {/* Returns & Refunds */}
                                <section id="returns" className="scroll-mt-32">
                                    <h2 className="text-3xl font-serif font-bold text-amber-950 mb-6">Returns & Refunds</h2>
                                    <div className="prose prose-amber max-w-none text-amber-900/80 leading-relaxed space-y-4">
                                        <p>
                                            Due to the perishable nature of food products, we do not accept returns for opened products unless they are defective or damaged upon arrival.
                                        </p>
                                        <h3 className="text-xl font-bold text-amber-900 mt-6 mb-2">Damaged Items</h3>
                                        <p>
                                            If you receive a damaged jar, please photograph the package and product and email us at support@balaji-enterprise.com within 48 hours of delivery. We will issue a full replacement or refund immediately.
                                        </p>
                                    </div>
                                </section>

                                <div className="h-px bg-amber-900/10 w-full" />

                                {/* Privacy Policy */}
                                <section id="privacy" className="scroll-mt-32">
                                    <h2 className="text-3xl font-serif font-bold text-amber-950 mb-6">Privacy Policy</h2>
                                    <div className="prose prose-amber max-w-none text-amber-900/80 leading-relaxed space-y-4">
                                        <p>
                                            Your privacy is paramount. This Privacy Policy describes how we collect, use, and share your personal information when you visit or make a purchase from our site.
                                        </p>
                                        <h3 className="text-xl font-bold text-amber-900 mt-6 mb-2">Data Collection</h3>
                                        <p>
                                            We collect device information (IP address, browser version) and order information (Name, Billing Address, Shipping Address, Payment Details). We typically use this information to:
                                        </p>
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li>Fulfill orders placed through the site.</li>
                                            <li>Screen for potential risk or fraud.</li>
                                            <li>Provide you with information or advertising relating to our products.</li>
                                        </ul>
                                    </div>
                                </section>

                                <div className="h-px bg-amber-900/10 w-full" />

                                {/* Terms & Conditions */}
                                <section id="terms" className="scroll-mt-32">
                                    <h2 className="text-3xl font-serif font-bold text-amber-950 mb-6">Terms & Conditions</h2>
                                    <div className="prose prose-amber max-w-none text-amber-900/80 leading-relaxed space-y-4">
                                        <p>
                                            By visiting our site and/ or purchasing something from us, you engage in our "Service" and agree to be bound by the following terms and conditions.
                                        </p>
                                        <h3 className="text-xl font-bold text-amber-900 mt-6 mb-2">General Conditions</h3>
                                        <p>
                                            We reserve the right to refuse service to anyone for any reason at any time. You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices.
                                        </p>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterSpacer />
            </main>
        </>
    );
}
