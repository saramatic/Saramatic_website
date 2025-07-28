"use client";

import { Heart, PenLine, Sparkles } from "lucide-react";

export default function Features() {
    return (
        <section className="bg-[#fff9f9] py-16 px-4 sm:px-6 text-[#514241]">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-sans">What You’ll Love</h2>
                <p className="text-base sm:text-lg mb-12 font-sans max-w-2xl mx-auto">
                    Tools to guide your healing, your glow-up, and your soft structure — no perfection required.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {/* Feature 1 */}
                    <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                        <div className="flex justify-center mb-4">
                            <Sparkles className="w-8 h-8 text-[#fdc2c1]" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-2 font-sans">Glow-Up Tracker</h3>
                        <p className="text-sm font-sans">
                            Follow your physical, emotional, and spiritual journey with beautiful daily logs.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                        <div className="flex justify-center mb-4">
                            <PenLine className="w-8 h-8 text-[#fdc2c1]" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-2 font-sans">Journal Prompts</h3>
                        <p className="text-sm font-sans">
                            Thoughtful writing prompts to help you reconnect with your desires, goals, and magic.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                        <div className="flex justify-center mb-4">
                            <Heart className="w-8 h-8 text-[#fdc2c1]" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-2 font-sans">AI Support</h3>
                        <p className="text-sm font-sans">
                            Get daily guidance, accountability, and motivation from your own personalized AI buddy.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
