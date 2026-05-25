import { SectionHeading } from "@/src/components/SectionHeading";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16">
      <SectionHeading
        eyebrow="About"
        title="Developer focused on useful software, thoughtful interfaces, and durable systems"
        description="I build web applications with React, Next.js, TypeScript, Java, Spring Boot, PostgreSQL, and Supabase. My work focuses on practical systems: searchable records, dashboards, structured workflows, authentication, deployment, and maintainable code."
      />

      <div className="mt-8 space-y-5 leading-8 text-[var(--muted)]">
        <p>
          My background includes professional web development work, backend
          migration, AWS CI/CD support, debugging, code reviews, and building
          full-stack portfolio projects from the database layer through the user
          interface.
        </p>

        <p>
          I care about software that has a reason to exist. I like turning messy
          real-world workflows into structured interfaces that people can
          actually use.
        </p>
      </div>
    </div>
  );
}
