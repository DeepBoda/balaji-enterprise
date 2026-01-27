"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Users, Heart } from "lucide-react";

const milestones = [
    {
        year: "2018",
        title: "The Silent Spark",
        desc: "Deep in the Gir forests, we discovered a flavor lost to time. Not made in factories, but crafted by wild bees in untouched canopies.",
        icon: MapPin,
    },
    {
        year: "2020",
        title: "The Ethical Oath",
        desc: "We witnessed the cruelty of commercial mass-harvesting. We vowed to never hurt a bee, taking only the surplus and leaving the hive thriving.",
        icon: Heart,
    },
    {
        year: "2022",
        title: "The Tribe Unites",
        desc: "Partnering with over 50 tribal families, we empowered the true guardians of the forest, ensuring fair trade and sustainable livelihoods.",
        icon: Users,
    },
    {
        year: "2024",
        title: "Nature's Gold, Global",
        desc: "From a local secret to a global standard of purity. Balaji Enterprise represents the absolute zenith of raw, organic honey.",
        icon: Calendar,
    },
];

export default function Story() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

    return (
        <section ref={targetRef} className="py-24 relative overflow-hidden">
            {/* Background Grain */}
            <div className="absolute inset-0 opacity-20 pointer-events-none texture-grain" />

            <div className="container mx-auto px-4 md:px-6">
                {/* Intro */}
                <motion.div
                    style={{ opacity, scale }}
                    className="max-w-4xl mx-auto text-center mb-24"
                >
                    <span className="text-amber-600 font-bold tracking-widest uppercase text-xs mb-4 block">
                        Our Legend
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-amber-950 mb-8 leading-tight">
                        It started with a single <br />
                        <span className="text-amber-500 italic">drop of wonder.</span>
                    </h2>
                    <p className="text-xl text-amber-900/60 leading-relaxed font-serif">
                        "We didn't set out to build a business. We set out to save a taste."
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative max-w-3xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-amber-200 -translate-x-1/2" />

                    <div className="space-y-24">
                        {milestones.map((item, idx) => (
                            <TimelineItem key={idx} item={item} idx={idx} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function TimelineItem({ item, idx }: { item: any, idx: number }) {
    const isEven = idx % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className={`relative flex flex-col md:flex-row gap-8 items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
        >
            {/* Content Side */}
            <div className={`flex-1 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] border border-amber-50 hover:border-amber-100 transition-colors group relative overflow-hidden">
                    {/* Fixed Static Watermark Year - High Contrast & Visibility */}
                    <span
                        className={`text-8xl font-serif font-bold text-amber-500/10 absolute -top-2 select-none z-0 ${isEven ? '-left-2' : '-right-2'}`}
                    >
                        {item.year}
                    </span>
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-amber-950 mb-3">{item.title}</h3>
                        <p className="text-amber-900/60 leading-relaxed">
                            {item.desc}
                        </p>
                    </div>
                </div>
            </div>

            {/* Center Icon */}
            <div className="absolute left-[27px] md:left-1/2 -translate-x-1/2 flex items-center justify-center w-14 h-14 bg-amber-50 rounded-full border-4 border-white shadow-lg z-10 shrink-0">
                <item.icon className="w-6 h-6 text-amber-600" />
            </div>
            {/* Empty Side for Balance */}
            <div className="flex-1 hidden md:block" />
        </motion.div>
    );
}
