"use client";

import { Mail, Phone, MapPin, Linkedin, Github, Globe } from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

export const Resume = () => {
  return (
    <div className="p-8 md:p-12 text-gray-900 font-sans text-[10pt] leading-snug">
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
              <h1 className="text-3xl font-bold tracking-tight uppercase mb-0.5 leading-none">
                Ji-Hoon Kim
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
                <span>+82 10-1234-5678</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>Seoul, South Korea</span>
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
          Product-minded Software Engineer with 6+ years of experience specializing in building scalable web applications with React, TypeScript, and Node.js. Proven track record of improving site performance by 40% and leading cross-functional teams to deliver critical features. Passionate about UI/UX consistency, accessibility, and engineering efficiency. Experienced in mentoring junior developers and driving technical decisions in fast-paced startup environments.
        </p>
      </section>

      {/* --- TECHNICAL SKILLS --- */}
      <section className="mb-5">
        <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 border-b border-gray-200 pb-1">
          Technical Skills
        </h2>
        <div className="space-y-0.5">
          <div className="flex">
            <span className="font-semibold w-28 shrink-0">Languages</span>
            <span>JavaScript (ES6+), TypeScript, HTML5, CSS3, SQL, Python, Go</span>
          </div>
          <div className="flex">
            <span className="font-semibold w-28 shrink-0">Frontend</span>
            <span>React, Next.js, Vue.js, Tailwind CSS, Redux, React Query, Webpack, Vite</span>
          </div>
          <div className="flex">
            <span className="font-semibold w-28 shrink-0">Backend</span>
            <span>Node.js, Express, NestJS, PostgreSQL, Redis, GraphQL, REST API</span>
          </div>
          <div className="flex">
            <span className="font-semibold w-28 shrink-0">DevOps & Tools</span>
            <span>Git, Docker, Kubernetes, AWS (S3, EC2, Lambda), GitHub Actions, Jenkins</span>
          </div>
          <div className="flex">
            <span className="font-semibold w-28 shrink-0">Testing</span>
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
            <h3 className="text-base font-bold text-gray-900">Tech Startup Inc.</h3>
            <span className="text-xs text-gray-500 font-medium">San Francisco, CA (Remote)</span>
          </div>
          <div className="flex justify-between items-baseline mb-1.5">
            <p className="font-semibold text-gray-700 italic text-sm">Senior Frontend Engineer</p>
            <span className="text-xs text-gray-500 font-medium">Jan 2022 – Present</span>
          </div>
          <ul className="list-disc list-outside ml-3 space-y-0.5 text-gray-800">
            <li className="pl-1">
              Spearheaded the migration of a legacy monolithic architecture to a <strong>Next.js micro-frontend system</strong>, reducing build times by 60% and enabling independent deployments for 3 squads.
            </li>
            <li className="pl-1">
              Optimized core landing page Web Vitals, improving <strong>LCP from 2.5s to 0.8s</strong>, which directly contributed to a 15% increase in user conversion rates and SEO rankings.
            </li>
            <li className="pl-1">
              Designed and implemented a comprehensive <strong>Design System</strong> using Radix UI and Tailwind CSS, standardizing UI components across 4 distinct products and reducing UI-related bugs by 30%.
            </li>
            <li className="pl-1">
              Mentored 2 junior developers, conducting code reviews and weekly pair programming sessions to foster engineering best practices and clean code architecture.
            </li>
            <li className="pl-1">
              Led the accessibility initiative (WCAG 2.1 AA), ensuring the product is usable by a wider audience and mitigating potential legal risks.
            </li>
          </ul>
        </div>

        {/* Job 2 */}
        <div className="mb-4">
          <div className="flex justify-between items-baseline mb-0.5">
            <h3 className="text-base font-bold text-gray-900">Global E-commerce Ltd.</h3>
            <span className="text-xs text-gray-500 font-medium">Seoul, South Korea</span>
          </div>
          <div className="flex justify-between items-baseline mb-1.5">
            <p className="font-semibold text-gray-700 italic text-sm">Software Engineer</p>
            <span className="text-xs text-gray-500 font-medium">Jun 2019 – Dec 2021</span>
          </div>
          <ul className="list-disc list-outside ml-3 space-y-0.5 text-gray-800">
            <li className="pl-1">
              Developed and maintained the checkout flow handling <strong>$1M+ in daily transaction volume</strong>, achieving 99.99% uptime during peak Black Friday traffic.
            </li>
            <li className="pl-1">
              Integrated third-party payment gateways (Stripe, PayPal) and implemented a robust error handling system, reducing payment failures by 20% and improving customer trust.
            </li>
            <li className="pl-1">
              Collaborated closely with product managers and designers to implement A/B tests that led to a 5% uplift in average order value (AOV).
            </li>
            <li className="pl-1">
              Wrote comprehensive E2E tests using Cypress, increasing code coverage from 40% to 85% and significantly reducing regression bugs in the critical payment path.
            </li>
            <li className="pl-1">
              Refactored legacy Redux state management to use React Query, simplifying data fetching logic and reducing boilerplate code by 40%.
            </li>
          </ul>
        </div>

        {/* Job 3 */}
        <div className="mb-4">
          <div className="flex justify-between items-baseline mb-0.5">
            <h3 className="text-base font-bold text-gray-900">Creative Agency</h3>
            <span className="text-xs text-gray-500 font-medium">Seoul, South Korea</span>
          </div>
          <div className="flex justify-between items-baseline mb-1.5">
            <p className="font-semibold text-gray-700 italic text-sm">Frontend Developer</p>
            <span className="text-xs text-gray-500 font-medium">Mar 2017 – May 2019</span>
          </div>
          <ul className="list-disc list-outside ml-3 space-y-0.5 text-gray-800">
            <li className="pl-1">
              Built responsive, pixel-perfect websites for 10+ clients using React and SCSS, ensuring cross-browser compatibility down to IE11.
            </li>
            <li className="pl-1">
              Automated image optimization pipelines using Gulp/Webpack, reducing total page weight by an average of 30% and improving load times on mobile networks.
            </li>
            <li className="pl-1">
              Developed interactive promotional pages for major brand campaigns, incorporating complex GSAP animations to enhance user engagement.
            </li>
          </ul>
        </div>

        {/* Job 4 */}
        <div>
          <div className="flex justify-between items-baseline mb-0.5">
            <h3 className="text-base font-bold text-gray-900">University Lab</h3>
            <span className="text-xs text-gray-500 font-medium">Seoul, South Korea</span>
          </div>
          <div className="flex justify-between items-baseline mb-1.5">
            <p className="font-semibold text-gray-700 italic text-sm">Undergraduate Research Assistant</p>
            <span className="text-xs text-gray-500 font-medium">Sep 2016 – Feb 2017</span>
          </div>
          <ul className="list-disc list-outside ml-3 space-y-0.5 text-gray-800">
            <li className="pl-1">
              Assisted in developing a web-based data visualization tool for analyzing large-scale sensor data using D3.js.
            </li>
            <li className="pl-1">
              Optimized database queries for MySQL, reducing data retrieval time for visualization rendering by 50%.
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
              Real-time Collaboration Dashboard
              <a href="#" className="ml-2 font-normal text-blue-600 hover:underline text-xs">(Link)</a>
            </h3>
            <span className="text-xs text-gray-500 font-medium">2023</span>
          </div>
          <p className="text-xs text-gray-600 mb-1">
            <em>Tech Stack: React, WebSocket, Node.js, Redis, Docker</em>
          </p>
          <ul className="list-disc list-outside ml-3 space-y-0.5 text-gray-800">
            <li className="pl-1">
              Built a real-time analytics dashboard supporting 500+ concurrent connections using WebSockets and Redis Pub/Sub for instant data updates.
            </li>
            <li className="pl-1">
              Implemented role-based access control (RBAC) to ensure data security across different user levels.
            </li>
          </ul>
        </div>

        <div className="mb-3">
          <div className="flex justify-between items-baseline">
            <h3 className="font-bold text-sm">
              Open Source Contribution: React UI Library
              <a href="#" className="ml-2 font-normal text-blue-600 hover:underline text-xs">(GitHub)</a>
            </h3>
            <span className="text-xs text-gray-500 font-medium">2022</span>
          </div>
          <p className="text-xs text-gray-600 mb-1">
            <em>Tech Stack: React, TypeScript, Jest</em>
          </p>
          <ul className="list-disc list-outside ml-3 space-y-0.5 text-gray-800">
            <li className="pl-1">
              Contributed to a popular React UI component library by fixing a critical memory leak in the Modal component.
            </li>
            <li className="pl-1">
              Added unit tests to cover edge cases, improving the overall reliability of the library for 10k+ weekly users.
            </li>
          </ul>
        </div>

        <div>
          <div className="flex justify-between items-baseline">
            <h3 className="font-bold text-sm">
              Mobile Expense Tracker App
              <a href="#" className="ml-2 font-normal text-blue-600 hover:underline text-xs">(App Store)</a>
            </h3>
            <span className="text-xs text-gray-500 font-medium">2021</span>
          </div>
          <p className="text-xs text-gray-600 mb-1">
            <em>Tech Stack: React Native, Firebase, Redux</em>
          </p>
          <ul className="list-disc list-outside ml-3 space-y-0.5 text-gray-800">
            <li className="pl-1">
              Developed and deployed a cross-platform mobile application for tracking personal expenses, acquiring 1,000+ active users.
            </li>
            <li className="pl-1">
              Implemented offline capability using local storage and background sync, allowing users to add expenses without internet connection.
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
            <strong>Best Employee of the Year</strong> (Global E-commerce Ltd.) – Recognized for outstanding contribution to the payment system stability (2020).
          </li>
          <li className="pl-1">
            <strong>1st Place, Seoul Tech Hackathon</strong> – Built an AI-powered accessibility tool for visually impaired users in 48 hours (2019).
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
            <strong>Speaker at FE Conf Korea 2023</strong> – "Scaling Frontend Architecture with Micro-frontends".
          </li>
          <li className="pl-1">
            <strong>Medium Blog</strong> – Authored 20+ articles on React performance optimization and TypeScript best practices, accumulating 50k+ views.
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
            <h3 className="font-bold text-sm">Korea University</h3>
            <p className="text-gray-700 text-xs">Bachelor of Science in Computer Science</p>
          </div>
          <span className="text-xs text-gray-500 font-medium">Mar 2013 – Feb 2017</span>
        </div>
        <div className="flex justify-between items-baseline">
          <div>
            <h3 className="font-bold text-sm">University of California, Berkeley</h3>
            <p className="text-gray-700 text-xs">Exchange Student, Computer Science</p>
          </div>
          <span className="text-xs text-gray-500 font-medium">Aug 2015 – May 2016</span>
        </div>
      </section>
    </div>
  );
};