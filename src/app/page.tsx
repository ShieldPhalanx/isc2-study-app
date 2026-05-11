import Link from "next/link";
import { certifications } from "@/data/certifications";
import { questions } from "@/data/questions";

const colorMap: Record<string, string> = {
  blue: "bg-blue-50 border-blue-200 hover:border-blue-400",
  green: "bg-green-50 border-green-200 hover:border-green-400",
  purple: "bg-purple-50 border-purple-200 hover:border-purple-400",
  orange: "bg-orange-50 border-orange-200 hover:border-orange-400",
};

const badgeMap: Record<string, string> = {
  blue: "bg-blue-100 text-blue-700",
  green: "bg-green-100 text-green-700",
  purple: "bg-purple-100 text-purple-700",
  orange: "bg-orange-100 text-orange-700",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-1">Security Cert Study</h1>
        <p className="text-gray-500 mb-8">ISC² &amp; ISACA certification prep — pick a cert to start</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certifications.map((cert) => {
            const total = questions.filter((q) => q.certId === cert.id).length;
            return (
              <Link
                key={cert.id}
                href={`/cert/${cert.id}`}
                className={`border-2 rounded-xl p-6 transition-colors cursor-pointer ${colorMap[cert.color]}`}
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="text-2xl font-bold text-gray-900">{cert.name}</span>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${badgeMap[cert.color]}`}>
                    {cert.org}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-4">{cert.fullName}</p>
                <div className="flex gap-4 text-xs text-gray-500">
                  <span>{cert.domains.length} domains</span>
                  <span>{total} questions</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
