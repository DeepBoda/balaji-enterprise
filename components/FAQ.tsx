"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "Is this honey 100% raw?",
        answer: "Yes, absolutely. We only filter using a coarse mesh to remove large beeswax particles. We never heat or pasteurize our honey."
    },
    {
        question: "Why does the color vary between jars?",
        answer: "Since our honey is wild-harvested, the color depends entirely on the flowers the bees visited in that specific season. Variations are natural and a sign of authenticity."
    },
    {
        question: "Do you ship internationally?",
        answer: "Currently we ship across India. We are working on international shipping licenses and hope to serve you globally soon."
    },
    {
        question: "Is it safe for children?",
        answer: "Honey should not be given to infants under 1 year of age due to the risk of botulism. For older children and adults, it is perfectly safe and healthy."
    }
];

export default function FAQ() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-950">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <FAQItem key={idx} faq={faq} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FAQItem({ faq }: { faq: { question: string, answer: string } }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-amber-100 rounded-2xl overflow-hidden bg-amber-50/30">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-amber-50 transition-colors"
            >
                <span className="font-bold text-amber-900">{faq.question}</span>
                {isOpen ? <Minus className="w-4 h-4 text-amber-600" /> : <Plus className="w-4 h-4 text-amber-600" />}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="px-6 pb-6 text-amber-900/70 leading-relaxed">
                            {faq.answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
