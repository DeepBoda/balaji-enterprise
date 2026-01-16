import { Reveal } from "@/components/ui/Reveal";
import { Instagram, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#140D05] text-[#FDF6E3] pt-16 pb-0 relative overflow-hidden">
            {/* Crisp Top Border */}
            <div className="absolute top-0 left-0 w-full h-px bg-white/10" />

            <div className="container mx-auto px-4 md:px-6 relative z-10 mb-16">
                <div className="grid md:grid-cols-12 gap-12 lg:gap-8 mb-16">
                    {/* Brand - Spans 4 columns */}
                    <div className="md:col-span-4 space-y-6">
                        <Reveal>
                            <Link href="/" className="inline-block">
                                <h3 className="text-2xl font-serif font-bold text-amber-500 tracking-tight leading-none">
                                    Balaji Enterprise
                                </h3>
                            </Link>
                            <p className="text-white/60 leading-relaxed max-w-sm text-sm font-normal mt-6 mb-6">
                                Pure, raw, and ethically sourced wild honey. Delivering nature&apos;s finest nectar directly to your doorstep with uncompromising quality.
                            </p>
                            <div className="flex gap-4">
                                <a href="https://www.instagram.com/nature_honey_2018" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all duration-300 cursor-pointer text-white/60">
                                    <Instagram size={18} />
                                </a>
                                <a href="tel:+919574155240" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all duration-300 cursor-pointer text-white/60">
                                    <Phone size={18} />
                                </a>
                            </div>
                        </Reveal>
                    </div>

                    {/* Spacer */}
                    <div className="hidden md:block md:col-span-2" />

                    {/* Links Section - Grid for remaining columns */}
                    <div className="md:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-8">
                        {/* Column 1 */}
                        <div>
                            <Reveal delay={0.2}>
                                <h4 className="text-[10px] font-bold text-amber-500 uppercase tracking-[0.2em] mb-4">Explore</h4>
                                <ul className="space-y-3">
                                    {["Shop", "Our Honey", "Process", "Wholesale"].map((item) => (
                                        <li key={item}>
                                            <a href="#" className="text-white/60 hover:text-white transition-colors duration-200 text-sm font-medium">
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </Reveal>
                        </div>

                        {/* Column 2 */}
                        <div>
                            <Reveal delay={0.3}>
                                <h4 className="text-[10px] font-bold text-amber-500 uppercase tracking-[0.2em] mb-4">Support</h4>
                                <ul className="space-y-3">
                                    {["Contact Us", "FAQ", "Shipping", "Returns"].map((item) => (
                                        <li key={item}>
                                            <a href="#" className="text-white/60 hover:text-white transition-colors duration-200 text-sm font-medium">
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </Reveal>
                        </div>

                        {/* Column 3 */}
                        <div>
                            <Reveal delay={0.4}>
                                <h4 className="text-[10px] font-bold text-amber-500 uppercase tracking-[0.2em] mb-4">Contact</h4>
                                <ul className="space-y-3 text-sm text-white/60">
                                    <li>
                                        <a href="https://www.instagram.com/nature_honey_2018" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors">
                                            @nature_honey_2018
                                        </a>
                                    </li>
                                    <li>
                                        <a href="tel:+919574155240" className="hover:text-amber-500 transition-colors">
                                            +91 95741 55240
                                        </a>
                                    </li>
                                </ul>
                            </Reveal>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar Details - Crisp Separation */}
                <Reveal delay={0.5} width="100%">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/40 text-xs tracking-wide pt-8 border-t border-white/5">
                        <p>&copy; {new Date().getFullYear()} Balaji Enterprise. All rights reserved.</p>
                        <div className="flex items-center gap-2">
                            <span>Designed by</span>
                            <span className="font-bold text-amber-500 tracking-wider">DEEP BODA</span>
                        </div>
                    </div>
                </Reveal>
            </div>

            {/* MASSIVE FOOTER TEXT - GEN Z / LUXURY ENDING */}
            <div className="w-full relative pt-12 pb-12 flex justify-center items-center overflow-hidden">
                <Reveal delay={0.6} y={50} blur={false} width="100%">
                    <h1 className="text-[13vw] md:text-[13.5vw] font-serif font-black text-transparent opacity-20 tracking-tight whitespace-nowrap leading-none text-center w-full select-none" style={{ WebkitTextStroke: "1px #FDF6E3" }}>
                        NATURE HONEY
                    </h1>
                </Reveal>
            </div>
        </footer>
    );
}
