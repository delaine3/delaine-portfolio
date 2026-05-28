import Link from "next/link";
import { notFound } from "next/navigation";
import { TechBadge } from "@/src/components/TechBadge";
import { projects } from "@/src/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: `${project.title} | Delaine`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-4xl px-5 py-16">
      <Link
        href="/projects"
        className="text-sm font-semibold text-[var(--teal)]"
      >
        ← Back to projects
      </Link>

      <h1 className="mt-6 text-5xl font-black tracking-tight">
        {project.title}{" "}
      </h1>

      <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
        {project.summary}
      </p>

      <div className="my-6 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <TechBadge key={tech}>{tech}</TechBadge>
        ))}
      </div>
      {project.liveAppLink != "" && (
        <a
          className="liquid-button liquid-button-primary mt-3"
          href={project.liveAppLink}
        >
          View Live App
        </a>
      )}
      <section className="mt-12">
        <h2 className="text-2xl font-bold">Problem</h2>
        <p className="mt-4 leading-8 text-[var(--muted)]">{project.problem}</p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">What I built</h2>
        <ul className="mt-4 space-y-3 text-[var(--muted)]">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="leading-7">
              • {highlight}
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
