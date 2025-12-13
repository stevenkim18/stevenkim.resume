"use client";

import { Mail, Phone, MapPin, Linkedin, Github, Globe, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { ResumeData } from "@/types/resume";

interface ResumeProps {
  data: ResumeData;
}

export const Resume = ({ data }: ResumeProps) => {
  const { profile, summary, skills, experience, projects, sideProjects, activities, education } = data;

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
                  <Linkedin className="w-3.5 h-3.5" />
                  <a href={`https://${profile.linkedin}`} className="hover:underline">
                    {profile.linkedin}
                  </a>
                </div>
              )}
              {profile.github && (
                <div className="flex items-center gap-1.5">
                  <Github className="w-3.5 h-3.5" />
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
                  퇴사 사유: {job.leaveReason}
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