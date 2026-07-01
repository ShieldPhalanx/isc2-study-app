export default function CisspOsiModel() {
  const layers = [
    { num: 7, name: "Application", examples: "HTTP, SMTP, DNS, FTP", color: "#7c3aed" },
    { num: 6, name: "Presentation", examples: "Encryption, compression, encoding", color: "#0369a1" },
    { num: 5, name: "Session", examples: "Session setup, maintenance, teardown", color: "#0891b2" },
    { num: 4, name: "Transport", examples: "TCP (reliable), UDP (fast)", color: "#0f766e" },
    { num: 3, name: "Network", examples: "IP addressing, routers", color: "#15803d" },
    { num: 2, name: "Data Link", examples: "MAC addresses, switches, VLANs, ARP", color: "#b45309" },
    { num: 1, name: "Physical", examples: "Cables, hubs, NICs", color: "#7c2d12" },
  ];

  const numW = 50, nameW = 140, exW = 340, rowH = 32;
  const totalW = numW + nameW + exW;
  const totalH = rowH * layers.length;

  return (
    <div className="w-full overflow-x-auto">
      <svg viewBox={`0 0 ${totalW} ${totalH + 60}`} className="w-full max-w-2xl mx-auto block" aria-label="OSI seven-layer model with example protocols and devices per layer">
        <text x={numW / 2} y="-6" />
        {layers.map((l, i) => {
          const y = i * rowH;
          return (
            <g key={l.num}>
              <rect x="0" y={y} width={numW - 2} height={rowH - 2} fill={l.color} rx="4" />
              <text x={numW / 2} y={y + rowH / 2 + 4} textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">{l.num}</text>

              <rect x={numW} y={y} width={nameW - 2} height={rowH - 2} fill={l.color} opacity="0.85" />
              <text x={numW + nameW / 2} y={y + rowH / 2 + 4} textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">{l.name}</text>

              <rect x={numW + nameW} y={y} width={exW - 2} height={rowH - 2} fill={i % 2 === 0 ? "#f8fafc" : "#f1f5f9"} stroke="#e2e8f0" />
              <text x={numW + nameW + 10} y={y + rowH / 2 + 4} fill="#374151" fontSize="10">{l.examples}</text>
            </g>
          );
        })}

        <rect x="0" y={totalH + 8} width={totalW} height="46" rx="6" fill="#f1f5f9" stroke="#e2e8f0" />
        <text x={totalW / 2} y={totalH + 24} textAnchor="middle" fill="#475569" fontSize="10" fontWeight="bold">
          Mnemonic (top→bottom): All People Seem To Need Data Processing
        </text>
        <text x={totalW / 2} y={totalH + 40} textAnchor="middle" fill="#64748b" fontSize="10">
          TCP/IP collapses these into 4 layers: Application, Transport, Internet, Network Access
        </text>
      </svg>
    </div>
  );
}
