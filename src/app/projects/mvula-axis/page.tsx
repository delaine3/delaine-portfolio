import { TechBadge } from "@/src/components/TechBadge";
import { projects } from "@/src/data/projects";
import Link from "next/link";

export default function MvulaAxisProjectPage() {
  const project = projects.find((item) => item.slug === "mvula-axis");

  if (!project) {
    return null;
  }

  return (
    <article className="mx-auto max-w-4xl px-5 py-16">
      <Link
        href="/projects"
        className="text-sm font-semibold text-[var(--sage)]"
      >
        ← Back to projects
      </Link>

      <h1 className="mt-6 text-5xl font-black tracking-tight">
        {project.title}
      </h1>

      <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
        {project.summary}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <TechBadge key={tech}>{tech}</TechBadge>
        ))}
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">Problem</h2>
        <p className="mt-4 leading-8 text-[var(--muted)]">{project.problem}</p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">What I built</h2>
        <ul className="mt-4 space-y-3 text-[var(--muted)]">
          {project.highlights.map((highlight) => (
            <li key={highlight}>• {highlight}</li>
          ))}
        </ul>
      </section>
    </article>
  );
}
