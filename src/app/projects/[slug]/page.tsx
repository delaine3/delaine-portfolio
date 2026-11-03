import Link from "next/link";
import { notFound } from "next/navigation";
import { TechBadge } from "@/src/components/TechBadge";
import { projects } from "@/src/data/projects";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return project
    ? { title: project.title + " | Delaine", description: project.summary }
    : { title: "Project not found" };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  return (
    <article className="site-shell max-w-4xl py-12">
      <Link href="/projects" className="text-link text-sm font-bold">
        ← All projects
      </Link>

      <div className="surface mt-8 p-7 sm:p-11">
        <p className="eyebrow">{project.kind}</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">{project.title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8">{project.summary}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((tech) => <TechBadge key={tech}>{tech}</TechBadge>)}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          {project.liveUrl ? (
            <a className="button button-primary" href={project.liveUrl} target="_blank" rel="noreferrer">
              Open app
            </a>
          ) : null}
          <a className={project.liveUrl ? "button button-secondary" : "button button-primary"}
             href={project.githubUrl} target="_blank" rel="noreferrer">
            View source
          </a>
        </div>
        {project.liveUrl ? (
          <p className="muted mt-3 text-sm">The app may require an account to view its features.</p>
        ) : null}
      </div>

      <section className="mt-10">
        <h2 className="text-2xl font-black">The problem</h2>
        <p className="mt-3 leading-8">{project.problem}</p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-black">What I implemented</h2>
        <ul className="mt-4 list-disc space-y-3 pl-6 leading-8">
          {project.highlights.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="surface-soft mt-10 p-6 sm:p-8">
        <h2 className="text-2xl font-black">Technical decisions</h2>
        <ul className="mt-5 list-disc space-y-4 pl-6 leading-8">
          {project.decisions.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-black">What I'd work on next</h2>
        <p className="mt-3 leading-8">{project.nextStep}</p>
      </section>

      <div className="mt-12 border-t border-[var(--skin-mid)] pt-7">
        <Link className="text-link font-bold" href="/projects">← More projects</Link>
      </div>
    </article>
  );
}
