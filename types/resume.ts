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

    // 기술 스택
    skills?: {
        category: string;
        items: {
            name: string;
            proficient?: boolean; // true면 볼드 표시
        }[];
    }[];

    // 경력 (배열)
    experience?: {
        company: string;
        companyUrl?: string;
        companyDescription?: string; // 회사 소개 (한 줄)
        location?: string;
        role: string;
        employmentType?: "프리랜서" | "계약직" | "인턴" | "Freelance" | "Contract" | "Intern" | "정규직" | "Full-time";
        period: string;
        achievements: string[];
        leaveReason?: string; // 퇴사 사유
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
