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
      <body className="min-h-screen flex flex-col bg-cream text-ink selection:bg-paper selection:text-ink">
        <SmoothScrollProvider>
          <SiteHeader />
          <PageTransition>
            <div className="flex-1 flex flex-col">
              <div className="flex-1">{children}</div>
              <Footer />
            </div>
          </PageTransition>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
