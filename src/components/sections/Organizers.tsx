import Image from "next/image";
import { organizerTeam, organizers } from "../../data/organizers";
import { Section } from "../layout/Section";

export const Organizers = () => {
  return (
    <Section id="organizers" className="bg-background py-20 md:py-32 border-t border-border/50">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight mb-6">
          Meet the Organizers
        </h2>
        <p className="text-lg md:text-xl text-text-secondary font-medium">
          The local team bringing Qiskit Fall Fest 2026 to you.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {organizerTeam.map((organizer) => (
          <div 
            key={organizer.id}
            className="flex flex-col items-center p-6 sm:p-8 rounded-2xl bg-surface border border-border shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Avatar */}
            <div className="w-24 h-24 rounded-full bg-surface border-2 border-border flex items-center justify-center text-3xl font-bold text-white mb-5 overflow-hidden relative">
              {organizer.photoUrl ? (
                <Image 
                  src={organizer.photoUrl} 
                  alt={organizer.name || "Event profile photo"} 
                  fill 
                  className="object-cover" 
                  sizes="96px"
                />
              ) : (
                <span className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary to-secondary">
                  {organizer.name.replace(/Dr\.\s*/, '').charAt(0)}
                </span>
              )}
            </div>
            
            <h3 className="text-xl font-bold text-text-primary text-center mb-1">
              {organizer.name}
            </h3>
            
            <p className="text-sm font-semibold text-primary uppercase tracking-wider text-center mb-3">
              {organizer.role}
            </p>
            
            {organizer.affiliation && (
              <p className="text-text-secondary text-sm text-center mb-4 leading-relaxed line-clamp-3">
                {organizer.affiliation}
              </p>
            )}

            {organizer.contact && (
              <div className="mt-auto pt-4 border-t border-border/50 w-full text-center">
                <p className="text-xs text-text-secondary mb-1">Contact</p>
                <p className="text-sm font-medium text-text-primary">{organizer.contact}</p>
              </div>
            )}
          </div>
        ))}
        
      </div>
      
      {/* Disclaimer */}
      <div className="max-w-3xl mx-auto mt-16 text-center">
        <p className="text-sm text-text-secondary italic">
          This Qiskit Fall Fest event is independently organized by {organizers.host} and is not an officially hosted IBM event unless explicitly stated.
        </p>
      </div>
    </Section>
  );
};
