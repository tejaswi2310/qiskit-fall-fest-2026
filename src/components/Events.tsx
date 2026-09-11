"use client";

import * as React from "react";
import { Landmark, Radio, Award, Lightbulb, ArrowRight } from "lucide-react";
import { eventCardsData } from "../data/eventData";

const iconMap = {
  Landmark: Landmark,
  Radio: Radio,
  Award: Award,
  Lightbulb: Lightbulb,
};

export const Events = () => {
  return (
    <section id="events" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1 text-xs font-semibold text-[#00F0FF] bg-[#00F0FF]/10 border border-[#00F0FF]/30">
            <span>Sessions & Tracks</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#6D3BFF] to-[#38BDF8]">Events</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Explore a range of exciting sessions and activities at Qiskit Fall Fest 2026.
          </p>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {eventCardsData.map((event) => {
            const Icon = iconMap[event.iconName];
            return (
              <div
                key={event.id}
                className="group relative rounded-2xl glass-panel-glow p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(109,59,255,0.4)] hover:border-purple-400/60 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-4 rounded-xl bg-purple-950/60 border border-purple-500/40 text-[#00F0FF] shadow-[0_0_20px_rgba(0,240,255,0.25)] group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold text-purple-300 bg-purple-950/40 border border-purple-500/30">
                      {event.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-200 transition-colors mb-3">
                    {event.title}
                  </h3>

                  <p className="text-slate-300 text-base leading-relaxed">
                    {event.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-purple-500/15 flex items-center justify-between text-sm font-semibold text-purple-300 group-hover:text-[#00F0FF] transition-colors">
                  <span>Learn more</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-200" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
