import { useCallback, useState } from 'react'
import { Maximize2 } from 'lucide-react'
import { evidence, type Evidence } from '../data/content'
import { Lightbox } from '../components/Lightbox'
import { Photo } from '../components/Photo'
import { Headline, Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'

function EvidenceCard({ item, onOpen, delay }: { item: Evidence; onOpen: (e: Evidence) => void; delay: number }) {
  return (
    <article className="fade-up group" style={{ ['--d' as string]: `${delay}ms` }}>
      <button
        onClick={() => onOpen(item)}
        className="relative block w-full overflow-hidden text-left"
        aria-label={`Open preview: ${item.title}`}
      >
        <Photo
          src={item.image}
          alt={item.title}
          label={`${item.type}, redacted`}
          contain={item.contain}
          className="aspect-[4/5] w-full transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <span className="absolute bottom-3 right-3 grid h-10 w-10 place-items-center bg-ink/80 opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
          <Maximize2 size={16} aria-hidden />
        </span>
      </button>
      <p className="label mt-4 !text-accent">
        {item.type}
        {item.date ? ` · ${item.date}` : ''}
      </p>
      <h3 className="display mt-1 text-2xl">{item.title}</h3>
      <p className="mt-1 text-sm">{item.org}</p>
      <p className="mt-2 text-sm text-ivory-dim">{item.context}</p>
      {item.source && (
        <a href={item.source} target="_blank" rel="noopener noreferrer" className="label ulink mt-2 inline-block">
          Source
        </a>
      )}
      {item.pending && <p className="label mt-3 !text-[0.65rem]">Pending verification</p>}
    </article>
  )
}

export function Proof() {
  const [active, setActive] = useState<Evidence | null>(null)
  const close = useCallback(() => setActive(null), [])

  return (
    <section id="proof" aria-label="Proof of work" className="border-t border-line px-4 py-24 md:px-8 md:py-40">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <SectionLabel>PROOF OF WORK</SectionLabel>
        </Reveal>
        <div className="mt-8">
          <Headline
            as="h2"
            className="text-[clamp(2.4rem,7.6vw,8.6rem)]"
            lines={[
              'Milestones that',
              <>
                tell the <em className="emph">story.</em>
              </>,
            ]}
          />
        </div>
        <Reveal className="mt-14 md:mt-20">
          <p className="lede fade-up mb-12">
            A selective record of invitations, certificates, agreements and photographs. Private details are redacted, and nothing is published without
            permission.
          </p>
          <div className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {evidence.map((e, i) => (
              <EvidenceCard key={e.id} item={e} onOpen={setActive} delay={i * 90} />
            ))}
          </div>
        </Reveal>
      </div>
      <Lightbox item={active} onClose={close} />
    </section>
  )
}
