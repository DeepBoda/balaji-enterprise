"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TableOfContentsProps {
    items: { id: string; title: string }[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "-20% 0px -35% 0px" }
        );

        items.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [items]);

    return (
        <nav className="sticky top-32 hidden lg:block w-64">
            <h3 className="text-sm font-bold text-amber-950 uppercase tracking-widest mb-6">Contents</h3>
            <ul className="space-y-4 border-l-2 border-amber-900/10 pl-4">
                {items.map((item) => (
                    <li key={item.id}>
                        <a
                            href={`#${item.id}`}
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector(`#${item.id}`)?.scrollIntoView({
                                    behavior: "smooth",
                                });
                            }}
                            className={cn(
                                "text-sm font-medium transition-colors block py-0.5",
                                activeId === item.id
                                    ? "text-amber-600 -ml-[18px] border-l-2 border-amber-600 pl-4"
                                    : "text-amber-900/60 hover:text-amber-800"
                            )}
                        >
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
