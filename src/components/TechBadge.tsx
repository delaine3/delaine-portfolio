import type { ReactNode } from "react";

export function TechBadge({ children }: { children: ReactNode }) {
  return <span className="tech-tag">{children}</span>;
}
