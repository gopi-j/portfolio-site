import Image from "next/image";
import Link from "next/link";
import HeaderMenu from "@/components/HeaderMenu";
import ProjectCard from "@/components/ProjectCard";
import ScrollReveal from "@/components/ScrollReveal";
import Section from "@/components/Section";
import SkillGroupCard from "@/components/SkillGroupCard";
import TimelineItem from "@/components/TimelineItem";
import { profile } from "@/lib/portfolio-data";

const navItems = [
  { href: "/about", label: "About" },
  { href: "#impact", label: "Impact" },
  { href: "#experience", label: "Experience" },
  { href: "/skills", label: "Skills Possessed" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const impactStats = [
  { label: "Years Experience", value: "8+" },
  { label: "Automations Delivered", value: "25+" },
  { label: "Manual Effort Reduced", value: "40%" },
  { label: "Engineers Mentored", value: "8" },
];

export default function Home() {
  const [firstName, lastName] = profile.name.split(" ");

  return (
    <div className="site-shell">
      <header className="top-nav">
        <a href="#home" className="brand">RPA+AI</a>
        <nav aria-label="Portfolio sections">
          <HeaderMenu items={navItems} />
        </nav>
      </header>

      <main id="home">
        <ScrollReveal />
        <section className="hero reveal">
          <div className="hero-layout">
            <div>
              <p className="eyebrow">Technical Lead • Intelligent Automation</p>
              <h1>
                {firstName}
                <br />
                <span>{lastName}</span>
              </h1>
              <p className="lead">{profile.valueProposition}</p>
              <p className="lead lead-secondary">{profile.audienceMessage}</p>
              <div className="hero-cta">
                <a href="#contact" className="btn btn-primary">Let&apos;s Connect</a>
                <a href="/Gopi_Janjanam_Resume.pdf" className="btn btn-secondary" download>Download Resume</a>
                <Link href="/skills" className="btn btn-ghost">View Skill Playbooks</Link>
              </div>
            </div>
            <div className="hero-photo-wrap">
              <Image
                src="/profile.jpg"
                alt="Gopi Janjanam"
                width={420}
                height={560}
                priority
                className="hero-photo"
              />
            </div>
          </div>
        </section>

        <section id="impact" className="impact-strip reveal" aria-label="Impact metrics">
          {impactStats.map((stat) => (
            <article key={stat.label}>
              <p>{stat.label}</p>
              <strong>{stat.value}</strong>
            </article>
          ))}
        </section>

        <Section id="about" eyebrow="About" title="Who I Help">
          <p>{profile.summary}</p>
        </Section>

        <Section id="experience" eyebrow="Experience" title="Professional Journey">
          <div className="timeline">
            {profile.experience.map((item, index) => (
              <TimelineItem key={`${item.company}-${item.period}`} item={item} step={index} />
            ))}
          </div>
        </Section>

        <Section id="skills" eyebrow="Core Skills" title="Capability Areas">
          <div className="skills-grid">
            {profile.skillGroups.map((group) => (
              <SkillGroupCard key={group.title} group={group} />
            ))}
          </div>
        </Section>

        <Section id="projects" eyebrow="Proof of Work" title="Selected Projects">
          <div className="project-grid">
            {profile.projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Section>

        <Section id="contact" eyebrow="Contact" title="Ready To Improve Operations?">
          <div className="contact-panel">
            <p className="contact-intro">
              I work with enterprise teams to build resilient automation programs that create measurable business value.
            </p>
            <div className="contact-list-pro">
              {profile.contacts.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="contact-row"
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <span className="contact-row-label">{contact.label}</span>
                  <strong className="contact-row-value">{contact.value}</strong>
                  <span className="contact-row-cta">Open ↗</span>
                </a>
              ))}
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}
