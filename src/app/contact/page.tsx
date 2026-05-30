import { SectionHeading } from "@/src/components/SectionHeading";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s work together"
        description="I’m open to backend and full-stack developer roles, especially work involving React, TypeScript, Java, Spring Boot, PostgreSQL,SQL, MySQL and practical product implementation."
      />

      <div className="mt-8 rounded-3xl border border-[var(--border)] bg-white/78 p-6 shadow-sm">
        <p className="text-[var(--muted)]">Email</p>
        <a
          href="mailto:delaineabner3@gmail.com"
          className="mt-2 inline-block text-xl font-bold text-[var(--deep-green)]"
        >
          delaineabner3@gmail.com
        </a>
      </div>
    </div>
  );
}
