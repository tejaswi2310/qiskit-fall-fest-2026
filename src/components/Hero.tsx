"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { eventData } from "../data/eventData";
import { QuantumSphere } from "./QuantumSphere";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-6 pb-16 md:pt-10 md:pb-24 min-h-[85vh] flex items-center">
      {/* Dynamic Quantum Wave Stream Backdrop */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-35">
        <svg
          className="absolute bottom-0 left-0 w-full h-[320px]"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,192L60,181.3C120,171,240,149,360,165.3C480,181,600,235,720,240C840,245,960,203,1080,170.7C1200,139,1320,117,1380,106.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            fill="url(#waveGrad1)"
            fillOpacity="0.15"
          />
          <path
            d="M0,256L48,240C96,224,192,192,288,192C384,192,480,224,576,234.7C672,245,768,235,864,208C960,181,1056,139,1152,138.7C1248,139,1344,181,1392,202.7L1440,224"
            stroke="url(#waveStroke1)"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />
          <defs>
            <linearGradient id="waveGrad1" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#6D3BFF" />
              <stop offset="50%" stopColor="#315CFF" />
              <stop offset="100%" stopColor="#00F0FF" />
            </linearGradient>
            <linearGradient id="waveStroke1" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#A855F7" />
              <stop offset="50%" stopColor="#6D3BFF" />
              <stop offset="100%" stopColor="#00F0FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative">
          
          {/* Left Column: Hero Content (Foreground z-20) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-5 md:space-y-6 relative z-20 max-w-xl">


            {/* Main Heading & Sub-caption */}
            <div className="space-y-1 w-full text-center">
              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Qiskit Fall Fest{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#6D3BFF] to-[#38BDF8] drop-shadow-[0_0_40px_rgba(109,59,255,0.5)]">
                  2026
                </span>
              </h1>
              <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-purple-300/90 pt-1 text-center">
                Weekly Celebrations
              </p>
            </div>

            {/* Subtitle / Tagline */}
            <p className="text-base sm:text-lg md:text-xl font-semibold text-slate-100 tracking-wide flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#00F0FF] shrink-0" />
              <span>{eventData.tagline}</span>
            </p>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-300 max-w-lg leading-relaxed">
              {eventData.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                href="https://forms.gle/yk7iLvmrkzb1MuZf9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full px-8 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-[#6D3BFF] to-[#315CFF] shadow-[0_0_30px_rgba(109,59,255,0.6)] hover:shadow-[0_0_45px_rgba(109,59,255,0.9)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 border border-purple-400/40 group"
              >
                Register Now
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                href="#events"
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-medium text-slate-200 bg-[#0B1026]/80 hover:bg-purple-950/40 border border-purple-500/30 hover:border-purple-400/60 shadow-[0_0_15px_rgba(109,59,255,0.15)] hover:shadow-[0_0_25px_rgba(109,59,255,0.3)] transition-all duration-200"
              >
                Explore Events
              </a>
            </div>

          </div>

          {/* Right Column: College Photograph with Animated Logo Behind its Top-Left Corner */}
          <div className="lg:col-span-6 relative w-full flex items-center justify-center mt-6 lg:mt-0">
            
            {/* 
              Animated Quantum Logo placed HIGHER & FURTHER LEFT behind the top-left corner of the college image:
              - Shifted higher (-top-32 sm:-top-36 lg:-top-44) and left (-left-16 sm:-left-20 lg:-left-28)
              - Prominently visible in the open sky while layering behind the top-left corner of the building card
            */}
            <div className="absolute -top-32 -left-16 sm:-top-36 sm:-left-20 lg:-top-44 lg:-left-28 z-0 pointer-events-none select-none">
              <QuantumSphere />
            </div>

            {/* University Tagline Quote in Top Right over the sky (z-20) */}
            <div className="absolute top-3 right-3 sm:top-4 sm:right-6 z-20 text-right pointer-events-none select-none bg-[#050816]/70 backdrop-blur-md px-3 py-1.5 rounded-xl border border-purple-500/25 shadow-lg">
              <p className="text-xs sm:text-sm font-serif italic text-slate-100 tracking-wide drop-shadow-md">
                “Innovating Today
              </p>
              <p className="text-xs sm:text-sm font-serif italic text-slate-100 tracking-wide drop-shadow-md">
                for a Brighter Tomorrow”
              </p>
              <div className="w-12 h-0.5 bg-gradient-to-r from-[#6D3BFF] to-[#00F0FF] ml-auto mt-1 rounded-full shadow-[0_0_8px_#00F0FF]" />
            </div>

            {/* Bright, Crisp College Photograph Container (in Foreground z-10, layered on top of the logo) */}
            <div className="relative z-10 w-full aspect-[16/11] sm:aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl shadow-black/70 border border-purple-500/30 group">
              
              {/* Actual Supplied Photograph with Daylight Brightness */}
              <Image
                src="/images/nri-building.jpg"
                alt="Dr. RVR NRI Institute of Technology Campus Building"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center brightness-[1.12] contrast-[1.05] saturate-[1.08] transition-transform duration-700 group-hover:scale-105"
                priority
              />

              {/* Gentle bottom edge fade only, leaving the building facade & NRI signage 100% bright and clear */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#050816]/80 to-transparent pointer-events-none" />

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
