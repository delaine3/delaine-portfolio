import Link from "next/link";
import type { Project } from "@/src/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <p className="eyebrow">{project.kind}</p>
      <h3 className="mt-4 font-bold">{project.title}</h3>
      <p className="mt-3 flex-1">{project.summary}</p>
      <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm">
        <Link className="text-link" href={"/projects/" + project.slug}>
          Case study ↗
        </Link>
        <a className="text-link" href={project.githubUrl} target="_blank" rel="noreferrer">
          Source ↗
        </a>
      </div>
    </article>
  );
}
