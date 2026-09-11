"use client";

import * as React from "react";
import Link from "next/link";
import { eventInfo } from "../../data/eventInfo";
import { Button } from "../ui/Button";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState<string>("");

  const [isScrolled, setIsScrolled] = React.useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navLinks = React.useMemo(() => [
    { name: "About", href: "#about" },
    { name: "Events", href: "#Events" },
    { name: "Agenda", href: "#agenda" },
    { name: "Organizers", href: "#Organizers" },
    { name: "FAQ", href: "#faq" },
  ], []);

  // Intersection Observer for highlighting active nav link
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" } // Trigger when section is near top of viewport
    );

    navLinks.forEach((link) => {
      const element = document.querySelector(link.href);
      if (element) observer.observe(element);
    });

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navLinks]);

  return (
    <>
      <header className={`sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md transition-all ${isScrolled ? "py-2" : "py-4"}`}>
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* Logo / Title */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center space-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
            >
              <span className="text-lg md:text-xl font-bold tracking-tight text-text-primary">
                Qiskit Fall Fest <span className="text-primary">2026</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm px-2 py-1 ${activeSection === link.href ? "text-primary bg-primary/10" : "text-text-secondary hover:text-text-primary"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              {eventInfo.registrationUrl ? (
                <Button asChild size="sm">
                  <a href={eventInfo.registrationUrl} target="_blank" rel="noopener noreferrer">
                    Register
                  </a>
                </Button>
              ) : (
                <Button size="sm" disabled className="opacity-50">
                  Coming Soon
                </Button>
              )}
            </div>

            <button
              className="md:hidden p-2.5 text-text-secondary hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
              onClick={toggleMenu}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {isMobileMenuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M4 12h16M4 6h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-border shadow-elevation-3 py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-base font-medium p-3 rounded-md transition-colors ${activeSection === link.href ? "text-primary bg-primary/10" : "text-text-secondary hover:text-text-primary hover:bg-surface"
                    }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="pt-4 border-t border-border">
              {eventInfo.registrationUrl ? (
                <Button asChild className="w-full">
                  <a href={eventInfo.registrationUrl} target="_blank" rel="noopener noreferrer">
                    Register Now
                  </a>
                </Button>
              ) : (
                <Button disabled className="w-full opacity-50">
                  Registration Coming Soon
                </Button>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Sticky Mobile CTA Bottom Bar (Only shows on very small screens to avoid vertical trapping) */}
      <div className="sm:hidden fixed bottom-0 left-0 w-full p-4 bg-background/95 backdrop-blur-md border-t border-border z-40 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
        {eventInfo.registrationUrl ? (
          <Button asChild className="w-full shadow-elevation-2">
            <a href={eventInfo.registrationUrl} target="_blank" rel="noopener noreferrer">
              Register Now
            </a>
          </Button>
        ) : (
          <Button disabled className="w-full opacity-50 shadow-elevation-1">
            Registration Coming Soon
          </Button>
        )}
      </div>
    </>
  );
};
