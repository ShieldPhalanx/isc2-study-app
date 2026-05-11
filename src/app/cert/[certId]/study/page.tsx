import { notFound } from "next/navigation";
import { certifications } from "@/data/certifications";
import { questions } from "@/data/questions";
import StudyClient from "./StudyClient";

export default async function StudyPage(props: PageProps<"/cert/[certId]/study">) {
  const { certId } = await props.params;
  const cert = certifications.find((c) => c.id === certId);
  if (!cert) notFound();

  const certQuestions = questions.filter((q) => q.certId === certId);
  if (certQuestions.length === 0) notFound();

  return <StudyClient cert={cert} questions={certQuestions} />;
}
