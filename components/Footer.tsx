import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#120a02] text-amber-50 pt-24 pb-0 relative overflow-hidden text-[#FDF6E3]">
            {/* Warm Golden Gradient at top for smooth transition */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#FFFBF0] to-transparent opacity-5" />

            {/* Honey Glow Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-amber-600/20 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

            <div className="container mx-auto px-4 md:px-6 relative z-10 mb-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    {/* Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="text-3xl font-serif font-bold text-amber-500 tracking-tight">Balaji Enterprise</Link>
                        <p className="text-amber-100/60 leading-relaxed max-w-xs font-medium">
                            Pure, raw, and ethically sourced wild honey. Delivering nature's finest nectar directly to your doorstep.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-bold text-amber-500 uppercase tracking-widest mb-6">Explore</h4>
                        <ul className="space-y-4">
                            {["Shop", "Process", "Our Story", "Wholesale"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-amber-100/60 hover:text-amber-400 transition-colors duration-300">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-sm font-bold text-amber-500 uppercase tracking-widest mb-6">Legal</h4>
                        <ul className="space-y-4">
                            {["Terms of Service", "Privacy Policy", "Shipping Policy", "Returns"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-amber-100/60 hover:text-amber-400 transition-colors duration-300">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-bold text-amber-500 uppercase tracking-widest mb-6">Contact Us</h4>
                        <ul className="space-y-6">
                            <li className="flex items-center gap-4 text-amber-100/60 group cursor-pointer">
                                <div className="p-3 rounded-full bg-amber-500/10 group-hover:bg-amber-500/20 transition-colors">
                                    <Instagram size={20} className="text-amber-500 group-hover:text-amber-400 transition-colors" />
                                </div>
                                <span>@balaji.honey</span>
                            </li>
                            <li className="flex items-center gap-4 text-amber-100/60 group cursor-pointer">
                                <div className="p-3 rounded-full bg-amber-500/10 group-hover:bg-amber-500/20 transition-colors">
                                    <Phone size={20} className="text-amber-500 group-hover:text-amber-400 transition-colors" />
                                </div>
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-4 text-amber-100/60 group cursor-pointer">
                                <div className="p-3 rounded-full bg-amber-500/10 group-hover:bg-amber-500/20 transition-colors">
                                    <Mail size={20} className="text-amber-500 group-hover:text-amber-400 transition-colors" />
                                </div>
                                <span>hello@balaji-enterprise.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar Details */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-amber-100/40 text-sm mb-12 border-t border-amber-500/10 pt-8">
                    <p>&copy; {new Date().getFullYear()} Balaji Enterprice. All rights reserved.</p>
                    <div className="flex items-center gap-2">
                        <span>Designed by</span>
                        <span className="font-bold text-amber-500">DEEP BODA</span>
                    </div>
                </div>
            </div>

            {/* MASSIVE FOOTER TEXT - "Nature Honey" */}
            <div className="relative w-full overflow-hidden leading-none select-none pointer-events-none border-t border-amber-500/5">
                <h1 className="text-[13vw] md:text-[15.5vw] font-black text-center text-amber-950/40 tracking-tighter mix-blend-soft-light whitespace-nowrap pb-0 leading-[0.8]">
                    NATURE HONEY
                </h1>
            </div>
        </footer>
    );
}
