/** "■ 02 / ENTREPRENEURSHIP" marker that sits on a hairline above each section. */
export function SectionLabel({ children }: { children: string }) {
  return (
    <div className="fade-up flex items-center gap-3">
      <span aria-hidden className="h-2 w-2 bg-accent" />
      <span className="label !text-sand">{children}</span>
    </div>
  )
}
