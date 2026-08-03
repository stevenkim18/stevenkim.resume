"use client";

import { Mail, Phone, MapPin, Globe, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { ResumeData } from "@/types/resume";

interface ResumeProps {
  data: ResumeData;
  lang: "en" | "kr";
}

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.49 1.49 0 1 0 0 2.98 1.49 1.49 0 0 0 0-2.98z"/>
  </svg>
);

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const AppleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.32c.67-.82 1.13-1.96.99-3.12-1 .04-2.2.67-2.9 1.49-.62.72-1.16 1.88-1.01 3.01 1.12.09 2.25-.56 2.92-1.38z"/>
  </svg>
);

const AndroidIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.523 15.3414C17.0628 15.3414 16.6917 14.9702 16.6917 14.5101C16.6917 14.05 17.0628 13.6788 17.523 13.6788C17.9831 13.6788 18.3543 14.05 18.3543 14.5101C18.3543 14.9702 17.9831 15.3414 17.523 15.3414ZM6.47702 15.3414C6.01686 15.3414 5.64575 14.9702 5.64575 14.5101C5.64575 14.05 6.01686 13.6788 6.47702 13.6788C6.93718 13.6788 7.30829 14.05 7.30829 14.5101C7.30829 14.9702 6.93718 15.3414 6.47702 15.3414ZM17.9737 9.87401L19.7824 6.74136C19.9079 6.52402 19.8336 6.2464 19.6162 6.12095C19.3989 5.9955 19.1213 6.06979 18.9958 6.28713L17.1527 9.47963C15.6179 8.77708 13.8821 8.38464 12.0001 8.38464C10.1181 8.38464 8.38222 8.77708 6.84742 9.47963L5.00431 6.28713C4.87886 6.06979 4.60124 5.9955 4.3839 6.12095C4.16656 6.2464 4.09227 6.52402 4.21772 6.74136L6.02641 9.87401C2.61011 11.7335 0.287109 15.2269 0.287109 19.308H23.7131C23.7131 15.2269 21.3901 11.7335 17.9737 9.87401Z"/>
  </svg>
);

export const Resume = ({ data, lang }: ResumeProps) => {
  const { profile, summary, skills, experience, projects, sideProjects, activities, selfIntroduction, education } = data;
  const leaveReasonLabel = lang === "kr" ? "퇴사 사유" : "Leave reason";

  return (
    <div className="p-8 md:p-12 text-gray-900 font-sans text-[10pt] leading-snug break-keep">
      {/* --- HEADER --- */}
      <header className="border-b border-gray-400 pb-4 mb-5">
        <div className="flex items-start gap-5">
          {/* Profile Photo */}
          {profile.photo && (
            <ImageWithFallback
              src={profile.photo}
              alt="Profile photo"
              className="w-20 h-20 rounded-full object-cover shrink-0"
              style={{ objectPosition: 'center top' }}
            />
          )}

          {/* Name, Title, and Contact Info */}
          <div className="flex flex-col justify-center gap-2 w-full">
            <div>
              <h1 className="text-3xl font-bold tracking-tight mb-0.5 leading-none">
                {profile.name}
              </h1>
              <p className="text-lg font-medium text-gray-700 leading-tight">
                {profile.title}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-600">
              {profile.email && (
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" />
                  <span>{profile.email}</span>
                </div>
              )}
              {profile.phone && (
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5" />
                  <span>{profile.phone}</span>
                </div>
              )}
              {profile.location && (
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{profile.location}</span>
                </div>
              )}
              {profile.linkedin && (
                <div className="flex items-center gap-1.5">
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <a href={`https://${profile.linkedin}`} className="hover:underline">
                    {profile.linkedin}
                  </a>
                </div>
              )}
              {profile.github && (
                <div className="flex items-center gap-1.5">
                  <GithubIcon className="w-3.5 h-3.5" />
                  <a href={`https://${profile.github}`} className="hover:underline">
                    {profile.github}
                  </a>
                </div>
              )}
              {profile.website && (
                <div className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5" />
                  <a href={`https://${profile.website}`} className="hover:underline">
                    {profile.website}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* --- SUMMARY --- */}
      {summary && (
        <section className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 border-b border-gray-200 pb-1">
            Summary
          </h2>
          <p className="text-gray-800">{summary}</p>
        </section>
      )}

      {/* --- SKILLS --- */}
      {skills && skills.length > 0 && (
        <section className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 border-b border-gray-200 pb-1">
            Skills
          </h2>
          <div className="space-y-1">
            {skills.map((skillGroup, index) => (
              <div key={index} className="flex items-start text-sm">
                <span className="font-semibold text-gray-700 min-w-[80px] shrink-0">
                  {skillGroup.category}
                </span>
                <span className="text-gray-700">
                  {skillGroup.items.map((item, itemIndex) => (
                    <span key={itemIndex}>
                      {item.proficient ? (
                        <strong>{item.name}</strong>
                      ) : (
                        item.name
                      )}
                      {itemIndex < skillGroup.items.length - 1 && ", "}
                    </span>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* --- EXPERIENCE --- */}
      {experience && experience.length > 0 && (
        <section className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3 border-b border-gray-200 pb-1">
            Experience
          </h2>

          {experience.map((job, index) => (
            <div key={index} className={index < experience.length - 1 ? "mb-4" : ""}>
              {/* 회사명 + 회사 소개 */}
              <div className="flex justify-between items-baseline mb-0.5">
                <h3 className="text-base font-bold text-gray-900">
                  {job.companyUrl ? (
                    <a
                      href={job.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 hover:underline transition-colors inline-flex items-center gap-1"
                    >
                      {job.company}
                      <ExternalLink className="w-3 h-3 inline" />
                    </a>
                  ) : (
                    job.company
                  )}
                </h3>
                {job.companyDescription && (
                  <span className="text-xs text-gray-500 italic text-right ml-4">
                    {job.companyDescription}
                  </span>
                )}
              </div>

              {/* 직책 + 날짜 */}
              <div className="flex justify-between items-baseline mb-1">
                <div className="flex items-baseline">
                  <p className="font-semibold text-gray-700 italic text-sm">
                    {job.role}
                    {job.employmentType && (
                      <span className="ml-2 not-italic text-xs font-medium text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">
                        {job.employmentType}
                      </span>
                    )}
                  </p>
                  {job.location && (
                    <span className="ml-2 text-xs text-gray-500 font-medium">
                      · {job.location}
                    </span>
                  )}
                </div>
                <span className="text-sm text-gray-500 font-medium">{job.period}</span>
              </div>

              <ul className="list-disc list-outside ml-3 space-y-0.5 text-gray-800">
                {job.achievements.map((achievement, achIndex) => (
                  <li
                    key={achIndex}
                    className="pl-1"
                    dangerouslySetInnerHTML={{ __html: achievement }}
                  />
                ))}
              </ul>
              {job.leaveReason && (
                <p className="text-xs italic text-gray-400 mt-1 ml-3">
                  {leaveReasonLabel}: {job.leaveReason}
                </p>
              )}
            </div>
          ))}
        </section>
      )}

      {/* --- PROJECTS --- */}
      {projects && projects.length > 0 && (
        <section className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3 border-b border-gray-200 pb-1">
            Key Projects
          </h2>

          {projects.map((project, index) => (
            <div key={index} className={index < projects.length - 1 ? "mb-3" : ""}>
              <div className="flex justify-between items-baseline">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-sm">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 hover:underline transition-colors inline-flex items-center gap-1"
                      >
                        {project.name}
                        <ExternalLink className="w-3 h-3 inline" />
                      </a>
                    ) : (
                      project.name
                    )}
                  </h3>
                  {(project.ios || project.android) && (
                    <div className="inline-flex items-center gap-1.5 ml-1">
                      {project.ios && (
                        <a
                          href={project.ios}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="iOS App Store"
                          className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-gray-100 border border-gray-200 text-gray-700 hover:bg-black hover:text-white hover:border-black transition-all text-[10px] font-semibold tracking-tight shadow-2xs"
                        >
                          <AppleIcon className="w-3.5 h-3.5" />
                          <span>iOS</span>
                        </a>
                      )}
                      {project.android && (
                        <a
                          href={project.android}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Google Play Store"
                          className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-gray-100 border border-gray-200 text-gray-700 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all text-[10px] font-semibold tracking-tight shadow-2xs"
                        >
                          <AndroidIcon className="w-3.5 h-3.5" />
                          <span>Android</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
                <span className="text-xs text-gray-500 font-medium">{project.year}</span>
              </div>
              {project.techStack && (
                <p className="text-xs text-gray-600 mb-1">
                  <em>Tech Stack: {project.techStack}</em>
                </p>
              )}
              <ul className="list-disc list-outside ml-3 space-y-0.5 text-gray-800">
                {project.descriptions.map((desc, descIndex) => (
                  <li
                    key={descIndex}
                    className="pl-1"
                    dangerouslySetInnerHTML={{ __html: desc }}
                  />
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}

      {/* --- SIDE PROJECTS --- */}
      {sideProjects && sideProjects.length > 0 && (
        <section className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3 border-b border-gray-200 pb-1">
            Side Projects
          </h2>

          {sideProjects.map((project, index) => (
            <div key={index} className={index < sideProjects.length - 1 ? "mb-3" : ""}>
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-sm">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 hover:underline transition-colors inline-flex items-center gap-1"
                    >
                      {project.name}
                      <ExternalLink className="w-3 h-3 inline" />
                    </a>
                  ) : (
                    project.name
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-xs font-normal text-blue-600 hover:underline"
                    >
                      (GitHub)
                    </a>
                  )}
                  {project.video && (
                    <a
                      href={project.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-1 text-xs font-normal text-blue-600 hover:underline"
                    >
                      (Video)
                    </a>
                  )}
                </h3>
                <span className="text-xs text-gray-500 font-medium">{project.period}</span>
              </div>
              {project.role && (
                <p className="text-xs text-gray-600 italic">{project.role}</p>
              )}
              {project.techStack && (
                <p className="text-xs text-gray-600 mb-1">
                  <em>Tech Stack: {project.techStack}</em>
                </p>
              )}
              <p className="text-gray-800 text-sm mb-1">{project.description}</p>
              {project.achievements && project.achievements.length > 0 && (
                <ul className="list-disc list-outside ml-3 space-y-0.5 text-gray-800">
                  {project.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="pl-1">{achievement}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      )}

      {/* --- OTHER ACTIVITIES --- */}
      {activities && activities.length > 0 && (
        <section className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 border-b border-gray-200 pb-1">
            Other Activities
          </h2>
          <ul className="list-disc list-outside ml-3 space-y-0.5 text-gray-800">
            {activities.map((activity, index) => (
              <li key={index} className="pl-1">
                {activity.text}
                {activity.links && activity.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 text-xs font-normal text-blue-600 hover:underline"
                  >
                    ({link.label})
                  </a>
                ))}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* --- ABOUT ME --- */}
      {selfIntroduction && selfIntroduction.length > 0 && (
        <section className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 border-b border-gray-200 pb-1">
            About Me
          </h2>
          <div className="space-y-3">
            {selfIntroduction.map((item, index) => (
              <div key={index}>
                <h3 className="font-bold text-sm text-gray-900 mb-1">{item.title}</h3>
                <div className="space-y-1.5 text-gray-800">
                  {item.paragraphs.map((paragraph, paragraphIndex) => (
                    <p key={paragraphIndex} className="text-sm">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* --- EDUCATION --- */}
      {education && education.length > 0 && (
        <section>
          <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 border-b border-gray-200 pb-1">
            Education
          </h2>
          {education.map((edu, index) => (
            <div
              key={index}
              className={`flex justify-between items-baseline ${index < education.length - 1 ? "mb-1" : ""}`}
            >
              <div>
                <h3 className="font-bold text-sm">
                  {edu.link ? (
                    <a
                      href={edu.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 hover:underline transition-colors inline-flex items-center gap-1"
                    >
                      {edu.school}
                      <ExternalLink className="w-3 h-3 inline" />
                    </a>
                  ) : (
                    edu.school
                  )}
                </h3>
                <p className="text-gray-700 text-xs">{edu.degree}</p>
              </div>
              <span className="text-xs text-gray-500 font-medium">{edu.period}</span>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};
