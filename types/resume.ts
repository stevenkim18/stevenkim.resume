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

    // 사이드 프로젝트 (배열)
    sideProjects?: {
        name: string;
        period: string;
        description: string;
        techStack?: string;
        link?: string;      // Demo 웹페이지
        github?: string;    // GitHub 링크
        video?: string;     // 시연 영상 링크
        role?: string;
        achievements?: string[];
    }[];

    // 기타 활동 (배열)
    activities?: {
        text: string;
        links?: { label: string; url: string }[];
    }[];

    // 교육 (배열)
    education?: {
        school: string;
        degree: string;
        period: string;
        link?: string;
    }[];
}
