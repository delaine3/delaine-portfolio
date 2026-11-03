import Link from "next/link";
import type { Project } from "@/src/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <p className="eyebrow">{project.kind}</p>
      <h3 className="font-bold">{project.title}</h3>
      <p className="mt-4 flex-1">{project.summary}</p>
      <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm">
        <Link className="text-link" href={"/projects/" + project.slug}>Case study ↗</Link>
        <a className="text-link" href={project.githubUrl} target="_blank" rel="noreferrer">
          Source code ↗
        </a>
      </div>
    </article>
  );
}
