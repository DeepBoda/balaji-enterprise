"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Droplets, Flower, ShieldCheck } from "lucide-react";
import Image from "next/image";

const steps = [
    {
        icon: Flower,
        title: "Ethical Harvesting",
        desc: "Sourced from deep forests where bees forage on medicinal wildflowers.",
        color: "bg-amber-100 text-amber-700",
    },
    {
        icon: Droplets,
        title: "Cold Extraction",
        desc: "Never heated or pasteurized. We preserve every enzyme and nutrient.",
        color: "bg-amber-200 text-amber-800",
    },
    {
        icon: ShieldCheck,
        title: "Purity Tested",
        desc: "Every batch is lab-tested to ensure zero adulteration or antibiotics.",
        color: "bg-amber-300 text-amber-900",
    },
];

export default function Process() {
    return (
        <section id="process" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <Reveal width="100%">
                        <span className="text-amber-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
                            Our Method
                        </span>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold text-amber-950 mb-6">
                            From Hive to Home
                        </h2>
                        <p className="text-amber-900/60 text-lg leading-relaxed">
                            We don't manufacture honey. We simply steward it from nature to you,
                            ensuring nothing is added and nothing is taken away.
                        </p>
                    </Reveal>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[2.5rem] left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-amber-200 to-transparent" />

                    <div className="grid md:grid-cols-3 gap-12">
                        {steps.map((step, i) => (
                            <Reveal key={i} delay={i * 0.2} className="relative group">
                                <div className="flex flex-col items-center text-center">
                                    <div className={`w-20 h-20 rounded-full ${step.color} flex items-center justify-center mb-8 relative z-10 ring-8 ring-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                                        <step.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-amber-950 mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-amber-900/60 leading-relaxed px-4">
                                        {step.desc}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>

                {/* Additional Classic Touch - Signature/Seal area */}
                <Reveal delay={0.6} className="mt-24 text-center">
                    <div className="inline-block p-1 border-t border-b border-amber-900/10">
                        <p className="font-serif italic text-2xl text-amber-900/80 px-8 py-4">
                            "Pureness you can taste in every drop."
                        </p>
                    </div>
                </Reveal>

            </div>
        </section>
    );
}
