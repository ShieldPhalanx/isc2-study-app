import Link from "next/link";
import { notFound } from "next/navigation";
import { studyContent } from "@/data/studyContent";
import { certifications } from "@/data/certifications";
import { questions } from "@/data/questions";
import CertProgressBar from "@/components/CertProgressBar";
import DomainQuizStats from "@/components/DomainQuizStats";

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

const quizBtnMap: Record<string, string> = {
  blue: "text-blue-600 hover:bg-blue-50 border-blue-200",
  green: "text-green-600 hover:bg-green-50 border-green-200",
  purple: "text-purple-600 hover:bg-purple-50 border-purple-200",
  orange: "text-orange-600 hover:bg-orange-50 border-orange-200",
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
          <CertProgressBar certColor={cert.color} domainIds={cert.domains.map((d) => d.id)} />
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          <Link
            href={`/cert/${cert.id}/learn`}
            className={`px-5 py-2.5 rounded-lg text-white font-medium text-sm ${colorMap[cert.color]} hover:opacity-90 transition-opacity`}
          >
            Study Domains
          </Link>
          <Link
            href={`/cert/${cert.id}/quiz`}
            className={`px-5 py-2.5 rounded-lg border-2 font-medium text-sm text-gray-700 bg-white transition-colors ${borderMap[cert.color]}`}
          >
            Full Practice Quiz
          </Link>
          <Link
            href={`/cert/${cert.id}/study`}
            className={`px-5 py-2.5 rounded-lg border-2 font-medium text-sm text-gray-700 bg-white transition-colors ${borderMap[cert.color]}`}
          >
            Flashcards
          </Link>
        </div>

        {/* Per-domain quiz performance — only shows after first quiz attempt */}
        <DomainQuizStats cert={cert} />

        <h2 className="text-lg font-semibold text-gray-800 mb-3">Exam Domains</h2>
        <div className="space-y-2">
          {cert.domains.map((domain, i) => {
            const domainQCount = certQuestions.filter((q) => q.domainId === domain.id).length;
            const hasContent = studyContent.some((c) => c.domainId === domain.id);
            return (
              <div key={domain.id} className="bg-white border border-gray-200 rounded-lg px-4 py-3 flex items-center justify-between hover:border-gray-300 transition-colors">
                <Link
                  href={hasContent ? `/cert/${cert.id}/learn/${domain.id}` : `/cert/${cert.id}/learn`}
                  className="flex-1 min-w-0"
                >
                  <span className="text-xs font-medium text-gray-400 mr-2">D{i + 1}</span>
                  <span className="text-sm font-medium text-gray-800">{domain.name}</span>
                </Link>
                <div className="flex items-center gap-3 text-xs text-gray-400 shrink-0 ml-4">
                  <span>{domainQCount} q</span>
                  <span className="font-semibold text-gray-600">{domain.weight}%</span>
                  <Link
                    href={`/cert/${cert.id}/quiz?domain=${domain.id}`}
                    className={`border rounded px-2 py-0.5 font-medium transition-colors ${quizBtnMap[cert.color]}`}
                  >
                    Quiz
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
