import * as React from "react";
import { eventInfo } from "../../data/eventInfo";
import { agenda, SessionType } from "../../data/agenda";
import { Section } from "../layout/Section";

const typeStyles: Record<SessionType, { bg: string; text: string; dot: string; label: string }> = {
  opening: { bg: "bg-primary/10", text: "text-primary", dot: "border-primary", label: "Opening" },
  talk: { bg: "bg-blue-500/10", text: "text-blue-400", dot: "border-blue-500", label: "Talk" },
  workshop: { bg: "bg-purple-500/10", text: "text-purple-400", dot: "border-purple-500", label: "Workshop" },
  networking: { bg: "bg-emerald-500/10", text: "text-emerald-400", dot: "border-emerald-500", label: "Networking" },
  break: { bg: "bg-surface", text: "text-text-secondary", dot: "border-border", label: "Break" },
  closing: { bg: "bg-orange-500/10", text: "text-orange-400", dot: "border-orange-500", label: "Closing" },
};

export const Agenda = () => {
  return (
    <Section id="agenda" className="bg-background py-20 md:py-32">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight mb-6">
          Event Schedule
        </h2>
        <p className="text-lg md:text-xl text-text-secondary font-medium">
          Join us on {eventInfo.date} for a full day of quantum learning.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {agenda.length > 0 ? (
          <div className="relative border-l-2 border-border/50 pl-6 md:pl-12 ml-4 md:ml-0 space-y-12">
            {agenda.map((item) => {
              const style = typeStyles[item.sessionType];
              return (
                <div key={item.id} className="relative group">
                  {/* Timeline dot */}
                  <div className={`absolute -left-[35px] md:-left-[59px] top-1 h-5 w-5 rounded-full border-4 border-background bg-background ring-2 ${style.dot} transition-transform duration-300 group-hover:scale-125 shadow-sm z-10`} />
                  
                  <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 mb-3">
                    {item.time && (
                      <time className="text-base md:text-lg font-semibold text-text-primary min-w-[120px] whitespace-nowrap">
                        {item.time}
                      </time>
                    )}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-xl md:text-2xl font-semibold text-text-primary">
                          {item.title}
                        </h3>
                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${style.bg} ${style.text}`}>
                          {style.label}
                        </span>
                        {item.duration && (
                          <span className="text-xs font-medium text-text-secondary bg-surface px-2.5 py-0.5 rounded-full border border-border">
                            {item.duration}
                          </span>
                        )}
                      </div>
                      
                      {item.description && (
                        <p className="text-text-secondary leading-relaxed mb-4 max-w-2xl">
                          {item.description}
                        </p>
                      )}
                      
                      {item.speaker && (
                        <div className="inline-flex items-center text-sm font-medium text-text-primary bg-surface px-4 py-2 rounded-lg border border-border/50 shadow-sm">
                          <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center mr-3">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                          </div>
                          {item.speaker}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center p-12 md:p-24 rounded-3xl bg-surface border border-border/50 text-center shadow-elevation-1">
            <div className="w-16 h-16 rounded-2xl bg-background border border-border flex items-center justify-center text-primary mb-6 shadow-sm">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-3 tracking-tight">
              Schedule Coming Soon
            </h3>
            <p className="text-text-secondary text-lg max-w-md mx-auto leading-relaxed">
              We are finalizing an exciting lineup of talks, workshops, and networking sessions. 
              Check back soon for the complete {eventInfo.name} agenda!
            </p>
          </div>
        )}
      </div>
    </Section>
  );
};
