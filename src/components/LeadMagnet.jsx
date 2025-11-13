"use client";

import Link from "next/link";

export default function LeadMagnet() {
    return (
        <section className="bg-gradient-to-b from-[#fff9f9] via-[#fdeeee] to-[#f8dede] py-20 px-6 text-[#514241]">
            <div className="max-w-3xl mx-auto text-center">

                {/* Small badge */}
                <div className="mb-4">
                    <span className="inline-block px-4 py-1 rounded-full text-xs sm:text-sm uppercase tracking-[0.18em] bg-[#fff5f5] text-[#8a7471] border border-[#f2d6d4]">
                        Coming Soon • Affirmation Planner
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-3xl sm:text-4xl font-bold mb-2 font-sans tracking-tight">
                    The Saramatic Way
                </h2>

                {/* Tagline */}
                <p className="text-sm sm:text-base font-sans uppercase tracking-[0.18em] text-[#8a7471] mb-6">
                    Affirmations that finally make sense
                </p>

                {/* Main description */}
                <p className="text-base sm:text-lg font-sans mb-10 leading-relaxed mx-auto">
                    Saramatic is a new approach to affirmations and self-growth — created with honesty,
                    compassion, and real life in mind. It blends weekly reflection, daily encouragement,
                    and guided journaling prompts so you can grow through what you actually feel, not
                    just “think positive.”
                </p>

                {/* Thin divider */}
                <div className="w-16 h-[2px] bg-[#f2d6d4] mx-auto mb-10" />

                {/* Shadow + Light + ChatGPT – still structured, but no box */}
                <div className="text-left space-y-5 mx-auto mb-12 text-sm sm:text-base">
                    <p className="font-sans">
                        <span className="font-semibold">Shadow Affirmations (Weekly):</span>{" "}
                        one gentle, honest focus for the week that names a real challenge — like
                        impatience, self-doubt, overwhelm, or the pressure to be perfect. They’re not
                        negative; they simply tell the truth.
                    </p>

                    <p className="font-sans">
                        <span className="font-semibold">Light Affirmations (Daily):</span>{" "}
                        a new affirmation each day that helps you softly reframe that weekly focus and
                        build more supportive thoughts, one day at a time.
                    </p>

                    <p className="font-sans">
                        <span className="font-semibold">Guided ChatGPT Prompts:</span>{" "}
                        simple journaling prompts you can use with ChatGPT to explore what each
                        affirmation brings up, notice patterns, and turn insight into small, real change.
                    </p>
                </div>

                {/* Coming soon + CTA */}
                <h3 className="text-2xl sm:text-3xl font-bold mb-2 font-sans">
                    Grow Through What’s Real
                </h3>
                <p className="text-base sm:text-lg font-sans mb-6 mx-auto">
                    The Saramatic Affirmation Planner is currently in development.
                    Follow Saramatic to see updates, behind-the-scenes progress, and launch details.
                </p>

                <Link
                    href="https://www.facebook.com/profile.php?id=61583476571040"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#fdc2c1] text-white px-7 py-3 rounded-full font-semibold hover:bg-[#f5a9a7] transition-all font-sans shadow-sm hover:shadow-md"
                >
                    Follow Saramatic on Facebook
                </Link>
            </div>
        </section>
    );
}
