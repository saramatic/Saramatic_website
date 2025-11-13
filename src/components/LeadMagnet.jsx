"use client";

import Link from "next/link";

export default function LeadMagnet() {
    return (
        <section className="bg-gradient-to-b from-[#fff9f9] via-[#fdeeee] to-[#fbe3e3] py-20 px-6 text-[#514241]">
            <div className="max-w-4xl mx-auto">

                {/* Title + Tagline */}
                <div className="text-center mb-10">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-3 font-sans tracking-tight">
                        The Saramatic Way
                    </h2>
                    <span className="inline-block px-4 py-1 rounded-full text-xs sm:text-sm uppercase tracking-[0.18em] bg-[#fff5f5] border border-[#f2d6d4] text-[#8a7471]">
                        Affirmations that finally make sense
                    </span>
                    <p className="text-base sm:text-lg font-sans mt-6 leading-relaxed max-w-2xl mx-auto">
                        A gentle, structured way to work with your thoughts and feelings.
                        Saramatic blends weekly reflection, daily encouragement, and guided journaling
                        so you can grow through what’s real—not just the easy days.
                    </p>
                </div>

                {/* Shadow + Light Card */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-[#f2d6d4] p-6 sm:p-8 mb-8">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-4 font-sans">
                        What Makes It Different
                    </h3>
                    <p className="font-sans mb-4">
                        At the heart of <strong>The Saramatic Way</strong> are two kinds of affirmations that
                        work together:
                    </p>
                    <div className="space-y-4">
                        <div>
                            <p className="font-sans mb-1">
                                <span className="font-semibold">Shadow Affirmations (Weekly):</span>{" "}
                                One honest focus for the week that names a real-life challenge—impatience,
                                self-doubt, overwhelm, pressure to be perfect. They’re not negative, just real.
                            </p>
                        </div>
                        <div>
                            <p className="font-sans">
                                <span className="font-semibold">Light Affirmations (Daily):</span>{" "}
                                A new affirmation each day that gently reframes that weekly focus, helping you
                                build confidence, self-compassion, and steady emotional progress over time.
                            </p>
                        </div>
                    </div>
                    <p className="font-sans mt-4">
                        Together, they create a grounded rhythm: awareness for the week, encouragement for the day—so
                        you’re not just repeating pretty words, you’re actually processing what you feel.
                    </p>
                </div>

                {/* ChatGPT Card */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-[#f2d6d4] p-6 sm:p-8 mb-10">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-3 font-sans">
                        Guided ChatGPT Prompts
                    </h3>
                    <p className="font-sans mb-3">
                        Each day includes a simple journaling prompt you can use with ChatGPT to explore the
                        affirmation more deeply. These prompts help you:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm sm:text-base font-sans">
                        <li>Connect the words on the page to what’s actually happening in your life</li>
                        <li>Notice patterns in your thinking and reactions</li>
                        <li>Turn insight into small, doable shifts over time</li>
                    </ul>
                </div>

                {/* Coming Soon + CTA */}
                <div className="text-center">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-3 font-sans">
                        Coming Soon
                    </h3>
                    <p className="text-base sm:text-lg font-sans mb-6 max-w-xl mx-auto">
                        The Saramatic Affirmation Planner is currently in development.
                        Follow along for updates, behind-the-scenes peeks, and launch details.
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
            </div>
        </section>
    );
}
