import * as React from "react";
import { audienceGroups, requirements } from "../../data/requirements";
import { Section } from "../layout/Section";

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary flex-shrink-0">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const UserIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-text-secondary">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

export const Attendees = () => {
  return (
    <Section id="attendees" className="bg-surface py-20 md:py-32 border-t border-border/50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Who Can Attend Column */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight mb-6">
            Who Can Attend
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed mb-8">
            Qiskit Fall Fest is an inclusive environment. Whether you are writing your first line of code or actively researching quantum algorithms, you belong here.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4">
            {audienceGroups.map((group) => (
              <div 
                key={group.id} 
                className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border shadow-sm hover:border-primary/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center border border-border/50">
                  <UserIcon />
                </div>
                <span className="font-semibold text-text-primary text-sm md:text-base">
                  {group.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Requirements Column */}
        <div className="flex flex-col h-full justify-center">
          <div className="p-8 md:p-10 rounded-3xl bg-background border border-border shadow-elevation-1">
            <h3 className="text-2xl font-bold text-text-primary mb-8">
              Event Requirements
            </h3>
            
            <div className="space-y-8">
              {/* Required */}
              <div>
                <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4 flex items-center">
                  <div className="w-2 h-2 rounded-full bg-orange-500 mr-3"></div>
                  Required
                </h4>
                <ul className="space-y-3 pl-5">
                  {requirements.required.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1"><CheckIcon /></div>
                      <span className="text-text-secondary leading-relaxed font-medium">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="h-px w-full bg-border/50"></div>

              {/* Recommended */}
              <div>
                <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4 flex items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                  Recommended
                </h4>
                <ul className="space-y-3 pl-5">
                  {requirements.recommended.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1"><CheckIcon /></div>
                      <span className="text-text-secondary leading-relaxed font-medium">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </Section>
  );
};
