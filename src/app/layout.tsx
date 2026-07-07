import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bastard-software.com"),
  title: {
    default: "Bastard Software — Personalized Oncology, Engineered",
    template: "%s — Bastard Software",
  },
  description:
    "Bastard Software builds the on-premise AI and GPU-simulation pipeline for personalized cancer treatment: clinical trial matching, tumor DNA interpretation with a clinical copilot, and a GPU-accelerated digital twin for testing immunotherapies and mRNA neoantigen vaccines in-silico.",
  keywords: [
    "precision oncology",
    "AI cancer treatment",
    "clinical trial matching",
    "tumor DNA analysis",
    "digital twin oncology",
    "mRNA neoantigen vaccine",
    "GPU simulation",
    "NVIDIA Inception",
  ],
  openGraph: {
    title: "Bastard Software — Personalized Oncology, Engineered",
    description:
      "On-premise AI and GPU simulation for personalized cancer treatment — trial matching, tumor genome interpretation, and a digital twin for immunotherapy and mRNA vaccine design.",
    url: "https://bastard-software.com",
    siteName: "Bastard Software",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
