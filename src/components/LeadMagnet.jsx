"use client";

import Link from "next/link";

export default function LeadMagnet() {
    return (
        <section className="bg-[#fdeeee] py-16 px-6 text-[#514241]">
            <div className="max-w-3xl mx-auto text-center rounded-2xl p-10 shadow-md bg-white">

                {/* Title */}
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-sans">
                    The Saramatic Way
                </h2>

                {/* Description */}
                <p className="text-base sm:text-lg font-sans mb-8 leading-relaxed">
                    A new approach to affirmations and self-growth — created with honesty, compassion,
                    and love. <strong>Saramatic</strong> blends weekly reflection, daily encouragement,
                    and gentle journaling prompts to help you grow through what’s real, not just the
                    easy moments.
                </p>

                {/* Shadow + Light Explanation */}
                <div className="text-left bg-[#fff9f9] rounded-xl p-6 mb-6 shadow-sm">
                    <h3 className="text-xl font-semibold mb-2 font-sans">What Makes It Different</h3>

                    <p className="font-sans mb-3">
                        At the heart of The Saramatic Way are two types of affirmations:
                    </p>

                    <p className="font-sans mb-3">
                        <strong>Shadow Affirmations (Weekly):</strong>{" "}
                        One honest truth each week that acknowledges a real-life challenge — like
                        impatience, self-doubt, or overwhelm. Not negative. Not forced. Just real.
                    </p>

                    <p className="font-sans">
                        <strong>Light Affirmations (Daily):</strong>{" "}
                        A new affirmation every day that helps you gently reframe the weekly challenge,
                        build confidence, and create steady emotional progress.
                    </p>
                </div>

                <p className="text-left font-sans mb-8">
                    Together, they create a grounded rhythm: awareness for the week and
                    encouragement for the day — so you’re not just saying pretty words, you’re
                    actually working with what you feel.
                </p>

                {/* ChatGPT Prompts */}
                <div className="text-left bg-[#fff9f9] rounded-xl p-6 mb-8 shadow-sm">
                    <h3 className="text-xl font-semibold mb-2 font-sans">Guided ChatGPT Prompts</h3>
                    <p className="font-sans">
                        Each day includes a simple reflective journaling prompt you can use with
                        ChatGPT to explore your thoughts more deeply. These prompts help you connect
                        the affirmation to your real life — creating clarity, self-awareness, and
                        emotional growth.
                    </p>
                </div>

                {/* Coming Soon + Facebook CTA */}
                <h3 className="text-2xl font-bold mb-2 font-sans">Coming Soon</h3>
                <p className="text-base sm:text-lg font-sans mb-4">
                    The Saramatic Affirmation Planner is currently in development.
                    Follow along for updates, behind-the-scenes, and launch details.
                </p>

                <Link
                    href="https://www.facebook.com/profile.php?id=61583476571040"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#fdc2c1] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#f5a9a7] transition-all font-sans"
                >
                    Follow Saramatic on Facebook
                </Link>

            </div>
        </section>
    );
}
