"use client";

import Link from "next/link";

export default function LeadMagnet() {
    return (
        <section className="relative bg-gradient-to-b from-[#fff9f9] via-[#fdeeee] to-[#f8dede] py-20 px-6 text-[#514241] overflow-hidden">
            {/* Soft background blobs */}
            <div className="pointer-events-none absolute -top-10 -left-10 w-64 h-64 rounded-full bg-[#fdc2c1]/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -right-10 w-72 h-72 rounded-full bg-[#f2d6d4]/40 blur-3xl" />

            <div className="relative max-w-4xl mx-auto text-center rounded-2xl p-10 shadow-lg bg-white/95 border border-[#f2d6d4]">
                {/* Badge */}
                <div className="mb-4">
                    <span className="inline-block px-4 py-1 rounded-full text-xs sm:text-sm uppercase tracking-[0.18em] bg-[#fff5f5] text-[#8a7471] border border-[#f2d6d4]">
                        Coming Soon • Affirmation Planner
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-3xl sm:text-4xl font-bold mb-2 font-sans tracking-tight">
                    The Saramatic Way
                </h2>

                {/* Short tagline */}
                <p className="text-sm sm:text-base font-sans uppercase tracking-[0.18em] text-[#8a7471] mb-6">
                    Affirmations that finally make sense
                </p>

                {/* Main description */}
                <p className="text-base sm:text-lg font-sans mb-8 leading-relaxed max-w-2xl mx-auto">
                    Saramatic is a new approach to affirmations and self-growth — created with honesty,
                    compassion, and real life in mind. It blends weekly reflection, daily encouragement,
                    and guided journaling prompts so you can grow through what you actually feel, not
                    just “think positive.”
                </p>

                {/* Divider line */}
                <div className="w-16 h-[2px] bg-[#f2d6d4] mx-auto mb-8" />

                {/* Shadow + Light + ChatGPT */}
                <div className="text-left max-w-2xl mx-auto space-y-4 mb-8">
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

                {/* Coming soon copy + CTA */}
                <h3 className="text-2xl sm:text-3xl font-bold mb-2 font-sans">
                    Grow Through What’s Real
                </h3>
                <p className="text-base sm:text-lg font-sans mb-6 max-w-xl mx-auto">
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
