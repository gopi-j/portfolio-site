import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import HeaderMenu from "@/components/HeaderMenu";
import { profile } from "@/lib/portfolio-data";

const logoBySlug: Record<string, string> = {
  uipath: "/uipath-logo.jpeg",
  "automation-anywhere": "/aa-logo.png",
  "ai-rag-copilot": "/ai-agent.jpeg",
};

export default function SkillsPage() {
  return (
    <div className="site-shell skill-page-shell">
      <header className="top-nav">
        <Link href="/" className="brand">
          RPA+AI
        </Link>
        <nav aria-label="Skills navigation">
          <HeaderMenu items={[{ href: "/", label: "Home" }, { href: "/about", label: "About" }, { href: "/skills", label: "Skills Possessed" }]} />
        </nav>
      </header>

      <main>
        <ScrollReveal />
        <section className="hero reveal">
          <p className="eyebrow">Skill Deep Dives</p>
          <h1 className="skill-page-title">Skills That Benefit Your Organization</h1>
          <p className="lead">
            Open any skill to view a practical playbook: where it fits, what business problems it solves, and what outcomes you can expect.
          </p>
          <div className="capability-grid capability-grid-spacious">
            {profile.capabilities.map((capability) => (
              <Link key={capability.slug} href={`/skills/${capability.slug}`} className="capability-link-card skill-link-row">
                {logoBySlug[capability.slug] ? (
                  <div className="skill-logo-wrap skill-logo-wrap-row">
                    <Image
                      src={logoBySlug[capability.slug]}
                      alt={`${capability.skill} logo`}
                      width={180}
                      height={80}
                      className="skill-logo"
                    />
                  </div>
                ) : null}
                <div className="skill-link-copy">
                  <h3>{capability.skill}</h3>
                  <p>{capability.oneLineValue}</p>
                  <span>Open detailed page ↗</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
