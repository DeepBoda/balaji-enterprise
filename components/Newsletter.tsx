"use client";

import { Button } from "@/components/ui/button";

export default function Newsletter() {
    return (
        <section className="py-24 px-4">
            <div className="container mx-auto">
                <div className="bg-[#051D40] rounded-[3rem] p-8 md:p-20 text-center relative overflow-hidden">
                    {/* Background circles */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
                            Join the Hive
                        </h2>
                        <p className="text-amber-100/70 text-lg mb-10">
                            Subscribe to get sweet offers, organic living tips, and exclusive access to our seasonal harvests.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 h-12 px-6 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-amber-400"
                            />
                            <Button size="lg" className="h-12 rounded-full bg-amber-500 hover:bg-amber-600 text-white px-8">
                                Subscribe
                            </Button>
                        </div>
                        <p className="text-white/30 text-xs mt-6">
                            No spam, ever. Just pure goodness.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
