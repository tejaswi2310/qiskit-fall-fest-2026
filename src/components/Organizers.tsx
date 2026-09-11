"use client";

import * as React from "react";
import { Users, Phone, Building2 } from "lucide-react";
import { organizerTeam } from "../data/organizers";

export const Organizers = () => {
  return (
    <section id="organizers" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 border-t border-purple-500/10">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1 text-xs font-semibold text-purple-300 bg-purple-950/40 border border-purple-500/30 shadow-[0_0_15px_rgba(109,59,255,0.2)]">
            <Building2 className="w-3.5 h-3.5 text-[#00F0FF]" />
            <span>Event Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#6D3BFF] to-[#38BDF8]">Organizers</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            The dedicated local leadership team bringing Qiskit Fall Fest 2026 to life.
          </p>
        </div>

        {/* 8 Organizers Grid (4 in Row 1, 4 in Row 2) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {organizerTeam.map((organizer) => (
            <div
              key={organizer.id}
              className="flex flex-col items-center justify-between p-6 sm:p-7 rounded-2xl bg-[#0B1026]/90 border border-purple-500/20 shadow-lg shadow-black/40 hover:border-purple-400/50 hover:-translate-y-1.5 hover:shadow-[0_12px_35px_rgba(109,59,255,0.25)] transition-all duration-300 h-full min-h-[380px]"
            >
              <div className="flex flex-col items-center w-full">
                {/* Large Initial Letter Circle Avatar matching screenshot */}
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#4F46E5] to-[#3B82F6] flex items-center justify-center text-4xl font-black text-white shadow-xl shadow-blue-500/20 mb-5 border-2 border-indigo-400/30">
                  {organizer.initial || organizer.name.charAt(0)}
                </div>

                {/* Organizer Name */}
                <h3 className="text-lg sm:text-xl font-bold text-white text-center mb-1 leading-snug">
                  {organizer.name}
                </h3>

                {/* Role */}
                <p className="text-xs sm:text-sm font-bold text-[#818CF8] uppercase tracking-wider text-center mb-3">
                  {organizer.role}
                </p>

                {/* Affiliation / Status */}
                <p className="text-xs sm:text-sm text-slate-400 text-center font-medium leading-relaxed">
                  {organizer.affiliation || "Dr. RVR NRI INSTITUTE OF TECHNOLOGY - DEEMED TO BE UNIVERSITY"}
                </p>
              </div>

              {/* Contact Info (if available, e.g. Lead Organizer) */}
              {organizer.contact ? (
                <div className="mt-6 pt-4 border-t border-purple-500/20 w-full text-center">
                  <p className="text-xs text-slate-400 mb-1 flex items-center justify-center gap-1">
                    <Phone className="w-3 h-3 text-purple-400" />
                    Contact
                  </p>
                  <a
                    href={`tel:${organizer.contact.replace(/\s+/g, '')}`}
                    className="text-sm font-semibold text-white hover:text-[#00F0FF] transition-colors"
                  >
                    {organizer.contact}
                  </a>
                </div>
              ) : (
                <div className="mt-4" />
              )}
            </div>
          ))}

          {/* Join the Team / Volunteer Card (from Screenshot 3) */}
          <div className="sm:col-span-2 lg:col-span-4 flex flex-col sm:flex-row items-center justify-between p-6 sm:p-8 rounded-2xl bg-[#0B1026]/40 border-2 border-dashed border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 mt-2 gap-4 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-purple-950/60 border border-purple-500/40 flex items-center justify-center text-[#00F0FF] shadow-inner shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-0.5">Join the Team</h4>
                <p className="text-xs sm:text-sm text-slate-400">
                  Interested in student volunteering or event coordination? Volunteer opportunities coming soon.
                </p>
              </div>
            </div>

            <a
              href="https://chat.whatsapp.com/K1tctagGxx1ELdq5TT1Fju"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-xs sm:text-sm font-semibold text-purple-200 bg-purple-950/60 hover:bg-purple-900/50 border border-purple-500/40 hover:border-purple-400/80 transition-all shrink-0"
            >
              Get Involved
            </a>
          </div>

        </div>



      </div>
    </section>
  );
};
