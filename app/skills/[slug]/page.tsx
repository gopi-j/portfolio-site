import Link from "next/link";
import { notFound } from "next/navigation";
import { getCapabilityBySlug, profile } from "@/lib/portfolio-data";

type SkillDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return profile.capabilities.map((capability) => ({ slug: capability.slug }));
}

export default async function SkillDetailPage({ params }: SkillDetailPageProps) {
  const { slug } = await params;
  const capability = getCapabilityBySlug(slug);

  if (!capability) notFound();

  return (
    <div className="site-shell skill-page-shell">
      <header className="top-nav">
        <Link href="/" className="brand">
          GJ
        </Link>
        <nav aria-label="Skill detail navigation">
          <Link href="/skills">All Skills</Link>
          <Link href="/">Home</Link>
        </nav>
      </header>

      <main>
        <section className="hero reveal">
          <p className="eyebrow">Skill Detail</p>
          <h1>{capability.skill}</h1>
          <p className="lead">{capability.oneLineValue}</p>
        </section>

        <section className="detail-band reveal">
          <h2>What It Is</h2>
          <p>{capability.whatItIs}</p>
        </section>

        <section className="detail-band reveal">
          <h2>How I Can Help Your Organization</h2>
          <p>{capability.whatICanDoForYou}</p>
        </section>

        <section className="detail-split reveal">
          <article>
            <h2>Common Organizational Pain Points</h2>
            <ul className="detail-list">
              {capability.organizationPainPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
          <article>
            <h2>Expected Outcomes</h2>
            <ul className="detail-list">
              {capability.outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="detail-band reveal">
          <h2>What I Typically Deliver</h2>
          <ul className="detail-list">
            {capability.deliverables.map((deliverable) => (
              <li key={deliverable}>{deliverable}</li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
