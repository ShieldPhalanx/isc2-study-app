import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { certifications } from "@/data/certifications";
import { questions } from "@/data/questions";
import StudyClient from "./StudyClient";

export async function generateMetadata(props: PageProps<"/cert/[certId]/study">): Promise<Metadata> {
  const { certId } = await props.params;
  const cert = certifications.find((c) => c.id === certId);
  if (!cert) return {};
  return {
    title: `Flashcards — ${cert.name}`,
    description: `Flashcard study session for the ${cert.fullName} (${cert.name}) exam.`,
  };
}

export default async function StudyPage(props: PageProps<"/cert/[certId]/study">) {
  const { certId } = await props.params;
  const cert = certifications.find((c) => c.id === certId);
  if (!cert) notFound();

  const certQuestions = questions.filter((q) => q.certId === certId);
  if (certQuestions.length === 0) notFound();

  return <StudyClient cert={cert} questions={certQuestions} />;
}
