import Link from "next/link";
import { ProjectCard } from "@/src/components/ProjectCard";
import { SectionHeading } from "@/src/components/SectionHeading";
import { projects } from "@/src/data/projects";

const services = [
  {
    number: "01",
    name: "Next.js & React",
    description: "Frontend features, forms, dashboards, and debugging existing applications.",
  },
  {
    number: "02",
    name: "Supabase & PostgreSQL",
    description: "Authentication, data workflows, search, filtering, and pagination.",
  },
  {
    number: "03",
    name: "APIs & integrations",
    description: "REST endpoints, application logic, Java services, and connecting existing systems.",
  },
];

export default function Home() {
  return (
    <div className="site-shell">
      <section className="home-hero" aria-labelledby="intro-heading">
        <div>
          <p className="eyebrow">Delaine · Full-stack developer · Eswatini</p>
          <h1 id="intro-heading" className="hero-title mt-7">
            I build web apps, APIs, and <em>database-backed features.</em>
          </h1>
          <p className="hero-intro mt-8">
            Three years of professional web development experience. I work across
            Next.js, React, TypeScript, Supabase, PostgreSQL, and Java, from
            database queries to the interface people use.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link className="button button-primary" href="/projects">
              Explore my work
            </Link>
            <a className="text-link text-sm" href="mailto:delaineabner3@gmail.com?subject=Development%20project">
              Get in touch ↗
            </a>
          </div>
          <p className="hero-meta mt-12">
            Available for paid, remote contract projects
          </p>
        </div>

        <aside className="hero-graphic p-7 sm:p-9" aria-label="Featured project AvoLog">
          <div className="graphic-top flex items-center justify-between gap-3">
            <p className="eyebrow" style={{ color: "var(--skin-deep)" }}>Featured project</p>
            <span className="tiny-label" style={{ color: "var(--skin-deep)" }}>01 / 03</span>
          </div>
          <div className="avocado-art" role="img" aria-label="Illustration of a cut avocado">
            <div className="avocado-outer">
              <div className="avocado-flesh" />
              <div className="avocado-pit" />
            </div>
          </div>
          <div className="graphic-footer">
            <h2>AvoLog</h2>
            <p className="mt-3 max-w-sm text-sm leading-7">
              A plant tracker I built to log avocado growth, care history, and photos.
            </p>
            <Link href="/projects/avolog"
                  className="mt-5 inline-block text-sm font-bold underline underline-offset-4">
              Explore the project ↗
            </Link>
          </div>
        </aside>
      </section>

      <section className="section-rule pb-20 pt-14">
        <SectionHeading
          eyebrow="What I do"
          title="What I work on"
          description="I work on existing applications as well as new features. These are the areas I know best."
        />
        <div className="mt-11 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <article className="service-item" key={service.number}>
              <span className="eyebrow">{service.number}</span>
              <h3 className="mt-4 text-2xl font-bold">{service.name}</h3>
              <p className="mt-4 leading-7">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-rule pb-20 pt-14">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Selected work"
            title="Selected projects"
            description="Three projects I've built, with source code and notes on the technical decisions."
          />
          <Link className="text-link text-sm" href="/projects">See all projects ↗</Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="section-rule grid gap-8 py-14 md:grid-cols-2">
        <div className="pr-3">
          <p className="eyebrow">Professional experience</p>
          <h2 className="mt-5 max-w-md text-3xl font-bold leading-tight sm:text-4xl">
            My experience at AcisTek LLC
          </h2>
          <p className="mt-5 max-w-lg leading-8">
            At AcisTek LLC (2023–2026), I worked on web applications, backend
            migration, debugging, code reviews, and AWS CI/CD support.
          </p>
        </div>
        <div className="work-cta p-8 sm:p-10">
          <p className="eyebrow">Work with me</p>
          <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
            Have a project to discuss?
          </h2>
          <p className="mt-5 leading-8">
            I'm available for paid, fixed-scope development work. Email me
            the requirements, the stack, and your deadline.
          </p>
          <a className="button button-primary mt-7"
             href="mailto:delaineabner3@gmail.com?subject=Small%20development%20project">
            Email me ↗
          </a>
        </div>
      </section>
    </div>
  );
}
