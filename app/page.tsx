"use client";

import { useState } from "react";
import { Resume } from "@/components/Resume";
import { Button } from "@/components/ui/button";
import { Printer, Globe } from "lucide-react";

import resumeKo from "@/data/resume-ko.json";
import resumeEn from "@/data/resume-en.json";
import { ResumeData } from "@/types/resume";

export default function Home() {
  const [lang, setLang] = useState<"en" | "kr">("en");

  const resumeData: ResumeData = lang === "en" ? resumeEn : resumeKo;

  const toggleLang = () => {
    setLang(lang === "en" ? "kr" : "en");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center print:p-0 print:bg-white">
      {/* 이력서 컨테이너 (A4 비율, 화면에서는 그림자 포함) */}
      <div className="w-full max-w-[210mm] min-h-[297mm] bg-white shadow-xl print:shadow-none print:w-full print:max-w-none print:h-auto overflow-hidden">
        <Resume data={resumeData} />
      </div>

      {/* 플로팅 컨트롤 패널 (우측 하단) */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 print:hidden">
        {/* 언어 전환 버튼 */}
        <Button
          variant="outline"
          size="icon"
          className="h-14 w-14 rounded-full bg-white shadow-lg border-gray-200 hover:bg-gray-50 hover:scale-105 transition-all"
          onClick={toggleLang}
          title={lang === "en" ? "한국어로 전환" : "Switch to English"}
        >
          <span className="text-base font-semibold">
            {lang === "en" ? "KR" : "EN"}
          </span>
        </Button>

        {/* 인쇄 버튼 */}
        <Button
          variant="default"
          size="icon"
          className="h-14 w-14 rounded-full shadow-lg hover:scale-105 transition-all"
          onClick={() => window.print()}
          title="Print / Save PDF"
        >
          <Printer className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
}
