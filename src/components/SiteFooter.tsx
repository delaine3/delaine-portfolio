export function SiteFooter() {
  return (
    <footer className="site-footer mt-16">
      <div className="site-shell flex flex-wrap justify-between gap-5 py-8 text-sm">
        <p>© {new Date().getFullYear()} Delaine · Built with Next.js and TypeScript</p>
        <div className="flex gap-6">
          <a className="text-link" href="https://github.com/delaine3" target="_blank" rel="noreferrer">GitHub</a>
          <a className="text-link" href="mailto:delaineabner3@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
