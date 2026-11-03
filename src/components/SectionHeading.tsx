type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
      <h2 className="text-3xl font-black leading-tight tracking-tight md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="muted mt-4 max-w-2xl text-base leading-7">{description}</p>
      ) : null}
    </div>
  );
}
