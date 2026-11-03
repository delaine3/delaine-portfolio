import Link from "next/link";

const navItems = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-shell flex flex-wrap items-center justify-between gap-4 py-5">
        <Link href="/" className="flex items-center gap-2 text-lg font-black tracking-tight" aria-label="Delaine, home">
          <span className="brand-mark" aria-hidden="true" />
          Delaine
        </Link>
        <nav aria-label="Main navigation" className="flex items-center gap-5 text-sm font-semibold sm:gap-8">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link pb-1">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
