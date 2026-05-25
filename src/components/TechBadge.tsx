type TechBadgeProps = {
  children: React.ReactNode;
};

export function TechBadge({ children }: TechBadgeProps) {
  return (
    <span className="rounded-full border border-[var(--line)] bg-white/58 px-3 py-1 text-xs font-semibold tracking-[0.04em] text-[var(--deep-teal)] shadow-[0_4px_18px_rgba(15,55,50,0.05)] backdrop-blur">
      {children}
    </span>
  );
}
