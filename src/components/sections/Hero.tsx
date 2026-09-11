import * as React from "react";
import Image from "next/image";
import { eventInfo } from "../../data/eventInfo";
import { organizers } from "../../data/organizers";
import { Section } from "../layout/Section";
import { Button } from "../ui/Button";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-24 sm:pt-12 sm:pb-28 md:pt-16 md:pb-36 flex items-center min-h-[85vh] w-full">
      {/* Decorative background gradients & Grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-primary/15 rounded-full blur-[100px] md:blur-[120px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] opacity-40 pointer-events-none" />

      {/* Desktop: Very Large NRI Logo placed at the FULL LEFT SIDE of the interface page */}
      <div className="hidden lg:block absolute top-6 xl:top-8 left-4 sm:left-6 md:left-8 lg:left-10 xl:left-14 2xl:left-16 z-20">
        <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-elevation-3 border border-white/10 backdrop-blur-xs transition-transform duration-300 hover:scale-105">
          <Image
            src="/images/nri-logo.png"
            alt="NRI Institute of Technology"
            width={340}
            height={252}
            className="w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 h-auto object-contain"
            priority
          />
        </div>
      </div>

      {/* Desktop: Rotating Qiskit Logo on Right Side of the interface page */}
      <div className="hidden lg:block absolute top-12 sm:top-16 lg:top-20 xl:top-24 right-4 sm:right-6 md:right-8 lg:right-10 xl:right-14 2xl:right-16 z-20 pointer-events-none">
        <div className="relative animate-float">
          <div className="absolute inset-0 rounded-full bg-primary/25 blur-2xl scale-125" />
          <Image
            src="/images/qiskit-logo.png"
            alt="Qiskit Logo"
            width={360}
            height={360}
            className="relative w-52 h-52 sm:w-60 sm:h-60 lg:w-72 lg:h-72 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 object-contain animate-spin-slow drop-shadow-[0_0_40px_rgba(107,78,255,0.5)]"
            priority
          />
        </div>
      </div>

      {/* Main Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center justify-center w-full">
        {/* Mobile/Tablet: Top Row below Header with Large NRI logo on left & Large Rotating Qiskit logo on right */}
        <div className="w-full flex items-center justify-between mb-8 sm:mb-10 lg:hidden z-20">
          <div className="bg-white rounded-xl p-3 shadow-elevation-2 shrink-0">
            <Image
              src="/images/nri-logo.png"
              alt="NRI Institute of Technology"
              width={240}
              height={178}
              className="w-36 sm:w-44 md:w-52 h-auto object-contain"
              priority
            />
          </div>
          <div className="relative animate-float shrink-0">
            <div className="absolute inset-0 rounded-full bg-primary/25 blur-lg scale-110" />
            <Image
              src="/images/qiskit-logo.png"
              alt="Qiskit Logo"
              width={160}
              height={160}
              className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 object-contain animate-spin-slow drop-shadow-[0_0_20px_rgba(107,78,255,0.45)]"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col items-center text-center space-y-6 md:space-y-8 max-w-3xl xl:max-w-4xl mx-auto w-full pt-4 lg:pt-8 animate-in fade-in slide-in-from-bottom-4 duration-700">

          {/* Status Badge */}
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary shadow-elevation-1">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
            Offline Event • {eventInfo.format}
          </div>

          {/* Primary Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary text-balance leading-tight px-2">
            Qiskit Fall Fest <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">2026</span>
          </h1>

          {/* Supporting Message */}
          <p className="text-xl md:text-2xl text-text-primary font-medium tracking-wide">
            Learn • Build • Explore Quantum Computing
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-text-secondary max-w-2xl text-balance mt-2">
            The premier quantum computing event for {eventInfo.targetAudience.toLowerCase()}.
            Whether you are a student, researcher, or developer, join us to explore the frontiers of quantum technology.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto pt-6">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href={eventInfo.registrationUrl} target="_blank" rel="noopener noreferrer">
                Register Now
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild className="w-full sm:w-auto">
              <a href="#agenda">Explore Agenda</a>
            </Button>
          </div>

          {/* Event Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 pt-10 mt-10 md:pt-14 md:mt-14 border-t border-border w-full max-w-4xl text-left bg-surface/30 p-5 sm:p-6 md:p-8 rounded-2xl backdrop-blur-sm shadow-elevation-1">

            <div className="flex flex-col">
              <span className="text-sm text-text-secondary font-medium uppercase tracking-wider mb-1 flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                When
              </span>
              <span className="text-base md:text-lg text-text-primary font-semibold">{eventInfo.date}</span>
              <span className="text-sm text-text-secondary mt-0.5">{eventInfo.time}</span>
            </div>

            <div className="flex flex-col">
              <span className="text-sm text-text-secondary font-medium uppercase tracking-wider mb-1 flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                Where
              </span>
              <span className="text-base md:text-lg text-text-primary font-semibold leading-tight">{eventInfo.location}</span>
            </div>

            <div className="flex flex-col">
              <span className="text-sm text-text-secondary font-medium uppercase tracking-wider mb-1 flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                Hosted By
              </span>
              <span className="text-base md:text-lg text-text-primary font-semibold leading-tight">{organizers.host}</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
