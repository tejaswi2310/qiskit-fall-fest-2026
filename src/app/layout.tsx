import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://qiskit-fall-fest-2026.vercel.app'),
  title: "Qiskit Fall Fest 2026 | Learn • Build • Explore Quantum Computing",
  description: "Official website for Qiskit Fall Fest 2026 hosted by Dr. RVR NRI Institute of Technology Deemed to be University. Guest lecture series, innovation centre inauguration, school project expo, and ideathon.",
  keywords: [
    "Qiskit Fall Fest 2026",
    "quantum computing event",
    "Qiskit event",
    "quantum computing student event",
    "IBM Quantum"
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Qiskit Fall Fest 2026",
    description: "Join us for Qiskit Fall Fest 2026, a quantum computing event featuring learning, building, and exploration with Qiskit.",
    url: '/',
    siteName: "Qiskit Fall Fest 2026",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qiskit Fall Fest 2026",
    description: "Join us for Qiskit Fall Fest 2026, a quantum computing event featuring learning, building, and exploration with Qiskit.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-background text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
