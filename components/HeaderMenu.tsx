import Link from "next/link";

type MenuItem = {
  href: string;
  label: string;
};

type HeaderMenuProps = {
  items: MenuItem[];
};

function getMenuIcon(label: string): string {
  const key = label.toLowerCase();
  if (key.includes("about")) return "ℹ";
  if (key.includes("impact")) return "◉";
  if (key.includes("experience") || key.includes("journey")) return "▣";
  if (key.includes("skill")) return "◇";
  if (key.includes("project")) return "✦";
  if (key.includes("contact")) return "✉";
  if (key.includes("home")) return "⌂";
  return "→";
}

export default function HeaderMenu({ items }: HeaderMenuProps) {
  return (
    <div className="menu-dropdown" aria-label="Site menu">
      <button className="menu-trigger" aria-haspopup="true" aria-expanded="false" type="button">
        Want to know more?
      </button>
      <div className="menu-panel" role="menu">
        {items.map((item) => {
          const content = (
            <>
              <span>{item.label}</span>
              <span className="menu-item-icon" aria-hidden="true">
                {getMenuIcon(item.label)}
              </span>
            </>
          );

          return item.href.startsWith("#") ? (
            <a key={item.href} href={item.href} role="menuitem" className="menu-item">
              {content}
            </a>
          ) : (
            <Link key={item.href} href={item.href} role="menuitem" className="menu-item">
              {content}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
