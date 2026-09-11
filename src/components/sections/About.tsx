import * as React from "react";
import { eventInfo } from "../../data/eventInfo";
import { organizers } from "../../data/organizers";
import { Section } from "../layout/Section";

export const About = () => {
  return (
    <Section id="about" className="bg-background pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary tracking-tight text-balance leading-tight">
          Empowering the Next Generation of Quantum Innovators
        </h2>
        
        <p className="text-xl md:text-2xl text-text-secondary leading-relaxed font-medium text-balance">
          {eventInfo.name} is an independent, community-driven event dedicated to quantum education, proudly hosted by {organizers.host}.
        </p>
        
        <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
          As quantum technology evolves from theoretical physics to applied computation, practical knowledge is more critical than ever. This event provides {eventInfo.targetAudience.toLowerCase()} with hands-on experience, expert guidance, and a collaborative environment to explore Qiskit and the frontiers of quantum computing.
        </p>
      </div>
    </Section>
  );
};
