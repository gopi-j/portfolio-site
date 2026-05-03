import Link from "next/link";
import { profile } from "@/lib/portfolio-data";

export default function SkillsPage() {
  return (
    <div className="site-shell skill-page-shell">
      <header className="top-nav">
        <Link href="/" className="brand">
          GJ
        </Link>
        <nav aria-label="Skills navigation">
          <Link href="/">Home</Link>
        </nav>
      </header>

      <main>
        <section className="hero reveal">
          <p className="eyebrow">Skill Deep Dives</p>
          <h1 className="skill-page-title">Capability Playbooks</h1>
          <p className="lead">
            Open any skill to view a practical playbook: where it fits, what business problems it solves, and what outcomes you can expect.
          </p>
          <div className="capability-grid capability-grid-spacious">
            {profile.capabilities.map((capability) => (
              <Link key={capability.slug} href={`/skills/${capability.slug}`} className="capability-link-card">
                <h3>{capability.skill}</h3>
                <p>{capability.oneLineValue}</p>
                <span>Open detailed page</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
