import { partnerships } from '../data/content'
import { Photo } from '../components/Photo'
import { Headline, Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'

export function Collaborations() {
  return (
    <section id="collaborations" aria-label="Collaborations" className="px-4 py-24 md:px-8 md:py-40">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <SectionLabel>07 / COLLECTIVE PROGRESS</SectionLabel>
        </Reveal>
        <div className="mt-8">
          <Headline
            as="h2"
            className="text-[clamp(2.6rem,9vw,10rem)]"
            lines={['Meaningful work.', <><em className="emph">Stronger</em> connections.</>]}
          />
        </div>

        <Reveal className="mt-14 grid gap-12 md:mt-20 md:grid-cols-12">
          <p className="lede fade-up md:col-span-4">
            Progress grows when people, organizations, and institutions come together around shared goals. Sudhanshu values opportunities
            to exchange ideas and explore collaborations that create mutual value.
          </p>
          <ul className="md:col-span-7 md:col-start-6">
            {partnerships.map((p, i) => (
              <li key={p.id} className="fade-up grid gap-2 border-t border-line py-6 last:border-b md:grid-cols-[3rem_1fr_auto]" style={{ ['--d' as string]: `${i * 100}ms` }}>
                <span className="label !text-accent">0{i + 1}</span>
                <div>
                  <h3 className="display text-2xl md:text-3xl">{p.partner}</h3>
                  <p className="mt-2 text-ivory-dim">{p.purpose}</p>
                  <p className="label mt-3 !text-[0.65rem]">
                    Role: {p.role}
                    {p.date ? ` · ${p.date}` : ''}
                  </p>
                  {p.outcome && <p className="mt-2 text-sm">{p.outcome}</p>}
                  {p.image && <Photo src={p.image} alt={p.imageAlt ?? p.partner} label={p.partner} className="mt-5 aspect-[3/2] w-full max-w-lg" />}
                </div>
                {p.pending && <span className="label h-fit border border-accent/50 px-2 py-1 !text-[0.65rem] !text-accent">Pending verification</span>}
              </li>
            ))}
            <li className="fade-up pt-5 text-xs text-ivory-dim">
              Partner names and logos appear only with permission. A signed MoU does not imply endorsement by the partner.
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
