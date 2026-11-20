import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Mail, MapPin } from "lucide-react";
import { eventData } from "../data/eventData";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Events", href: "#events" },
    { name: "Organizers", href: "#organizers" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <footer className="relative z-10 bg-[#03050e] border-t border-purple-500/20 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-purple-500/15">
          
          {/* Brand & Host Info (approx 5 cols) */}
          <div className="md:col-span-5 space-y-5">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="bg-white rounded-lg p-1.5 flex items-center justify-center shadow-md">
                <Image
                  src="/images/nri-logo.png"
                  alt="NRI University"
                  width={42}
                  height={28}
                  className="h-6 w-auto object-contain"
                />
              </div>
              <div className="flex items-baseline gap-1 font-bold">
                <span className="text-white text-lg sm:text-xl">Qiskit Fall Fest</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] to-[#38BDF8] text-lg sm:text-xl">
                  2026
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#00F0FF] font-medium tracking-wide">
              {eventData.tagline}
            </p>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              A university quantum festival organized by Dr.RVR NRIIT Quantum Innovation Cell.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>Dr. RVR NRI Institute of Technology, Deemed to be University, Agiripalli, AP, India</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>adilakshmi@nriit.edu.in</span>
              </p>
            </div>
          </div>

          {/* Quick Navigation Links (approx 4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-widest text-purple-300 font-bold">
              Event Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 hover:text-[#00F0FF] transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social & Back to top (approx 3 cols) */}
          <div className="md:col-span-3 space-y-5 flex flex-col items-start md:items-end justify-between">
            <div className="space-y-3 w-full md:text-right">
              <h4 className="text-xs uppercase font-mono tracking-widest text-purple-300 font-bold">
                Connect With Us
              </h4>
              <div className="flex items-center gap-3 md:justify-end">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-white hover:border-purple-400 hover:shadow-[0_0_15px_rgba(109,59,255,0.4)] transition-all"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z"/></svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-white hover:border-purple-400 hover:shadow-[0_0_15px_rgba(109,59,255,0.4)] transition-all"
                >
                  <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-white hover:border-purple-400 hover:shadow-[0_0_15px_rgba(109,59,255,0.4)] transition-all"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-white hover:border-purple-400 hover:shadow-[0_0_15px_rgba(109,59,255,0.4)] transition-all"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-semibold text-purple-300 hover:text-[#00F0FF] p-2.5 rounded-xl glass-panel hover:border-purple-400/50 transition-all cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Qiskit Fall Fest. All rights reserved.</p>
          <p className="text-purple-300/80">
            Dr. RVR NRI Institute of Technology Deemed to be University
          </p>
        </div>
      </div>
    </footer>
  );
};
