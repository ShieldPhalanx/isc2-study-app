import Link from "next/link";
import { notFound } from "next/navigation";
import { certifications } from "@/data/certifications";
import { questions } from "@/data/questions";

const colorMap: Record<string, string> = {
  blue: "bg-blue-600",
  green: "bg-green-600",
  purple: "bg-purple-600",
  orange: "bg-orange-600",
};

const borderMap: Record<string, string> = {
  blue: "border-blue-200 hover:border-blue-400",
  green: "border-green-200 hover:border-green-400",
  purple: "border-purple-200 hover:border-purple-400",
  orange: "border-orange-200 hover:border-orange-400",
};

export default async function CertPage(props: PageProps<"/cert/[certId]">) {
  const { certId } = await props.params;
  const cert = certifications.find((c) => c.id === certId);
  if (!cert) notFound();

  const certQuestions = questions.filter((q) => q.certId === cert.id);

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-sm text-gray-500 hover:text-gray-700 mb-6 inline-block">
          ← All certifications
        </Link>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-3xl font-bold text-gray-900">{cert.name}</h1>
            <span className={`text-xs font-semibold px-2 py-1 rounded-full text-white ${colorMap[cert.color]}`}>
              {cert.org}
            </span>
          </div>
          <p className="text-gray-600">{cert.fullName}</p>
          <p className="text-sm text-gray-400 mt-1">{certQuestions.length} questions across {cert.domains.length} domains</p>
        </div>

        <div className="flex gap-3 mb-8">
          <Link
            href={`/cert/${cert.id}/quiz`}
            className={`px-5 py-2.5 rounded-lg text-white font-medium text-sm ${colorMap[cert.color]} hover:opacity-90 transition-opacity`}
          >
            Start Quiz
          </Link>
          <Link
            href={`/cert/${cert.id}/study`}
            className={`px-5 py-2.5 rounded-lg border-2 font-medium text-sm text-gray-700 bg-white transition-colors ${borderMap[cert.color]}`}
          >
            Flashcard Study
          </Link>
        </div>

        <h2 className="text-lg font-semibold text-gray-800 mb-3">Exam Domains</h2>
        <div className="space-y-2">
          {cert.domains.map((domain, i) => {
            const domainQCount = certQuestions.filter((q) => q.domainId === domain.id).length;
            return (
              <div key={domain.id} className="bg-white border border-gray-200 rounded-lg px-4 py-3 flex items-center justify-between">
                <div>
                  <span className="text-xs font-medium text-gray-400 mr-2">D{i + 1}</span>
                  <span className="text-sm font-medium text-gray-800">{domain.name}</span>
                </div>
                <div className="flex items-center gap-4 text-xs text-gray-400">
                  <span>{domainQCount} questions</span>
                  <span className="font-semibold text-gray-600">{domain.weight}%</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
