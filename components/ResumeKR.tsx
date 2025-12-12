"use client";

import { Mail, Phone, MapPin, Linkedin, Github, Globe } from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

export const ResumeKR = () => {
  return (
    <div className="p-8 md:p-12 text-gray-900 font-sans text-[10pt] leading-snug break-keep">
      {/* --- HEADER --- */}
      <header className="border-b border-gray-400 pb-4 mb-5">
        <div className="flex items-start gap-5">
          {/* Profile Photo */}
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTQyNjYxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Profile photo"
            className="w-20 h-20 rounded-full object-cover border-2 border-gray-300 shrink-0"
          />

          {/* Name, Title, and Contact Info */}
          <div className="flex flex-col justify-center gap-2 w-full">
            <div>
              <h1 className="text-3xl font-bold tracking-tight mb-0.5 leading-none">
                김지훈
              </h1>
              <p className="text-lg font-medium text-gray-700 leading-tight">
                Senior Frontend Engineer
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-600">
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" />
                <span>jihoon.dev@example.com</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" />
                <span>010-1234-5678</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>서울, 대한민국</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Linkedin className="w-3.5 h-3.5" />
                <a href="#" className="hover:underline">linkedin.com/in/jihoon-dev</a>
              </div>
              <div className="flex items-center gap-1.5">
                <Github className="w-3.5 h-3.5" />
                <a href="#" className="hover:underline">github.com/jihoon-dev</a>
              </div>
              <div className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5" />
                <a href="#" className="hover:underline">jihoon.dev</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- SUMMARY --- */}
      <section className="mb-5">
        <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 border-b border-gray-200 pb-1">
          Summary
        </h2>
        <p className="text-gray-800">
          6년차 프론트엔드 엔지니어로서 React, TypeScript, Node.js 기반의 확장 가능한 웹 애플리케이션 구축에 강점이 있습니다. 웹 성능 최적화를 통해 사용자 전환율을 증대시킨 경험이 있으며, 주도적으로 디자인 시스템을 도입하여 개발 생산성을 높이는 데 기여했습니다. 비즈니스 임팩트를 최우선으로 생각하며, 유지보수하기 좋은 코드를 작성하는 것을 지향합니다. 주니어 개발자 멘토링과 기술적인 의사결정을 주도하며 팀의 성장을 돕는 데 열정이 있습니다.
        </p>
      </section>

      {/* --- TECHNICAL SKILLS --- */}
      <section className="mb-5">
        <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 border-b border-gray-200 pb-1">
          Technical Skills
        </h2>
        <div className="space-y-0.5">
          <div className="flex">
            <span className="font-semibold w-24 shrink-0">Languages</span>
            <span>JavaScript (ES6+), TypeScript, HTML5, CSS3, SQL, Python, Go</span>
          </div>
          <div className="flex">
            <span className="font-semibold w-24 shrink-0">Frontend</span>
            <span>React, Next.js, Vue.js, Tailwind CSS, Redux, React Query, Webpack</span>
          </div>
          <div className="flex">
            <span className="font-semibold w-24 shrink-0">Backend</span>
            <span>Node.js, Express, NestJS, PostgreSQL, Redis, GraphQL, REST API</span>
          </div>
          <div className="flex">
            <span className="font-semibold w-24 shrink-0">DevOps</span>
            <span>Git, Docker, Kubernetes, AWS (S3, EC2, Lambda), GitHub Actions</span>
          </div>
          <div className="flex">
            <span className="font-semibold w-24 shrink-0">Testing</span>
            <span>Jest, React Testing Library, Cypress, Playwright, Storybook</span>
          </div>
        </div>
      </section>

      {/* --- EXPERIENCE --- */}
      <section className="mb-5">
        <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3 border-b border-gray-200 pb-1">
          Experience
        </h2>

        {/* Job 1 */}
        <div className="mb-4">
          <div className="flex justify-between items-baseline mb-0.5">
            <h3 className="text-base font-bold text-gray-900">테크 스타트업 (Tech Startup Inc.)</h3>
            <span className="text-xs text-gray-500 font-medium">서울 (원격 근무)</span>
          </div>
          <div className="flex justify-between items-baseline mb-1.5">
            <p className="font-semibold text-gray-700 italic text-sm">시니어 프론트엔드 엔지니어</p>
            <span className="text-xs text-gray-500 font-medium">2022.01 – 현재</span>
          </div>
          <ul className="list-disc list-outside ml-3 space-y-0.5 text-gray-800">
            <li className="pl-1">
              기존 레거시 모놀리식 구조를 <strong>Next.js 기반의 마이크로 프론트엔드 아키텍처</strong>로 전환하여 빌드 시간을 60% 단축하고, 3개 스쿼드가 독립적으로 배포할 수 있는 환경을 구축했습니다.
            </li>
            <li className="pl-1">
              메인 랜딩 페이지의 Core Web Vitals를 최적화하여 <strong>LCP를 2.5초에서 0.8초로 개선</strong>했으며, 이를 통해 유저 전환율이 15% 상승하는 성과를 달성했습니다.
            </li>
            <li className="pl-1">
              Radix UI와 Tailwind CSS를 활용한 사내 <strong>디자인 시스템</strong>을 설계 및 구현하여 4개의 프로덕트 간 UI 일관성을 확보하고 개발 속도를 향상시켰습니다.
            </li>
            <li className="pl-1">
              주니어 개발자 2명의 멘토링을 담당하며 코드 리뷰와 주간 페어 프로그래밍을 통해 팀 내 엔지니어링 문화를 주도했습니다.
            </li>
            <li className="pl-1">
              웹 접근성 가이드라인(WCAG 2.1 AA) 준수를 위한 프로젝트를 리딩하여 서비스의 접근성을 개선하고 잠재적인 법적 리스크를 해소했습니다.
            </li>
          </ul>
        </div>

        {/* Job 2 */}
        <div className="mb-4">
          <div className="flex justify-between items-baseline mb-0.5">
            <h3 className="text-base font-bold text-gray-900">글로벌 이커머스 (Global E-commerce Ltd.)</h3>
            <span className="text-xs text-gray-500 font-medium">서울</span>
          </div>
          <div className="flex justify-between items-baseline mb-1.5">
            <p className="font-semibold text-gray-700 italic text-sm">소프트웨어 엔지니어</p>
            <span className="text-xs text-gray-500 font-medium">2019.06 – 2021.12</span>
          </div>
          <ul className="list-disc list-outside ml-3 space-y-0.5 text-gray-800">
            <li className="pl-1">
              <strong>일일 거래액 10억 원 이상</strong>의 결제 프로세스를 전담 개발 및 운영하였으며, 블랙프라이데이 트래픽 급증 시에도 99.99%의 가용성을 유지했습니다.
            </li>
            <li className="pl-1">
              Stripe, PayPal 등 서드파티 결제 모듈 연동 및 에러 핸들링 로직을 개선하여 결제 실패율을 20% 감소시켰습니다.
            </li>
            <li className="pl-1">
              기획팀 및 디자인팀과 협업하여 A/B 테스트 환경을 구축하고 실험을 진행, 평균 주문액(AOV)을 5% 증대시켰습니다.
            </li>
            <li className="pl-1">
              Cypress를 활용한 E2E 테스트 자동화를 도입하여 코드 커버리지를 40%에서 85%로 끌어올리고 배포 후 버그 발생률을 현저히 낮췄습니다.
            </li>
            <li className="pl-1">
              레거시 Redux 상태 관리 로직을 React Query로 마이그레이션하여 데이터 페칭 로직을 단순화하고 보일러플레이트 코드를 40% 제거했습니다.
            </li>
          </ul>
        </div>

        {/* Job 3 */}
        <div className="mb-4">
          <div className="flex justify-between items-baseline mb-0.5">
            <h3 className="text-base font-bold text-gray-900">크리에이티브 에이전시</h3>
            <span className="text-xs text-gray-500 font-medium">서울</span>
          </div>
          <div className="flex justify-between items-baseline mb-1.5">
            <p className="font-semibold text-gray-700 italic text-sm">프론트엔드 개발자</p>
            <span className="text-xs text-gray-500 font-medium">2017.03 – 2019.05</span>
          </div>
          <ul className="list-disc list-outside ml-3 space-y-0.5 text-gray-800">
            <li className="pl-1">
              React와 SCSS를 활용하여 10개 이상의 클라이언트 웹사이트를 반응형으로 구축하였으며, IE11 크로스 브라우징 이슈를 해결했습니다.
            </li>
            <li className="pl-1">
              Gulp/Webpack을 이용한 이미지 최적화 파이프라인을 구축하여 페이지 로딩 속도를 평균 30% 개선했습니다.
            </li>
            <li className="pl-1">
              GSAP 애니메이션을 활용한 대기업 브랜드 프로모션 페이지를 개발하여 사용자 인터랙션과 체류 시간을 높였습니다.
            </li>
          </ul>
        </div>

        {/* Job 4 */}
        <div>
          <div className="flex justify-between items-baseline mb-0.5">
            <h3 className="text-base font-bold text-gray-900">대학교 연구실</h3>
            <span className="text-xs text-gray-500 font-medium">서울</span>
          </div>
          <div className="flex justify-between items-baseline mb-1.5">
            <p className="font-semibold text-gray-700 italic text-sm">학부 연구원 (Research Assistant)</p>
            <span className="text-xs text-gray-500 font-medium">2016.09 – 2017.02</span>
          </div>
          <ul className="list-disc list-outside ml-3 space-y-0.5 text-gray-800">
            <li className="pl-1">
              D3.js를 활용하여 대규모 센서 데이터를 시각화하는 웹 기반 분석 도구 개발에 참여했습니다.
            </li>
            <li className="pl-1">
              MySQL 쿼리 최적화를 통해 시각화 렌더링에 필요한 데이터 조회 시간을 50% 단축했습니다.
            </li>
          </ul>
        </div>
      </section>

      {/* --- PROJECTS --- */}
      <section className="mb-5">
        <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3 border-b border-gray-200 pb-1">
          Key Projects
        </h2>

        <div className="mb-3">
          <div className="flex justify-between items-baseline">
            <h3 className="font-bold text-sm">
              실시간 협업 대시보드 (Real-time Collaboration Dashboard)
              <a href="#" className="ml-2 font-normal text-blue-600 hover:underline text-xs">(Link)</a>
            </h3>
            <span className="text-xs text-gray-500 font-medium">2023</span>
          </div>
          <p className="text-xs text-gray-600 mb-1">
            <em>Tech Stack: React, WebSocket, Node.js, Redis, Docker</em>
          </p>
          <ul className="list-disc list-outside ml-3 space-y-0.5 text-gray-800">
            <li className="pl-1">
              WebSocket과 Redis Pub/Sub을 활용하여 500명 이상의 동시 접속자를 처리할 수 있는 실시간 데이터 시각화 대시보드를 개발했습니다.
            </li>
            <li className="pl-1">
              RBAC(역할 기반 접근 제어)를 구현하여 사용자 레벨에 따른 데이터 보안을 강화했습니다.
            </li>
          </ul>
        </div>

        <div className="mb-3">
          <div className="flex justify-between items-baseline">
            <h3 className="font-bold text-sm">
              오픈소스 기여: React UI 라이브러리
              <a href="#" className="ml-2 font-normal text-blue-600 hover:underline text-xs">(GitHub)</a>
            </h3>
            <span className="text-xs text-gray-500 font-medium">2022</span>
          </div>
          <p className="text-xs text-gray-600 mb-1">
            <em>Tech Stack: React, TypeScript, Jest</em>
          </p>
          <ul className="list-disc list-outside ml-3 space-y-0.5 text-gray-800">
            <li className="pl-1">
              유명 React UI 컴포넌트 라이브러리의 Modal 컴포넌트에서 발생하던 메모리 누수 버그를 수정하여 기여했습니다.
            </li>
            <li className="pl-1">
              엣지 케이스를 커버하는 유닛 테스트를 추가하여 주간 1만 회 이상 다운로드되는 라이브러리의 안정성을 높였습니다.
            </li>
          </ul>
        </div>

        <div>
          <div className="flex justify-between items-baseline">
            <h3 className="font-bold text-sm">
              개인 가계부 모바일 앱
              <a href="#" className="ml-2 font-normal text-blue-600 hover:underline text-xs">(App Store)</a>
            </h3>
            <span className="text-xs text-gray-500 font-medium">2021</span>
          </div>
          <p className="text-xs text-gray-600 mb-1">
            <em>Tech Stack: React Native, Firebase, Redux</em>
          </p>
          <ul className="list-disc list-outside ml-3 space-y-0.5 text-gray-800">
            <li className="pl-1">
              React Native를 활용한 크로스 플랫폼 가계부 앱을 개발 및 배포하여 1,000명 이상의 실사용자를 확보했습니다.
            </li>
            <li className="pl-1">
              로컬 스토리지와 백그라운드 동기화 기능을 구현하여 오프라인 환경에서도 지출 내역을 기록할 수 있도록 했습니다.
            </li>
          </ul>
        </div>
      </section>

      {/* --- AWARDS & RECOGNITION --- */}
      <section className="mb-5">
        <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 border-b border-gray-200 pb-1">
          Awards & Recognition
        </h2>
        <ul className="list-disc list-outside ml-3 space-y-0.5 text-gray-800">
          <li className="pl-1">
            <strong>올해의 우수 사원상</strong> (Global E-commerce Ltd.) – 결제 시스템 안정화에 대한 공로를 인정받아 수상 (2020).
          </li>
          <li className="pl-1">
            <strong>서울 테크 해커톤 1위</strong> – 시각 장애인을 위한 AI 기반 웹 접근성 개선 도구 개발 (2019).
          </li>
        </ul>
      </section>

      {/* --- SPEAKING & WRITING --- */}
      <section className="mb-5">
        <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 border-b border-gray-200 pb-1">
          Speaking & Writing
        </h2>
        <ul className="list-disc list-outside ml-3 space-y-0.5 text-gray-800">
          <li className="pl-1">
            <strong>FE Conf Korea 2023 발표</strong> – "마이크로 프론트엔드로 확장 가능한 아키텍처 구축하기".
          </li>
          <li className="pl-1">
            <strong>기술 블로그 운영</strong> – React 성능 최적화 및 TypeScript 활용 팁 등 20개 이상의 기술 아티클 작성, 누적 조회수 5만 회 달성.
          </li>
        </ul>
      </section>

      {/* --- EDUCATION --- */}
      <section>
        <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 border-b border-gray-200 pb-1">
          Education
        </h2>
        <div className="flex justify-between items-baseline mb-1">
          <div>
            <h3 className="font-bold text-sm">한국대학교 (Korea University)</h3>
            <p className="text-gray-700 text-xs">컴퓨터공학 학사</p>
          </div>
          <span className="text-xs text-gray-500 font-medium">2013.03 – 2017.02</span>
        </div>
        <div className="flex justify-between items-baseline">
          <div>
            <h3 className="font-bold text-sm">캘리포니아 대학교 버클리 (UC Berkeley)</h3>
            <p className="text-gray-700 text-xs">교환학생 (Computer Science)</p>
          </div>
          <span className="text-xs text-gray-500 font-medium">2015.08 – 2016.05</span>
        </div>
      </section>
    </div>
  );
};