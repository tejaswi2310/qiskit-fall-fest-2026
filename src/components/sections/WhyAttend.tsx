import * as React from "react";
import { Section } from "../layout/Section";

const benefits = [
  {
    title: "Learn",
    description: "Master foundational quantum computing concepts through expert-led sessions designed for all skill levels.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
    ),
    accent: "bg-blue-500/10 text-blue-400 border-blue-500/20"
  },
  {
    title: "Build",
    description: "Gain hands-on experience writing and executing quantum circuits using the open-source Qiskit SDK.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
    ),
    accent: "bg-purple-500/10 text-purple-400 border-purple-500/20"
  },
  {
    title: "Experiment",
    description: "Run real quantum algorithms and explore noise, error mitigation, and hardware constraints in real-time.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10 2v7.31L2.07 19.24C1.3 20.35 2.09 22 3.48 22h17.04c1.39 0 2.18-1.65 1.41-2.76L14 9.31V2"/><path d="M8.5 2h7"/><path d="M14 9.31V6h-4v3.31"/></svg>
    ),
    accent: "bg-pink-500/10 text-pink-400 border-pink-500/20"
  },
  {
    title: "Connect",
    description: "Network with local researchers, educators, and industry professionals driving the quantum revolution.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ),
    accent: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
  },
  {
    title: "Discover",
    description: "Uncover new career pathways and research opportunities in the rapidly expanding quantum industry.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
    ),
    accent: "bg-teal-500/10 text-teal-400 border-teal-500/20"
  },
  {
    title: "Participate",
    description: "Join hackathons and collaborative challenges to solve problems alongside the global Qiskit community.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
    ),
    accent: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
  }
];

export const WhyAttend = () => {
  return (
    <Section id="why-attend" className="bg-surface py-20 md:py-32 relative overflow-hidden">
      {/* Decorative gradient for editorial feel */}
      <div className="absolute top-0 right-0 w-full max-w-2xl h-[500px] bg-gradient-to-bl from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-3xl mb-16 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight mb-6">
          Why Attend?
        </h2>
        <p className="text-xl md:text-2xl text-text-secondary leading-relaxed font-medium">
          Immerse yourself in a transformative experience designed to accelerate your journey into quantum technology.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
         {benefits.map((benefit) => (
           <div 
             key={benefit.title} 
             className="group relative p-8 rounded-2xl bg-background border border-border hover:border-border/80 transition-all duration-300 shadow-elevation-1 hover:shadow-elevation-2 flex flex-col h-full overflow-hidden"
           >
             {/* Subtle interaction background */}
             <div className="absolute inset-0 bg-gradient-to-br from-surface to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
             
             <div className={`h-14 w-14 rounded-xl flex items-center justify-center mb-8 border transition-transform duration-500 group-hover:-translate-y-1 ${benefit.accent} shadow-sm`}>
               {benefit.icon}
             </div>
             
             <h3 className="text-2xl font-semibold text-text-primary mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">
               {benefit.title}
             </h3>
             
             <p className="text-text-secondary leading-relaxed text-lg">
               {benefit.description}
             </p>
           </div>
         ))}
      </div>
    </Section>
  );
};
