/**
 * Fixed, non-interactive atmosphere layer: drifting colour fields, a
 * technical grid that fades toward the edges, and a vignette to keep
 * text contrast honest over the top of it.
 */
export default function Backdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-void" />

      <div
        className="absolute -top-[30vh] -left-[15vw] h-[75vh] w-[75vw] rounded-full opacity-55 blur-[120px] animate-drift"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(139,92,246,0.55), rgba(139,92,246,0) 68%)',
        }}
      />
      <div
        className="absolute top-[18vh] -right-[20vw] h-[70vh] w-[70vw] rounded-full opacity-45 blur-[130px] animate-drift"
        style={{
          animationDelay: '-8s',
          background:
            'radial-gradient(circle at 50% 50%, rgba(34,211,238,0.42), rgba(34,211,238,0) 68%)',
        }}
      />
      <div
        className="absolute bottom-[-25vh] left-[25vw] h-[60vh] w-[60vw] rounded-full opacity-30 blur-[140px] animate-drift"
        style={{
          animationDelay: '-15s',
          background:
            'radial-gradient(circle at 50% 50%, rgba(163,230,53,0.28), rgba(163,230,53,0) 70%)',
        }}
      />

      <div
        className="absolute inset-0 grid-bg"
        style={{
          maskImage: 'radial-gradient(ellipse 85% 65% at 50% 35%, #000 25%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 85% 65% at 50% 35%, #000 25%, transparent 100%)',
        }}
      />

      {/* Film grain, inlined so there is no extra request. */}
      <div
        className="absolute inset-0 opacity-[0.16] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 120% 90% at 50% 0%, transparent 40%, rgba(7,7,11,0.75) 100%)',
        }}
      />
    </div>
  )
}
