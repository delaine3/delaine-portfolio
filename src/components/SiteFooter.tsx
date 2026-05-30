export function SiteFooter() {
  return (
    <footer className="px-4 pb-6 pt-12">
      <div className=" flex flex-col gap-3 px-5 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
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
          <a href="mailto:delaineabner3@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
