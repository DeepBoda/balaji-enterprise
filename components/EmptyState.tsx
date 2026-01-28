"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { variants } from "@/lib/motion";

interface EmptyStateProps {
    icon: LucideIcon;
    title: string;
    description: string;
    actionLabel?: string;
    onAction?: () => void;
}

export default function EmptyState({ icon: Icon, title, description, actionLabel, onAction }: EmptyStateProps) {
    return (
        <motion.div
            variants={variants.scaleIn}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center justify-center p-12 text-center rounded-2xl border-2 border-dashed border-amber-900/10 bg-amber-50/30"
        >
            <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-6 text-amber-600">
                <Icon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-serif font-bold text-amber-950 mb-2">{title}</h3>
            <p className="text-amber-900/60 max-w-sm mb-6">{description}</p>
            {actionLabel && onAction && (
                <Button onClick={onAction} className="bg-amber-900 text-white hover:bg-amber-800">
                    {actionLabel}
                </Button>
            )}
        </motion.div>
    );
}
