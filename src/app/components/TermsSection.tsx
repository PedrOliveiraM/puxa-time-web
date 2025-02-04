import type { ReactNode } from "react"

interface TermsSectionProps {
  title: string
  children: ReactNode
}

export function TermsSection({ title, children }: TermsSectionProps) {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  )
}

