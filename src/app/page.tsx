"use client";

import { QuantumBackground } from "@/components/QuantumBackground";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { EventInfo } from "@/components/EventInfo";
import { FeatureCards } from "@/components/FeatureCards";
import { About } from "@/components/About";
import { Events } from "@/components/Events";
import { Organizers } from "@/components/Organizers";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#050816] text-[#F8FAFC] selection:bg-[#6D3BFF] selection:text-white overflow-x-hidden">
      {/* Background Quantum Stars, Orbits & Glows */}
      <QuantumBackground />

      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 flex-1 flex flex-col">
        <Hero />
        <EventInfo />
        <FeatureCards />
        <About />
        <Events />
        <Organizers />
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
