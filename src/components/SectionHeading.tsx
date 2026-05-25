type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="mb-3 text-sm font-bold tracking-[0.22em] text-[var(--teal)] uppercase">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="text-3xl font-black tracking-tight text-[var(--foreground)] md:text-5xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-4 text-base leading-8 text-[var(--muted)] md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
