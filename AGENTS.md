# AGENTS.md

이 문서는 `/Users/seungwookim/Code/side/steven.resume` 저장소에서 작업하는 에이전트를 위한 작업 규칙입니다.

## 1) 프로젝트 목적

- 개인 이력서 웹사이트 (Next.js App Router 기반)
- 국문/영문 이력서를 토글로 전환해 1페이지 이력서 형태로 렌더링
- 웹 화면 + 인쇄(PDF 저장) 사용성 동시 지원

## 2) 기술 스택

- Next.js `16.x`
- React `19.x`
- TypeScript `strict: true`
- Tailwind CSS `v4` (`app/globals.css`)
- shadcn/ui + Radix UI (컴포넌트 라이브러리)

## 3) 실제로 중요한 파일

- 페이지 엔트리: `app/page.tsx`
- 전역 레이아웃/메타: `app/layout.tsx`
- 전역 스타일: `app/globals.css`
- 이력서 렌더링: `components/Resume.tsx`
- 이미지 fallback: `components/figma/ImageWithFallback.tsx`
- 데이터 소스(국문/영문): `data/resume-ko.json`, `data/resume-en.json`
- 데이터 타입: `types/resume.ts`

참고:
- `components/ui/*`는 shadcn/ui 기반 범용 컴포넌트가 다수 포함되어 있으나 현재 이력서 페이지에서 직접 사용하는 것은 `Button` 중심입니다.
- 이력서 콘텐츠 수정은 UI 컴포넌트보다 `data/*.json` 수정이 우선입니다.

## 4) 기본 작업 원칙

- 기능/문구 수정 시 우선순위:
1. `data/resume-ko.json`
2. `data/resume-en.json`
3. 필요한 경우 `types/resume.ts`
4. 마지막으로 `components/Resume.tsx`

- 가능한 한 레이아웃 컴포넌트 구조를 크게 바꾸지 말고, 데이터 중심으로 유지합니다.
- 국문/영문 데이터 구조는 항상 동일하게 유지합니다.
- 타입 변경 시 국문/영문 JSON 모두 동기화합니다.

## 5) 데이터 편집 규칙 (중요)

- `app/page.tsx`에서 언어 상태는 `"en" | "kr"` 이고 기본값은 `"en"`입니다.
- `profile.github`, `profile.linkedin`, `profile.website`는 현재 렌더링 코드가 `https://`를 앞에 붙입니다.
- 따라서 위 3개 필드는 JSON에 프로토콜 없이 저장합니다. (예: `github.com/...`)
- `projects[].link`, `sideProjects[].github/video/link`, `education[].link` 등은 이미 완전한 URL을 넣어도 됩니다.
- `experience[].achievements`, `projects[].descriptions`는 `dangerouslySetInnerHTML`로 렌더링됩니다.
- 외부 입력을 그대로 넣지 말고, 신뢰 가능한 정적 문자열만 사용합니다.
- `profile.photo`는 `public/` 아래 경로를 사용합니다. (예: `/gemini_made.png`)

## 6) UI/스타일 작업 규칙

- 현재 페이지는 A4 비율 레이아웃을 기준으로 구성됩니다.
- 인쇄 관련 클래스(`print:*`)가 많으므로 스타일 변경 시 인쇄 결과를 함께 확인합니다.
- 기본 폰트는 `Geist`, `Geist Mono`를 `app/layout.tsx`에서 로드합니다.
- 색상/테마 토큰은 `app/globals.css`의 CSS 변수 체계를 따릅니다.

## 7) 실행/검증 명령어

- 개발 서버: `pnpm dev`
- 린트: `pnpm lint`
- 프로덕션 빌드 확인: `pnpm build`

변경 후 최소 검증:
1. `pnpm lint`
2. `pnpm build`
3. 브라우저에서 국문/영문 토글 + 인쇄 미리보기 확인

## 8) 신규 섹션 추가 시 절차

1. `types/resume.ts`에 타입 추가
2. `data/resume-ko.json` / `data/resume-en.json`에 동일 구조 반영
3. `components/Resume.tsx`에 섹션 렌더링 추가
4. 모바일/데스크톱/인쇄 레이아웃 확인

## 9) 커밋 전 체크리스트

- 타입 에러 없음
- 린트 통과
- 국문/영문 데이터 구조 동일
- 링크 필드 규칙 준수 (`profile.*` 프로토콜 중복 여부)
- 인쇄 레이아웃 깨짐 없음
