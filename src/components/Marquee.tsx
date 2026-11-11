const MARQUEE_ITEMS = [
  'Prototipo demostrativo',
  'No oficial',
  'Sin validez legal',
  'Datos ficticios',
  'Pago simulado'
] as const

interface MarqueeProps {
  items?: readonly string[]
}

export const Marquee: React.FC<MarqueeProps> = ({ items = MARQUEE_ITEMS }) => {
  return (
    <div
      className="marquee overflow-hidden border-b border-amber-950/60 bg-gradient-to-r from-amber-950 via-amber-900 to-amber-950 py-2"
      role="note"
      aria-label="Aviso: prototipo demostrativo no oficial"
    >
      <div className="marquee-track">
        {[false, true].map((isDuplicate, idx) => (
          <div key={idx} className="marquee-group" aria-hidden={isDuplicate}>
            {items.map(text => (
              <span key={text} className="flex items-center">
                <span className="whitespace-nowrap font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-100/90">
                  {text}
                </span>
                <span className="px-2 text-xs text-amber-400">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
