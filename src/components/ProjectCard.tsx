import Link from "next/link";
import { Project } from "../data/projects";
import { TechBadge } from "./TechBadge";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="glass-panel-strong wave-sheen group relative overflow-hidden rounded-[2rem] p-6 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_70px_rgba(21,55,52,0.2)]">
      <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(126,224,210,0.26),transparent_72%)]" />

      <div className="relative flex h-full flex-col">
        <p className="mb-3 text-xs font-bold tracking-[0.22em] text-[var(--teal)] uppercase">
          Case Study
        </p>

        <h3 className="text-2xl font-black tracking-tight text-[var(--foreground)]">
          {project.title}
        </h3>

        <p className="mt-3 leading-7 text-[var(--muted)]">{project.summary}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.slice(0, 5).map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={`/projects/${project.slug}`}
            className="liquid-button liquid-button-primary"
          >
            Read case study
          </Link>

          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="liquid-button liquid-button-secondary"
            >
              GitHub
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
