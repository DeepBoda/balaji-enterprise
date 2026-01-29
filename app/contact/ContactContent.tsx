"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "support@balaji.com",
        href: "mailto:support@balaji.com"
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+91 95741 55240",
        href: "tel:+919574155240"
    },
    {
        icon: MapPin,
        label: "Address",
        value: "123 Honey Lane, Forest Edge, Gujarat",
        href: null
    }
];

export default function ContactContent() {
    return (
        <div className="container mx-auto px-4 md:px-6 py-24">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Contact Info Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white p-8 rounded-3xl shadow-sm border border-amber-100 hover:shadow-lg hover:border-amber-200 transition-all duration-300"
                >
                    <h3 className="text-xl font-bold text-amber-950 mb-6">Contact Info</h3>
                    <div className="space-y-6">
                        {contactInfo.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 + 0.2 }}
                                className="flex items-start gap-4 group"
                            >
                                <div className="p-2.5 bg-amber-50 rounded-xl text-amber-600 group-hover:bg-amber-100 transition-colors">
                                    <item.icon size={20} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-amber-500 uppercase tracking-wider mb-1">{item.label}</p>
                                    {item.href ? (
                                        <a
                                            href={item.href}
                                            className="text-amber-900/80 hover:text-amber-600 transition-colors font-medium"
                                        >
                                            {item.value}
                                        </a>
                                    ) : (
                                        <p className="text-amber-900/80">{item.value}</p>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-gradient-to-br from-amber-50 to-amber-100/50 p-8 rounded-3xl shadow-sm border border-amber-100 flex flex-col items-center justify-center text-center hover:shadow-lg transition-all duration-300"
                >
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
                        <Mail className="w-7 h-7 text-amber-500" />
                    </div>
                    <h3 className="text-xl font-bold text-amber-950 mb-2">Ready to connect?</h3>
                    <p className="text-amber-900/60 mb-6">We typically respond within 24 hours</p>
                    <motion.a
                        href="mailto:support@balaji.com"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 text-white font-bold rounded-full shadow-lg shadow-amber-500/20 hover:bg-amber-700 hover:shadow-amber-500/30 transition-all duration-300 group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Send us a message
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                </motion.div>
            </div>
        </div>
    );
}
