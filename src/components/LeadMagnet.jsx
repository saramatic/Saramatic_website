"use client";

import Link from "next/link";

export default function LeadMagnet() {
    return (
        <section className="bg-gradient-to-b from-[#fff9f9] via-[#fdeeee] to-[#f8dede] py-20 px-6 text-[#514241]">
            {/* HERO */}
            <div className="max-w-3xl mx-auto text-center">
                {/* Badge */}
                <div className="mb-4">
                    <span className="inline-block px-4 py-1 rounded-full text-xs sm:text-sm uppercase tracking-[0.18em] bg-[#fff5f5] text-[#8a7471] border border-[#f2d6d4]">
                        Digital Affirmation Planner • Coming Soon
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

                {/* Short hero description */}
                <p className="text-base sm:text-lg font-sans mb-8 leading-relaxed mx-auto">
                    A digital affirmation planner that helps you grow through what’s real, using a
                    unique balance of daily and weekly affirmations designed for both self-awareness
                    and progress.
                </p>

                {/* Divider */}
                <div className="w-16 h-[2px] bg-[#f2d6d4] mx-auto mb-10" />
            </div>

            {/* BODY SECTIONS */}
            <div className="max-w-3xl mx-auto space-y-10 text-sm sm:text-base font-sans">
                {/* Why This Exists */}
                <section>
                    <h3 className="text-lg sm:text-xl font-semibold mb-3">
                        Why This Exists
                    </h3>
                    <p className="mb-3">
                        Most affirmations only tell you to “think positive.” That can feel fake or
                        frustrating when your day isn’t easy or your mind doesn’t believe the words yet.
                    </p>
                    <p>
                        Saramatic was created for people who want something deeper — a system that
                        recognizes both the uplifting and the uncomfortable parts of self-growth. It gives
                        you structure, reflection, and space to actually work through what you feel, not
                        bypass it.
                    </p>
                </section>

                {/* Two Kinds of Affirmations */}
                <section>
                    <h3 className="text-lg sm:text-xl font-semibold mb-3">
                        Two Kinds of Affirmations
                    </h3>

                    <p className="mb-3">
                        Each week and day are connected through two core practices:
                    </p>

                    <p className="mb-3">
                        <span className="font-semibold">✴️ The Weekly Focus (Shadow Affirmation):</span>{" "}
                        Each week begins with a single affirmation that reflects a real-life challenge —
                        something many of us quietly struggle with, like impatience, self-doubt, or the
                        pressure to be perfect. It’s called a <em>Shadow Affirmation</em> because it brings
                        what’s usually unspoken into the open. It’s not negative — it’s honest. This weekly
                        focus anchors your mindset so you can gently confront the pattern and grow from it.
                    </p>

                    <p>
                        <span className="font-semibold">☀️ The Daily Practice (Light Affirmation):</span>{" "}
                        Every day introduces a new Light Affirmation — a statement that reframes or
                        complements your weekly focus from a healthier, kinder angle. These daily
                        affirmations help you stay grounded, shift your thinking gradually, and practice
                        new emotional responses in real life.
                    </p>

                    <p className="mt-3 italic">
                        Example Shadow: “I get frustrated when change feels slow — but I’m learning to give
                        myself time.”
                        <br />
                        Example Light: “I can trust that progress is happening, even when I can’t see it yet.”
                    </p>

                    <p className="mt-3">
                        Together, the weekly and daily affirmations build momentum: awareness first, then
                        action — reflection paired with renewal.
                    </p>
                </section>

                {/* Guided Journaling with ChatGPT */}
                <section>
                    <h3 className="text-lg sm:text-xl font-semibold mb-3">
                        Guided Journaling with ChatGPT Prompts
                    </h3>
                    <p className="mb-3">
                        Every day also includes a thoughtful ChatGPT journaling prompt designed to help you
                        process the affirmation more deeply. Instead of repeating a phrase and hoping it
                        sticks, you’ll explore what it really means in your actual life.
                    </p>
                    <p className="italic mb-3">
                        Example Prompt: “What part of this week’s focus felt hardest today? What small sign
                        of progress can you acknowledge right now?”
                    </p>
                    <p>
                        These AI-guided reflections help you connect the dots between what you think, what
                        you feel, and how you grow.
                    </p>
                </section>

                {/* How It Works */}
                <section>
                    <h3 className="text-lg sm:text-xl font-semibold mb-4">
                        How It Works
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-white/70 border border-[#f2d6d4] rounded-xl p-4">
                            <p className="font-semibold mb-1">1. Start your week</p>
                            <p className="text-sm">
                                Read your Shadow Affirmation and gently name what you’re working through.
                            </p>
                            <p className="text-xs mt-2 text-[#8a7471]">
                                What you gain: a clear focus for your inner work.
                            </p>
                        </div>
                        <div className="bg-white/70 border border-[#f2d6d4] rounded-xl p-4">
                            <p className="font-semibold mb-1">2. Read your daily Light Affirmation</p>
                            <p className="text-sm">
                                Each morning, a fresh statement to support and reframe your weekly focus.
                            </p>
                            <p className="text-xs mt-2 text-[#8a7471]">
                                What you gain: steady, realistic motivation that evolves daily.
                            </p>
                        </div>
                        <div className="bg-white/70 border border-[#f2d6d4] rounded-xl p-4">
                            <p className="font-semibold mb-1">3. Use your ChatGPT prompt</p>
                            <p className="text-sm">
                                Spend a few minutes journaling with the prompt to explore your thoughts and
                                feelings.
                            </p>
                            <p className="text-xs mt-2 text-[#8a7471]">
                                What you gain: emotional clarity and self-understanding.
                            </p>
                        </div>
                        <div className="bg-white/70 border border-[#f2d6d4] rounded-xl p-4">
                            <p className="font-semibold mb-1">4. End the week with reflection</p>
                            <p className="text-sm">
                                Look back at how your thoughts and reactions shifted over the week.
                            </p>
                            <p className="text-xs mt-2 text-[#8a7471]">
                                What you gain: proof of progress and insight into what’s changing.
                            </p>
                        </div>
                    </div>
                </section>

                {/* What Makes It Different / The Saramatic Way */}
                <section>
                    <h3 className="text-lg sm:text-xl font-semibold mb-3">
                        What Makes It Different
                    </h3>
                    <ul className="list-disc list-inside space-y-1 mb-4">
                        <li>Realistic affirmations that acknowledge both ease and struggle</li>
                        <li>One weekly focus plus seven fresh daily affirmations</li>
                        <li>Optional AI prompts for deeper journaling</li>
                        <li>Monthly themes that evolve naturally over the year</li>
                        <li>
                            A grounded, supportive tone — no guilt, no toxic positivity, no pressure to
                            “be perfect”
                        </li>
                        <li>Crafted with thought, love, and intentional design — not mass production</li>
                    </ul>

                    <p className="mt-4">
                        <span className="font-semibold">The Saramatic Way</span> is a new approach to
                        affirmations and self-growth — built on honesty, reflection, and emotional balance.
                        Real change doesn’t come from pretending everything’s fine. It comes from meeting
                        yourself where you are — the calm moments, the messy ones, and everything in
                        between — and choosing to grow through them with compassion.
                    </p>

                    <p className="mt-3">
                        Every page of the planner is crafted with thought and love — designed to make
                        self-reflection feel approachable, structured, and human. It’s more than a journal.
                        It’s a daily practice of awareness, acceptance, and authentic growth — one week, one
                        truth, one breakthrough at a time.
                    </p>
                </section>
            </div>

            {/* Why It Works */}
            <section>
                <h3 className="text-lg sm:text-xl font-semibold mb-3">
                    Why It Works
                </h3>

                <p className="mb-3">
                    Saramatic uses emotional contrast — the balance between light and shadow — to create real
                    self-integration. Instead of pretending everything is fine, it teaches your mind and heart to
                    meet reality with honesty, compassion, and courage.
                </p>

                <p>
                    Over time, you don’t just repeat affirmations — you embody them. This is growth that feels
                    grounded, steady, and deeply human.
                </p>
            </section>


            {/* CTA */}
            <div className="max-w-3xl mx-auto text-center mt-14">
                <h3 className="text-2xl sm:text-3xl font-bold mb-3 font-sans">
                    Follow the Journey to Launch
                </h3>
                <p className="text-base sm:text-lg font-sans mb-6">
                    The Saramatic Affirmation Planner is currently in development. Follow Saramatic for
                    updates, behind-the-scenes progress, and launch details.
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
