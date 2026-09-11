import * as React from "react";
import Image from "next/image";
import { speakers } from "../../data/speakers";
import { Section } from "../layout/Section";

export const Speakers = () => {
  return (
    <Section id="speakers" className="bg-surface py-20 md:py-32 border-t border-border/50">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight mb-6">
          Featured Speakers
        </h2>
        <p className="text-lg md:text-xl text-text-secondary font-medium">
          Learn from experts and community leaders in quantum computing.
        </p>
      </div>

      {speakers.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {speakers.map((speaker) => (
            <div 
              key={speaker.id}
              className="group relative flex flex-col items-center p-6 sm:p-8 rounded-2xl bg-background border border-border hover:border-primary/50 shadow-elevation-1 hover:shadow-elevation-2 transition-all duration-300"
            >
              {/* Photo or Initials */}
              <div className="w-32 h-32 rounded-full bg-surface border-4 border-background ring-1 ring-border group-hover:ring-primary/50 transition-colors flex items-center justify-center text-4xl font-bold text-white mb-6 overflow-hidden relative shadow-sm">
                {speaker.photoUrl ? (
                  <Image 
                    src={speaker.photoUrl} 
                    alt={speaker.name || "Event profile photo"} 
                    fill 
                    className="object-cover" 
                    sizes="(max-width: 768px) 128px, 128px"
                  />
                ) : (
                  <span className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary to-secondary">
                    {speaker.name.replace(/Dr\.\s*/, '').charAt(0)}
                  </span>
                )}
              </div>
              
              <h3 className="text-2xl font-bold text-text-primary text-center mb-1">
                {speaker.name}
              </h3>
              
              <p className="text-primary font-medium mb-3 text-center">
                {speaker.role}
              </p>
              
              {speaker.organization && speaker.organization !== "TBD" && (
                <p className="text-text-secondary text-sm text-center mb-4 leading-relaxed line-clamp-2">
                  {speaker.organization}
                </p>
              )}

              {speaker.talkTitle && (
                <div className="mt-auto pt-4 w-full border-t border-border/50">
                  <p className="text-xs text-text-secondary uppercase tracking-wider font-semibold text-center mb-1">Session</p>
                  <p className="text-sm text-text-primary font-medium text-center text-balance">
                    {speaker.talkTitle}
                  </p>
                </div>
              )}

              {speaker.linkedinUrl && (
                <a 
                  href={speaker.linkedinUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 p-2 rounded-full bg-surface/80 backdrop-blur-sm border border-border text-text-secondary hover:text-[#0a66c2] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label={`View ${speaker.name}'s LinkedIn profile`}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              )}
            </div>
          ))}
          
          {/* "More coming soon" card */}
          <div className="flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl bg-surface/50 border-2 border-dashed border-border/50 text-center opacity-80 hover:opacity-100 transition-opacity">
            <div className="w-16 h-16 rounded-full bg-background border border-border flex items-center justify-center mb-6 shadow-sm text-text-secondary">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" y1="8" x2="19" y2="14"></line><line x1="22" y1="11" x2="16" y2="11"></line></svg>
            </div>
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              More Speakers
            </h3>
            <p className="text-text-secondary font-medium">
              Lineup announcements coming soon
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center p-12 md:p-24 rounded-3xl bg-background border border-border/50 text-center shadow-elevation-1 max-w-4xl mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-surface border border-border flex items-center justify-center text-primary mb-6 shadow-sm">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-3 tracking-tight">
            Speaker Lineup Coming Soon
          </h3>
          <p className="text-text-secondary text-lg max-w-md mx-auto leading-relaxed">
            We are currently confirming our speakers for the event. Stay tuned for updates on our industry experts and academic leaders!
          </p>
        </div>
      )}
    </Section>
  );
};
