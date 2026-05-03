import type { CapabilityItem } from "@/lib/portfolio-data";

type CapabilityCardProps = {
  capability: CapabilityItem;
};

export default function CapabilityCard({ capability }: CapabilityCardProps) {
  return (
    <article className="capability-card">
      <h3>{capability.skill}</h3>
      <p>
        <strong>What it is:</strong> {capability.whatItIs}
      </p>
      <p>
        <strong>How I apply it for you:</strong> {capability.whatICanDoForYou}
      </p>
      <ul>
        {capability.outcomes.map((outcome) => (
          <li key={outcome}>{outcome}</li>
        ))}
      </ul>
    </article>
  );
}
