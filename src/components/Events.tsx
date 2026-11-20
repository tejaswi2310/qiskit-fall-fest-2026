"use client";

import * as React from "react";
import Image from "next/image";
import {
  Presentation,
  Landmark,
  Lightbulb,
  Sparkles,
  Calendar,
  MapPin,
  UserCheck,
  Globe,
  GraduationCap,
  Clock,
  BookOpen
} from "lucide-react";
import { eventCardsData, guestLecturesSchedule } from "../data/eventData";

const iconMap = {
  Presentation: Presentation,
  Landmark: Landmark,
  Lightbulb: Lightbulb,
  Sparkles: Sparkles,
};

export const Events = () => {
  return (
    <section id="events" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 border-t border-purple-500/10">
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
            Explore our curated lineup of quantum ceremonies, lectures, ideathons, and exhibitions.
          </p>
        </div>

        {/* Event Cards Container */}
        <div className="space-y-8">

          {/* 1. FIRST EVENT: Inauguration of Qiskit Fall Fest 2026 */}
          {(() => {
            const inaugEvent = eventCardsData.find((e) => e.id === "inauguration") || eventCardsData[0];
            const Icon = iconMap[inaugEvent.iconName] || Landmark;

            return (
              <div
                key={inaugEvent.id}
                className="group relative rounded-2xl glass-panel-glow p-6 sm:p-8 md:p-10 transition-all duration-300 hover:shadow-[0_15px_40px_rgba(109,59,255,0.35)] hover:border-purple-400/60 flex flex-col"
              >
                {/* Event Card Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-4 rounded-xl bg-purple-950/60 border border-purple-500/40 text-[#00F0FF] shadow-[0_0_20px_rgba(0,240,255,0.25)] group-hover:scale-105 transition-transform duration-300 shrink-0">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#A78BFA]">Event 01</span>
                        <span className="text-slate-600">•</span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-semibold text-emerald-300 bg-emerald-950/40 border border-emerald-500/30">
                          <Globe className="w-3 h-3 text-emerald-400" />
                          Virtual Mode
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-purple-200 transition-colors mt-1">
                        {inaugEvent.title}
                      </h3>
                    </div>
                  </div>

                  <span className="self-start sm:self-auto px-3.5 py-1.5 rounded-full text-xs font-semibold text-purple-200 bg-purple-950/60 border border-purple-500/40 shadow-sm">
                    {inaugEvent.tag}
                  </span>
                </div>

                {/* Event Description */}
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-4xl">
                  {inaugEvent.description}
                </p>

                {/* Key Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-purple-500/20">
                  {/* Date */}
                  {inaugEvent.date && (
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-[#0B1026]/70 border border-purple-500/20">
                      <div className="p-2 rounded-lg bg-purple-900/40 text-[#00F0FF] shrink-0">
                        <Calendar className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-slate-400 font-semibold block text-xs uppercase tracking-wider">Date</span>
                        <span className="text-white font-bold text-sm sm:text-base">{inaugEvent.date}</span>
                      </div>
                    </div>
                  )}

                  {/* Venue */}
                  {inaugEvent.venue && (
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-[#0B1026]/70 border border-purple-500/20">
                      <div className="p-2 rounded-lg bg-purple-900/40 text-[#00F0FF] shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-slate-400 font-semibold block text-xs uppercase tracking-wider">Venue</span>
                        <span className="text-white font-bold text-sm sm:text-base leading-snug">{inaugEvent.venue}</span>
                      </div>
                    </div>
                  )}

                  {/* Chief Guest */}
                  {inaugEvent.chiefGuest && (
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-[#0B1026]/70 border border-purple-500/20">
                      <div className="p-2 rounded-lg bg-purple-900/40 text-emerald-400 shrink-0">
                        <UserCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-slate-400 font-semibold block text-xs uppercase tracking-wider">Chief Guest</span>
                        <span className="text-white font-bold text-sm sm:text-base">{inaugEvent.chiefGuest.name}</span>
                        <span className="text-xs text-purple-300 block mt-0.5 leading-snug">
                          {inaugEvent.chiefGuest.designation}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            );
          })()}

          {/* 2. SECOND EVENT: Guest Lectures (Featured Schedule Card) */}
          {(() => {
            const guestEvent = eventCardsData.find((e) => e.id === "guest-lectures") || eventCardsData[1];
            const Icon = iconMap[guestEvent.iconName] || Presentation;

            return (
              <div
                key={guestEvent.id}
                className="group relative rounded-2xl glass-panel-glow p-6 sm:p-8 md:p-10 transition-all duration-300 hover:shadow-[0_15px_40px_rgba(109,59,255,0.35)] hover:border-purple-400/60 flex flex-col"
              >
                {/* Event Card Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-4 rounded-xl bg-purple-950/60 border border-purple-500/40 text-[#00F0FF] shadow-[0_0_20px_rgba(0,240,255,0.25)] group-hover:scale-105 transition-transform duration-300 shrink-0">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#A78BFA]">Event 02</span>
                        <span className="text-slate-600">•</span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-semibold text-emerald-300 bg-emerald-950/40 border border-emerald-500/30">
                          <Globe className="w-3 h-3 text-emerald-400" />
                          Virtual Only (Online)
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-purple-200 transition-colors mt-1">
                        {guestEvent.title}
                      </h3>
                    </div>
                  </div>

                  <span className="self-start sm:self-auto px-3.5 py-1.5 rounded-full text-xs font-semibold text-purple-200 bg-purple-950/60 border border-purple-500/40 shadow-sm">
                    {guestEvent.tag}
                  </span>
                </div>

                {/* Event Description */}
                <p className="text-slate-300 text-base leading-relaxed mb-8 max-w-4xl">
                  {guestEvent.description}
                </p>

                {/* Subheading for Schedule */}
                <div className="flex items-center justify-between border-b border-purple-500/20 pb-4 mb-6">
                  <div className="flex items-center gap-2 text-white font-semibold text-base sm:text-lg">
                    <BookOpen className="w-5 h-5 text-[#00F0FF]" />
                    <span>Six-Day Online Guest Lecture Programme Schedule</span>
                  </div>
                  <span className="text-xs text-purple-300/80 font-medium hidden sm:inline-block">
                    23-11-2026 to 28-11-2026
                  </span>
                </div>

                {/* 6-Day Lecture Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {guestLecturesSchedule.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col justify-between p-4 sm:p-5 rounded-xl bg-[#0B1026]/80 border border-purple-500/20 hover:border-purple-400/50 hover:bg-[#0E1535]/90 transition-all duration-200 shadow-sm"
                    >
                      <div>
                        {/* Day & Date Badge */}
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="px-2 py-0.5 rounded text-[11px] font-bold tracking-wider uppercase bg-purple-900/50 text-purple-200 border border-purple-500/30">
                            {item.day}
                          </span>
                          <span className="text-xs text-slate-400 font-medium">
                            {item.date}
                          </span>
                        </div>

                        {/* Speaker Photo & Name */}
                        <div className="flex items-center gap-3 mb-3">
                          <div className="relative w-12 h-12 rounded-full overflow-hidden border border-purple-400/40 shrink-0 bg-purple-950/60">
                            <Image
                              src={item.photoUrl}
                              alt={item.speaker}
                              fill
                              className="object-cover"
                              sizes="48px"
                            />
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-sm font-bold text-white truncate leading-tight">
                              {item.speaker}
                            </h4>
                            <p className="text-[11px] text-purple-300/90 leading-tight line-clamp-2 mt-0.5">
                              {item.designation}
                            </p>
                          </div>
                        </div>

                        {/* Timing */}
                        <div className="flex items-center gap-1.5 text-xs text-slate-300 mb-2 font-medium">
                          <Clock className="w-3.5 h-3.5 text-[#00F0FF] shrink-0" />
                          <span>{item.time}</span>
                        </div>

                        {/* Topic */}
                        <div className="pt-2 border-t border-purple-500/15">
                          <p className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 mb-0.5">Topic</p>
                          <p className="text-xs sm:text-sm font-semibold text-white leading-snug line-clamp-3">
                            {item.topic}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            );
          })()}

          {/* EVENTS 3 & 4: Ideathon & Project Expo in a 2-Column Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventCardsData.slice(2).map((event, index) => {
              const Icon = iconMap[event.iconName] || Lightbulb;
              const eventNumber = `0${index + 3}`;

              return (
                <div
                  key={event.id}
                  className="group relative rounded-2xl glass-panel-glow p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgba(109,59,255,0.35)] hover:border-purple-400/60 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Icon & Tag */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-4 rounded-xl bg-purple-950/60 border border-purple-500/40 text-[#00F0FF] shadow-[0_0_20px_rgba(0,240,255,0.25)] group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold text-purple-300 bg-purple-950/40 border border-purple-500/30">
                        {event.tag}
                      </span>
                    </div>

                    {/* Step / Event Number Indicator */}
                    <div className="text-xs font-bold uppercase tracking-wider text-[#A78BFA] mb-1">
                      Event {eventNumber}
                    </div>

                    {/* Event Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-200 transition-colors mb-3">
                      {event.title}
                    </h3>

                    {/* Event Description */}
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                      {event.description}
                    </p>
                  </div>

                  {/* Event Details Section */}
                  <div className="pt-5 border-t border-purple-500/15 space-y-3">

                    {/* Date */}
                    {event.date && (
                      <div className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <Calendar className="w-4 h-4 text-[#00F0FF] shrink-0 mt-0.5" />
                        <div>
                          <span className="text-slate-400 font-medium block text-[11px] uppercase tracking-wider">Date</span>
                          <span className="text-white font-semibold">{event.date}</span>
                        </div>
                      </div>
                    )}

                    {/* Mode (Virtual / Online) */}
                    {event.mode && (
                      <div className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <Globe className="w-4 h-4 text-[#00F0FF] shrink-0 mt-0.5" />
                        <div>
                          <span className="text-slate-400 font-medium block text-[11px] uppercase tracking-wider">Mode</span>
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-cyan-950/60 text-cyan-300 border border-cyan-500/40 mt-0.5">
                            {event.mode}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Eligibility Restriction */}
                    {event.eligibility && (
                      <div className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <GraduationCap className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-slate-400 font-medium block text-[11px] uppercase tracking-wider">Eligibility</span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-bold bg-amber-950/60 text-amber-300 border border-amber-500/40 mt-0.5">
                            {event.eligibility}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Venue */}
                    {event.venue && (
                      <div className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <MapPin className="w-4 h-4 text-[#00F0FF] shrink-0 mt-0.5" />
                        <div>
                          <span className="text-slate-400 font-medium block text-[11px] uppercase tracking-wider">Venue</span>
                          <span className="text-slate-200 font-medium leading-snug block">{event.venue}</span>
                        </div>
                      </div>
                    )}

                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};