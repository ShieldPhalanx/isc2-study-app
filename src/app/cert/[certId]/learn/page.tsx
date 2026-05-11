import Link from "next/link";
import { notFound } from "next/navigation";
import { certifications } from "@/data/certifications";
import { studyContent } from "@/data/studyContent";
import { questions } from "@/data/questions";
import DomainProgressList from "@/components/DomainProgressList";

export default async function LearnPage(props: PageProps<"/cert/[certId]/learn">) {
  const { certId } = await props.params;
  const cert = certifications.find((c) => c.id === certId);
  if (!cert) notFound();

  const domains = cert.domains.map((d) => ({
    ...d,
    qCount: questions.filter((q) => q.domainId === d.id).length,
  }));

  const contentMap = Object.fromEntries(
    studyContent
      .filter((c) => cert.domains.some((d) => d.id === c.domainId))
      .map((c) => [c.domainId, c])
  );

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <Link href={`/cert/${certId}`} className="text-sm text-gray-500 hover:text-gray-700 mb-6 inline-block">
          ← {cert.name}
        </Link>

        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Study — {cert.name}</h1>
          <p className="text-gray-500 text-sm">Select a domain to read study notes, key terms, and exam tips.</p>
        </div>

        <DomainProgressList cert={cert} domains={domains} contentMap={contentMap} />
      </div>
    </main>
  );
}
