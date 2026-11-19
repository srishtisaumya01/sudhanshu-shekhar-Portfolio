import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import type { Evidence } from '../data/content'
import { Photo } from './Photo'

export function Lightbox({ item, onClose }: { item: Evidence | null; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!item) return
    const opener = document.activeElement as HTMLElement | null
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'Tab') {
        // the close button is the only control: keep focus inside the dialog
        e.preventDefault()
        closeRef.current?.focus()
      }
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      opener?.focus?.()
    }
  }, [item, onClose])

  if (!item) return null
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-[80] grid place-items-center overflow-y-auto bg-ink/95 p-4"
      onClick={onClose}
    >
      <div className="w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
        <div className="mb-3 flex items-start justify-between gap-4">
          <div>
            <p className="label !text-accent">{item.type}</p>
            <h3 className="display mt-1 text-3xl md:text-4xl">{item.title}</h3>
            <p className="mt-1 text-sm text-ivory-dim">
              {item.org}
              {item.date ? ` · ${item.date}` : ''}
            </p>
          </div>
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Close preview"
            className="grid h-11 w-11 shrink-0 place-items-center border border-line"
          >
            <X aria-hidden />
          </button>
        </div>
        <Photo src={item.image} alt={item.title} label={item.context} contain className="aspect-[4/3] max-h-[62vh] w-full bg-ink-2" eager />
        <p className="mt-3 text-sm text-ivory-dim">{item.context}</p>
      </div>
    </div>
  )
}
