import { Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#0a0a0a] text-amber-50 py-24 relative overflow-hidden">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    {/* Brand */}
                    <div className="space-y-6">
                        <h3 className="text-3xl font-serif font-bold text-amber-400">Balaji Enterprice</h3>
                        <p className="text-stone-400 leading-relaxed max-w-xs">
                            Pure, raw, and ethically sourced wild honey. Delivering nature's finest nectar directly to your doorstep.
                        </p>
                    </div>

                    {/* Quick Links - Clean List */}
                    <div>
                        <h4 className="text-sm font-bold text-amber-200/50 uppercase tracking-widest mb-6">Explore</h4>
                        <ul className="space-y-4">
                            {["Shop", "Process", "Our Story", "Wholesale"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-stone-300 hover:text-amber-400 transition-colors duration-300">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-sm font-bold text-amber-200/50 uppercase tracking-widest mb-6">Legal</h4>
                        <ul className="space-y-4">
                            {["Terms of Service", "Privacy Policy", "Shipping Policy", "Returns"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-stone-300 hover:text-amber-400 transition-colors duration-300">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact - No Email Form */}
                    <div>
                        <h4 className="text-sm font-bold text-amber-200/50 uppercase tracking-widest mb-6">Contact Us</h4>
                        <ul className="space-y-6">
                            <li className="flex items-center gap-4 text-stone-300 group cursor-pointer">
                                <div className="p-3 rounded-full bg-white/5 group-hover:bg-amber-500/10 transition-colors">
                                    <Instagram size={20} className="group-hover:text-amber-400 transition-colors" />
                                </div>
                                <span>@balaji.honey</span>
                            </li>
                            <li className="flex items-center gap-4 text-stone-300 group cursor-pointer">
                                <div className="p-3 rounded-full bg-white/5 group-hover:bg-amber-500/10 transition-colors">
                                    <Phone size={20} className="group-hover:text-amber-400 transition-colors" />
                                </div>
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-4 text-stone-300 group cursor-pointer">
                                <div className="p-3 rounded-full bg-white/5 group-hover:bg-amber-500/10 transition-colors">
                                    <Mail size={20} className="group-hover:text-amber-400 transition-colors" />
                                </div>
                                <span>hello@balaji-enterprise.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar - Antigravity Style */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-stone-500 text-sm">
                        &copy; {new Date().getFullYear()} Balaji Enterprice. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2 opacity-30 hover:opacity-100 transition-opacity duration-500">
                        <span className="text-xs uppercase tracking-widest text-stone-500">Designed by</span>
                        <span className="font-bold text-amber-500 tracking-wider text-sm">ANTIGRAVITY</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
