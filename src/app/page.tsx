import Link from "next/link";
import { TechBadge } from "../components/TechBadge";
import { SectionHeading } from "../components/SectionHeading";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Java",
  "Spring Boot",
  "PostgreSQL",
  "Supabase",
  "REST APIs",
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(132,231,214,0.18),transparent_26%),radial-gradient(circle_at_78%_20%,rgba(112,190,211,0.16),transparent_24%),radial-gradient(circle_at_58%_78%,rgba(134,225,202,0.12),transparent_24%)]" />
        <div className="ring-pattern left-[-3rem] top-[-3rem] h-[18rem] w-[18rem]" />
        <div className="ring-pattern right-[-4rem] top-[2rem] h-[20rem] w-[20rem]" />
        <div className="ring-pattern bottom-[-7rem] left-[35%] h-[18rem] w-[18rem]" />

        <div className="relative grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <p className="mb-5 text-sm font-bold tracking-[0.22em] text-[var(--teal)] uppercase">
              Full-Stack Developer
            </p>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              Building web applications with{" "}
              <span className="text-gradient-water">
                flow, structure, and depth.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              I’m Delaine, a developer building thoughtful full-stack software
              with React, Next.js, TypeScript, Java, Spring Boot, PostgreSQL,
              and Supabase. I care about systems that feel smooth to use and
              make sense all the way down to the data layer.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="liquid-button liquid-button-primary"
              >
                View projects
              </Link>

              <a
                href="mailto:greenmavis402@gmail.com"
                className="liquid-button liquid-button-secondary"
              >
                Contact me
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "React",
                "TypeScript",
                "Next.js",
                "Java",
                "Spring Boot",
                "PostgreSQL",
              ].map((skill) => (
                <TechBadge key={skill}>{skill}</TechBadge>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="glass-panel mx-auto max-w-md rounded-[2rem] p-6">
              <p className="text-xs font-bold tracking-[0.22em] text-[var(--teal)] uppercase">
                Current focus
              </p>

              <div className="mt-5 space-y-5">
                <div className="rounded-[1.5rem] border border-[var(--line)] bg-white/42 p-4">
                  <h2 className="text-lg font-bold">Full-stack systems</h2>
                  <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                    Building interfaces, APIs, and data models that work
                    together cleanly.
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-[var(--line)] bg-white/42 p-4">
                  <h2 className="text-lg font-bold">Searchable workflows</h2>
                  <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                    Pagination, filters, sorting, forms, structured records, and
                    usable dashboards.
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-[var(--line)] bg-white/42 p-4">
                  <h2 className="text-lg font-bold">Product thinking</h2>
                  <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                    Turning messy real-life processes into software that people
                    can actually use.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-4 h-24 w-24 rounded-full bg-[rgba(122,221,205,0.28)] blur-2xl" />
            <div className="absolute -right-4 -top-8 h-28 w-28 rounded-full bg-[rgba(117,179,217,0.2)] blur-2xl" />
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl">
        <SectionHeading
          eyebrow="Featured work"
          title="Projects built like systems, not decoration"
          description="Selected work across business tools, personal tracking products, and data-driven user experiences."
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
              eyebrow="Approach"
              title="I like software that flows."
              description="Good applications carry users forward. The UI should feel smooth, the data should hold together, and the architecture should support growth."
            />
          </div>

          <div className="glass-panel rounded-[2rem] p-6 md:p-8">
            <p className="text-sm font-bold tracking-[0.22em] text-[var(--teal)] uppercase">
              Technical toolkit
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
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
            Availability
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight md:text-5xl">
            Open to web developer and full-stack developer roles.
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
            I’m especially interested in work involving backend systems,
            product-focused implementation, and durable software structure.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:greenmavis402@gmail.com"
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
