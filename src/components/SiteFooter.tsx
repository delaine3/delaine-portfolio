export function SiteFooter() {
  return (
    <footer className="px-4 pb-6 pt-12">
      <div className="glass-panel mx-auto flex max-w-6xl flex-col gap-3 rounded-[2rem] px-5 py-6 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} Delaine. Built with Next.js and
          TypeScript.
        </p>

        <div className="flex gap-4">
          <a
            href="https://github.com/delaine3"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:greenmavis402@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
