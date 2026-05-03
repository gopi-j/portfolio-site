import type { ExperienceItem } from "@/lib/portfolio-data";

type TimelineItemProps = {
  item: ExperienceItem;
  step: number;
};

const stepColors = ["step-amber", "step-coral", "step-peach", "step-gold"];

export default function TimelineItem({ item, step }: TimelineItemProps) {
  const stepColor = stepColors[step % stepColors.length];
  const side = step % 2 === 0 ? "right" : "left";

  return (
    <article className={`timeline-item ${stepColor} ${side}`}>
      <span className="climber" aria-hidden="true">
        🧗
      </span>
      <header>
        <h3>
          {item.role} <span>@ {item.company}</span>
        </h3>
        <p>{item.period}</p>
      </header>
      <ul>
        {item.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    </article>
  );
}
