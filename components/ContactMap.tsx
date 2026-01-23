"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function ContactMap() {
    return (
        <section className="py-12 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="relative w-full aspect-[2/1] bg-amber-50 rounded-3xl border border-amber-100 overflow-hidden flex items-center justify-center">
                    {/* Abstract Map Graphic */}
                    <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/India_Gujarat_location_map.svg/1200px-India_Gujarat_location_map.svg.png')] bg-cover bg-center grayscale contrast-75 sepia" />

                    {/* Pin */}
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="relative z-10 flex flex-col items-center"
                    >
                        <div className="w-4 h-4 bg-amber-600 rounded-full animate-ping absolute top-4" />
                        <MapPin className="w-12 h-12 text-amber-600 fill-amber-100 relative z-10 drop-shadow-md" />
                        <div className="bg-white px-4 py-2 rounded-xl shadow-lg mt-2 text-center border border-amber-100/50">
                            <span className="block font-bold text-amber-950 text-sm">Gir Forest Region</span>
                            <span className="block text-xs text-amber-900/60">Sourcing & Processing</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
