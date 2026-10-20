import { Camera } from 'lucide-react'

interface Props {
  src?: string
  alt: string
  /** Shown on the placeholder so it is obvious what real image belongs here. */
  label: string
  className?: string
  parallax?: number
  eager?: boolean
  contain?: boolean
}

/** Real photo when supplied, otherwise an unmistakably labelled placeholder. */
export function Photo({ src, alt, label, className = '', parallax, eager, contain }: Props) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        data-parallax={parallax}
        className="h-full w-full"
        style={parallax ? { height: '116%', marginTop: '-8%' } : undefined}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            loading={eager ? 'eager' : 'lazy'}
            decoding="async"
            className={`h-full w-full ${contain ? 'object-contain' : 'object-cover object-[50%_30%]'}`}
          />
        ) : (
          <div className="ph h-full w-full" role="img" aria-label={`Placeholder: ${alt}`}>
            <div className="flex flex-col items-center gap-2 px-4 text-center">
              <Camera size={20} strokeWidth={1.25} aria-hidden className="opacity-60" />
              <span className="label !text-[0.65rem]">Photo to be supplied</span>
              <span className="text-xs opacity-60">{label}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
