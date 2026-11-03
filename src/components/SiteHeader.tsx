import Link from "next/link";

const navItems = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-shell flex flex-wrap items-center justify-between gap-5 py-5">
        <Link href="/" className="flex items-center gap-3 font-bold tracking-tight" aria-label="Delaine, home">
          <span className="brand-mark" aria-hidden="true" />
          <span className="text-xl">Delaine</span>
        </Link>
        <nav aria-label="Main navigation" className="flex items-center gap-6 text-sm font-semibold sm:gap-8">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
