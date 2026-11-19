"use client";

import * as React from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { faqData } from "../data/eventData";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const renderAnswer = (text: string) => {
    return (
      <div className="space-y-2">
        {text.split("\n\n").map((paragraph, pIdx) => {
          const parts = paragraph.split(/(\*\*.*?\*\*)/g);
          return (
            <p key={pIdx}>
              {parts.map((part, idx) => {
                if (part.startsWith("**") && part.endsWith("**")) {
                  return (
                    <strong key={idx} className="text-white font-bold">
                      {part.slice(2, -2)}
                    </strong>
                  );
                }
                return part;
              })}
            </p>
          );
        })}
      </div>
    );
  };

  return (
    <section id="faq" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 border-t border-purple-500/10">
      <div className="mx-auto max-w-4xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1 text-xs font-semibold text-purple-300 bg-purple-950/40 border border-purple-500/30">
            <HelpCircle className="w-3.5 h-3.5 text-[#00F0FF]" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#6D3BFF] to-[#38BDF8]">Questions</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Everything you need to know about participation, registration, sessions, and venue.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-300 overflow-hidden border ${
                  isOpen
                    ? "bg-purple-950/40 border-purple-400/60 shadow-[0_0_25px_rgba(109,59,255,0.2)]"
                    : "glass-panel border-purple-500/20 hover:border-purple-500/40"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF] rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <span className={`text-base sm:text-lg font-semibold transition-colors ${
                    isOpen ? "text-[#00F0FF]" : "text-white hover:text-purple-200"
                  }`}>
                    {item.question}
                  </span>
                  <div className={`p-1.5 rounded-full transition-transform duration-300 shrink-0 ml-4 ${
                    isOpen ? "rotate-180 bg-purple-600/40 text-white" : "text-slate-400 bg-purple-950/30"
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-purple-500/15 animate-in fade-in slide-in-from-top-1 duration-200">
                    {renderAnswer(item.answer)}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
