"use client";

export default function LeadMagnet() {
    return (
        <section className="bg-[#fdeeee] py-16 px-6 text-[#514241]">
            <div className="max-w-4xl mx-auto text-center rounded-2xl p-10 shadow-md bg-white">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-sans">Start Your Glow-Up</h2>
                <p className="text-base sm:text-lg font-sans mb-6">
                    Download your <strong>free 7-Day Glow-Up Reset</strong> to begin your transformation with gentle structure, reflection, and self-love.
                </p>
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
                        Get the Free Reset
                    </button>
                </form>
            </div>
        </section>
    );
}
