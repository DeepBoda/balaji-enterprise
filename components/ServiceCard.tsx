"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { hoverVariants } from "@/lib/motion";

interface ServiceProps {
    title: string;
    description: string;
    price: string;
    features: string[];
    icon: React.ReactNode;
    popular?: boolean;
    problem?: string;
    solution?: string;
    outcome?: string;
}

export default function ServiceCard({ title, description, price, features, icon, popular, problem, solution, outcome }: ServiceProps) {
    return (
        <motion.div
            variants={hoverVariants.cardHover}
            initial="rest"
            whileHover="hover"
            className={cn(
                "relative p-8 rounded-3xl border transition-all duration-300 flex flex-col h-full bg-white",
                popular
                    ? "border-amber-400 bg-amber-50/50 shadow-xl shadow-amber-900/5"
                    : "border-amber-900/10 shadow-sm hover:shadow-md"
            )}
        >
            {popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                    Most Popular
                </div>
            )}

            <div className="mb-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-6">
                    {icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-amber-950 mb-2">{title}</h3>
                <p className="text-amber-900/60 text-sm leading-relaxed">{description}</p>
            </div>

            <div className="flex-1">
                <ul className="space-y-4 mb-8">
                    {features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-amber-900/80">
                            <Check className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>

                {(problem || solution || outcome) && (
                    <div className="mt-6 mb-8 text-xs text-amber-900/40 font-mono border-l-2 border-amber-900/10 pl-4 py-2 bg-amber-50/50 rounded-r-lg">
                        {problem && (
                            <div className="flex justify-between mb-1">
                                <span>PROBLEM:</span>
                                <span className="font-bold text-amber-900/60 text-right ml-2">{problem}</span>
                            </div>
                        )}
                        {solution && (
                            <div className="flex justify-between mb-1">
                                <span>SOLUTION:</span>
                                <span className="font-bold text-amber-900/60 text-right ml-2">{solution}</span>
                            </div>
                        )}
                        {outcome && (
                            <div className="flex justify-between">
                                <span>OUTCOME:</span>
                                <span className="font-bold text-amber-600 text-right ml-2">{outcome}</span>
                            </div>
                        )}
                    </div>
                )}
            </div>

            <div className="mt-auto pt-8 border-t border-amber-900/10">
                <div className="flex items-end gap-1 mb-6">
                    <span className="text-3xl font-bold text-amber-900">{price}</span>
                    <span className="text-amber-900/40 text-sm mb-1">/unit</span>
                </div>

                <Link
                    href="/contact"
                    className={cn(
                        "w-full flex items-center justify-center gap-2 py-3 rounded-xl font-medium transition-colors",
                        popular
                            ? "bg-amber-600 text-white hover:bg-amber-700"
                            : "bg-amber-100 text-amber-900 hover:bg-amber-200"
                    )}
                >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </motion.div>
    );
}
