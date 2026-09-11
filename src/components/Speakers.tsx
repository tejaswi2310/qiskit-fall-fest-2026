"use client";

import * as React from "react";
import Image from "next/image";
import { Mic2, Sparkles } from "lucide-react";
import { speakersData } from "../data/eventData";

export const Speakers = () => {
  return (
    <section id="speakers" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 border-t border-purple-500/10">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1 text-xs font-semibold text-purple-300 bg-purple-950/40 border border-purple-500/30">
            <Mic2 className="w-3.5 h-3.5 text-[#00F0FF]" />
            <span>Featured Minds</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Distinguished <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#6D3BFF] to-[#38BDF8]">Speakers</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Gain direct insights from trailblazers in quantum algorithm design, research, and Qiskit development.
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakersData.map((speaker) => (
            <div
              key={speaker.id}
              className="group relative rounded-2xl glass-panel p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:border-purple-400/60 hover:shadow-[0_12px_35px_rgba(109,59,255,0.3)]"
            >
              {/* Speaker Avatar */}
              <div className="relative w-28 h-28 mb-5 rounded-full p-1 bg-gradient-to-tr from-[#6D3BFF] to-[#00F0FF] shadow-[0_0_20px_rgba(109,59,255,0.35)] group-hover:scale-105 transition-transform duration-300">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={speaker.avatarUrl}
                    alt={speaker.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <h3 className="text-lg font-bold text-white group-hover:text-purple-200 transition-colors">
                {speaker.name}
              </h3>

              <p className="text-xs font-semibold text-[#00F0FF] mt-1">
                {speaker.designation}
              </p>

              <p className="text-xs text-slate-400 mt-0.5">
                {speaker.organization}
              </p>

              {/* Topic Badge */}
              <div className="mt-4 pt-4 border-t border-purple-500/15 w-full">
                <span className="inline-flex items-center gap-1.5 text-[11px] text-purple-200 bg-purple-950/40 border border-purple-500/30 rounded-lg px-2.5 py-1.5 leading-tight">
                  <Sparkles className="w-3 h-3 text-[#38BDF8] shrink-0" />
                  <span>{speaker.topic}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
