"use client";

export default function LeadMagnet() {
    return (
        <section className="bg-[#fdeeee] py-16 px-6 text-[#514241]">
            <div className="max-w-3xl mx-auto text-center rounded-2xl p-10 shadow-md bg-white">

                {/* Title */}
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-sans">
                    The Saramatic Way
                </h2>

                {/* Description */}
                <p className="text-base sm:text-lg font-sans mb-6 leading-relaxed">
                    A new approach to affirmations and self-growth — created with honesty, compassion,
                    and love. <strong>Saramatic</strong> blends weekly reflection, daily encouragement,
                    and gentle journaling prompts to help you grow through what’s real, not just the
                    good moments.
                </p>

                {/* Shadow + Light Explanation */}
                <div className="text-left bg-[#fff9f9] rounded-xl p-6 mb-8 shadow-sm">
                    <h3 className="text-xl font-semibold mb-2 font-sans">✨ What Makes It Different?</h3>
                    <p className="font-sans mb-4">
                        At the heart of The Saramatic Way are two types of affirmations:
                    </p>

                    <p className="font-sans mb-3">
                        <strong>• Shadow Affirmations (Weekly):</strong>
                        One honest truth each week that acknowledges a real-life challenge — like
                        impatience, self-doubt, or overwhelm. Not negative. Not forced. Just real.
                    </p>

                    <p className="font-sans mb-4">
                        <strong>• Light Affirmations (Daily):</strong>
                        A new affirmation every day that helps you gently reframe the weekly challenge,
                        build confidence, and create steady emotional progress.
                    </p>

                    <p className="font-sans">
                        Together, they create a grounded rhythm: awareness for the week,
                        encouragement for the day.
                    </p>
                </div>

                {/* ChatGPT Prompts */}
                <div className="text-left bg-[#fff9f9] rounded-xl p-6 mb-8 shadow-sm">
                    <h3 className="text-xl font-semibold mb-2 font-sans">📝 Guided ChatGPT Prompts</h3>
                    <p className="font-sans">
                        Every day includes a simple reflective journaling prompt you can use with
                        ChatGPT to explore your thoughts more deeply. These prompts help you connect
                        the affirmation to your real life — creating clarity, self-awareness, and
                        emotional growth.
                    </p>
                </div>

                {/* Coming Soon */}
                <h3 className="text-2xl font-bold mb-2 font-sans">Coming Soon</h3>
                <p className="text-base sm:text-lg font-sans mb-6">
                    The Saramatic Affirmation Planner is currently in development.
                    Join the interest list to receive updates and be the first to know when it launches.
                </p>

                {/* Email Form */}
                <form className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
                    <label htmlFor="email" className="sr-only">Email address</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Your email address"
                        className="px-4 py-2 rounded-lg border border-[#fdc2c1] focus:outline-none focus:ring-2 focus:ring-[#fdc2c1] w-full sm:w-1/2 font-sans"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-[#fdc2c1] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#f5a9a7] transition-all font-sans"
                    >
                        Join the List
                    </button>
                </form>

                <p className="text-sm mt-4 text-[#6f5a58] font-sans">
                    You’ll receive updates as the project unfolds. No spam — ever.
                </p>

            </div>
        </section>
    );
}
