import * as React from "react";
import { workshops, Workshop } from "../../data/workshops";
import { Section } from "../layout/Section";
import { Button } from "../ui/Button";

const WorkshopCard = ({ workshop }: { workshop: Workshop }) => {
  return (
    <div className="relative group rounded-3xl bg-surface border border-border overflow-hidden shadow-elevation-1 hover:shadow-elevation-2 transition-all duration-300">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
        
        {/* Left Column: Core Info */}
        <div className="md:col-span-7 p-6 sm:p-8 md:p-12 md:pr-8 flex flex-col h-full border-b md:border-b-0 md:border-r border-border/50">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-primary/10 text-primary uppercase tracking-wider border border-primary/20">
              {workshop.level}
            </span>
            <span className="inline-flex items-center text-sm font-medium text-text-secondary">
              <svg width="14" height="14" className="mr-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              {workshop.duration}
            </span>
          </div>
          
          <h3 className="text-3xl font-bold text-text-primary tracking-tight mb-4 group-hover:text-primary transition-colors">
            {workshop.title}
          </h3>
          
          <p className="text-lg text-text-secondary leading-relaxed mb-8 flex-grow">
            {workshop.description}
          </p>
          
          {workshop.ctaUrl && (
            <div className="mt-auto pt-6">
              <Button asChild>
                <a href={workshop.ctaUrl} target="_blank" rel="noopener noreferrer">
                  {workshop.ctaText || "Register for Workshop"}
                </a>
              </Button>
            </div>
          )}
        </div>
        
        {/* Right Column: Details */}
        <div className="md:col-span-5 p-6 sm:p-8 md:p-12 bg-background/50 flex flex-col gap-6 md:gap-8">
          
          {workshop.learningOutcomes.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4 flex items-center">
                <svg width="16" height="16" className="mr-2 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                Learning Outcomes
              </h4>
              <ul className="space-y-2">
                {workshop.learningOutcomes.map((outcome, idx) => (
                  <li key={idx} className="text-sm text-text-secondary flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {workshop.prerequisites.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-3 flex items-center">
                <svg width="16" height="16" className="mr-2 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                Prerequisites
              </h4>
              <p className="text-sm text-text-secondary leading-relaxed">
                {workshop.prerequisites.join(" • ")}
              </p>
            </div>
          )}

          {workshop.toolsRequired.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-3 flex items-center">
                <svg width="16" height="16" className="mr-2 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>
                Tools Required
              </h4>
              <p className="text-sm text-text-secondary leading-relaxed">
                {workshop.toolsRequired.join(" • ")}
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export const Workshops = () => {
  return (
    <Section id="workshops" className="bg-background py-20 md:py-32">
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
          Hands-On Sessions
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight mb-6">
          Technical Workshops
        </h2>
        <p className="text-xl text-text-secondary leading-relaxed font-medium">
          Dive deep into quantum algorithms, hardware execution, and Qiskit development with our expert-led, interactive workshop sessions.
        </p>
      </div>

      {workshops.length > 0 ? (
        <div className="flex flex-col gap-8 max-w-6xl mx-auto">
          {workshops.map((workshop) => (
            <WorkshopCard key={workshop.id} workshop={workshop} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center p-12 md:p-24 rounded-3xl bg-surface border border-border/50 text-center shadow-elevation-1 max-w-4xl mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-background border border-border flex items-center justify-center text-primary mb-6 shadow-sm">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-3 tracking-tight">
            Workshop Tracks Coming Soon
          </h3>
          <p className="text-text-secondary text-lg max-w-lg mx-auto leading-relaxed mb-6">
            We are preparing an exciting curriculum covering everything from quantum fundamentals to advanced circuit design.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="px-3 py-1.5 rounded-md bg-background border border-border text-sm text-text-secondary">Quantum Fundamentals</span>
            <span className="px-3 py-1.5 rounded-md bg-background border border-border text-sm text-text-secondary">Qiskit Runtime</span>
            <span className="px-3 py-1.5 rounded-md bg-background border border-border text-sm text-text-secondary">Hardware Execution</span>
          </div>
        </div>
      )}
    </Section>
  );
};
