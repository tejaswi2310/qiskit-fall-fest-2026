"use client";

import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { faqs } from "../../data/faqs";
import { Section } from "../layout/Section";

const AccordionItem = ({
  question,
  answer,
  isOpen,
  onClick,
  id,
}: {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
  id: string;
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(isOpen ? undefined : 0);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          // Add a small requestAnimationFrame delay to avoid synchronous setState inside ResizeObserver 
          requestAnimationFrame(() => {
            setHeight(entry.target.scrollHeight);
          });
        }
      });
      resizeObserver.observe(contentRef.current);
      return () => resizeObserver.disconnect();
    } else {
      // Defer this to avoid the synchronous state update warning if desired, or let css transitions handle height=0 
      requestAnimationFrame(() => {
        setHeight(0);
      });
    }
  }, [isOpen]);

  return (
    <div className="border border-border/50 bg-background rounded-2xl overflow-hidden mb-4 shadow-sm hover:border-border transition-colors">
      <button
        id={`accordion-button-${id}`}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${id}`}
        onClick={onClick}
        className="w-full flex items-center justify-between p-4 sm:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
      >
        <span className="text-base sm:text-lg font-semibold text-text-primary pr-6 sm:pr-8">{question}</span>
        <span
          className={`shrink-0 w-8 h-8 rounded-full bg-surface border border-border flex items-center justify-center text-text-secondary transition-transform duration-300 ${
            isOpen ? "rotate-180 text-primary border-primary/30 bg-primary/5" : ""
          }`}
          aria-hidden="true"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </span>
      </button>
      
      <div
        id={`accordion-content-${id}`}
        role="region"
        aria-labelledby={`accordion-button-${id}`}
        className="transition-[height] duration-300 ease-in-out overflow-hidden"
        style={{ height: height !== undefined ? height : "auto" }}
      >
        <div ref={contentRef} className="px-4 sm:px-6 pb-4 sm:pb-6 text-text-secondary leading-relaxed text-sm sm:text-base">
          {answer}
        </div>
      </div>
    </div>
  );
};

export const FAQ = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <Section id="faq" className="bg-surface py-20 md:py-32 border-t border-border/50">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight mb-6">
          Frequently Asked Questions
        </h2>
        <p className="text-lg md:text-xl text-text-secondary font-medium">
          Everything you need to know about joining Qiskit Fall Fest 2026.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => {
          const id = `faq-${index}`;
          const isOpen = openId === id;
          
          return (
            <AccordionItem
              key={id}
              id={id}
              question={faq.question}
              answer={faq.answer}
              isOpen={isOpen}
              onClick={() => setOpenId(isOpen ? null : id)}
            />
          );
        })}
      </div>
    </Section>
  );
};
