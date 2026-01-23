"use client";

import React, { useEffect, useState } from "react";

export default function FooterSpacer() {
    const [height, setHeight] = useState(0);

    useEffect(() => {
        const updateHeight = () => {
            const footer = document.getElementById("site-footer");
            if (footer) {
                setHeight(footer.offsetHeight);
            }
        };

        updateHeight();
        window.addEventListener("resize", updateHeight);

        // Observer for content changes in footer
        const footer = document.getElementById("site-footer");
        let observer: ResizeObserver | null = null;

        if (footer) {
            observer = new ResizeObserver(updateHeight);
            observer.observe(footer);
        }

        return () => {
            window.removeEventListener("resize", updateHeight);
            if (observer) observer.disconnect();
        };
    }, []);

    return <div style={{ height: height }} className="w-full bg-transparent" />;
}
