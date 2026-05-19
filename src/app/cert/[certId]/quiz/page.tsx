import { notFound } from "next/navigation";
import { certifications } from "@/data/certifications";
import { questions } from "@/data/questions";
import QuizClient from "./QuizClient";

export default async function QuizPage(
  props: PageProps<"/cert/[certId]/quiz"> & { searchParams: Promise<{ domain?: string }> }
) {
  const { certId } = await props.params;
  const { domain } = await props.searchParams;

  const cert = certifications.find((c) => c.id === certId);
  if (!cert) notFound();

  const filtered = domain
    ? questions.filter((q) => q.domainId === domain)
    : questions.filter((q) => q.certId === certId);

  if (filtered.length === 0) notFound();

  const domainName = domain
    ? cert.domains.find((d) => d.id === domain)?.name
    : undefined;

  return <QuizClient cert={cert} questions={filtered} domainName={domainName} />;
}
