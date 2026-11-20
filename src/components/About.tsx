"use client";

import * as React from "react";
import Image from "next/image";
import { Cpu, CheckCircle2, Award, Users, Sparkles } from "lucide-react";

export const About = () => {
  const highlights = [
    { title: "Fest Inauguration", desc: "Grand opening of Qiskit Fall Fest 2026" },
    { title: "Guest Lectures", desc: "6-day lecture series by quantum computing pioneers" },
    { title: "Networking", desc: "Direct interactions with mentors & peers" },
    { title: "Open to All", desc: "No prerequisites required to get started" },
  ];

  return (
    <section id="about" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 border-t border-purple-500/10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Showcase (Building & Quantum Orb) */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden glass-panel-glow p-2.5 sm:p-3">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/nri-building.jpg"
                  alt="NRI Institute of Technology Campus"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/40 to-transparent" />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#050816]/85 backdrop-blur-md rounded-xl p-3 border border-purple-500/30 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-900/50 text-[#00F0FF]">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">NRI University Campus</h4>
                    <p className="text-[11px] text-purple-300">Hub of Quantum Innovation & Research</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Accent Floating Mini Qiskit Logo */}
            <div className="absolute -top-6 -right-6 w-24 h-24 sm:w-28 sm:h-28 animate-float">
              <div className="relative w-full h-full rounded-full bg-[#050816]/90 border border-purple-500/40 p-2 shadow-xl shadow-purple-950/70 flex items-center justify-center">
                <Image
                  src="/images/qiskit-logo.png"
                  alt="Qiskit Logo"
                  width={80}
                  height={80}
                  className="object-contain animate-spin-slow"
                />
              </div>
            </div>
          </div>

          {/* Right Column: About Text & Highlights */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 order-1 lg:order-2">
            
            <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-semibold text-purple-300 bg-purple-950/40 border border-purple-500/30">
              <Award className="w-3.5 h-3.5 text-[#00F0FF]" />
              <span>Event Overview</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              About Qiskit Fall Fest{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#6D3BFF] to-[#38BDF8]">
                2026
              </span>
            </h2>

            <p className="text-lg sm:text-xl font-medium text-slate-200 leading-snug">
              A premier platform to learn, build, and explore the possibilities of quantum computing with IBM Qiskit.
            </p>

            <p className="text-base text-slate-300 leading-relaxed">
              Qiskit Fall Fest 2026 brings together students, researchers, developers, and industry experts to share knowledge, build foundational skills, and collaborate on real-world quantum computing challenges. Hosted by Dr. RVR NRI Institute of Technology Deemed to be University, this in-person festival opens doors to the quantum technology revolution for minds of every background.
            </p>

            {/* 4 Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 w-full">
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-purple-950/30 border border-purple-500/20 hover:border-purple-400/40 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#00F0FF] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">{h.title}</h4>
                    <p className="text-xs text-slate-300 mt-0.5">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Callout */}
            <div className="p-4 sm:p-5 rounded-2xl glass-panel border-purple-500/30 flex items-center gap-4 w-full bg-purple-950/20 shadow-lg shadow-black/20">
              <div className="p-3 rounded-xl bg-gradient-to-r from-[#6D3BFF] to-[#315CFF] text-white shrink-0 shadow-md shadow-indigo-500/20">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
                  Be Part of the Quantum Revolution
                </h4>
                <p className="text-xs sm:text-sm text-purple-200/90 leading-relaxed mt-0.5">
                  Connect, learn, and explore the technologies shaping the future of computing.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
