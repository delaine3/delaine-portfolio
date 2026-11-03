export default function ContactPage() {
  return (
    <div className="site-shell max-w-4xl py-14">
      <p className="eyebrow">Contact</p>
      <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
        Get in touch
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8">
        I'm available for paid remote contract work involving Next.js, React,
        TypeScript, Supabase, PostgreSQL, and APIs. Email me about the work,
        your stack, and the timeframe.
      </p>
      <div className="surface mt-9 p-7 sm:p-10">
        <p className="eyebrow">Email</p>
        <a className="text-link mt-3 inline-block break-all text-xl font-bold sm:text-2xl"
           href="mailto:delaineabner3@gmail.com?subject=Development%20project">
          delaineabner3@gmail.com
        </a>
        <p className="muted mt-6">
          My code is on{" "}
          <a className="text-link font-semibold" href="https://github.com/delaine3"
             target="_blank" rel="noreferrer">GitHub</a>.
        </p>
      </div>
    </div>
  );
}
