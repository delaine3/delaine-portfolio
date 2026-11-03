import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="site-shell max-w-4xl py-14">
      <p className="eyebrow">About me</p>
      <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
        I'm Delaine, a full-stack developer.
      </h1>
      <div className="surface mt-9 space-y-5 p-7 text-lg leading-8 sm:p-10">
        <p>
          I'm Delaine, a full-stack developer based in Eswatini. I spent three years
          working on web applications at AcisTek LLC, and I build personal projects
          in Next.js, React, TypeScript, Supabase and Java.
        </p>
        <p>
          I grow avocado trees, which is why I started AvoLog. I built it to keep
          plant records, photos, and care history in one place.
        </p>
        <p>
          Much of my work involves databases and application logic. I enjoy debugging,
          building APIs, and figuring out why a query or feature isn't behaving as expected.
        </p>
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link className="button button-primary" href="/projects">See projects</Link>
        <a className="button button-secondary" href="mailto:delaineabner3@gmail.com">
          Get in touch
        </a>
      </div>
    </div>
  );
}
