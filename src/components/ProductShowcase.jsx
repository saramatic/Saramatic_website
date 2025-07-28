"use client";

export default function ProductShowcase() {
    return (
        <section className="bg-[#fff9f9] py-16 px-6 text-[#514241]">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6 font-sans">Your Glow-Up Toolkit</h2>
                <p className="text-lg mb-12 font-sans max-w-2xl mx-auto">
                    Digital tools and downloads to help you reset, track, and glow—mind, body, and spirit.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* Product 1 */}
                    <div className="bg-white rounded-2xl shadow-md p-6 text-center flex flex-col items-center">
                        <span className="text-3xl mb-4">📒</span>
                        <h3 className="text-xl font-bold mb-2 font-sans">Glow-Up Freebie</h3>
                        <p className="text-sm text-[#514241] mb-4 font-sans">
                            A 7-day kickstart to reset and find your rhythm.
                        </p>
                        <button className="bg-[#fdc2c1] text-white font-semibold px-4 py-2 rounded-full hover:bg-[#fba7a6] transition">
                            Download Free
                        </button>
                    </div>

                    {/* Product 2 */}
                    <div className="bg-white rounded-2xl shadow-md p-6 text-center flex flex-col items-center">
                        <span className="text-3xl mb-4">🧠</span>
                        <h3 className="text-xl font-bold mb-2 font-sans">AI Motivation Prompts</h3>
                        <p className="text-sm text-[#514241] mb-4 font-sans">
                            Daily questions and reflections to guide your journey with an AI buddy by your side.
                        </p>
                        <button className="bg-[#fdc2c1] text-white font-semibold px-4 py-2 rounded-full hover:bg-[#fba7a6] transition">
                            Coming Soon
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
