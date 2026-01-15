import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#140D05] text-[#FDF6E3] pt-32 pb-0 relative overflow-hidden">
            {/* Crisp Top Border */}
            <div className="absolute top-0 left-0 w-full h-px bg-white/10" />

            <div className="container mx-auto px-4 md:px-6 relative z-10 mb-24">
                <div className="grid md:grid-cols-12 gap-12 lg:gap-8 mb-24">
                    {/* Brand - Spans 4 columns */}
                    <div className="md:col-span-4 space-y-8">
                        <Link href="/" className="inline-block">
                            <h3 className="text-3xl font-serif font-bold text-amber-500 tracking-tight leading-none">
                                Balaji Enterprise
                            </h3>
                        </Link>
                        <p className="text-white/60 leading-relaxed max-w-sm text-base font-normal">
                            Pure, raw, and ethically sourced wild honey. Delivering nature's finest nectar directly to your doorstep with uncompromising quality.
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Phone, Mail].map((Icon, i) => (
                                <div key={i} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all duration-300 cursor-pointer text-white/60">
                                    <Icon size={18} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Spacer */}
                    <div className="hidden md:block md:col-span-2" />

                    {/* Links Section - Grid for remaining columns */}
                    <div className="md:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-8">
                        {/* Column 1 */}
                        <div>
                            <h4 className="text-xs font-bold text-amber-500 uppercase tracking-[0.2em] mb-6">Explore</h4>
                            <ul className="space-y-4">
                                {["Shop", "Our Honey", "Process", "Wholesale"].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-white/60 hover:text-white transition-colors duration-200 text-sm font-medium">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 2 */}
                        <div>
                            <h4 className="text-xs font-bold text-amber-500 uppercase tracking-[0.2em] mb-6">Support</h4>
                            <ul className="space-y-4">
                                {["Contact Us", "FAQ", "Shipping", "Returns"].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-white/60 hover:text-white transition-colors duration-200 text-sm font-medium">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3 */}
                        <div>
                            <h4 className="text-xs font-bold text-amber-500 uppercase tracking-[0.2em] mb-6">Contact</h4>
                            <ul className="space-y-4 text-sm text-white/60">
                                <li>@balaji.honey</li>
                                <li>+91 98765 43210</li>
                                <li>hello@balaji.com</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar Details - Crisp Separation */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/40 text-xs tracking-wide pt-8 border-t border-white/5">
                    <p>&copy; {new Date().getFullYear()} Balaji Enterprice. All rights reserved.</p>
                    <div className="flex items-center gap-2">
                        <span>Designed by</span>
                        <span className="font-bold text-amber-500 tracking-wider">DEEP BODA</span>
                    </div>
                </div>
            </div>

            {/* MASSIVE FOOTER TEXT - "NATURE HONEY" - High Visibility */}
            <div className="w-full overflow-hidden leading-none select-none pointer-events-none pt-6">
                <h1 className="text-[13.5vw] font-black text-center text-white opacity-10 tracking-tighter whitespace-nowrap leading-[0.75] translate-y-4">
                    NATURE HONEY
                </h1>
            </div>
        </footer>
    );
}
