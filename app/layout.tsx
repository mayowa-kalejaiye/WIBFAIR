import type { Metadata } from "next";
import { Instrument_Serif, Geist } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/layout/SiteHeader";
import SmoothScrollProvider from "@/components/motion/SmoothScrollProvider";
import PageTransition from "@/components/layout/PageTransition";
import Footer from "@/components/Footer";

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bunmialabi.com"),
  title: "Bunmi Alabi — Conversations worth having",
  description: "Stories, conversations and everything in between. Host of Just A Chat.",
  openGraph: {
    title: "Bunmi Alabi — Conversations worth having",
    description: "Mental Health Counselor, Author of Couples' Waiting Room, Convener of Unbroken — Oasis Counseling, Just A Chat.",
    images: ["/convener.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bunmi Alabi — Conversations worth having",
    images: ["/convener.jpg"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrument.variable} ${geist.variable} font-sans antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-white text-ink selection:bg-blush selection:text-ink overflow-x-hidden">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-ink text-white px-4 py-2 z-[100]">
          Skip to content
        </a>
        <SmoothScrollProvider>
          <SiteHeader />
          <PageTransition>
            <div className="flex-1 flex flex-col">
              <main id="main-content" className="flex-1 focus:outline-none" tabIndex={-1}>
                {children}
              </main>
              <Footer />
            </div>
          </PageTransition>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
