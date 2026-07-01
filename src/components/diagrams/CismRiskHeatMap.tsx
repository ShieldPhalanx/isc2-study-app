export default function CismRiskHeatMap() {
  const impacts = ["Negligible", "Minor", "Moderate", "Significant", "Critical"];
  const likelihoods = ["Almost Certain", "Likely", "Possible", "Unlikely", "Rare"];

  function color(row: number, col: number) {
    const score = (5 - row) * (col + 1);
    if (score >= 16) return { bg: "#dc2626", text: "#fff", label: "Critical" };
    if (score >= 10) return { bg: "#f97316", text: "#fff", label: "High" };
    if (score >= 5)  return { bg: "#eab308", text: "#000", label: "Medium" };
    return { bg: "#22c55e", text: "#fff", label: "Low" };
  }

  const cellW = 80, cellH = 38, labelW = 100, topH = 44;
  const legendY0 = topH + cellH * 5 + 10;
  const legendRowH = 18;
  const tipY = legendY0 + legendRowH * 2 + 6;

  return (
    <div className="w-full overflow-x-auto">
      <svg
        viewBox={`0 0 ${labelW + cellW * 5 + 10} ${tipY + 30}`}
        className="w-full max-w-2xl mx-auto block"
        aria-label="Risk heat map showing 5x5 likelihood vs impact matrix"
      >
        {/* Title row - Impact */}
        <text x={labelW + (cellW * 5) / 2} y="16" textAnchor="middle" fill="#374151" fontSize="12" fontWeight="bold">Impact →</text>
        {impacts.map((imp, ci) => (
          <text key={ci} x={labelW + ci * cellW + cellW / 2} y="32" textAnchor="middle" fill="#6b7280" fontSize="9">{imp}</text>
        ))}

        {/* Left label - Likelihood */}
        <text
          x="10"
          y={topH + (cellH * 5) / 2}
          textAnchor="middle"
          fill="#374151"
          fontSize="12"
          fontWeight="bold"
          transform={`rotate(-90, 10, ${topH + (cellH * 5) / 2})`}
        >Likelihood ↑</text>

        {/* Grid */}
        {likelihoods.map((lik, ri) => (
          <g key={ri}>
            <text
              x={labelW - 6}
              y={topH + ri * cellH + cellH / 2 + 4}
              textAnchor="end"
              fill="#6b7280"
              fontSize="9"
            >{lik}</text>
            {impacts.map((_, ci) => {
              const c = color(ri, ci);
              return (
                <g key={ci}>
                  <rect
                    x={labelW + ci * cellW}
                    y={topH + ri * cellH}
                    width={cellW}
                    height={cellH}
                    fill={c.bg}
                    stroke="white"
                    strokeWidth="2"
                    rx="2"
                  />
                  <text
                    x={labelW + ci * cellW + cellW / 2}
                    y={topH + ri * cellH + cellH / 2 + 4}
                    textAnchor="middle"
                    fill={c.text}
                    fontSize="9"
                    fontWeight="bold"
                  >{c.label}</text>
                </g>
              );
            })}
          </g>
        ))}

        {/* Legend — 2x2 grid so longer labels don't collide */}
        {[
          { c: "#22c55e", l: "Low — Accept" },
          { c: "#eab308", l: "Medium — Reduce/Monitor" },
          { c: "#f97316", l: "High — Treat" },
          { c: "#dc2626", l: "Critical — Avoid/Transfer" },
        ].map((item, i) => {
          const col = i % 2;
          const row = Math.floor(i / 2);
          const x = labelW + col * 250;
          const y = legendY0 + row * legendRowH;
          return (
            <g key={i}>
              <rect x={x} y={y} width="12" height="12" fill={item.c} rx="2"/>
              <text x={x + 16} y={y + 10} fill="#374151" fontSize="9">{item.l}</text>
            </g>
          );
        })}

        <rect x={labelW} y={tipY} width={cellW * 5} height="22" rx="4" fill="#f1f5f9"/>
        <text x={labelW + (cellW * 5) / 2} y={tipY + 15} textAnchor="middle" fill="#64748b" fontSize="10">
          CISM: Risk = Likelihood × Impact. Treatment decisions flow from this matrix.
        </text>
      </svg>
    </div>
  );
}
