// /**
//  * Animated circuit board SVG — the signature visual element.
//  * Pulsing nodes connected by lines to evoke electronics/robotics.
//  */
// export default function CircuitSVG() {
//   return (
//     <svg
//       viewBox="0 0 800 500"
//       xmlns="http://www.w3.org/2000/svg"
//       className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
//       aria-hidden="true"
//     >
//       {/* Circuit lines */}
//       <g stroke="white" strokeWidth="1.5" fill="none" opacity="0.4">
//         <path d="M80 120 H200 V200 H380" />
//         <path d="M380 200 H480 V120 H620" />
//         <path d="M620 120 V300 H700" />
//         <path d="M200 200 V350 H320 V420 H500" />
//         <path d="M500 420 H650 V320 H740" />
//         <path d="M480 120 V60 H300 V20" />
//         <path d="M140 350 H200 V200" />
//         <path d="M500 200 V280 H600" />
//         <path d="M100 450 H260 V380 H380 V350" />
//         <path d="M640 380 H700 V300" />
//       </g>

//       {/* Nodes */}
//       <g fill="white" className="circuit-node">
//         <circle cx="80" cy="120" r="5" />
//       </g>
//       <g fill="white" className="circuit-node">
//         <circle cx="200" cy="200" r="5" />
//       </g>
//       <g fill="white" className="circuit-node">
//         <circle cx="380" cy="200" r="6" />
//       </g>
//       <g fill="white" className="circuit-node">
//         <circle cx="480" cy="120" r="5" />
//       </g>
//       <g fill="white" className="circuit-node">
//         <circle cx="620" cy="120" r="6" />
//       </g>
//       <g fill="white" className="circuit-node">
//         <circle cx="700" cy="300" r="5" />
//       </g>
//       <g fill="white" className="circuit-node">
//         <circle cx="320" cy="420" r="5" />
//       </g>
//       <g fill="white" className="circuit-node">
//         <circle cx="500" cy="420" r="6" />
//       </g>
//       <g fill="white" className="circuit-node">
//         <circle cx="600" cy="280" r="5" />
//       </g>
//       <g fill="white" className="circuit-node">
//         <circle cx="260" cy="380" r="5" />
//       </g>

//       {/* IC chip shapes */}
//       <rect x="340" y="160" width="80" height="80" rx="4" stroke="white" strokeWidth="1.5" fill="none" opacity="0.3" />
//       <rect x="460" y="80" width="60" height="80" rx="4" stroke="white" strokeWidth="1.5" fill="none" opacity="0.3" />

//       {/* Small decorative squares (SMD components) */}
//       {[[160,110],[440,390],[580,300],[130,340]].map(([x,y],i) => (
//         <rect key={i} x={x-8} y={y-4} width="16" height="8" rx="2" fill="white" opacity="0.25" />
//       ))}
//     </svg>
//   );
// }


export default function CircuitSVG() {
  return (
    <svg
      viewBox="0 0 900 500"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="lineGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="50%" stopColor="#A78BFA" />
          <stop offset="100%" stopColor="#FBBF24" />
        </linearGradient>
      </defs>

      {/* Main Connections */}
      <g
        stroke="url(#lineGradient)"
        strokeWidth="3"
        fill="none"
        opacity="0.45"
      >
        <path d="M120 120 H280 V220 H450" />
        <path d="M450 220 H620 V120 H760" />
        <path d="M280 220 V360 H500" />
        <path d="M500 360 H700 V280 H820" />
        <path d="M450 220 V80 H300" />
      </g>

      {/* Large Learning Nodes */}
      <g className="circuit-node">
        <circle cx="120" cy="120" r="14" fill="#60A5FA" />
      </g>

      <g className="circuit-node">
        <circle cx="280" cy="220" r="16" fill="#A78BFA" />
      </g>

      <g className="circuit-node">
        <circle cx="450" cy="220" r="20" fill="#FBBF24" />
      </g>

      <g className="circuit-node">
        <circle cx="620" cy="120" r="16" fill="#10B981" />
      </g>

      <g className="circuit-node">
        <circle cx="760" cy="120" r="18" fill="#F472B6" />
      </g>

      <g className="circuit-node">
        <circle cx="500" cy="360" r="16" fill="#34D399" />
      </g>

      <g className="circuit-node">
        <circle cx="820" cy="280" r="16" fill="#FBBF24" />
      </g>

      {/* AI Chip */}
      <g transform="translate(410 180)">
        <rect
          width="80"
          height="80"
          rx="16"
          fill="#FFFFFF"
          stroke="#2563EB"
          strokeWidth="3"
        />

        <text
          x="40"
          y="48"
          textAnchor="middle"
          fill="#2563EB"
          fontSize="18"
          fontWeight="700"
        >
          AI
        </text>
      </g>

      {/* Robot Face */}
      <g transform="translate(700 250)">
        <rect
          width="90"
          height="90"
          rx="20"
          fill="#FFFFFF"
          stroke="#7C3AED"
          strokeWidth="3"
        />

        <circle cx="30" cy="35" r="6" fill="#7C3AED" />
        <circle cx="60" cy="35" r="6" fill="#7C3AED" />

        <rect
          x="25"
          y="55"
          width="40"
          height="10"
          rx="5"
          fill="#7C3AED"
        />
      </g>

      {/* Floating Stars */}
      <g opacity="0.5">
        <circle cx="180" cy="60" r="4" fill="#FBBF24" />
        <circle cx="580" cy="60" r="4" fill="#FBBF24" />
        <circle cx="850" cy="180" r="4" fill="#FBBF24" />
        <circle cx="250" cy="450" r="4" fill="#FBBF24" />
      </g>

      {/* Decorative Dots */}
      <g fill="#CBD5E1">
        <circle cx="80" cy="280" r="3" />
        <circle cx="150" cy="400" r="3" />
        <circle cx="380" cy="100" r="3" />
        <circle cx="650" cy="420" r="3" />
        <circle cx="860" cy="90" r="3" />
      </g>
    </svg>
  );
}