import type { ReactNode } from 'react'
import { scrollToTarget } from '../lib/scroll'

interface Props {
  href?: string
  onClick?: () => void
  solid?: boolean
  external?: boolean
  children: ReactNode
  type?: 'button' | 'submit'
  disabled?: boolean
  className?: string
}

export function Button({ href, onClick, solid, external, children, type = 'button', disabled, className = '' }: Props) {
  const cls = `btn ${solid ? 'btn-solid' : ''} ${className}`
  if (href && !disabled) {
    return (
      <a
        href={href}
        className={cls}
        onClick={(e) => {
          if (href.startsWith('#')) {
            e.preventDefault()
            scrollToTarget(href)
          }
          onClick?.()
        }}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    )
  }
  return (
    <button
      type={type}
      className={`${cls} disabled:cursor-not-allowed disabled:opacity-50`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
