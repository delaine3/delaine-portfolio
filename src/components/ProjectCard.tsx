import Link from "next/link";
import type { Project } from "@/src/data/projects";
import { TechBadge } from "./TechBadge";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <p className="eyebrow mb-4">{project.kind}</p>
      <h3 className="text-2xl font-extrabold tracking-tight">{project.title}</h3>
      <p className="mt-3 flex-1 leading-7">{project.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.slice(0, 4).map((tech) => (
          <TechBadge key={tech}>{tech}</TechBadge>
        ))}
      </div>
      <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-bold">
        <Link className="text-link" href={"/projects/" + project.slug}>
          How I built it
        </Link>
        {project.githubUrl ? (
          <a className="text-link" href={project.githubUrl} target="_blank" rel="noreferrer">
            Source code
          </a>
        ) : null}
      </div>
    </article>
  );
}
