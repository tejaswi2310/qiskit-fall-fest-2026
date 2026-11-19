"use client";

import * as React from "react";
import { Mic, Users, Lightbulb } from "lucide-react";

export const FeatureCards = () => {
  const features = [
    {
      id: "talks",
      title: "Guest Lectures",
      description: "Insights from quantum computing leaders and researchers.",
      icon: Mic,
      iconBg: "bg-blue-900/50 border-blue-500/40 text-[#38BDF8]",
    },
    {
      id: "networking",
      title: "Networking",
      description: "Connect with peers, mentors and industry experts.",
      icon: Users,
      iconBg: "bg-cyan-900/50 border-cyan-500/40 text-[#00F0FF]",
    },
    {
      id: "open",
      title: "Open to All",
      description: "Students, researchers, developers and enthusiasts.",
      icon: Lightbulb,
      iconBg: "bg-amber-900/40 border-amber-500/40 text-[#FBBF24]",
    },
  ];

  return (
    <section className="relative z-10 pt-4 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* 3 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative rounded-2xl glass-panel p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_35px_rgba(109,59,255,0.3)] hover:border-purple-400/50 flex flex-col justify-start bg-[#070B1E]/60 border border-purple-500/20"
              >
                {/* Icon in themed square */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${item.iconBg} mb-5 shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-200 transition-colors mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Motivational Divider: QUANTUM IDEAS TODAY FOR A SMARTER TOMORROW */}
        <div className="flex items-center justify-center gap-4 text-center my-6">
          <div className="h-[1px] flex-1 max-w-[140px] sm:max-w-[200px] bg-gradient-to-r from-transparent via-purple-500/40 to-purple-400/80" />
          <span className="text-[11px] sm:text-xs font-mono tracking-[0.25em] text-purple-300/80 uppercase font-semibold">
            Quantum Ideas Today for a Smarter Tomorrow
          </span>
          <div className="h-[1px] flex-1 max-w-[140px] sm:max-w-[200px] bg-gradient-to-l from-transparent via-purple-500/40 to-purple-400/80" />
        </div>

      </div>
    </section>
  );
};
