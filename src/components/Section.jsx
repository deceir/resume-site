/** Shared section shell: consistent rhythm, kicker, and heading treatment. */
export default function Section({ id, kicker, title, note, children, className = '' }) {
  return (
    <section id={id} className={`relative mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32 ${className}`}>
      <header className="reveal mb-12 sm:mb-16">
        {kicker && (
          <p className="mb-4 font-mono text-xs tracking-[0.25em] text-violet-soft uppercase">
            {kicker}
          </p>
        )}
        <h2 className="max-w-3xl text-3xl leading-[1.15] font-semibold text-balance text-chalk sm:text-4xl md:text-[2.75rem]">
          {title}
        </h2>
        {note && <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-mist">{note}</p>}
      </header>
      {children}
    </section>
  )
}

/** Thin gradient rule used between major sections. */
export function Divider() {
  return (
    <div
      aria-hidden="true"
      className="mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-line to-transparent"
    />
  )
}
