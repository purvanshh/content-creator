import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Melissa Gaglione | Sell, Engage, Succeed",
  description: "Professional expert in business development and personal branding. Building businesses & a personal brand through innovative strategies.",
  keywords: ["personal branding", "business development", "LinkedIn", "sales", "coaching", "B2B"],
  authors: [{ name: "Melissa Gaglione" }],
  openGraph: {
    title: "Melissa Gaglione | Sell, Engage, Succeed",
    description: "Professional expert in business development and personal branding",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden custom-scrollbar`}
      >
        {children}
      </body>
    </html>
  );
}
