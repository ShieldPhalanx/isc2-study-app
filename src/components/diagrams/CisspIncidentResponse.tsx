export default function CisspIncidentResponse() {
  const phases = [
    { label: "Preparation", color: "#1d4ed8", points: ["IR plan & training", "Detection tools", "Contact trees"] },
    { label: "Identification", color: "#7c3aed", points: ["Confirm incident", "Rule out false positive", "Classify severity"] },
    { label: "Containment", color: "#dc2626", points: ["Isolate systems", "Stop the spread", "Preserve evidence"] },
    { label: "Eradication", color: "#d97706", points: ["Remove malware", "Close entry vector", "Reset credentials"] },
    { label: "Recovery", color: "#0891b2", points: ["Restore systems", "Validate integrity", "Monitor closely"] },
    { label: "Lessons Learned", color: "#15803d", points: ["Review response", "Update playbooks", "Improve controls"] },
  ];

  const boxW = 120, boxH = 100, gap = 10;
  const totalW = phases.length * (boxW + gap) - gap;
  const svgW = totalW + 20;

  return (
    <div className="w-full overflow-x-auto">
      <svg viewBox={`0 0 ${svgW} 190`} className="w-full max-w-3xl mx-auto block" aria-label="Incident response lifecycle: Preparation, Identification, Containment, Eradication, Recovery, Lessons Learned">
        {phases.map((p, i) => {
          const x = 10 + i * (boxW + gap);
          const nextX = x + boxW + gap / 2;
          return (
            <g key={i}>
              <rect x={x} y="10" width={boxW} height={boxH} rx="8" fill={p.color} />
              <text x={x + boxW / 2} y="27" textAnchor="middle" fill="white" fontSize="11.5" fontWeight="bold">{p.label}</text>
              {p.points.map((pt, pi) => (
                <text key={pi} x={x + 8} y={44 + pi * 16} fill="white" fontSize="8.5" opacity="0.92">• {pt}</text>
              ))}
              {i < phases.length - 1 && (
                <path d={`M ${nextX - 5} 60 L ${nextX + 5} 60`} stroke="white" strokeWidth="2" markerEnd="url(#arrowWir)" />
              )}
            </g>
          );
        })}

        {/* Lessons Learned → Preparation feedback loop */}
        <path
          d={`M ${10 + (phases.length - 1) * (boxW + gap) + boxW / 2} 116 Q ${svgW / 2} 150 ${10 + boxW / 2} 116`}
          stroke="#94a3b8" strokeWidth="1.5" fill="none" strokeDasharray="5,3"
          markerEnd="url(#arrowGrayIr)"
        />
        <text x={svgW / 2} y="161" textAnchor="middle" fill="#94a3b8" fontSize="9">Lessons learned feed back into Preparation</text>

        <rect x="10" y="168" width={svgW - 20} height="14" rx="4" fill="#f1f5f9" />
        <text x={svgW / 2} y="178" textAnchor="middle" fill="#64748b" fontSize="9">
          PICERL — containment always precedes eradication; preserve evidence before remediating
        </text>

        <defs>
          <marker id="arrowWir" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L0,6 L6,3 z" fill="white" />
          </marker>
          <marker id="arrowGrayIr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L0,6 L6,3 z" fill="#94a3b8" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}
