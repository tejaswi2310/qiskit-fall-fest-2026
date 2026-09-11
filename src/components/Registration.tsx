"use client";

import * as React from "react";
import { Send, CheckCircle2, AlertCircle, Loader2, Sparkles, User, Mail, Phone, Building, Briefcase } from "lucide-react";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  institution: string;
  designation: string;
  interest: string;
  mode: "Offline (In-Person)";
}

export const Registration = () => {
  const [formData, setFormData] = React.useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    institution: "",
    designation: "",
    interest: "Quantum Computing",
    mode: "Offline (In-Person)",
  });

  const [errors, setErrors] = React.useState<Partial<Record<keyof FormData, string>>>({});
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const interestOptions = [
    "Quantum Computing",
    "Qiskit",
    "Machine Learning",
    "Quantum AI",
    "Research",
    "Software Development",
    "Other",
  ];

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (formData.phone.trim().length < 8) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.institution.trim()) newErrors.institution = "Institution or organization is required";
    if (!formData.designation.trim()) newErrors.designation = "Designation or year of study is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);

    // Simulate asynchronous submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <section id="register" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 border-t border-purple-500/15">
      <div className="mx-auto max-w-4xl">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1 text-xs font-semibold text-[#00F0FF] bg-[#00F0FF]/10 border border-[#00F0FF]/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Secure Your Seat</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Register for Qiskit Fall Fest{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#6D3BFF] to-[#38BDF8]">
              2026
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Join us and be part of the quantum revolution. Free admission for students and researchers.
          </p>
        </div>

        {/* Form Container */}
        <div className="glass-panel-glow rounded-3xl p-6 sm:p-10 border-purple-500/40 relative overflow-hidden">
          
          {isSuccess ? (
            /* Success State */
            <div className="text-center py-12 space-y-6 animate-in zoom-in-95 duration-300">
              <div className="inline-flex p-4 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                <CheckCircle2 className="w-14 h-14" />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">Registration Confirmed!</h3>
                <p className="text-slate-300 max-w-md mx-auto text-sm sm:text-base">
                  Thank you for registering, <span className="text-white font-semibold">{formData.fullName}</span>. A confirmation package and schedule details have been sent to <span className="text-[#00F0FF]">{formData.email}</span>.
                </p>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({
                      fullName: "",
                      email: "",
                      phone: "",
                      institution: "",
                      designation: "",
                      interest: "Quantum Computing",
                      mode: "Offline (In-Person)",
                    });
                  }}
                  className="px-6 py-2.5 rounded-xl text-sm font-semibold text-purple-200 bg-purple-950/50 border border-purple-500/30 hover:bg-purple-900/50 transition-colors"
                >
                  Register Another Attendee
                </button>
              </div>
            </div>
          ) : (
            /* Active Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs uppercase font-bold tracking-wider text-purple-200 mb-2">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="e.g. John Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full bg-[#050816]/70 border rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#6D3BFF] transition-all ${
                        errors.fullName ? "border-red-500" : "border-purple-500/30 hover:border-purple-400/50"
                      }`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs uppercase font-bold tracking-wider text-purple-200 mb-2">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      placeholder="name@university.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full bg-[#050816]/70 border rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#6D3BFF] transition-all ${
                        errors.email ? "border-red-500" : "border-purple-500/30 hover:border-purple-400/50"
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs uppercase font-bold tracking-wider text-purple-200 mb-2">
                    Phone Number <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full bg-[#050816]/70 border rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#6D3BFF] transition-all ${
                        errors.phone ? "border-red-500" : "border-purple-500/30 hover:border-purple-400/50"
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phone}
                    </p>
                  )}
                </div>

                {/* Designation / Role */}
                <div>
                  <label className="block text-xs uppercase font-bold tracking-wider text-purple-200 mb-2">
                    Designation / Role <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <Briefcase className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="e.g. 3rd Year B.Tech / Researcher"
                      value={formData.designation}
                      onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                      className={`w-full bg-[#050816]/70 border rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#6D3BFF] transition-all ${
                        errors.designation ? "border-red-500" : "border-purple-500/30 hover:border-purple-400/50"
                      }`}
                    />
                  </div>
                  {errors.designation && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.designation}
                    </p>
                  )}
                </div>

              </div>

              {/* Institution / Organization */}
              <div>
                <label className="block text-xs uppercase font-bold tracking-wider text-purple-200 mb-2">
                  Institution / Organization <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <Building className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="e.g. NRI Institute of Technology"
                    value={formData.institution}
                    onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                    className={`w-full bg-[#050816]/70 border rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#6D3BFF] transition-all ${
                      errors.institution ? "border-red-500" : "border-purple-500/30 hover:border-purple-400/50"
                    }`}
                  />
                </div>
                {errors.institution && (
                  <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.institution}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Area of Interest */}
                <div>
                  <label className="block text-xs uppercase font-bold tracking-wider text-purple-200 mb-2">
                    Primary Area of Interest
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full bg-[#050816]/80 border border-purple-500/30 hover:border-purple-400/50 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#6D3BFF]"
                  >
                    {interestOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#0b112c] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Attendance Mode */}
                <div>
                  <label className="block text-xs uppercase font-bold tracking-wider text-purple-200 mb-2">
                    Attendance Mode
                  </label>
                  <div className="py-3 px-4 rounded-xl text-sm font-semibold border bg-purple-600/20 border-purple-400/40 text-white flex items-center justify-between shadow-[0_0_15px_rgba(109,59,255,0.2)]">
                    <span className="flex items-center gap-2">
                      <span>🏛️</span>
                      <span>Offline (In-Person on Campus)</span>
                    </span>
                    <span className="text-xs font-bold text-[#00F0FF] bg-[#00F0FF]/10 px-2.5 py-1 rounded-full border border-[#00F0FF]/30">
                      Campus Event
                    </span>
                  </div>
                </div>

              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 rounded-xl font-bold text-white text-base bg-gradient-to-r from-[#6D3BFF] to-[#315CFF] shadow-[0_0_25px_rgba(109,59,255,0.5)] hover:shadow-[0_0_40px_rgba(109,59,255,0.8)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 border border-purple-400/40 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Processing Registration...</span>
                    </>
                  ) : (
                    <>
                      <span>Complete Registration</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-purple-300/60 mt-3">
                  By registering, you agree to receive event updates, participation credentials, and certificate details.
                </p>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
