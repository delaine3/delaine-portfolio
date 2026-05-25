import { ProjectCard } from "@/src/components/ProjectCard";
import { SectionHeading } from "@/src/components/SectionHeading";
import { projects } from "@/src/data/projects";

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <SectionHeading
        eyebrow="Projects"
        title="Selected full-stack and product-focused work"
        description="These projects show how I approach data models, user workflows, backend systems, frontend structure and deployment."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
