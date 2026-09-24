import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Catalyst Crew — Developer Community | Learn • Build • Collaborate • Innovate",
    template: "%s | Catalyst Crew",
  },
  description:
    "Catalyst Crew is a premier developer community for builders, learners and innovators. Discover events, hackathons, projects, challenges and career opportunities.",
  keywords: [
    "developer community",
    "hackathons",
    "coding community India",
    "student builders",
    "Rust",
    "AI agents",
    "open source",
    "tech workshops",
    "catalyst crew",
  ],
  authors: [{ name: "Catalyst Crew Team" }],
  creator: "Catalyst Crew",
  metadataBase: new URL("https://catalystxcrew.in"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://catalystxcrew.in",
    siteName: "Catalyst Crew",
    title: "Catalyst Crew — Developer Community | Learn • Build • Collaborate • Innovate",
    description:
      "A community for developers, builders, innovators and creators who don't just consume technology — they build with it.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Catalyst Crew Developer Community",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Catalyst Crew — Developer Community",
    description: "Learn • Build • Collaborate • Innovate. A builder-first community for developers.",
    creator: "@catalystxcrew",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-brand-cream text-brand-ink antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
