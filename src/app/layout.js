// app/layout.jsx

import "./globals.css";
import { Nunito_Sans } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://www.saramatic.com"), // keep or update when live
  title: "Saramatic | The Saramatic Way",
  description:
    "A new approach to affirmations and self-growth. Weekly Shadow Affirmations, daily Light Affirmations, and guided ChatGPT journaling — The Saramatic Way.",
  keywords: [
    "affirmations",
    "Shadow affirmations",
    "Light affirmations",
    "self-growth",
    "self-reflection",
    "journaling",
    "ChatGPT prompts",
    "Saramatic",
    "The Saramatic Way",
  ],
  openGraph: {
    title: "Saramatic | The Saramatic Way",
    description:
      "Affirmations that finally make sense — weekly Shadow focus, daily Light encouragement, and guided ChatGPT journaling. Coming soon.",
    url: "https://www.saramatic.com",
    siteName: "Saramatic",
    images: [
      {
        url: "/social-preview.png",
        width: 1200,
