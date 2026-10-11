import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SplashScreen } from "@/components/ui/SplashScreen";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
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
  metadataBase: new URL("https://www.catalystxcrew.in"),
  alternates: {
    canonical: "https://www.catalystxcrew.in",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.catalystxcrew.in",
    siteName: "Catalyst Crew",
    title: "Catalyst Crew — Developer Community | Learn • Build • Collaborate • Innovate",
    description:
      "A community for developers, builders, innovators and creators who don't just consume technology — they build with it.",
    images: [
      {
        url: "/catalyst-hack-banner.jpg",
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
    images: ["/catalyst-hack-banner.jpg"],
    creator: "@catalystxcrew",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.catalystxcrew.in/#organization",
      name: "Catalyst Crew",
      url: "https://www.catalystxcrew.in",
      logo: "https://www.catalystxcrew.in/catalyst-crew-logo.png",
      sameAs: [
        "https://github.com/Catalystcrewcreators1",
        "https://twitter.com/catalystxcrew",
        "https://linkedin.com/company/catalystxcrew",
      ],
      description: "Premier developer community for builders, learners and innovators.",
    },
    {
      "@type": "WebSite",
      "@id": "https://www.catalystxcrew.in/#website",
      url: "https://www.catalystxcrew.in",
      name: "Catalyst Crew",
      publisher: { "@id": "https://www.catalystxcrew.in/#organization" },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bricolage.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-brand-cream text-brand-ink antialiased">
        <SplashScreen />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
