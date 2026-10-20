import { education } from '../data/content'
import { Headline, Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'

/** Light section for contrast. */
export function Foundation() {
  return (
    <section id="foundation" aria-label="Foundation" className="light bg-paper px-4 py-24 text-ink md:px-8 md:py-40">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <div className="[&_.label]:!text-[#7a3510]">
            <SectionLabel>04 / FOUNDATION</SectionLabel>
          </div>
        </Reveal>
        <div className="mt-8">
          <Headline
            as="h2"
            className="text-[clamp(2.2rem,6.6vw,7.4rem)]"
            lines={[
              'Science shapes the thinking.',
              <>
                <em className="emph">Purpose</em> shapes the work.
              </>,
            ]}
          />
        </div>

        <Reveal className="mt-14 grid gap-10 md:mt-20 md:grid-cols-12">
          <ul className="fade-up md:col-span-6">
            {education.map((e, i) => (
              <li key={e.degree} className="flex items-baseline justify-between gap-4 border-t border-ink/30 py-5 last:border-b">
                <span className="display text-3xl md:text-5xl">{e.degree}</span>
                <span className="label !text-ink/60">0{i + 1} · {e.note}</span>
              </li>
            ))}
          </ul>
          <p className="fade-up font-serif text-2xl leading-snug md:col-span-4 md:col-start-9 md:text-3xl" style={{ ['--d' as string]: '200ms' }}>
            With a foundation in plant biology and botany, Sudhanshu brings a scientific perspective to his interest in environmental
            sustainability and responsible resource management.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
