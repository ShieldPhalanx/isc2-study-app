import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { certifications } from "@/data/certifications";
import { questions } from "@/data/questions";
import QuizClient from "./QuizClient";

export async function generateMetadata(props: PageProps<"/cert/[certId]/quiz">): Promise<Metadata> {
  const { certId } = await props.params;
  const cert = certifications.find((c) => c.id === certId);
  if (!cert) return {};
  return {
    title: `Practice Quiz — ${cert.name}`,
    description: `Practice questions for the ${cert.fullName} (${cert.name}) exam.`,
  };
}

export default async function QuizPage(props: PageProps<"/cert/[certId]/quiz">) {
  const { certId } = await props.params;
  const searchParams = await props.searchParams;
  const cert = certifications.find((c) => c.id === certId);
  if (!cert) notFound();

  const certQuestions = questions.filter((q) => q.certId === certId);
  if (certQuestions.length === 0) notFound();

  const initialDomain = typeof searchParams?.domain === "string" ? searchParams.domain : undefined;

  return <QuizClient cert={cert} questions={certQuestions} initialDomain={initialDomain} />;
}
