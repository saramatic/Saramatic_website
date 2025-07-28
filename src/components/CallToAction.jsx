import EmailSignup from "../components/Emailsignup";

export default function CallToAction() {
    return (
        <section className="bg-[#fff1f1] py-16 px-6 text-[#514241]">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4 font-sans">
                    Ready to glow up?
                </h2>
                <p className="text-lg mb-6 font-sans">
                    Start your journey today with our free 7-day reset guide.
                </p>

                <EmailSignup />
            </div>
        </section>
    );
}
