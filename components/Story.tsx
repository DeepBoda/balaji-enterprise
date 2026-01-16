"use client";

import { Reveal } from "@/components/ui/Reveal";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Story() {
    return (
        <section id="our-story" className="py-32 bg-[#FFFDF5] relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Visual Side */}
                    <div className="relative">
                        <Reveal>
                            <div className="aspect-[4/5] relative rounded-[2rem] overflow-hidden">
                                <Image
                                    src="/images/story_bg.png"
                                    alt="Beekeeper in nature"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-[2s]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            </div>
                        </Reveal>

                        {/* Decorative Offset Image */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="absolute -bottom-12 -right-12 w-2/3 aspect-square bg-forest-50 p-4 rounded-[2rem] shadow-2xl hidden md:block"
                        >
                            <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden">
                                <Image
                                    src="/images/honeycomb.png"
                                    alt="Honeycomb texture"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Content Side */}
                    <div className="lg:pl-12">
                        <Reveal>
                            <span className="text-honey-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
                                The Origin
                            </span>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <h2 className="text-4xl md:text-6xl font-serif font-medium text-honey-950 mb-8 leading-[1.1]">
                                Born in the wild, <br />
                                not in a factory.
                            </h2>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <div className="space-y-6 text-honey-900/70 text-lg font-light leading-relaxed">
                                <p>
                                    Most honey today is processed, pasteurized, and blended. Ours is different.
                                    We work with indigenous tribes in the deep forests of Gujarat to harvest
                                    excess honey from wild hives, leaving enough for the bees to thrive.
                                </p>
                                <p>
                                    It&apos;s a delicate dance with nature—one that requires patience, respect,
                                    and a commitment to purity that you can taste in every drop.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal delay={0.3} className="pt-8">
                            <div className="flex items-center gap-12">
                                <div>
                                    <h3 className="text-3xl font-serif text-honey-600 mb-1">2018</h3>
                                    <p className="text-xs uppercase tracking-widest text-honey-900/50">Established</p>
                                </div>
                                <div className="w-px h-12 bg-honey-900/10" />
                                <div>
                                    <h3 className="text-3xl font-serif text-honey-600 mb-1">100%</h3>
                                    <p className="text-xs uppercase tracking-widest text-honey-900/50">Cruelty Free</p>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                </div>
            </div>
        </section>
    );
}
