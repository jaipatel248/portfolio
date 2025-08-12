"use client";

import { SkillsList } from "@/components/ui/skills";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineBranches } from "react-icons/ai";
import { BsCloud, BsFillPeopleFill } from "react-icons/bs";
import { FaCss3Alt, FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import {
  SiExpress,
  SiGithubactions,
  SiMongodb,
  SiNextdotjs,
  SiOpenai,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";

interface Project {
  id: string;
  title: string;
  description: string;
  type: string;
  website: string;
  github?: string;
  technologies: string[];
  status: string;
  featured: boolean;
  created: string;
  updated: string;
  videoUrl?: string;
  logoFileName: string; // New field for local logo file
  repoLink?: string; // New field for repository link
}

const projectsData: Project[] = [
  {
    id: "proj_1",
    title: "WhatsApp Clone",
    description: `• Responsive WhatsApp mobile UI clone built with React and TypeScript.\n\n• Monorepo setup using Nx for modular structure, faster builds, and shared utilities.\n\n• Implements chat list, conversation view, message bubbles, responsive layout, and theming with MUI.`,
    type: "Web Application",
    website: "https://jaipatel248.github.io/WhatsApp-iOS-clone/",
    technologies: [
      "React.js",
      "TypeScript",
      "JavaScript",
      "MUI",
      "NX",
      "CSS",
      "HTML",
      "Responsive Design",
      "Context API",
    ],
    status: "Published",
    featured: true,
    created: "2024-07-03",
    updated: "",
    logoFileName: "whatsapp.svg",
    repoLink: "https://github.com/jaipatel248/WhatsApp-iOS-clone",
  },
  {
    id: "proj_rn_starter",
    title: "React Native Starter",
    description: `• Boilerplate for React Native apps (Redux, Saga, Context, theming, localization, animated tabs).\n\n• Uses React Native 0.63.2 with Redux-Saga for side effects and persisted storage.\n\n• Provides dark/light theme, localization, validation utilities, custom typography, and auth (login/signup) screens.\n\n• Includes postinstall script (auto pod install) and environment configs for production & development.`,
    type: "NPM Package",
    website: "https://www.npmjs.com/package/react-native-starter",
    technologies: ["React Native", "Redux", "TypeScript"],
    status: "Published",
    featured: true,
    created: "2022-10-01",
    updated: "",
    logoFileName: "react-native-starter.png", // place this file in /public/logos/
    repoLink: "https://github.com/jaipatel248/react-native-starter",
  },
  {
    id: "proj_3",
    title: "Farmer Portal",
    description: `• Built a collaborative farmer support portal using a Python/Django backend and modular frontend.\n\n• Delivers crop guidance, statistical insights, and real-time market price data to empower decision-making.\n\n• Enables farmers to share success stories and exchange ideas through interactive community features.`,
    type: "Web Portal",
    website: "",
    technologies: [
      "Python",
      "Django",
      "JavaScript",
      "MySQL",
      "CSS",
      "Bootstrap",
      "HTML",
    ],
    status: "In Progress",
    featured: true,
    created: "2024-05-01",
    updated: "",
    logoFileName: "farmer-portal.png",
    repoLink: "https://github.com/jaipatel248/Farmer_portal",
  },

  // {
  //   id: "proj_5",
  //   title: "Barber Academy",
  //   description: `• Comprehensive website for Barber Academy with online appointment scheduling.\n\n• Showcases a complete range of services and streamlines operations.\n\n• Delivered a user-friendly platform that increased client engagement.`,
  //   type: "Website",
  //   website: "https://raoufzadi.vercel.app/",
  //   technologies: [
  //     "React",
  //     "TypeScript",
  //     "Tailwind CSS",
  //     "RESTful APIs",
  //     "Booking System",
  //     "Responsive Design",
  //   ],
  //   status: "Published",
  //   featured: true,
  //   created: "2023-07-01",
  //   updated: "2023-08-01",
  //   logoFileName: "barber.svg",
  // },
];

const techIconMap: Record<string, React.ReactNode> = {
  React: <FaReact className="text-sky-500" title="React" />,
  "React.js": <FaReact className="text-sky-500" title="React.js" />,
  "React (Next.js)": (
    <SiNextdotjs className="text-black dark:text-white" title="Next.js" />
  ),
  "Next.js": (
    <SiNextdotjs className="text-black dark:text-white" title="Next.js" />
  ),
  TypeScript: <SiTypescript className="text-blue-600" title="TypeScript" />,
  "Node.js": <FaNodeJs className="text-green-700" title="Node.js" />,
  "Express.js": <SiExpress className="text-gray-700" title="Express.js" />,
  MongoDB: <SiMongodb className="text-green-600" title="MongoDB" />,
  "Tailwind CSS": (
    <SiTailwindcss className="text-cyan-400" title="Tailwind CSS" />
  ),
  CSS3: <FaCss3Alt className="text-blue-500" title="CSS3" />,
  Vite: <SiVite className="text-purple-500" title="Vite" />,
  "JWT & OAuth": (
    <BsFillPeopleFill className="text-yellow-600" title="JWT & OAuth" />
  ),
  "RESTful APIs": <BsCloud className="text-blue-400" title="RESTful APIs" />,
  "CI/CD (GitHub Actions)": (
    <SiGithubactions className="text-gray-700" title="GitHub Actions" />
  ),
  "AI Automation": <SiOpenai className="text-gray-700" title="AI Automation" />,
  "Gemini AI API": <SiOpenai className="text-gray-700" title="Gemini AI API" />,
  "Prompt Engineering": (
    <SiOpenai className="text-gray-700" title="Prompt Engineering" />
  ),
  "Cloud Deployment": (
    <BsCloud className="text-blue-400" title="Cloud Deployment" />
  ),
  "Cloud Hosting": <BsCloud className="text-blue-400" title="Cloud Hosting" />,
  "UI/UX Design": (
    <MdDesignServices className="text-pink-500" title="UI/UX Design" />
  ),
  "Export Utilities": (
    <MdDesignServices className="text-pink-500" title="Export Utilities" />
  ),
  "Booking System": (
    <BsFillPeopleFill className="text-green-700" title="Booking System" />
  ),
  "SaaS Multi-Tenant Architecture": (
    <BsFillPeopleFill
      className="text-blue-700"
      title="SaaS Multi-Tenant Architecture"
    />
  ),
  "Open Source": (
    <SiGithubactions
      className="text-black dark:text-white"
      title="Open Source"
    />
  ),
  "Data Visualization": (
    <MdDesignServices className="text-purple-500" title="Data Visualization" />
  ),
};

function ProjectDescription({ description }: { description: string }) {
  return (
    <ul className="mb-4 list-disc ml-6 space-y-2">
      {description.split("\n\n").map((item, idx) => (
        <li key={idx} className="flex items-start gap-2">
          <span className="text-base leading-5">-</span>
          <span>{item.replace(/^•\s*/, "")}</span>
        </li>
      ))}
    </ul>
  );
}

function ProjectLinks({ github }: { github?: string }) {
  if (!github) return null;
  return (
    <li className="flex items-center gap-2">
      <AiOutlineBranches className="text-[var(--headline)]" />
      <strong style={{ color: "var(--headline)" }}>GitHub:</strong>
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
        style={{ color: "var(--link-color)" }}
      >
        {github}
      </a>
    </li>
  );
}

function ProjectTechnologies({ technologies }: { technologies: string[] }) {
  return (
    <li className="flex items-center gap-2 mb-4 list-disc ml-6 space-y-2">
      <SkillsList skills={technologies} iconMap={techIconMap} />
    </li>
  );
}

const Projects = () => {
  const [openProjectId, setOpenProjectId] = useState<string | null>(null);

  const toggleProject = (id: string) => {
    setOpenProjectId(openProjectId === id ? null : id);
  };

  const contentVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  return (
    <section data-slot="panel" id="projects">
      <div data-slot="panel-header" className="screen-line-after px-4">
        <h2
          data-slot="panel-title"
          className="section-title"
          style={{ color: "var(--headline)" }}
        >
          Projects
        </h2>
        {/* ==== BEGIN: Proud Projects Intro ==== */}
        <p
          className="mt-2 mb-6 text-base font-mono"
          style={{ color: "var(--card-paragraph)" }}
        >
          These are some of my projects I’m proud of.
        </p>
        {/* ==== END: Proud Projects Intro ==== */}
      </div>

      {projectsData.map((project) => (
        <div
          key={project.id}
          className="border-b"
          style={{ borderColor: "var(--card-border-color)" }}
          data-state={openProjectId === project.id ? "open" : "closed"}
        >
          <div className="flex items-center ">
            <div className="mx-4 flex size-6 bg-[var(--card-background)] h-8 w-8 border  p-1 rounded-full  shrink-0">
              <img
                alt={`${project.title} logo`}
                loading="lazy"
                width={32}
                height={32}
                className="rounded-full"
                decoding="async"
                src={`/logos/${project.logoFileName}`}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    "https://via.placeholder.com/32?text=P";
                }}
                style={{ objectFit: "contain" }}
              />
            </div>
            <div
              className="flex-1 border-l border-dashed"
              style={{ borderColor: "var(--card-border-color)" }}
            >
              <button
                type="button"
                aria-controls={`radix-${project.id}`}
                aria-expanded={openProjectId === project.id}
                data-state={openProjectId === project.id ? "open" : "closed"}
                className="group/project flex w-full items-center gap-4 p-4 pr-2 text-left select-none"
                onClick={() => toggleProject(project.id)}
                style={{ color: "var(--main)" }}
              >
                <div className="flex-1">
                  <h3
                    className="mb-1 leading-snug font-medium"
                    style={{ color: "var(--card-headline)" }}
                  >
                    {project.title}
                  </h3>
                  <dl
                    className="text-sm"
                    style={{ color: "var(--card-paragraph)" }}
                  >
                    <dt className="sr-only">Period</dt>
                    <dd className="flex items-center gap-0.5">
                      <span>
                        {project.type}
                      </span>
                    </dd>
                  </dl> 
                  {/* <dl
                    className="text-sm"
                    style={{ color: "var(--card-paragraph)" }}
                  >
                    <dt className="sr-only">Period</dt>
                    <dd className="flex items-center gap-0.5">
                      <span>
                        {project.created
                          ? new Date(project.created).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "2-digit",
                              }
                            )
                          : "Unknown"}
                      </span>
                      <span className="font-mono">—</span>
                      {project.status === "Published" && project.updated === ""
                        ? "Present"
                        : project.updated
                          ? new Date(project.updated).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "2-digit",
                              }
                            )
                          : "Unknown"}
                    </dd>
                  </dl> */}
                </div>
                {project.repoLink && (
                  <a
                    className="flex size-6 shrink-0 items-center justify-center"
                    href={project.repoLink}
                    target="_blank"
                  >
                    <FaGithub />
                  </a>
                )}
                <a
                  className="flex size-6 shrink-0 items-center justify-center"
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-state="closed"
                  data-slot="tooltip-trigger"
                  style={{
                    color: "var(--link-color)",
                    opacity: project.website ? 1 : 0,
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-link pointer-events-none size-4"
                    aria-hidden="true"
                    style={{ stroke: "var(--link-color)" }}
                  >
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                  <span className="sr-only">Open Project Link</span>
                </a>
                <div
                  className="shrink-0"
                  aria-hidden="true"
                  style={{ color: "var(--paragraph)" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`lucide ${
                      openProjectId === project.id
                        ? "lucide-chevrons-down-up"
                        : "lucide-chevrons-up-down"
                    } size-4`}
                    aria-hidden="true"
                    style={{ stroke: "var(--paragraph)" }}
                  >
                    {openProjectId === project.id ? (
                      <>
                        <path d="m7 20 5-5 5 5"></path>
                        <path d="m7 4 5 5 5-5"></path>
                      </>
                    ) : (
                      <>
                        <path d="m7 15 5 5 5-5"></path>
                        <path d="m7 9 5-5 5 5"></path>
                      </>
                    )}
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <AnimatePresence initial={false}>
            {openProjectId === project.id && (
              <motion.div
                key={`content-${project.id}`}
                id={`radix-${project.id}`}
                initial="closed"
                animate="open"
                exit="closed"
                variants={contentVariants}
                style={{
                  overflow: "hidden",
                  borderTopStyle: "dashed",
                  borderTopWidth: 1,
                  borderColor: "var(--card-border-color)",
                }}
              >
                <div
                  data-slot="prose"
                  className="prose prose-sm max-w-none font-mono prose-headings:font-semibold prose-headings:text-2xl prose-lead:text-base prose-a:font-medium prose-a:underline prose-code:rounded-md prose-code:border prose-code:px-[0.3rem] prose-code:py-[0.2rem] prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-hr:border-edge p-4"
                  style={{ color: "var(--card-paragraph)" }}
                >
                  <ProjectDescription description={project.description} />
                  {project.videoUrl && (
                    <p className="mb-4 list-disc ml-6 space-y-2">
                      <a
                        href={project.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                        style={{ color: "var(--link-color)" }}
                      >
                        Watch Video
                      </a>
                    </p>
                  )}
                  <ul className="mb-2 space-y-2 ">
                    <ProjectLinks github={project.github} />
                    <ProjectTechnologies technologies={project.technologies} />
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}

      {/* ==== BEGIN: Explore More on GitHub ==== */}
      <div className="px-4 py-6 flex justify-center">
        <a
          href="https://github.com/jaipatel248/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-lg underline"
          style={{ color: "var(--link-color)" }}
        >
          Explore more on GitHub
        </a>
      </div>
      {/* ==== END: Explore More on GitHub ==== */}
    </section>
  );
};

export default Projects;
