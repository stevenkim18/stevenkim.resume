"use client";

import { useState } from "react";
import { Resume } from "@/components/Resume";
import { ResumeKR } from "@/components/ResumeKR";
import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";

export default function Home() {
  const [lang, setLang] = useState<"en" | "kr">("en");

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 print:p-0 print:bg-white">
      {/* 컨트롤 패널 (인쇄 시 숨김) */}
      <div className="mb-6 flex gap-4 print:hidden">
        <div className="bg-white p-1 rounded-lg shadow-sm border border-gray-200 flex">
          <button
            onClick={() => setLang("en")}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${lang === "en"
                ? "bg-gray-900 text-white shadow"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
          >
            English (US)
          </button>
          <button
            onClick={() => setLang("kr")}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${lang === "kr"
                ? "bg-gray-900 text-white shadow"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
          >
            한국어 (KR)
          </button>
        </div>

        <Button
          variant="outline"
          className="bg-white"
          onClick={() => window.print()}
        >
          <Printer className="w-4 h-4 mr-2" />
          Print / Save PDF
        </Button>
      </div>

      {/* 이력서 컨테이너 (A4 비율, 화면에서는 그림자 포함) */}
      <div className="w-full max-w-[210mm] min-h-[297mm] bg-white shadow-xl print:shadow-none print:w-full print:max-w-none print:h-auto overflow-hidden">
        {lang === "en" ? <Resume /> : <ResumeKR />}
      </div>

      <p className="mt-8 text-sm text-gray-500 print:hidden">
        Tip: Press the print button and select &quot;Save as PDF&quot; to export.
      </p>
    </div>
  );
}
