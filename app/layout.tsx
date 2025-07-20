import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { StarsBackground } from "./components/ui/stars-background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Logikeon | Convert your idea into reality",
  description: "Logikeon - Convert your idea into reality. Digital solutions, web development, mobile apps, UI/UX design, and more.",
  keywords: [
    "Logikeon", "logikeon", "Logikon", "logikon", "digital solutions", "web development", "mobile apps", "UI/UX design", "startup", "technology", "innovation"
  ],
  openGraph: {
    title: "Logikeon | Convert your idea into reality",
    description: "Logikeon | Convert your idea into reality. Digital solutions, web development, mobile apps, UI/UX design, and more.",
    images: [
      "/openGraph.png"
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Logikeon | Convert your idea into reality",
    description: "Logikeon- Convert your idea into reality. Digital solutions, web development, mobile apps, UI/UX design, and more.",
    images: [
      "/openGraph.png"
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <StarsBackground />
        {children}
      </body>
    </html>
  );
}
