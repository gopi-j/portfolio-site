import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import HeaderMenu from "@/components/HeaderMenu";

const timelineBlocks = [
  {
    era: "2022 - Present",
    title: "Technical Leadership in Enterprise Automation",
    entries: [
      {
        role: "Technical Lead - Cognizant",
        period: "2022 - Present",
        detail:
          "Leading intelligent automation delivery with team mentorship, design governance, and AI-assisted engineering practices.",
      },
      {
        role: "AI Review Agents",
        period: "2024 - 2026",
        detail:
          "Built Microsoft Copilot-based code and design review assistants to improve engineering quality and review speed.",
      },
    ],
  },
  {
    era: "2020 - 2022",
    title: "Scaling Delivery Across Multi-Bot Programs",
    entries: [
      {
        role: "RPA Developer - Exponential AI",
        period: "2021 - 2022",
        detail:
          "Implemented queue-based, multi-bot automation architecture that improved throughput and reduced cycle times.",
      },
      {
        role: "Freelancer - Tangentia Inc",
        period: "2020 - 2021",
        detail:
          "Delivered end-to-end client automations, including AP workflows integrated with SQL and Dynamics systems.",
      },
    ],
  },
  {
    era: "2018 - 2019",
    title: "Foundation in Software and Process Automation",
    entries: [
      {
        role: "Software Engineer - Vaizva Tech Pvt Ltd",
        period: "2018 - 2019",
        detail:
          "Built invoice and CMS automation bots, establishing a practical foundation in process efficiency and reliability.",
      },
    ],
  },
];

const additionalInfo = [
  "UiPath Developer Associate (2025)",
  "Automation Anywhere Advanced & Master Certified",
  "Oracle Generative AI Certified",
  "Strong focus on knowledge sharing, team growth, and delivery governance",
];

export default function AboutPage() {
  return (
    <div className="site-shell skill-page-shell">
      <header className="top-nav">
        <Link href="/" className="brand">
          RPA+AI
        </Link>
        <nav aria-label="About navigation">
          <HeaderMenu items={[{ href: "/", label: "Home" }, { href: "/skills", label: "Skills Possessed" }, { href: "#journey", label: "Journey" }]} />
        </nav>
      </header>

      <main>
        <ScrollReveal />

        <section className="hero reveal">
          <p className="eyebrow">About</p>
          <h1 className="skill-page-title">Who I Am</h1>
          <p className="lead">
            I am an Intelligent Automation leader focused on helping organizations move from manual, fragmented workflows
            to scalable automation systems that create measurable business outcomes.
          </p>
        </section>

        <section className="about-story reveal">
          <h2>My Story</h2>
          <p>
            My journey started with software engineering and evolved into enterprise automation delivery. Over the years,
            I have worked across RPA platforms, built production-grade bot ecosystems, and guided teams through design,
            release, and support maturity.
          </p>
          <p>
            Today, I combine RPA, AI, and architecture principles to help organizations improve speed, reliability, and
            operational control. I enjoy solving real business bottlenecks, mentoring developers, and building systems
            that scale beyond pilot projects.
          </p>
        </section>

        <section id="journey" className="about-timeline reveal">
          <h2>Education & Career Timeline</h2>
          <p className="about-subtitle">A quick view of key phases that shaped my professional path.</p>

          <div className="about-timeline-grid">
            {timelineBlocks.map((block, blockIndex) => (
              <article
                key={block.era}
                className="about-era reveal"
                data-reveal-delay={String(blockIndex * 120)}
              >
                <p className="about-era-label">{block.era}</p>
                <h3>{block.title}</h3>
                <div className="about-era-list">
                  {block.entries.map((entry, entryIndex) => (
                    <div
                      key={`${entry.role}-${entry.period}`}
                      className="about-era-item reveal"
                      data-reveal-delay={String(blockIndex * 120 + entryIndex * 140)}
                    >
                      <div className="about-era-item-top">
                        <strong>{entry.role}</strong>
                        <span>{entry.period}</span>
                      </div>
                      <p>{entry.detail}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-extra reveal">
          <h2>Additional Info</h2>
          <ul>
            {additionalInfo.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
