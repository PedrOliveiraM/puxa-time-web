import type { ReactNode } from "react";

interface TermsSectionProps {
  title: string;
  children: ReactNode;
}

export function TermsSection({ title, children }: TermsSectionProps) {
  return (
    <section className="mt-8">
      <h2 className="mb-4 text-2xl font-semibold">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}
