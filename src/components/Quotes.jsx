"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const quotes = [
    "You don’t have to be extreme, just consistent.",
    "Small steps every day lead to big change.",
    "You’re not behind. You’re becoming.",
    "Discipline is a form of self-love.",
    "Glow-ups happen in silence—stay focused.",
    "Healing is your power—not your weakness.",
];

export default function Quotes() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % quotes.length);
        }, 5000); // 5 seconds per quote

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-[#fff9f9] text-[#514241] py-16 px-4 text-center font-sans">
            <AnimatePresence mode="wait">
                <motion.blockquote
                    key={index}
                    className="text-xl max-w-2xl mx-auto mb-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.6 }}
                >
                    “{quotes[index]}”
                </motion.blockquote>
            </AnimatePresence>

            {/* ✨ Full-width Divider */}
            <div className="w-full max-w-screen-xl mx-auto mt-10">
                <div className="h-[2px] bg-[#f2d6d4] w-full rounded-full" />
            </div>
        </div>
    );
}
