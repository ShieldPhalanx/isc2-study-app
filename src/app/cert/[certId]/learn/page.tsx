import Link from "next/link";
import { notFound } from "next/navigation";
import { certifications } from "@/data/certifications";
import { studyContent } from "@/data/studyContent";
import { questions } from "@/data/questions";

const colorMap: Record<string, string> = {
  blue: "bg-blue-600",
  green: "bg-green-600",
  purple: "bg-purple-600",
  orange: "bg-orange-600",
};

const ringMap: Record<string, string> = {
  blue: "ring-blue-200 hover:ring-blue-400",
  green: "ring-green-200 hover:ring-green-400",
  purple: "ring-purple-200 hover:ring-purple-400",
  orange: "ring-orange-200 hover:ring-orange-400",
};

export default async function LearnPage(props: PageProps<"/cert/[certId]/learn">) {
  const { certId } = await props.params;
  const cert = certifications.find((c) => c.id === certId);
  if (!cert) notFound();

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <Link href={`/cert/${certId}`} className="text-sm text-gray-500 hover:text-gray-700 mb-6 inline-block">
          ← {cert.name}
        </Link>

        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Study — {cert.name}</h1>
          <p className="text-gray-500 text-sm">Select a domain to read study notes, key terms, and exam tips.</p>
        </div>

        <div className="space-y-3">
          {cert.domains.map((domain, i) => {
            const content = studyContent.find((c) => c.domainId === domain.id);
            const qCount = questions.filter((q) => q.domainId === domain.id).length;

            return (
              <Link
                key={domain.id}
                href={`/cert/${certId}/learn/${domain.id}`}
                className={`block bg-white border border-gray-200 ring-2 ring-transparent rounded-xl px-5 py-4 transition-all ${ringMap[cert.color]}`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs font-bold text-white px-2 py-0.5 rounded ${colorMap[cert.color]}`}>
                        D{i + 1}
                      </span>
                      <span className="text-sm font-semibold text-gray-900">{domain.name}</span>
                    </div>
                    {content && (
                      <p className="text-xs text-gray-500 line-clamp-2 mt-1">{content.overview}</p>
                    )}
                  </div>
                  <div className="ml-4 text-right shrink-0">
                    <p className="text-xs text-gray-400">{domain.weight}% of exam</p>
                    <p className="text-xs text-gray-400">{qCount} questions</p>
                    {content && (
                      <p className="text-xs text-gray-400">{content.sections.length} topics</p>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
