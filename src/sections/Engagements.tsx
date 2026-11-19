import { useState } from 'react'
import { Plus } from 'lucide-react'
import { events, moments } from '../data/content'
import { Photo } from '../components/Photo'
import { Headline, Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'

export function Engagements() {
  const [open, setOpen] = useState<string>(events[0].id)

  return (
    <section id="engagements" aria-label="Engagements" className="px-4 py-24 md:px-8 md:py-40">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <SectionLabel>05 / BEYOND BORDERS</SectionLabel>
        </Reveal>
        <div className="mt-8">
          <Headline
            as="h2"
            className="text-[clamp(2.6rem,8.4vw,9.4rem)]"
            lines={[
              'Showing up.',
              'Exchanging ideas.',
              <>
                Building <em className="emph">connections.</em>
              </>,
            ]}
          />
        </div>

        <Reveal className="mt-14 grid gap-10 md:mt-20 md:grid-cols-12">
          <div className="fade-up md:col-span-4">
            <p className="lede">
              Professional and institutional engagements offer opportunities to encounter new perspectives, exchange ideas, and build
              relationships across different fields.
            </p>
          </div>

          {/* interactive timeline */}
          <ol className="md:col-span-8 md:col-start-5">
            {events.map((ev, i) => {
              const isOpen = open === ev.id
              return (
                <li key={ev.id} className="fade-up border-t border-line last:border-b" style={{ ['--d' as string]: `${i * 80}ms` }}>
                  <h3>
                    <button
                      className="group flex w-full items-center gap-4 py-6 text-left md:gap-8"
                      aria-expanded={isOpen}
                      aria-controls={`ev-${ev.id}`}
                      onClick={() => setOpen(isOpen ? '' : ev.id)}
                    >
                      <span className="label w-8 shrink-0 !text-accent">0{i + 1}</span>
                      <span className="flex-1">
                        <span className="label block !text-[0.65rem]">{ev.category}</span>
                        <span className="display block text-2xl transition-colors group-hover:text-accent md:text-4xl">{ev.title}</span>
                      </span>
                      <Plus
                        aria-hidden
                        className={`shrink-0 transition-transform duration-500 ${isOpen ? 'rotate-45 text-accent' : ''}`}
                      />
                    </button>
                  </h3>
                  <div id={`ev-${ev.id}`} role="region" aria-label={ev.title} className={`acc ${isOpen ? 'open' : ''}`}>
                    <div>
                      <div className={`grid gap-6 pb-8 md:pl-16 ${ev.image ? 'md:grid-cols-2' : ''}`}>
                        {ev.image && <Photo src={ev.image} alt={ev.imageAlt} label={ev.imageAlt} contain={ev.contain} className={`w-full ${ev.contain ? "aspect-[3/4] max-h-[520px] bg-ink-2" : "aspect-[4/3]"}`} />}
                        <dl className="space-y-4 text-sm">
                          {ev.pending && (
                            <p className="label inline-block border border-accent/50 px-2 py-1 !text-[0.65rem] !text-accent">
                              Details pending verification
                            </p>
                          )}
                          <Meta k="Organisation" v={ev.org} />
                          {ev.date && <Meta k="Date" v={ev.date} />}
                          {ev.location && <Meta k="Location" v={ev.location} />}
                          <Meta k="Role" v={ev.role} />
                          <p className="border-l border-line pl-3 text-ivory-dim">{ev.roleNote}</p>
                        </dl>
                      </div>
                    </div>
                  </div>
                </li>
              )
            })}
          </ol>
        </Reveal>

        <Reveal className="mt-24 md:mt-32">
          <div className="fade-up flex items-baseline justify-between gap-4 border-t border-line pt-5">
            <p className="label !text-sand">In the room</p>
          </div>
          <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-6 md:gap-4">
            {moments.map((m, i) => (
              <li
                key={m.id}
                className={`fade-up h-full ${i === 0 ? 'col-span-2 md:col-span-4' : i === 1 ? 'col-span-2 md:col-span-2' : i === 4 ? 'col-span-2 md:col-span-2' : 'md:col-span-2'}`}
                style={{ ['--d' as string]: `${i * 80}ms` }}
              >
                <figure className="h-full">
                  <Photo
                    src={m.src}
                    alt={m.alt}
                    label={m.alt}
                    className={`w-full ${i === 0 ? 'aspect-[16/9]' : i === 1 ? 'aspect-[16/10] md:aspect-auto md:h-full' : i === 4 ? 'aspect-[16/10] md:aspect-[4/5]' : 'aspect-[4/5]'}`}
                  />
                </figure>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

function Meta({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="label !text-[0.65rem]">{k}</dt>
      <dd className="mt-0.5">{v}</dd>
    </div>
  )
}
