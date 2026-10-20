import type { ElementType, ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

interface Props {
  as?: ElementType
  className?: string
  children: ReactNode
  threshold?: number
  id?: string
  /** Show immediately instead of waiting for the observer (used after the loader). */
  show?: boolean
}

/** Adds `.shown` to its subtree once scrolled into view. */
export function Reveal({ as: Tag = 'div', className = '', children, threshold, id, show }: Props) {
  const [ref, shown] = useReveal<HTMLElement>(threshold)
  return (
    <Tag ref={ref} id={id} className={`${className} ${shown || show ? 'shown' : ''}`}>
      {children}
    </Tag>
  )
}

/** Staggered line-by-line headline. Wrap highlighted words in <em className="emph">. */
export function Headline({
  lines,
  as: Tag = 'h2',
  className = '',
  show,
  delay = 0,
}: {
  lines: ReactNode[]
  as?: ElementType
  className?: string
  show?: boolean
  delay?: number
}) {
  return (
    <Reveal as={Tag} className={`display ${className}`} show={show} threshold={0.3}>
      {lines.map((l, i) => (
        <span className="line" key={i}>
          <span style={{ ['--i' as string]: i, ['--d' as string]: `${delay}ms` }}>{l}</span>
        </span>
      ))}
    </Reveal>
  )
}
