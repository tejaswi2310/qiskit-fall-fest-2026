"use client";

import * as React from "react";

export const QuantumSphere = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-[280px] lg:h-[280px] pointer-events-none select-none opacity-100 ${className}`}>
      {/* Radiant Ambient Quantum Radial Aura */}
      <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-[#6D3BFF]/35 via-[#315CFF]/25 to-[#00F0FF]/35 blur-2xl animate-pulse-slow -z-10" />

      {/* 3D Quantum Wireframe Sphere with Orbiting Rings */}
      <div className="relative w-full h-full animate-float">
        <svg
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_0_28px_rgba(109,59,255,0.8)] drop-shadow-[0_0_12px_rgba(0,240,255,0.6)]"
        >
          <defs>
            {/* Core Sphere Ambient Radial Gradient */}
            <radialGradient id="qCoreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#4C1D95" stopOpacity="0.2" />
              <stop offset="85%" stopColor="#1E0E4D" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#050816" stopOpacity="0" />
            </radialGradient>

            {/* Gradient for Solid Tilted Ring: Vibrant Purple to Bright Cyan */}
            <linearGradient id="solidRingGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D946EF" />
              <stop offset="35%" stopColor="#A855F7" />
              <stop offset="70%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#00F0FF" />
            </linearGradient>

            {/* Crisp glowing filter for nodes */}
            <filter id="nodeCyanGlow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur1" />
              <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur2" />
              <feMerge>
                <feMergeNode in="blur2" />
                <feMergeNode in="blur1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="nodePurpleGlow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur1" />
              <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur2" />
              <feMerge>
                <feMergeNode in="blur2" />
                <feMergeNode in="blur1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="singularityGlow" x="-150%" y="-150%" width="400%" height="400%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur1" />
              <feGaussianBlur in="SourceGraphic" stdDeviation="9" result="blur2" />
              <feMerge>
                <feMergeNode in="blur2" />
                <feMergeNode in="blur1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Glowing filter for lines */}
            <filter id="lineGlow">
              <feGaussianBlur in="SourceGraphic" stdDeviation="1.2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* 1. Core Sphere Body */}
          <circle cx="150" cy="150" r="76" fill="url(#qCoreGlow)" />

          {/* 2. Wireframe Central Sphere Longitude & Latitude Lines */}
          <g filter="url(#lineGlow)">
            {/* Vertical dashed meridian 1 */}
            <ellipse
              cx="150"
              cy="150"
              rx="36"
              ry="76"
              stroke="#00F0FF"
              strokeWidth="1.6"
              strokeDasharray="6 4"
              strokeOpacity="0.8"
            />
            {/* Vertical dashed meridian 2 */}
            <ellipse
              cx="150"
              cy="150"
              rx="64"
              ry="76"
              stroke="#A855F7"
              strokeWidth="1.6"
              strokeDasharray="6 4"
              strokeOpacity="0.7"
            />
            {/* Horizontal dashed parallel 1 */}
            <ellipse
              cx="150"
              cy="150"
              rx="76"
              ry="36"
              stroke="#00F0FF"
              strokeWidth="1.6"
              strokeDasharray="6 4"
              strokeOpacity="0.75"
            />
            {/* Horizontal dashed parallel 2 */}
            <ellipse
              cx="150"
              cy="150"
              rx="76"
              ry="62"
              stroke="#A855F7"
              strokeWidth="1.6"
              strokeDasharray="6 4"
              strokeOpacity="0.65"
            />
            {/* Outer circle of the sphere */}
            <circle
              cx="150"
              cy="150"
              r="76"
              stroke="#C084FC"
              strokeWidth="1.4"
              strokeOpacity="0.45"
            />
          </g>

          {/* 3. Orbiting Rings Matching Reference Image 2 */}
          
          {/* Ring A: Dashed Cyan Ring tilted top-left to bottom-right (~-38°) */}
          <g transform="rotate(-38 150 150)" filter="url(#lineGlow)">
            <ellipse
              cx="150"
              cy="150"
              rx="132"
              ry="52"
              stroke="#00F0FF"
              strokeWidth="2.2"
              strokeDasharray="8 5"
              strokeOpacity="0.9"
            />
          </g>

          {/* Ring B: Dashed Purple Ring tilted near vertical (~-70°) */}
          <g transform="rotate(-70 150 150)" filter="url(#lineGlow)">
            <ellipse
              cx="150"
              cy="150"
              rx="128"
              ry="48"
              stroke="#C084FC"
              strokeWidth="2"
              strokeDasharray="8 5"
              strokeOpacity="0.8"
            />
          </g>

          {/* Ring C: Solid Purple Ring nearly vertical (~-16°) */}
          <g transform="rotate(-16 150 150)">
            <ellipse
              cx="150"
              cy="150"
              rx="58"
              ry="125"
              stroke="#A855F7"
              strokeWidth="2.6"
              strokeOpacity="0.95"
              filter="url(#lineGlow)"
            />
            {/* Glowing Lavender Node on upper right */}
            <circle cx="195" cy="55" r="8" fill="#C084FC" filter="url(#nodePurpleGlow)" />
            <circle cx="195" cy="55" r="3.5" fill="#FFFFFF" />

            {/* Glowing Cyan Node on bottom */}
            <circle cx="150" cy="275" r="7.5" fill="#00F0FF" filter="url(#nodeCyanGlow)" />
            <circle cx="150" cy="275" r="3.5" fill="#FFFFFF" />
          </g>

          {/* Ring D: Solid Gradient Ring tilted bottom-left to top-right (~25°) */}
          <g transform="rotate(25 150 150)">
            <ellipse
              cx="150"
              cy="150"
              rx="130"
              ry="48"
              stroke="url(#solidRingGrad)"
              strokeWidth="2.8"
              strokeOpacity="0.95"
              filter="url(#lineGlow)"
            />
            {/* Prominent Bright Cyan Node at Top-Right tip */}
            <circle cx="280" cy="150" r="8.5" fill="#00F0FF" filter="url(#nodeCyanGlow)" />
            <circle cx="280" cy="150" r="4" fill="#FFFFFF" />

            {/* Magenta Node at Bottom-Left tip */}
            <circle cx="20" cy="150" r="7.5" fill="#D946EF" filter="url(#nodePurpleGlow)" />
            <circle cx="20" cy="150" r="3" fill="#FFFFFF" />

            {/* Cyan Node along the lower quadrant */}
            <circle cx="75" cy="185" r="6.5" fill="#00F0FF" filter="url(#nodeCyanGlow)" />
            <circle cx="75" cy="185" r="2.5" fill="#FFFFFF" />
          </g>

          {/* 4. Center Singularity (Bright White Star Core) */}
          <circle cx="150" cy="150" r="6.5" fill="#FFFFFF" filter="url(#singularityGlow)" />
          <circle cx="150" cy="150" r="3.5" fill="#FFFFFF" />
        </svg>
      </div>
    </div>
  );
};
