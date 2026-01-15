import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#050505] text-amber-50 pt-24 pb-0 relative overflow-hidden">
            {/* Subtle Warm Glow for 'Matching' feel */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-amber-900/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10 mb-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    {/* Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="text-3xl font-serif font-bold text-amber-500 tracking-tight">Balaji Enterprise</Link>
                        <p className="text-stone-400 leading-relaxed max-w-xs">
                            Pure, raw, and ethically sourced wild honey. Delivering nature's finest nectar directly to your doorstep.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-bold text-amber-200/40 uppercase tracking-widest mb-6">Explore</h4>
                        <ul className="space-y-4">
                            {["Shop", "Process", "Our Story", "Wholesale"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-stone-400 hover:text-amber-400 transition-colors duration-300">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-sm font-bold text-amber-200/40 uppercase tracking-widest mb-6">Legal</h4>
                        <ul className="space-y-4">
                            {["Terms of Service", "Privacy Policy", "Shipping Policy", "Returns"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-stone-400 hover:text-amber-400 transition-colors duration-300">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-bold text-amber-200/40 uppercase tracking-widest mb-6">Contact Us</h4>
                        <ul className="space-y-6">
                            <li className="flex items-center gap-4 text-stone-400 group cursor-pointer">
                                <div className="p-3 rounded-full bg-white/5 group-hover:bg-amber-500/10 transition-colors">
                                    <Instagram size={20} className="group-hover:text-amber-400 transition-colors" />
                                </div>
                                <span>@balaji.honey</span>
                            </li>
                            <li className="flex items-center gap-4 text-stone-400 group cursor-pointer">
                                <div className="p-3 rounded-full bg-white/5 group-hover:bg-amber-500/10 transition-colors">
                                    <Phone size={20} className="group-hover:text-amber-400 transition-colors" />
                                </div>
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-4 text-stone-400 group cursor-pointer">
                                <div className="p-3 rounded-full bg-white/5 group-hover:bg-amber-500/10 transition-colors">
                                    <Mail size={20} className="group-hover:text-amber-400 transition-colors" />
                                </div>
                                <span>hello@balaji-enterprise.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar Details */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-stone-600 text-sm mb-12">
                    <p>&copy; {new Date().getFullYear()} Balaji Enterprice. All rights reserved.</p>
                    <div className="flex items-center gap-2">
                        <span>Designed by</span>
                        <span className="font-bold text-amber-700/50">DEEP BODA</span>
                    </div>
                </div>
            </div>

            {/* MASSIVE FOOTER TEXT - "Nature Honey" */}
            <div className="relative w-full overflow-hidden leading-none select-none pointer-events-none opacity-20 border-t border-white/5">
                <h1 className="text-[12vw] md:text-[14vw] font-bold text-center text-stone-800 tracking-tighter mix-blend-overlay whitespace-nowrap pb-4">
                    NATURE HONEY
                </h1>
            </div>
        </footer>
    );
}
