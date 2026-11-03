import { ProjectCard } from "@/src/components/ProjectCard";
import { SectionHeading } from "@/src/components/SectionHeading";
import { projects } from "@/src/data/projects";

export default function ProjectsPage() {
  return (
    <div className="site-shell py-14">
      <SectionHeading
        eyebrow="Projects"
        title="Personal projects"
        description="AvoLog, Noticing, and Mvula Axis. Each project has source code and notes on how I built it. None is presented as client work."
      />
      <div className="mt-9 grid gap-5 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
