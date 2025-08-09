"use client";

import { motion } from "framer-motion";

interface Project {
  id: string;
  title: string;
  description: string;
  website: string;
  videoUrl?: string;
  logoFileName: string;
  cardUrl?: string;
}

interface Milestone {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

const codingAchievements: Project[] = [
  {
    id: "leetcode",
    title: "LeetCode",
    description: `• 800+ problems solved on platforms like LeetCode, CodeChef, etc.`,
    website: "https://leetcode.com/jai248/",
    logoFileName: "leetcode.png",
    cardUrl: "https://leetcard.jacoblin.cool/jai248?ext=heatmap",
  },
  {
    id: "stackoverflow",
    title: "StackOverflow",
    description: `• StackOverflow contributor with 1000+ reputation points.`,
    website: "https://stackoverflow.com/users/16924632/jai248",
    logoFileName: "stackoverflow.png",
    cardUrl: "https://github-stackoverflow-readme.vercel.app/?userId=16924632",
  },
];

const professionalMilestones: Milestone[] = [
  {
    id: "atliq-award",
    title: "Certificate of Appraisal",
    description:
      "Received for Outstanding Performance (Jan–March 2021) at AtliQ Technologies during internship.",
    icon: "🏅",
  },
];

const ProjectCard = ({ project }: { project: Project }) => (
  <motion.div
    whileHover={{ y: -4, boxShadow: "0px 10px 25px rgba(0,0,0,0.1)" }}
    className="bg-[var(--card-background)] border border-[var(--card-border-color)] rounded-xl overflow-hidden transition-all duration-300 flex flex-col"
  >
    <a href={project.website} target="_blank" rel="noopener noreferrer">
      <div className="p-4 flex items-center gap-3">
        <img
          src={`/logos/${project.logoFileName}`}
          onError={(e) =>
            ((e.currentTarget as HTMLImageElement).src =
              "https://via.placeholder.com/32?text=P")
          }
          alt={`${project.title} logo`}
          className="w-10 h-10 object-contain rounded-full border"
        />
        <div className="flex-1">
          <h3 className="font-semibold text-lg text-[var(--card-headline)]">
            {project.title}
          </h3>
        </div>
        <a
          href={project.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm underline text-[var(--link-color)]"
        >
          Visit ↗
        </a>
      </div>

      {project.cardUrl && (
        <div className="px-4">
          <div className="flex justify-center">
            <img
              src={project.cardUrl}
              alt="Card Preview"
              className="rounded-md w-full max-w-full object-cover mb-3"
            />
          </div>
        </div>
      )}

      <div className="px-4 pb-4">
        <ul className="list-disc ml-6 space-y-2 text-sm text-[var(--card-paragraph)] font-mono">
          {project.description.split("\n\n").map((item, i) => (
            <li key={i}>{item.replace(/^•\s*/, "")}</li>
          ))}
        </ul>

        {project.videoUrl && (
          <div className="mt-4">
            <a
              href={project.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm underline text-[var(--link-color)]"
            >
              📺 Watch Demo
            </a>
          </div>
        )}
      </div>
    </a>
  </motion.div>
);

const MilestoneCard = ({ milestone }: { milestone: Milestone }) => (
  <motion.div
    whileHover={{ y: -2 }}
    className="bg-[var(--card-background)] border border-[var(--card-border-color)] rounded-lg p-4 transition-all duration-200 flex items-start gap-4"
  >
    <div className="text-2xl">{milestone.icon || "🎯"}</div>
    <div>
      <h4 className="font-semibold text-md text-[var(--card-headline)]">
        {milestone.title}
      </h4>
      <p className="text-sm text-[var(--card-paragraph)] font-mono mt-1">
        {milestone.description}
      </p>
    </div>
  </motion.div>
);

const Achievements = () => {
  return (
    <section id="achievements" className="px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title text-[var(--headline)]">Achievements</h2>
        <p className="mt-2 mb-6 text-base font-mono text-[var(--card-paragraph)]">
          Here are a few of the achievements I'm most proud of.
          {/* A mix of coding milestones and professional accomplishments I’m proud of. */}
        </p>

        {/* Coding Section */}
        {/* <h3 className="text-lg font-semibold text-[var(--card-headline)] mb-4 mt-8">Coding Achievements</h3> */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
          {codingAchievements.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
        {/* <a href="https://app.daily.dev/jaipatel">
          <img
            src="https://api.daily.dev/devcards/v2/Y0JiWzKuC5LlOMM0L7ej8.png?type=default&r=ifc"
            width="356"
            alt="Jay Patel's Dev Card"
          />
        </a> */}
        {/* Milestones Section */}
        {/* <h3 className="text-lg font-semibold text-[var(--card-headline)] mb-4 mt-10">Professional Milestones</h3>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
          {professionalMilestones.map((milestone) => (
            <MilestoneCard key={milestone.id} milestone={milestone} />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Achievements;
