"use client";

import * as React from "react";
import { Clock, Tag } from "lucide-react";
import { agendaData } from "../data/eventData";

export const Agenda = () => {
  return (
    <section id="agenda" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 border-t border-purple-500/10">
      <div className="mx-auto max-w-5xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1 text-xs font-semibold text-purple-300 bg-purple-950/40 border border-purple-500/30">
            <Clock className="w-3.5 h-3.5 text-[#00F0FF]" />
            <span>Schedule</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Event <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#6D3BFF] to-[#38BDF8]">Agenda</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            A day full of learning, collaboration, and innovation.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-purple-500/30 ml-4 sm:ml-32 md:ml-40 space-y-8">
          {agendaData.map((item, index) => (
            <div key={index} className="relative pl-6 sm:pl-8 group">
              
              {/* Glowing Purple Circular Node */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#6D3BFF] border-2 border-white shadow-[0_0_12px_#6D3BFF] group-hover:scale-125 group-hover:bg-[#00F0FF] group-hover:shadow-[0_0_15px_#00F0FF] transition-all duration-300" />

              {/* Time Label (Desktop on the left of the line, Mobile above) */}
              <div className="sm:absolute sm:-left-36 md:-left-40 sm:top-1 sm:text-right sm:w-28 mb-1 sm:mb-0">
                <span className="inline-block px-2.5 py-1 rounded-md text-xs font-mono font-bold text-[#00F0FF] bg-purple-950/50 border border-purple-500/20">
                  {item.time}
                </span>
              </div>

              {/* Agenda Card */}
              <div className="glass-panel p-5 sm:p-6 rounded-2xl transition-all duration-300 hover:border-purple-400/50 hover:shadow-[0_8px_30px_rgba(109,59,255,0.25)] hover:translate-x-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-200 transition-colors">
                    {item.title}
                  </h3>
                  <span className="self-start sm:self-auto text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-purple-900/40 text-purple-300 border border-purple-500/20">
                    {item.category}
                  </span>
                </div>
                <p className="text-sm text-slate-300 flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <span>{item.speakerOrRole}</span>
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
