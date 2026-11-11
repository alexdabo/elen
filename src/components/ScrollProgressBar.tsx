import { useEffect, useRef } from 'react'

interface ScrollProgressBarProps {
  /** Altura en px. Por defecto 3. */
  height?: number
  /** Clases extra para personalizar el degradado. */
  className?: string
}

export const ScrollProgressBar: React.FC<ScrollProgressBarProps> = ({
  height = 3,
  className = 'bg-gradient-to-r from-primary-400 via-primary-600 to-emerald-400'
}) => {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const bar = barRef.current
    if (!bar) return

    const onScroll = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      bar.style.transform = `scaleX(${max > 0 ? doc.scrollTop / max : 0})`
    }

    document.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => document.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      ref={barRef}
      className={`fixed inset-x-0 top-0 z-[60] origin-left scale-x-0 ${className}`}
      style={{ height: `${height}px` }}
      aria-hidden="true"
    />
  )
}
