import { notFound } from "next/navigation";
import { ResumePage } from "@/components/ResumePage";

interface LangPageProps {
  params: Promise<{
    lang: string;
  }>;
}

export default async function LangPage({ params }: LangPageProps) {
  const { lang } = await params;

  if (lang !== "en" && lang !== "kr") {
    notFound();
  }

  return <ResumePage lang={lang} />;
}
