import * as React from "react";
import { eventInfo } from "../../data/eventInfo";
import { Section } from "../layout/Section";
import { Button } from "../ui/Button";

export const Registration = () => {
  const isRegistrationOpen = Boolean(eventInfo.registrationUrl);

  return (
    <Section id="register" className="bg-background py-20 md:py-32">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 via-surface to-background border border-primary/20 shadow-elevation-2 p-8 md:p-16 text-center">
          
          {/* Subtle background glow effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-primary/20 blur-[100px] pointer-events-none" />

          <h2 className="relative text-3xl md:text-5xl font-bold text-text-primary tracking-tight mb-6">
            Ready to explore Quantum?
          </h2>
          
          <p className="relative text-lg md:text-xl text-text-secondary font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
            Join us on {eventInfo.date} for {eventInfo.name} at {eventInfo.location.split(',')[0]}. Secure your spot today for this in-person campus event.
          </p>

          <div className="relative flex flex-col items-center gap-6">
            {isRegistrationOpen ? (
              <Button asChild className="text-lg px-10 py-6 min-w-[240px] shadow-elevation-2 hover:shadow-elevation-3 hover:-translate-y-1 transition-all duration-300">
                <a href={eventInfo.registrationUrl} target="_blank" rel="noopener noreferrer">
                  Register Now
                </a>
              </Button>
            ) : (
              <Button disabled className="text-lg px-10 py-6 min-w-[240px] opacity-70 cursor-not-allowed">
                Registration Opening Soon
              </Button>
            )}

            <div className="text-sm text-text-secondary max-w-xl mx-auto bg-background/50 p-4 rounded-xl border border-border/50">
              <span className="font-semibold text-text-primary">Please note:</span> All registrations, permissions, and photo releases are handled securely through the official Qiskit event page. We do not collect personal information directly on this site.
            </div>
          </div>
          
        </div>
      </div>
    </Section>
  );
};
