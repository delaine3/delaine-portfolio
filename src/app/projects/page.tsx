import { ProjectCard } from "@/src/components/ProjectCard";
import { SectionHeading } from "@/src/components/SectionHeading";
import { projects } from "@/src/data/projects";

export default function ProjectsPage() {
  return (
    <div className="site-shell py-14">
      <SectionHeading
        eyebrow="Projects"
        title="Things I've built, and how they work."
        description="These are personal projects and an API prototype, not client commissions. The source code is available for inspection."
      />
      <div className="mt-9 grid gap-5 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
