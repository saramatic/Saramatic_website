"use client";

import { useState } from "react";

export default function EmailSignup() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("/api/subscribe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            if (res.ok) {
                setSubmitted(true);
                setEmail("");
            } else {
                alert("Something went wrong. Try again!");
            }
        } catch (err) {
            console.error(err);
            alert("Error submitting form.");
        }
    };

    return (
        <div className="max-w-md mx-auto text-center mt-8">
            <h3 className="text-xl font-bold mb-2 font-sans">Get your free guide</h3>
            <p className="text-sm mb-4 font-sans">
                Enter your email below to receive your 7-Day Glow-Up Freebie.
            </p>

            {submitted ? (
                <p className="text-green-600 font-semibold font-sans">
                    Check your inbox! 🌸 Your guide is on the way.
                </p>
            ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input
                        type="email"
                        placeholder="Your email"
                        required
                        className="border rounded px-4 py-2 w-full text-[#514241] font-sans"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="bg-[#fdc2c1] text-white font-semibold px-4 py-2 rounded-full hover:bg-[#fba7a6] transition"
                    >
                        Send Me the Freebie
                    </button>
                </form>
            )}
        </div>
    );
}
