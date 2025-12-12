export interface ResumeData {
    // 개인정보
    profile: {
        name: string;
        title: string;
        photo?: string;
        email?: string;
        phone?: string;
        location?: string;
        linkedin?: string;
        github?: string;
        website?: string;
    };

    // 요약
    summary?: string;

    // 경력 (배열)
    experience?: {
        company: string;
        companyUrl?: string;
        location?: string;
        role: string;
        employmentType?: "프리랜서" | "계약직" | "인턴" | "Freelance" | "Contract" | "Intern";
        period: string;
        achievements: string[];
    }[];

    // 프로젝트 (배열)
    projects?: {
        name: string;
        link?: string;
        year: string;
        techStack?: string;
        descriptions: string[];
    }[];

    // 기타 활동 (배열)
    activities?: string[];

    // 교육 (배열)
    education?: {
        school: string;
        degree: string;
        period: string;
    }[];
}
