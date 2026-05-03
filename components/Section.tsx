type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
};

export default function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section id={id} className="section reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <div className="section-content">{children}</div>
    </section>
  );
}
