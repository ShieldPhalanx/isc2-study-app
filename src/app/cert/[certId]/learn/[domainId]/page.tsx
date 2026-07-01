import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { certifications } from "@/data/certifications";
import { studyContent } from "@/data/studyContent";
import { questions } from "@/data/questions";
import MarkReadButton from "@/components/MarkReadButton";
import DomainQuizBadge from "@/components/DomainQuizBadge";
import { diagramRegistry } from "@/components/diagrams";
import KeyTermCard from "@/components/KeyTermCard";

export async function generateMetadata(props: PageProps<"/cert/[certId]/learn/[domainId]">): Promise<Metadata> {
  const { certId, domainId } = await props.params;
  const cert = certifications.find((c) => c.id === certId);
  const domain = cert?.domains.find((d) => d.id === domainId);
  if (!cert || !domain) return {};
  return {
    title: `${domain.name} — ${cert.name} Study`,
    description: `Study notes and exam tips for the ${cert.name} domain: ${domain.name} (${domain.weight}% of exam).`,
  };
}

const colorMap: Record<string, string> = {
  blue: "bg-blue-600",
  green: "bg-green-600",
  purple: "bg-purple-600",
  orange: "bg-orange-600",
};

const lightMap: Record<string, string> = {
  blue: "bg-blue-50 border-blue-100 text-blue-800",
  green: "bg-green-50 border-green-100 text-green-800",
  purple: "bg-purple-50 border-purple-100 text-purple-800",
  orange: "bg-orange-50 border-orange-100 text-orange-800",
};

const dotMap: Record<string, string> = {
  blue: "bg-blue-400",
  green: "bg-green-400",
  purple: "bg-purple-400",
  orange: "bg-orange-400",
};

export default async function DomainLearnPage(
  props: PageProps<"/cert/[certId]/learn/[domainId]">
) {
  const { certId, domainId } = await props.params;
  const cert = certifications.find((c) => c.id === certId);
  if (!cert) notFound();

  const domain = cert.domains.find((d) => d.id === domainId);
  if (!domain) notFound();

  const content = studyContent.find((c) => c.domainId === domainId);
  if (!content) notFound();

  const domainIndex = cert.domains.findIndex((d) => d.id === domainId);
  const prevDomain = domainIndex > 0 ? cert.domains[domainIndex - 1] : null;
  const nextDomain = domainIndex < cert.domains.length - 1 ? cert.domains[domainIndex + 1] : null;
  const domainQCount = questions.filter((q) => q.domainId === domainId).length;

  return (
    <main id="main-content" className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link href={`/cert/${certId}`} className="hover:text-gray-600">{cert.name}</Link>
          <span aria-hidden="true">/</span>
          <Link href={`/cert/${certId}/learn`} className="hover:text-gray-600">Study</Link>
          <span aria-hidden="true">/</span>
          <span className="text-gray-600" aria-current="page">Domain {domainIndex + 1}</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className={`text-xs font-bold text-white px-2 py-0.5 rounded ${colorMap[cert.color]}`}>
              D{domainIndex + 1} · {domain.weight}% of exam
            </span>
            <DomainQuizBadge certId={certId} domainId={domainId} />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-3">{domain.name}</h1>
          <p className="text-gray-600 leading-relaxed">{content.overview}</p>
        </div>

        {/* Topic Sections */}
        <div className="space-y-6 mb-10">
          {content.sections.map((section) => (
            <div key={section.title} className="bg-white border border-gray-200 rounded-xl p-6">
              <h2 className="text-base font-semibold text-gray-800 mb-4">{section.title}</h2>
              <ul className="space-y-2">
                {section.points.map((point, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-700">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${dotMap[cert.color]}`} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Key Terms */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold text-gray-800 mb-1">Key Terms</h2>
          <p className="text-xs text-gray-400 mb-4">Tap a term to expand details and see a real-world example.</p>
          <div className="grid grid-cols-1 gap-2">
            {content.keyTerms.map((kt) => (
              <KeyTermCard
                key={kt.term}
                term={kt.term}
                definition={kt.definition}
                detail={kt.detail}
                example={kt.example}
                color={cert.color}
              />
            ))}
          </div>
        </div>

        {/* Visual Diagrams */}
        {content.diagramIds && content.diagramIds.length > 0 && (
          <div className="mb-10">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Visual Reference</h2>
            <div className="space-y-6">
              {content.diagramIds.map((id) => {
                const DiagramComponent = diagramRegistry[id];
                if (!DiagramComponent) return null;
                return (
                  <div key={id} className="bg-white border border-gray-200 rounded-xl p-4 overflow-hidden">
                    <DiagramComponent />
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Exam Tips */}
        <div className={`rounded-xl border p-6 mb-10 ${lightMap[cert.color]}`}>
          <h2 className="text-base font-semibold mb-4">Exam Tips</h2>
          <ul className="space-y-2">
            {content.examTips.map((tip, i) => (
              <li key={i} className="flex gap-3 text-sm">
                <span className="font-bold shrink-0">{i + 1}.</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Mark as read + test CTA */}
        <MarkReadButton domainId={domainId} certColor={cert.color} />
        {domainQCount > 0 && (
          <Link
            href={`/cert/${certId}/quiz?domain=${domainId}`}
            className="flex items-center justify-center gap-1.5 w-full py-2.5 mb-6 rounded-xl border border-gray-200 text-sm text-gray-600 hover:border-gray-400 hover:text-gray-900 transition-colors"
          >
            Test yourself on this domain · {domainQCount} question{domainQCount !== 1 ? "s" : ""} →
          </Link>
        )}

        {/* Domain navigation */}
        <div className="flex gap-3">
          {prevDomain ? (
            <Link
              href={`/cert/${certId}/learn/${prevDomain.id}`}
              className="flex-1 py-3 px-4 bg-white border border-gray-200 rounded-xl text-sm text-gray-700 hover:border-gray-400 transition-colors text-left"
            >
              <p className="text-xs text-gray-400 mb-0.5">← Previous</p>
              <p className="font-medium truncate">{prevDomain.name}</p>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
          {nextDomain ? (
            <Link
              href={`/cert/${certId}/learn/${nextDomain.id}`}
              className="flex-1 py-3 px-4 bg-white border border-gray-200 rounded-xl text-sm text-gray-700 hover:border-gray-400 transition-colors text-right"
            >
              <p className="text-xs text-gray-400 mb-0.5">Next →</p>
              <p className="font-medium truncate">{nextDomain.name}</p>
            </Link>
          ) : (
            <Link
              href={`/cert/${certId}`}
              className="flex-1 py-3 px-4 bg-white border border-gray-200 rounded-xl text-sm text-gray-700 hover:border-gray-400 transition-colors text-right"
            >
              <p className="text-xs text-gray-400 mb-0.5">Done →</p>
              <p className="font-medium">Back to {cert.name}</p>
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
