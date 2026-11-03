import Link from "next/link";
import { ProjectCard } from "@/src/components/ProjectCard";
import { SectionHeading } from "@/src/components/SectionHeading";
import { TechBadge } from "@/src/components/TechBadge";
import { projects } from "@/src/data/projects";

const work = [
  {
    title: "Next.js features",
    detail: "React interfaces, forms, dashboards, debugging and bringing unfinished features across the line.",
  },
  {
    title: "Database-backed workflows",
    detail: "Supabase and PostgreSQL integrations, record management, search, filters and pagination.",
  },
  {
    title: "APIs and application logic",
    detail: "REST endpoints, validation, data models and Java / Spring Boot services.",
  },
];

export default function Home() {
  return (
    <div className="site-shell pt-8">
      <section className="hero">
        <div className="grid lg:grid-cols-[1.6fr_1fr]">
          <div className="px-6 py-12 sm:px-10 sm:py-16">
            <p className="eyebrow">Delaine · Full-stack developer · Eswatini</p>
            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              I build web apps, APIs, and the fiddly parts between them.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8">
              Three years of professional web development experience, plus hands-on projects
              using Next.js, React, TypeScript, Supabase and Java. I like turning messy
              data and workflows into applications that people can actually use.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="button button-primary" href="/projects">
                See my work
              </Link>
              <a className="button button-secondary" href="mailto:delaineabner3@gmail.com?subject=Development%20project">
                Discuss a project
              </a>
            </div>
            <div className="mt-9 flex flex-wrap gap-2">
              {["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Java"].map((tech) => (
                <TechBadge key={tech}>{tech}</TechBadge>
              ))}
            </div>
          </div>

          <aside className="hero-aside flex flex-col justify-between p-7 sm:p-10">
            <div>
              <p className="eyebrow eyebrow-light">What I can take on</p>
              <h2 className="mt-5 text-3xl font-extrabold leading-tight">
                One defined task. Working code. A clean handoff.
              </h2>
              <ul className="mt-8 space-y-5 text-base leading-7">
                <li className="border-t border-[var(--skin)] pt-4">A frontend feature or dashboard</li>
                <li className="border-t border-[var(--skin)] pt-4">A Supabase integration or data workflow</li>
                <li className="border-t border-[var(--skin)] pt-4">A bug fix or API implementation</li>
              </ul>
            </div>
            <p className="mt-10 text-sm leading-6">
              Available for remote, paid, fixed-scope contract work.
            </p>
          </aside>
        </div>
      </section>

      <section className="mt-20">
        <SectionHeading
          eyebrow="Services"
          title="Useful development work, without the ceremony."
          description="These are the types of tasks I can scope, build, test and hand over."
        />
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {work.map((item, index) => (
            <article className={index === 1 ? "surface-soft p-6" : "surface p-6"} key={item.title}>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-3 leading-7">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <SectionHeading
          eyebrow="Selected projects"
          title="Code you can inspect."
          description="Personal applications and an API prototype. Each case study explains what works, how I built it and what I would improve."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="mt-20 grid gap-5 lg:grid-cols-[1fr_1.2fr]">
        <div className="surface-soft p-7 sm:p-9">
          <p className="eyebrow">Professional experience</p>
          <h2 className="mt-4 text-3xl font-black">Three years in a development team.</h2>
          <p className="mt-5 leading-8">
            I worked as a junior full-stack developer at AcisTek LLC from 2023 to 2026.
            My experience includes application development, debugging, backend migration,
            code reviews and AWS CI/CD support.
          </p>
        </div>
        <div className="surface p-7 sm:p-9">
          <p className="eyebrow">Working together</p>
          <h2 className="mt-4 text-3xl font-black">Start with a small, real problem.</h2>
          <p className="mt-5 leading-8">
            If you have a feature that needs finishing, a database workflow that needs
            attention or a bug that keeps getting postponed, email me the scope.
            I can propose a bounded, paid implementation.
          </p>
          <a className="button button-primary mt-6" href="mailto:delaineabner3@gmail.com?subject=Small%20development%20project">
            Tell me what needs fixing
          </a>
        </div>
      </section>
    </div>
  );
}
