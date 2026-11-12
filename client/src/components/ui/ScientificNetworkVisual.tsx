import { useId } from 'react';

interface NodePoint {
  id: string;
  x: number;
  y: number;
  label?: string;
  code?: string;
  isAnchor?: boolean;
}

export default function ScientificNetworkVisual({ className = '' }: { className?: string }) {
  const maskId = useId();

  // 5 Principal Multidisciplinary Research Domain Hubs
  const domainAnchors: NodePoint[] = [
    { id: 'tr1', x: 105, y: 85, label: 'AI & COGNITIVE', code: 'TR-01', isAnchor: true },
    { id: 'tr2', x: 395, y: 80, label: 'CIRCUITS & VLSI', code: 'TR-02', isAnchor: true },
    { id: 'tr3', x: 405, y: 265, label: 'SUSTAINABLE TECH', code: 'TR-03', isAnchor: true },
    { id: 'tr4', x: 100, y: 270, label: 'ROBOTICS & IOT', code: 'TR-04', isAnchor: true },
    { id: 'tr5', x: 250, y: 175, label: 'APPLIED SCIENCES', code: 'TR-05', isAnchor: true },
  ];

  // Intermediary Research Data Nodes
  const auxNodes: NodePoint[] = [
    { id: 'n1', x: 175, y: 115 },
    { id: 'n2', x: 315, y: 105 },
    { id: 'n3', x: 345, y: 185 },
    { id: 'n4', x: 325, y: 245 },
    { id: 'n5', x: 185, y: 250 },
    { id: 'n6', x: 145, y: 190 },
    { id: 'n7', x: 220, y: 70 },
    { id: 'n8', x: 285, y: 65 },
    { id: 'n9', x: 250, y: 260 },
    { id: 'n10', x: 200, y: 170 },
    { id: 'n11', x: 295, y: 170 },
    { id: 'n12', x: 135, y: 145 },
    { id: 'n13', x: 375, y: 145 },
    { id: 'n14', x: 370, y: 215 },
    { id: 'n15', x: 140, y: 225 },
  ];

  // Primary network connections
  const networkLines = [
    // Perimeter polygon
    [105, 85, 395, 80],
    [395, 80, 405, 265],
    [405, 265, 100, 270],
    [100, 270, 105, 85],
    // Convergence rays to central hub
    [105, 85, 250, 175],
    [395, 80, 250, 175],
    [405, 265, 250, 175],
    [100, 270, 250, 175],
    // Intermediary cross filaments
    [105, 85, 175, 115],
    [175, 115, 220, 70],
    [220, 70, 285, 65],
    [285, 65, 315, 105],
    [315, 105, 395, 80],
    [395, 80, 375, 145],
    [375, 145, 345, 185],
    [345, 185, 370, 215],
    [370, 215, 405, 265],
    [405, 265, 325, 245],
    [325, 245, 250, 260],
    [250, 260, 185, 250],
    [185, 250, 100, 270],
    [100, 270, 140, 225],
    [140, 225, 145, 190],
    [145, 190, 135, 145],
    [135, 145, 105, 85],
    // Inner mesh
    [175, 115, 200, 170],
    [200, 170, 185, 250],
    [315, 105, 295, 170],
    [295, 170, 325, 245],
    [200, 170, 250, 175],
    [295, 170, 250, 175],
    [220, 70, 250, 175],
    [250, 260, 250, 175],
    [145, 190, 250, 175],
    [345, 185, 250, 175],
  ];

  // Triangular planar facets (multi-layer scientific depth)
  const facetPolygons = [
    '105,85 175,115 135,145',
    '175,115 220,70 250,175',
    '220,70 285,65 250,175',
    '285,65 315,105 295,170',
    '315,105 395,80 375,145',
    '375,145 345,185 295,170',
    '345,185 370,215 405,265',
    '370,215 325,245 405,265',
    '325,245 250,260 250,175',
    '250,260 185,250 250,175',
    '185,250 140,225 100,270',
    '140,225 145,190 200,170',
    '145,190 135,145 105,85',
    '135,145 175,115 200,170',
  ];

  return (
    <div
      className={`relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border-dark bg-gradient-to-b from-navy/95 to-midnight/95 backdrop-blur-md shadow-2xl p-4 sm:p-5 w-full max-w-full ${className}`}
    >
      {/* Corner Technical Alignment Crosshairs */}
      <div className="absolute top-2.5 left-2.5 font-mono text-[9px] text-cyan/40 pointer-events-none select-none">
        +
      </div>
      <div className="absolute top-2.5 right-2.5 font-mono text-[9px] text-cyan/40 pointer-events-none select-none">
        +
      </div>
      <div className="absolute bottom-2.5 left-2.5 font-mono text-[9px] text-cyan/40 pointer-events-none select-none">
        +
      </div>
      <div className="absolute bottom-2.5 right-2.5 font-mono text-[9px] text-cyan/40 pointer-events-none select-none">
        +
      </div>

      {/* Scientific Topology Header Bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-border-dark/70 pb-3 mb-2">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-cyan animate-pulse" />
          <span className="font-heading text-xs sm:text-sm font-bold tracking-wide text-cyan">
            Multidisciplinary Research Network
          </span>
        </div>
        <span className="font-mono text-xs text-mint font-semibold hidden xs:inline">
          5 Core Domains
        </span>
      </div>

      {/* Vector Scientific Data Network */}
      <div className="relative w-full flex items-center justify-center py-1">
        <svg
          viewBox="0 0 500 350"
          className="w-full h-auto max-h-[340px] text-cyan select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={`${maskId}-lineGrad`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#35D9E8" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#65E6C4" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#35D9E8" stopOpacity="0.3" />
            </linearGradient>

            <filter id={`${maskId}-glow`} x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* 1. Planar Facet Shading (Subtle multi-layer geometric depth) */}
          <g className="facets">
            {facetPolygons.map((pts, i) => (
              <polygon
                key={i}
                points={pts}
                fill="#087E83"
                fillOpacity={i % 2 === 0 ? '0.045' : '0.025'}
                stroke="#35D9E8"
                strokeWidth="0.3"
                strokeOpacity="0.1"
              />
            ))}
          </g>

          {/* 2. Fine Interconnected Network Filaments */}
          <g className="filaments">
            {networkLines.map(([x1, y1, x2, y2], i) => (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#35D9E8"
                strokeWidth="0.8"
                strokeOpacity={i < 8 ? '0.35' : '0.18'}
              />
            ))}
          </g>

          {/* 3. Intermediate Data Nodes */}
          <g className="aux-nodes">
            {auxNodes.map((n) => (
              <circle
                key={n.id}
                cx={n.x}
                cy={n.y}
                r="1.8"
                fill="#35D9E8"
                fillOpacity="0.75"
              />
            ))}
          </g>

          {/* 4. Animated Data Signal Packets (Luminous packet pulses along lines) */}
          <g className="signal-packets">
            <circle cx="177" cy="130" r="2.2" fill="#65E6C4" filter={`url(#${maskId}-glow)`}>
              <animate attributeName="cx" values="105;250;105" dur="7s" repeatCount="indefinite" />
              <animate attributeName="cy" values="85;175;85" dur="7s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.2;1;0.2" dur="7s" repeatCount="indefinite" />
            </circle>

            <circle cx="322" cy="127" r="2.2" fill="#65E6C4" filter={`url(#${maskId}-glow)`}>
              <animate attributeName="cx" values="395;250;395" dur="6s" repeatCount="indefinite" />
              <animate attributeName="cy" values="80;175;80" dur="6s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.2;1;0.2" dur="6s" repeatCount="indefinite" />
            </circle>

            <circle cx="327" cy="220" r="2.2" fill="#65E6C4" filter={`url(#${maskId}-glow)`}>
              <animate attributeName="cx" values="405;250;405" dur="8s" repeatCount="indefinite" />
              <animate attributeName="cy" values="265;175;265" dur="8s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.2;1;0.2" dur="8s" repeatCount="indefinite" />
            </circle>

            <circle cx="175" cy="222" r="2.2" fill="#65E6C4" filter={`url(#${maskId}-glow)`}>
              <animate attributeName="cx" values="100;250;100" dur="7.5s" repeatCount="indefinite" />
              <animate attributeName="cy" values="270;175;270" dur="7.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.2;1;0.2" dur="7.5s" repeatCount="indefinite" />
            </circle>

            <circle cx="250" cy="82" r="2.2" fill="#35D9E8" filter={`url(#${maskId}-glow)`}>
              <animate attributeName="cx" values="105;395;105" dur="9s" repeatCount="indefinite" />
              <animate attributeName="cy" values="85;80;85" dur="9s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.3;0.9;0.3" dur="9s" repeatCount="indefinite" />
            </circle>
          </g>

          {/* 5. Primary Academic Anchor Hubs (Diamond Reticles & Scientific Labels) */}
          <g className="anchors">
            {domainAnchors.map((a) => (
              <g key={a.id} className="anchor-group">
                {/* Subtle Breathing Pulse Halo */}
                <circle
                  cx={a.x}
                  cy={a.y}
                  r="11"
                  fill="none"
                  stroke="#35D9E8"
                  strokeWidth="0.8"
                  strokeOpacity="0.28"
                >
                  <animate
                    attributeName="r"
                    values="9;14;9"
                    dur="3.5s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="stroke-opacity"
                    values="0.4;0.1;0.4"
                    dur="3.5s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Diamond Target Reticle */}
                <polygon
                  points={`${a.x},${a.y - 7} ${a.x + 7},${a.y} ${a.x},${a.y + 7} ${a.x - 7},${a.y}`}
                  fill="#0B1F30"
                  stroke="#35D9E8"
                  strokeWidth="1.2"
                />

                {/* Luminous Core Point */}
                <circle cx={a.x} cy={a.y} r="2.6" fill="#65E6C4" />

                {/* Academic Domain Label & Track Code */}
                {a.x < 250 ? (
                  <g>
                    <text
                      x={a.x + 12}
                      y={a.y + 2}
                      fill="#F1F6F8"
                      fontSize="9.5"
                      fontFamily="Space Grotesk, sans-serif"
                      fontWeight="bold"
                    >
                      {a.label}
                    </text>
                    <text
                      x={a.x + 12}
                      y={a.y + 12}
                      fill="#35D9E8"
                      fontSize="8"
                      fontFamily="monospace"
                      fontWeight="bold"
                    >
                      {a.code}
                    </text>
                  </g>
                ) : a.x === 250 ? (
                  <g>
                    <text
                      x={a.x}
                      y={a.y - 14}
                      fill="#F1F6F8"
                      fontSize="10"
                      fontFamily="Space Grotesk, sans-serif"
                      fontWeight="bold"
                      textAnchor="middle"
                    >
                      {a.label}
                    </text>
                    <text
                      x={a.x}
                      y={a.y + 20}
                      fill="#65E6C4"
                      fontSize="8.5"
                      fontFamily="monospace"
                      fontWeight="bold"
                      textAnchor="middle"
                    >
                      CONVERGENCE CORE // {a.code}
                    </text>
                  </g>
                ) : (
                  <g>
                    <text
                      x={a.x - 12}
                      y={a.y + 2}
                      fill="#F1F6F8"
                      fontSize="9.5"
                      fontFamily="Space Grotesk, sans-serif"
                      fontWeight="bold"
                      textAnchor="end"
                    >
                      {a.label}
                    </text>
                    <text
                      x={a.x - 12}
                      y={a.y + 12}
                      fill="#35D9E8"
                      fontSize="8"
                      fontFamily="monospace"
                      fontWeight="bold"
                      textAnchor="end"
                    >
                      {a.code}
                    </text>
                  </g>
                )}
              </g>
            ))}
          </g>
        </svg>
      </div>

      {/* Scientific Telemetry Footer Bar */}
      <div className="relative z-10 flex items-center justify-between border-t border-border-dark/70 pt-2.5 mt-1 font-mono text-[9px] sm:text-[10px] text-secondary-text">
        <div className="flex items-center gap-2">
          <span className="text-cyan">▹</span>
          <span>CONVERGENCE MATRIX</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-mint font-semibold">COLLABORATION DENSITY: HIGH</span>
          <span className="hidden sm:inline text-border-dark">|</span>
          <span className="hidden sm:inline text-secondary-text/80">ETIMS 2027</span>
        </div>
      </div>
    </div>
  );
}