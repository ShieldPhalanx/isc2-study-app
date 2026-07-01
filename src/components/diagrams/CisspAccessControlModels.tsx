export default function CisspAccessControlModels() {
  const quadrants = [
    { label: "DAC", sub: "Discretionary Access Control", tip: "Resource owner decides who gets access", color: "#1d4ed8" },
    { label: "MAC", sub: "Mandatory Access Control", tip: "OS enforces fixed labels & clearances", color: "#dc2626" },
    { label: "RBAC", sub: "Role-Based Access Control", tip: "Permissions tied to assigned roles", color: "#15803d" },
    { label: "ABAC", sub: "Attribute-Based Access Control", tip: "Rules evaluate user, resource & context", color: "#b45309" },
  ];

  return (
    <div className="w-full overflow-x-auto">
      <svg viewBox="0 0 560 300" className="w-full max-w-xl mx-auto block" aria-label="Four access control models: DAC, MAC, RBAC, ABAC">
        {quadrants.map((q, i) => {
          const col = i % 2;
          const row = Math.floor(i / 2);
          const x = 20 + col * 260;
          const y = 10 + row * 120;
          return (
            <g key={i}>
              <rect x={x} y={y} width="240" height="108" rx="10" fill={q.color} />
              <text x={x + 120} y={y + 32} textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">{q.label}</text>
              <text x={x + 120} y={y + 50} textAnchor="middle" fill="white" fontSize="10" opacity="0.85">{q.sub}</text>
              <line x1={x + 20} y1={y + 60} x2={x + 220} y2={y + 60} stroke="white" strokeWidth="0.5" opacity="0.3" />
              <text x={x + 120} y={y + 82} textAnchor="middle" fill="white" fontSize="10.5">{q.tip}</text>
            </g>
          );
        })}

        <rect x="20" y="256" width="480" height="34" rx="6" fill="#f1f5f9" stroke="#e2e8f0" />
        <text x="260" y="270" textAnchor="middle" fill="#475569" fontSize="10" fontWeight="bold">
          RBAC is the most common enterprise model — scales cleanly and simplifies audits
        </text>
        <text x="260" y="283" textAnchor="middle" fill="#64748b" fontSize="10">
          ABAC is the most fine-grained: it can factor in time of day, device, and data sensitivity
        </text>
      </svg>
    </div>
  );
}
