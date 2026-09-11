import * as React from "react";
import { eventInfo } from "../../data/eventInfo";
import { organizers } from "../../data/organizers";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-surface py-16 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          
          {/* Brand & Summary */}
          <div className="md:col-span-4">
            <span className="text-2xl font-bold tracking-tight text-text-primary block mb-4">
              Qiskit Fall Fest <span className="text-primary">2026</span>
            </span>
            <p className="text-sm text-text-secondary leading-relaxed mb-6">
              An independently organized quantum computing event hosted by {organizers.host}. Join us for hands-on learning and exploration.
            </p>
            
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-text-primary">Location</span>
              <span className="text-sm text-text-secondary">{eventInfo.location}</span>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">Explore</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-sm text-text-secondary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm px-1 py-0.5">About the Event</a></li>
              <li><a href="#workshops" className="text-sm text-text-secondary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm px-1 py-0.5">Workshops</a></li>
              <li><a href="#agenda" className="text-sm text-text-secondary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm px-1 py-0.5">Agenda</a></li>
              <li><a href="#speakers" className="text-sm text-text-secondary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm px-1 py-0.5">Speakers</a></li>
              <li><a href="#faq" className="text-sm text-text-secondary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm px-1 py-0.5">FAQ</a></li>
            </ul>
          </div>
          
          {/* Contact & Registration */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">Get in Touch</h3>
            <ul className="space-y-3 mb-6">
              <li className="text-sm text-text-secondary flex flex-col gap-1">
                <span className="text-xs font-medium text-text-primary">Primary Contact</span>
                <a href={`tel:${organizers.primaryContact}`} className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm px-1 py-0.5 w-max">
                  {organizers.primaryContact}
                </a>
              </li>
              <li className="text-sm text-text-secondary flex flex-col gap-1">
                <span className="text-xs font-medium text-text-primary">Email</span>
                <span className="italic text-text-secondary/70">TBD (Coming Soon)</span>
              </li>
            </ul>

            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">Registration</h3>
            {eventInfo.registrationUrl ? (
              <a 
                href={eventInfo.registrationUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm px-1 py-0.5"
              >
                Register via Qiskit.org
                <svg width="16" height="16" className="ml-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </a>
            ) : (
              <span className="text-sm italic text-text-secondary/70">Registration opening soon</span>
            )}
          </div>

          {/* Social Links */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">Connect</h3>
            
            {/* Social Placeholder */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 opacity-50">
                <div className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center text-text-secondary">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </div>
                <div className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center text-text-secondary">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </div>
              </div>
              <span className="text-sm italic text-text-secondary/70">Social channels coming soon</span>
            </div>
          </div>
          
        </div>
        
        {/* Copyright & Legal */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-medium text-text-secondary text-center md:text-left">
            &copy; 2026 {organizers.host}. All rights reserved.
          </p>
          <p className="text-xs text-text-secondary/80 text-center md:text-right max-w-md">
            This Qiskit Fall Fest event is independently organized. It is not an officially hosted IBM event unless explicitly stated. IBM, the IBM logo, and Qiskit are trademarks of International Business Machines Corporation.
          </p>
        </div>
      </div>
    </footer>
  );
};
