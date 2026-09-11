"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Events", href: "#events" },
    { name: "Organizers", href: "#organizers" },
    { name: "FAQ", href: "#faq" },
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#050816]/90 backdrop-blur-md border-b border-purple-500/20 py-3 shadow-lg shadow-black/40"
          : "bg-[#050816]/60 backdrop-blur-sm border-b border-purple-500/10 py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left Side: NRI Logo + Title */}
        <Link href="/" className="flex items-center gap-3 group focus-visible:outline-none">
          <div className="bg-white rounded-lg px-2 py-1 flex items-center justify-center shadow-md transition-transform duration-200 group-hover:scale-105">
            <Image
              src="/images/nri-logo.png"
              alt="NRI University"
              width={50}
              height={32}
              className="h-6 sm:h-7 w-auto object-contain"
              priority
            />
          </div>
          <div className="flex items-baseline gap-1.5 font-bold tracking-tight">
            <span className="text-white text-base sm:text-lg md:text-xl">Qiskit Fall Fest</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#6D3BFF] to-[#38BDF8] text-base sm:text-lg md:text-xl">
              2026
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 relative group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#6D3BFF] to-[#38BDF8] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right Side: Register CTA & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="https://forms.gle/yk7iLvmrkzb1MuZf9"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-[#6D3BFF] to-[#315CFF] shadow-[0_0_20px_rgba(109,59,255,0.4)] hover:shadow-[0_0_30px_rgba(109,59,255,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-purple-400/30"
          >
            Register
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#050816]/98 backdrop-blur-xl border-b border-purple-500/20 px-6 py-6 transition-all duration-300 animate-in slide-in-from-top-3">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-[#00F0FF] transition-colors py-2 border-b border-purple-500/10"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="https://forms.gle/yk7iLvmrkzb1MuZf9"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#6D3BFF] to-[#315CFF] shadow-[0_0_25px_rgba(109,59,255,0.5)] border border-purple-400/30"
              >
                Register Now
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
