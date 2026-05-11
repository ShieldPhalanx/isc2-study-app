import { notFound } from "next/navigation";
import { certifications } from "@/data/certifications";
import { questions } from "@/data/questions";
import QuizClient from "./QuizClient";

export default async function QuizPage(props: PageProps<"/cert/[certId]/quiz">) {
  const { certId } = await props.params;
  const cert = certifications.find((c) => c.id === certId);
  if (!cert) notFound();

  const certQuestions = questions.filter((q) => q.certId === certId);
  if (certQuestions.length === 0) notFound();

  return <QuizClient cert={cert} questions={certQuestions} />;
}
