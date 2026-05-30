import Link from "next/link";
import { TechBadge } from "../components/TechBadge";
import { SectionHeading } from "../components/SectionHeading";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";

const proofItems = [
  {
    label: "Backend",
    value: "Java · Spring Boot · REST APIs",
  },
  {
    label: "Data",
    value: "PostgreSQL · Supabase · Search",
  },
  {
    label: "Systems",
    value: "CRUD · Pagination · Filtering",
  },
  {
    label: "Interface",
    value: "React · Next.js · TypeScript",
  },
];

const skills = [
  "Java",
  "Spring Boot",
  "PostgreSQL",
  "REST APIs",
  "JPA",
  "Supabase",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "React Query",
  "TanStack Table",
  "Vercel",
  "AWS CI/CD",
];

export default function Home() {
  return (
    <div className="px-4 pb-8 pt-6">
      <section className="section-shell glass-panel-strong wave-sheen mx-auto max-w-6xl overflow-hidden rounded-[2.25rem] px-6 py-14 md:px-10 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(132,231,214,0.18),transparent_26%),radial-gradient(circle_at_78%_20%,rgba(112,190,211,0.16),transparent_24%),radial-gradient(circle_at_58%_78%,rgba(134,225,202,0.12),transparent_24%)]" />

        <div className="pointer-events-none ring-pattern left-[-3rem] top-[-3rem] h-[18rem] w-[18rem]" />
        <div className="pointer-events-none ring-pattern right-[-4rem] top-[2rem] h-[20rem] w-[20rem]" />
        <div className="pointer-events-none ring-pattern bottom-[-7rem] left-[35%] h-[18rem] w-[18rem]" />

        <div className="relative z-10">
          <p className="mb-5 text-sm font-bold tracking-[0.22em] text-[var(--teal)] uppercase">
            Backend-Leaning Full-Stack Developer
          </p>

          <h1 className="max-w-5xl text-4xl font-black leading-[1.02] tracking-tight md:text-6xl">
            I build practical web applications with{" "}
            <span className="text-gradient-water">
              reliable backend systems.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            I’m Delaine, a developer working with Java, Spring Boot, PostgreSQL,
            Supabase, React, Next.js, and TypeScript. I’m most drawn to the
            backend and systems side of software: data models, API and workflows
          </p>

          <div className="relative z-20 mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="liquid-button liquid-button-primary"
            >
              View projects
            </Link>

            <a
              href="mailto:delaineabner3@gmail.com"
              className="liquid-button liquid-button-secondary"
            >
              Contact me
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "Java",
              "Spring Boot",
              "PostgreSQL",
              "MySQL",
              "SQL",
              "REST APIs",
              "TypeScript",
              "React",
            ].map((skill) => (
              <TechBadge key={skill}>{skill}</TechBadge>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-6 max-w-6xl">
        <div className="glass-panel grid gap-4 rounded-[2rem] p-5 md:grid-cols-3 md:p-6">
          <div className="rounded-[1.35rem] border border-[var(--line)] bg-white/42 p-4">
            <p className="text-xs font-bold tracking-[0.18em] text-[var(--teal)] uppercase">
              Backend focus
            </p>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
              APIs, database-backed features, structured records, and business
              workflows.
            </p>
          </div>

          <div className="rounded-[1.35rem] border border-[var(--line)] bg-white/42 p-4">
            <p className="text-xs font-bold tracking-[0.18em] text-[var(--teal)] uppercase">
              Practical product work
            </p>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
              Tools built around real use: tracking, searching, filtering,
              logging, and managing records.
            </p>
          </div>

          <div className="rounded-[1.35rem] border border-[var(--line)] bg-white/42 p-4">
            <p className="text-xs font-bold tracking-[0.18em] text-[var(--teal)] uppercase">
              Thoughtful implementation
            </p>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
              Case studies walk through the problem, the data, the decisions,
              and possible next steps.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-8 grid max-w-6xl gap-4 md:grid-cols-4">
        {proofItems.map((item) => (
          <div key={item.label} className="glass-panel rounded-[1.5rem] p-5">
            <p className="text-xs font-bold tracking-[0.18em] text-[var(--teal)] uppercase">
              {item.label}
            </p>
            <p className="mt-2 text-sm font-semibold leading-6 text-[var(--foreground)]">
              {item.value}
            </p>
          </div>
        ))}
      </section>

      <section className="mx-auto mt-16 max-w-6xl">
        <SectionHeading
          eyebrow="Featured work"
          title="Projects that show the system behind the screen"
          description="Each case study covers the workflow, the data model, the backend decisions, and the interface built around them."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl">
        <div className="grid gap-6 md:grid-cols-[0.95fr_1.05fr]">
          <div className="glass-panel rounded-[2rem] p-6 md:p-8">
            <SectionHeading
              eyebrow="How I work"
              title="I like software that feels understandable from end to end."
              description="I care about how the database, API, application logic, and interface fit together. When those pieces support the same workflow, the product becomes easier to use and easier to maintain."
            />
          </div>

          <div className="glass-panel rounded-[2rem] p-6 md:p-8">
            <p className="text-sm font-bold tracking-[0.22em] text-[var(--teal)] uppercase">
              Engineering range
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-[var(--foreground)] md:text-4xl">
              Strongest in backend-heavy work, with enough frontend range to
              build complete applications.
            </h2>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              My work centers on APIs, data models, search, filtering,
              pagination, debugging, and workflows that need structure. I also
              build the interface when it helps the system become usable and
              complete.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <TechBadge key={skill}>{skill}</TechBadge>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl">
        <div className="glass-panel-strong rounded-[2.2rem] px-6 py-10 md:px-10 md:py-12">
          <p className="text-sm font-bold tracking-[0.22em] text-[var(--teal)] uppercase">
            Role fit
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight md:text-5xl">
            Looking for backend or full-stack work where I can build useful
            systems end to end.
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
            The strongest fit is a role involving Java, Spring Boot, PostgreSQL,
            REST APIs, backend integration, debugging, and practical product
            work.
          </p>

          <div className="relative z-20 mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:delaineabner3@gmail.com"
              className="liquid-button liquid-button-primary"
            >
              Email me
            </a>

            <Link
              href="/projects"
              className="liquid-button liquid-button-secondary"
            >
              See the work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
