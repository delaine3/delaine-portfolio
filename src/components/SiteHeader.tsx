import Link from "next/link";

const navItems = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 px-4">
      <div className="glass-panel mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3">
        <Link
          href="/"
          className="text-sm font-black tracking-[0.22em] text-[var(--deep-teal)] uppercase"
        >
          Delaine
        </Link>

        <nav className="flex items-center gap-4 text-sm text-[var(--muted)] md:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-[var(--deep-teal)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
