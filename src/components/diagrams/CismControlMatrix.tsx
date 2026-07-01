export default function CismControlMatrix() {
  const types = ["Preventive", "Detective", "Corrective"];
  const cats = ["Administrative", "Technical", "Physical"];
  const examples: Record<string, string[]> = {
    "Preventive-Administrative":  ["Security policy", "Hiring background check", "NDA agreements"],
    "Preventive-Technical":       ["Firewall", "Encryption", "MFA / access controls"],
    "Preventive-Physical":        ["Badge lock", "Mantrap", "Bollards"],
    "Detective-Administrative":   ["Audit log review", "Separation of duties", "Mandatory vacation"],
    "Detective-Technical":        ["IDS/SIEM", "Log monitoring", "File integrity monitoring"],
    "Detective-Physical":         ["CCTV cameras", "Motion sensors", "Security guard patrols"],
    "Corrective-Administrative":  ["Incident response plan", "Disciplinary action", "Policy update"],
    "Corrective-Technical":       ["Patch management", "AV quarantine", "System restore"],
    "Corrective-Physical":        ["Fire suppression", "Emergency power cutoff", "Backup site"],
  };

  const typeColors = ["#1d4ed8", "#b45309", "#15803d"];
  const catColors = ["#7c3aed", "#0891b2", "#9f1239"];
  const cellW = 170, cellH = 68, labelH = 36, labelW = 110;

  return (
    <div className="w-full overflow-x-auto">
      <svg
        viewBox={`0 0 ${labelW + cellW * 3 + 10} ${labelH + cellH * 3 + 32}`}
        className="w-full max-w-3xl mx-auto block"
        aria-label="Security control matrix showing control types (Preventive, Detective, Corrective) vs categories (Administrative, Technical, Physical)"
      >
        {/* Column headers */}
        {types.map((t, i) => (
          <g key={t}>
            <rect x={labelW + i * cellW} y={0} width={cellW - 2} height={labelH - 2} rx="6" fill={typeColors[i]}/>
            <text x={labelW + i * cellW + cellW / 2} y="22" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">{t}</text>
          </g>
        ))}

        {/* Row headers + cells */}
        {cats.map((cat, ri) => (
          <g key={cat}>
            <rect x={0} y={labelH + ri * cellH} width={labelW - 4} height={cellH - 2} rx="6" fill={catColors[ri]}/>
            <text x={labelW / 2 - 2} y={labelH + ri * cellH + cellH / 2 - 6} textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">{cat}</text>

            {types.map((type, ci) => {
              const key = `${type}-${cat}`;
              const exs = examples[key] ?? [];
              return (
                <g key={ci}>
                  <rect
                    x={labelW + ci * cellW}
                    y={labelH + ri * cellH}
                    width={cellW - 2}
                    height={cellH - 2}
                    rx="4"
                    fill={ri % 2 === 0 ? "#f8fafc" : "#f1f5f9"}
                    stroke="#e2e8f0"
                  />
                  {exs.map((ex, ei) => (
                    <text
                      key={ei}
                      x={labelW + ci * cellW + 8}
                      y={labelH + ri * cellH + 16 + ei * 17}
                      fill="#374151"
                      fontSize="9.5"
                    >• {ex}</text>
                  ))}
                </g>
              );
            })}
          </g>
        ))}

        <rect x={0} y={labelH + cellH * 3 + 4} width={labelW + cellW * 3 + 4} height="22" rx="5" fill="#f8fafc" stroke="#e2e8f0"/>
        <text x={(labelW + cellW * 3) / 2} y={labelH + cellH * 3 + 18} textAnchor="middle" fill="#64748b" fontSize="10">
          CISM: Controls should span all three categories — no single category provides complete protection.
        </text>
      </svg>
    </div>
  );
}
