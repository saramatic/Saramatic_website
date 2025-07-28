// app/about/page.jsx


export const metadata = {
    title: "About | Saramatic",
    description: "Learn about Saramatic's mission to empower women 30+ through real glow-ups, habit-building, and emotional healing."
};

export default function AboutPage() {
    return (
        <section className="bg-[#fff9f9] text-[#514241] py-16 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-6 font-sans">About Saramatic</h1>
                <p className="text-lg font-sans mb-8 max-w-3xl mx-auto">
                    Saramatic was born out of a deep desire to help women feel seen, supported, and celebrated—especially those who feel like they’ve fallen behind, burned out, or simply forgotten themselves in the chaos of life.
                </p>
                <p className="text-lg font-sans mb-8 max-w-3xl mx-auto">
                    We speak to the woman who’s felt invisible. The one who’s cared for everyone else, held things together, and quietly wondered: “When do I get to come alive again?”
                </p>
                <p className="text-lg font-sans mb-8 max-w-3xl mx-auto">
                    At Saramatic, we believe in healing over hustle. In glow-ups that feel grounded. In tracking progress not for vanity, but for celebration. We embrace structure without shame. Beauty without the filters. Growth without the grind.
                </p>
                <p className="text-lg font-sans mb-8 max-w-3xl mx-auto">
                    Through Notion templates, AI-assisted tools, daily rituals, and raw encouragement—we help women reconnect with their bodies, their energy, and their worth. Whether you’re journaling through grief, rebuilding habits after burnout, or just wanting to see yourself again in the mirror… you’re not too late. You’re just getting started.
                </p>

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <img
                        src="/workoutathome.jpg"
                        alt="Glow-up journey photo 1\"
                        className="rounded-xl shadow-md w-full h-auto"
                    />
                    <img
                        src="/journaling.jpg"
                        alt="Glow-up journey photo 2"
                        className="rounded-xl shadow-md w-full h-auto"
                    />
                </div>

                <p className="text-lg font-sans mt-12 max-w-3xl mx-auto">
                    Saramatic is for the woman who whispers, "I want this for me."
                    And we’re here to whisper back: "Yes. You can. And you don’t have to do it alone."
                </p>
            </div>
        </section>
    );
}
