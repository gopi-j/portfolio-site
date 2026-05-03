import type { SkillGroup } from "@/lib/portfolio-data";

type SkillGroupCardProps = {
  group: SkillGroup;
};

export default function SkillGroupCard({ group }: SkillGroupCardProps) {
  return (
    <article className="skill-group-card">
      <h3>{group.title}</h3>
      <div className="badge-wrap">
        {group.items.map((item) => (
          <span key={item} className="badge">
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
