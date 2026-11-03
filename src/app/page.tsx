import Link from "next/link";
import { ProjectCard } from "@/src/components/ProjectCard";
import { SectionHeading } from "@/src/components/SectionHeading";
import { projects } from "@/src/data/projects";

const services = [
  {
    number: "01",
    name: "Next.js & React",
    description: "Frontend features, data-heavy interfaces, forms, dashboards and the bugs in between.",
  },
  {
    number: "02",
    name: "Supabase & PostgreSQL",
    description: "Authentication, database-backed workflows, search, filters and paginated views.",
  },
  {
    number: "03",
    name: "APIs & integrations",
    description: "REST endpoints, application logic, Java services and connecting the pieces.",
  },
];

export default function Home() {
  return (
    <div className="site-shell">
      <section className="home-hero" aria-labelledby="intro-heading">
        <div>
          <p className="eyebrow">Delaine · Full-stack developer · Based in Eswatini</p>
          <h1 id="intro-heading" className="hero-title mt-6">
            From messy workflows to <em>working software.</em>
          </h1>
          <p className="hero-intro mt-7">
            I'm Delaine. I've spent three years building and maintaining web
            applications. I work with Next.js, React, TypeScript, Supabase,
            PostgreSQL and Java, from database queries to the last UI detail.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link className="button button-primary" href="/projects">Explore my projects</Link>
            <a className="text-link text-sm" href="mailto:delaineabner3@gmail.com?subject=Development%20project">
              Email me ↗
            </a>
          </div>
          <p className="hero-meta mt-11">
            Available for remote, paid contract projects · Source code linked below
          </p>
        </div>
        <aside className="feature-panel" aria-label="Featured project AvoLog">
          <div className="flex items-center justify-between gap-4">
            <span className="eyebrow">Project in focus</span>
            <span className="tiny-label">01 / 03</span>
          </div>
          <div className="feature-rule mt-9" aria-hidden="true" />
          <h2 className="feature-title mt-5">AvoLog</h2>
          <p className="mt-5 text-base leading-8">
            I grow avocado trees. So I built a way to track each plant,
            its care history and its progress, without juggling notes and photos.
          </p>
          <ul className="feature-list mt-8 text-sm font-semibold leading-6">
            <li>Next.js + Supabase</li>
            <li>Care logs + image uploads</li>
            <li>Filtering + pagination</li>
          </ul>
          <Link className="text-link mt-9 inline-block text-sm" href="/projects/avolog">
            See the engineering decisions ↗
          </Link>
        </aside>
      </section>

      <section className="section-rule pt-12 pb-16" aria-labelledby="services-title">
        <SectionHeading
          eyebrow="What I work on"
          title="Small problems deserve good engineering."
          description="These are the kinds of tasks I can take from a defined scope to a working handoff."
        />
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <article className="service-item" key={service.number}>
              <p className="eyebrow">{service.number}</p>
              <h3 className="mt-3 text-2xl font-bold">{service.name}</h3>
              <p className="mt-3 leading-7">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-rule pt-12 pb-16" aria-labelledby="selected-work-title">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Selected work"
            title="Projects with code behind them."
            description="Three independent builds. I explain what I implemented, what I traded off and what I'd improve."
          />
          <Link className="text-link text-sm" href="/projects">All project details ↗</Link>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="section-rule grid gap-8 py-12 md:grid-cols-2">
        <div>
          <p className="eyebrow">Professional experience</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight">Three years in a development team.</h2>
          <p className="mt-4 max-w-lg leading-8">
            At AcisTek LLC (2023–2026), I worked on web development, backend
            migration, debugging, code reviews and AWS CI/CD support.
          </p>
        </div>
        <div className="work-cta p-8">
          <p className="eyebrow">Let's work</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight">
            Got a feature to finish or a bug to track down?
          </h2>
          <p className="mt-4 leading-7">
            Send me the problem and the stack. I can propose a small, paid,
            fixed-scope project.
          </p>
          <a className="button button-primary mt-7" href="mailto:delaineabner3@gmail.com?subject=Small%20development%20project">
            Discuss a project
          </a>
        </div>
      </section>
    </div>
  );
}
