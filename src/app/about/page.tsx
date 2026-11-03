import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="site-shell max-w-4xl py-14">
      <p className="eyebrow">About me</p>
      <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
        I like software with a real job to do.
      </h1>
      <div className="surface mt-9 space-y-5 p-7 text-lg leading-8 sm:p-10">
        <p>
          I'm Delaine, a full-stack developer based in Eswatini. I spent three years
          working on web applications at AcisTek LLC, and I build personal projects
          in Next.js, React, TypeScript, Supabase and Java.
        </p>
        <p>
          AvoLog started because I actually grow avocado trees. I wanted a better way
          to track individual plants, photos and care history. That is the kind of
          problem I enjoy: something concrete, with a workflow to untangle.
        </p>
        <p>
          I enjoy the less glamorous parts of development too: data models, debugging,
          API behavior, pagination and making existing features more dependable.
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
