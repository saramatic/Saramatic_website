// components/Hero.jsx
export default function Hero() {
    return (
        <section className="w-full py-16 sm:py-20 px-4 sm:px-6 text-center flex flex-col items-center bg-[#fff9f9]">
            <h1 className="text-3xl sm:text-5xl font-bold mb-4 max-w-2xl sm:max-w-3xl leading-snug sm:leading-tight font-sans">
                Welcome to Your Glow-Up Journey
            </h1>
            <p className="text-base sm:text-xl mb-8 max-w-md sm:max-w-xl text-[#514241] font-sans">
                Heal your mind, body, and spirit—with structure, softness, and support that feels like you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <button className="bg-[#fdc2c1] hover:bg-[#f9b1af] text-white font-semibold py-3 px-6 rounded-2xl transition w-full sm:w-auto">
                    Download Free Guide
                </button>
                <button className="border border-[#514241] text-[#514241] font-semibold py-3 px-6 rounded-2xl hover:bg-[#fcecec] transition w-full sm:w-auto">
                    Learn More
                </button>
            </div>
        </section>
    );
}
