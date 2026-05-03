import type { ProjectItem } from "@/lib/portfolio-data";

type ProjectCardProps = {
  project: ProjectItem;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <p className="impact">{project.impact}</p>
      <div className="badge-wrap">
        {project.stack.map((item) => (
          <span key={item} className="badge badge-subtle">
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
