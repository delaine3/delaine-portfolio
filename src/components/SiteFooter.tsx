export function SiteFooter() {
  return (
    <footer className="site-footer mt-20">
      <div className="site-shell flex flex-col justify-between gap-4 py-7 text-sm sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} Delaine. Built with Next.js and TypeScript.</p>
        <div className="flex flex-wrap gap-5 font-semibold">
          <a className="text-link" href="https://github.com/delaine3" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="text-link" href="mailto:delaineabner3@gmail.com">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
