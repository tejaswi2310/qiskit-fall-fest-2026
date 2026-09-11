"use client";

import * as React from "react";
import { Calendar, Users } from "lucide-react";
import { eventData } from "../data/eventData";

export const EventInfo = () => {
  return (
    <section className="relative z-20 -mt-4 sm:-mt-8 mb-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="glass-panel-glow rounded-2xl md:rounded-3xl p-6 sm:p-7 md:p-8 transition-all duration-300 border border-purple-500/30 shadow-[0_10px_35px_rgba(5,8,22,0.8)] backdrop-blur-xl bg-[#070B1E]/70">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-purple-500/20">
            
            {/* Column 1: WHEN */}
            <div className="flex items-center gap-5 pt-3 md:pt-0 md:pr-6">
              <div className="p-3.5 rounded-2xl bg-purple-900/40 border border-purple-500/30 text-purple-300 shadow-[0_0_15px_rgba(109,59,255,0.25)] shrink-0 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-[#A78BFA]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] uppercase tracking-widest font-bold text-purple-300/90 mb-1">
                  WHEN
                </span>
                <span className="text-base sm:text-lg font-bold text-white leading-snug">
                  {eventData.date}
                </span>
                <span className="text-xs sm:text-sm text-slate-300 mt-0.5 font-medium">
                  {eventData.time}
                </span>
              </div>
            </div>

            {/* Column 2: HOSTED BY */}
            <div className="flex items-center gap-5 pt-5 md:pt-0 md:pl-10">
              <div className="p-3.5 rounded-2xl bg-purple-900/40 border border-purple-500/30 text-purple-300 shadow-[0_0_15px_rgba(109,59,255,0.25)] shrink-0 flex items-center justify-center">
                <Users className="w-6 h-6 text-[#A78BFA]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] uppercase tracking-widest font-bold text-purple-300/90 mb-1">
                  HOSTED BY
                </span>
                <span className="text-sm sm:text-base font-bold text-white leading-snug">
                  Dr.RVR NRI Institute of Technology
                </span>
                <span className="text-xs sm:text-sm text-purple-200/80 mt-0.5 font-medium">
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
