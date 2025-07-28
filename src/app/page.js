import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import LeadMagnet from "../components/LeadMagnet";
import Quotes from "../components/Quotes";
import ProductShowcase from "../components/ProductShowcase";
import About from "../components/About";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import Contact from "../components/Contact";



export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-[#fff9f9] text-[#514241]">
        <Hero />
        <Features />
        <LeadMagnet />
        <Quotes />
        <ProductShowcase />
        <About />
        <CallToAction />
        <Contact /> {/* 👈 Contact comes BEFORE the Footer */}
        <Footer />
      </main>
    </>
  );
}

