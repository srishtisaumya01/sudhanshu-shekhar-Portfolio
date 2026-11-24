import { useCallback, useState } from 'react'
import { ArrowUpRight, Maximize2, Play } from 'lucide-react'
import { media, recognitions, type Evidence } from '../data/content'
import { Lightbox } from '../components/Lightbox'
import { Photo } from '../components/Photo'
import { Headline, Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'

// items without a thumbnail or link stay in content.ts until the real content is supplied
const shown = media.filter((m) => m.thumb || m.link)

export function Media() {
  const [active, setActive] = useState<Evidence | null>(null)
  const close = useCallback(() => setActive(null), [])

  return (
    <section id="media" aria-label="Media" className="bg-ink-2 px-4 py-24 md:px-8 md:py-40">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <SectionLabel>06 / IDEAS IN CONVERSATION</SectionLabel>
        </Reveal>
        <div className="mt-8">
          <Headline
            as="h2"
            className="text-[clamp(2.4rem,7vw,8rem)]"
            lines={[
              'Every conversation',
              <>
                opens a new <em className="emph">possibility.</em>
              </>,
            ]}
          />
        </div>
        <Reveal className="mt-10">
          <p className="lede fade-up">
            From podcasts to public discussions, conversations create opportunities to exchange perspectives, explore ideas, and connect with
            wider audiences.
          </p>
        </Reveal>

        <Reveal className="mt-14 grid gap-6 md:mt-20 md:grid-cols-3">
          {shown.map((m, i) => {
            const card = (
              <>
                {m.thumb && (
                <div className="relative overflow-hidden">
                  <Photo
                    src={m.thumb}
                    alt={`${m.title} thumbnail`}
                    label={`${m.kind} cover`}
                    className="aspect-video w-full transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-3 top-3 grid h-10 w-10 place-items-center bg-accent text-ink">
                    <Play size={16} fill="currentColor" aria-hidden />
                  </span>
                </div>
                )}
                <div className={`flex items-start justify-between gap-3 ${m.thumb ? 'mt-4' : 'border-t border-line pt-5'}`}>
                  <div>
                    <p className="label !text-accent">
                      {m.kind}
                      {m.date ? ` · ${m.date}` : ''}
                    </p>
                    <h3 className="display mt-1 text-2xl md:text-3xl">{m.title}</h3>
                    <p className="mt-1 text-sm text-ivory-dim">{m.source}</p>
                  </div>
                  {m.link ? (
                    <ArrowUpRight aria-hidden className="shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  ) : null}
                </div>
                {m.pending && <p className="label mt-3 !text-[0.65rem]">Link and details pending verification</p>}
              </>
            )
            const cls = `fade-up group block ${i === 1 ? 'md:mt-12' : i === 2 ? 'md:mt-24' : ''}`
            return m.link ? (
              <a key={m.id} href={m.link} target="_blank" rel="noopener noreferrer" className={cls} style={{ ['--d' as string]: `${i * 100}ms` }}>
                {card}
              </a>
            ) : (
              <article key={m.id} className={cls} style={{ ['--d' as string]: `${i * 100}ms` }}>
                {card}
              </article>
            )
          })}
        </Reveal>

        <Reveal className="mt-24 md:mt-36">
          <div className="fade-up flex items-baseline justify-between gap-4 border-t border-line pt-5">
            <p className="label !text-sand">Speaking &amp; recognition</p>
            <p className="label hidden md:block">Tap a plaque to enlarge</p>
          </div>
          <ul className="mt-10 flex flex-col gap-16 md:flex-row md:items-start md:gap-8">
            {recognitions.map((r, i) => (
              <li
                key={r.id}
                className="fade-up md:basis-0"
                style={{ ['--d' as string]: `${i * 120}ms`, flexGrow: r.ratio ?? 0.7 }}
              >
                <p className="label !text-accent md:min-h-[2.4rem]">0{i + 1} · {r.org}</p>
                <h3 className="display mt-2 text-3xl md:min-h-[2.1em] md:text-4xl">{r.title}</h3>
                <button
                  onClick={() => setActive(r)}
                  aria-label={`Enlarge: ${r.title}`}
                  className="group relative mt-4 block w-full bg-sand p-2.5 text-left shadow-[0_30px_60px_-24px_rgb(0_0_0/0.9)] transition-transform duration-700 ease-out hover:!rotate-0 hover:-translate-y-2 md:p-3"
                  style={{ rotate: `${r.tilt ?? 0}deg` }}
                >
                  <img
                    src={r.image}
                    alt={`${r.title}: ${r.context}`}
                    loading="lazy"
                    decoding="async"
                    className="block h-auto w-full"
                    style={{ filter: 'saturate(0.92) contrast(1.04)' }}
                  />
                  <span className="absolute bottom-5 right-5 grid h-10 w-10 place-items-center bg-ink/80 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                    <Maximize2 size={16} aria-hidden />
                  </span>
                </button>
                <p className="mt-5 max-w-sm text-sm text-ivory-dim">{r.context}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
      <Lightbox item={active} onClose={close} />
    </section>
  )
}
