"use client";

import * as React from "react";
import { Calendar, Users } from "lucide-react";
import { eventData } from "../data/eventData";

export const EventInfo = () => {
  return (
    <section className="relative z-20 -mt-4 sm:-mt-8 mb-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="glass-panel-glow rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 transition-all duration-300 border border-purple-500/30 shadow-[0_10px_35px_rgba(5,8,22,0.8)] backdrop-blur-xl bg-[#070B1E]/70">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center divide-y md:divide-y-0 md:divide-x divide-purple-500/20">
            
            {/* Column 1: WHEN (Takes 7 cols for plenty of horizontal space) */}
            <div className="md:col-span-7 flex items-center gap-5 pt-2 md:pt-0 md:pr-8">
              <div className="p-4 rounded-2xl bg-purple-900/40 border border-purple-500/30 text-purple-300 shadow-[0_0_15px_rgba(109,59,255,0.25)] shrink-0 flex items-center justify-center">
                <Calendar className="w-7 h-7 text-[#A78BFA]" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <span className="text-xs uppercase tracking-widest font-bold text-purple-300/90">
                  WHEN
                </span>
                <span className="text-base sm:text-lg font-bold text-white leading-snug whitespace-nowrap">
                  23-11-2026 to 28-11-2026 : Virtual Mode
                </span>
                <div className="flex items-baseline gap-2 flex-wrap sm:flex-nowrap whitespace-nowrap">
                  <span className="text-base sm:text-lg font-bold text-cyan-300 leading-snug">
                    30-11-2026 : Offline
                  </span>
                  <span className="text-sm font-semibold text-slate-200">
                    (Only for In-School Participants)
                  </span>
                </div>
              </div>
            </div>

            {/* Column 2: HOSTED BY (Takes 5 cols) */}
            <div className="md:col-span-5 flex items-center gap-5 pt-6 md:pt-0 md:pl-8">
              <div className="p-4 rounded-2xl bg-purple-900/40 border border-purple-500/30 text-purple-300 shadow-[0_0_15px_rgba(109,59,255,0.25)] shrink-0 flex items-center justify-center">
                <Users className="w-7 h-7 text-[#A78BFA]" />
              </div>
              <div className="flex flex-col space-y-1">
                <span className="text-xs uppercase tracking-widest font-bold text-purple-300/90">
                  HOSTED BY
                </span>
                <span className="text-base sm:text-lg font-bold text-white leading-snug">
                  Dr.RVR NRI Institute of Technology
                </span>
                <span className="text-xs sm:text-sm text-purple-200/80 font-medium">
                  Deemed to be University
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
