import FooterSpacer from "@/components/ui/FooterSpacer";
import ServiceCard from "@/components/ServiceCard";
import { Metadata } from "next";
import { Sparkles, Heart, Zap, Gift, Truck, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
    title: "Services & Solutions | Balaji Enterprise",
    description: "Comprehensive honey solutions for personal wellness and enterprise needs. Corporate gifting, bulk supply, and health rituals.",
};

export default function ServicesPage() {
    const personalServices = [
        {
            title: "The Morning Elixir",
            description: "Kickstart your metabolism and immunity.",
            problem: "Low energy & sluggish digestion",
            solution: "Raw honey + warm lemon water",
            outcome: "Sustained vitality all day",
            price: "₹850",
            icon: <Zap className="w-6 h-6" />,
            features: ["Boosts Immunity", "Aids Digestion", "Natural Detox"],
            popular: true
        },
        {
            title: "The Nightly Calm",
            description: "Deep, restorative sleep naturally.",
            problem: "Insomnia & restlessness",
            solution: "Raw honey + warm milk/chamomile",
            outcome: "Peaceful, deep REM sleep",
            price: "₹850",
            icon: <Sparkles className="w-6 h-6" />,
            features: ["Reduces Cortisol", "Promotes Melatonin", "Soothes Nerves"]
        },
        {
            title: "Skin Radiance",
            description: "Natural glow from within.",
            problem: "Dull, dry skin",
            solution: "Topical honey mask + daily intake",
            outcome: "Hydrated, glowing complexion",
            price: "₹1,200",
            icon: <Heart className="w-6 h-6" />,
            features: ["Antibacterial", "Deeply Moisturizing", "Anti-aging"]
        }
    ];

    const businessServices = [
        {
            title: "Corporate Gifting",
            description: "Premium, healthy gifts for your team and clients.",
            price: "Custom",
            icon: <Gift className="w-6 h-6" />,
            features: ["Custom Branding", "Bulk Discounts", "Pan-India Shipping"]
        },
        {
            title: "Bulk Supply",
            description: "Consistent, high-quality supply for HORECA.",
            price: "Wholesale",
            icon: <Truck className="w-6 h-6" />,
            features: ["Lab Tested", "Consistent Taste", "Priority Support"]
        },
        {
            title: "White Labeling",
            description: "Launch your own premium honey brand.",
            price: "Contract",
            icon: <ShieldCheck className="w-6 h-6" />,
            features: ["FSSAI Compliant", "Packaging Support", "Marketing Assets"]
        }
    ];

    return (
        <>
            <main className="relative z-10 bg-[#FFFBF0] min-h-screen">

                {/* Hero */}
                <section className="bg-amber-900 text-amber-50 py-32 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[url('/images/noise.png')]"></div>
                    <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl mx-auto">
                        <span className="text-amber-400 font-bold tracking-widest uppercase text-sm mb-4 block">Our Offerings</span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
                            Wellness Solutions <br /> <span className="text-amber-400">&</span> Enterprise Services
                        </h1>
                        <p className="text-xl md:text-2xl text-amber-200/80 leading-relaxed max-w-2xl mx-auto">
                            Transforming nature's finest nectar into targeted solutions for your health and your business.
                        </p>
                    </div>
                </section>

                {/* Personal Solutions */}
                <section className="py-24 container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-950 mb-4">Wellness Rituals</h2>
                        <p className="text-amber-900/60 max-w-2xl mx-auto">
                            Productized health protocols designed to solve specific wellness challenges using our premium raw honey.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {personalServices.map((service, idx) => (
                            <div key={idx} className="flex flex-col h-full">
                                <ServiceCard {...service} />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Business Solutions */}
                <section className="py-24 bg-white border-y border-amber-900/5">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-950 mb-4">Enterprise Services</h2>
                            <p className="text-amber-900/60 max-w-2xl mx-auto">
                                Scalable honey solutions for businesses, from corporate gifting to white-label manufacturing.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {businessServices.map((service, idx) => (
                                <ServiceCard
                                    key={idx}
                                    {...service}
                                    problem="Enterprise Scale"
                                    solution="Premium Honey"
                                    outcome="Brand Elevation"
                                    popular={false} // Override popular for business section
                                />
                            ))}
                        </div>
                    </div>
                </section>

                <FooterSpacer />
            </main>
        </>
    );
}
