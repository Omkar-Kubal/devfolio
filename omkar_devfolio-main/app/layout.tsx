import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Omkar Kubal - AI-ML Developer",
  description: "AI-ML Developer portfolio - Omkar Kubal | Data Scientist | Machine Learning Engineer",
  icons: {
    icon: "/code.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col items-center justify-center`}
      >
        <Navbar />
        {children}
        <GoogleAnalytics gaId="G-QJKG8N0N7W" />
      </body>
    </html>
  );
}
