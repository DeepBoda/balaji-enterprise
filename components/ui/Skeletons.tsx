"use client";

import { motion } from "framer-motion";

export function ProductSkeleton() {
    return (
        <div className="bg-white rounded-3xl p-3 shadow-lg shadow-amber-900/5 border border-amber-100">
            {/* Image skeleton */}
            <div className="aspect-square bg-amber-50 rounded-2xl mb-3 relative overflow-hidden">
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-100/50 to-transparent"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
            </div>

            {/* Content skeleton */}
            <div className="px-2 pb-2 space-y-3">
                <div className="flex items-center justify-between">
                    <div className="h-5 w-16 bg-amber-100 rounded animate-pulse" />
                    <div className="h-4 w-10 bg-amber-50 rounded animate-pulse" />
                </div>
                <div className="h-6 w-3/4 bg-amber-100 rounded animate-pulse" />
                <div className="flex items-center justify-between mt-3">
                    <div className="h-7 w-16 bg-amber-100 rounded animate-pulse" />
                    <div className="h-8 w-8 bg-amber-50 rounded-full animate-pulse" />
                </div>
            </div>
        </div>
    );
}

export function ProductGridSkeleton({ count = 4 }: { count?: number }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {Array.from({ length: count }).map((_, i) => (
                <ProductSkeleton key={i} />
            ))}
        </div>
    );
}

export function TestimonialSkeleton() {
    return (
        <div className="bg-amber-50/50 p-8 rounded-3xl border border-amber-100">
            {/* Stars skeleton */}
            <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-5 h-5 bg-amber-200 rounded animate-pulse" />
                ))}
            </div>

            {/* Content skeleton */}
            <div className="space-y-2 mb-8">
                <div className="h-4 w-full bg-amber-100 rounded animate-pulse" />
                <div className="h-4 w-5/6 bg-amber-100 rounded animate-pulse" />
                <div className="h-4 w-4/6 bg-amber-100 rounded animate-pulse" />
            </div>

            {/* Avatar skeleton */}
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-200 rounded-full animate-pulse" />
                <div className="space-y-2">
                    <div className="h-4 w-24 bg-amber-100 rounded animate-pulse" />
                    <div className="h-3 w-16 bg-amber-50 rounded animate-pulse" />
                </div>
            </div>
        </div>
    );
}

export function HeroSkeleton() {
    return (
        <section className="min-h-[85vh] flex items-center bg-[#FFFBF0] px-4">
            <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <div className="h-8 w-48 bg-amber-100 rounded-full animate-pulse" />
                    <div className="space-y-4">
                        <div className="h-16 w-full bg-amber-100 rounded animate-pulse" />
                        <div className="h-16 w-3/4 bg-amber-100 rounded animate-pulse" />
                    </div>
                    <div className="h-6 w-full max-w-lg bg-amber-50 rounded animate-pulse" />
                    <div className="flex gap-4 pt-2">
                        <div className="h-12 w-36 bg-amber-200 rounded-full animate-pulse" />
                        <div className="h-12 w-36 bg-amber-100 rounded-full animate-pulse" />
                    </div>
                </div>
                <div className="relative flex items-center justify-center">
                    <div className="w-full max-w-[420px] aspect-square bg-amber-100 rounded-[2.5rem] animate-pulse" />
                </div>
            </div>
        </section>
    );
}
