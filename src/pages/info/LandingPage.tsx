import { HOME_PATH } from '@config'
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export const LandingPage: React.FC = () => {
  const headerRef = useRef<HTMLElement>(null)

  // Sombra del header al hacer scroll
  useEffect(() => {
    const header = headerRef.current
    if (!header) return
    const onScroll = () => {
      header.classList.toggle('is-scrolled', document.documentElement.scrollTop > 10)
    }
    document.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => document.removeEventListener('scroll', onScroll)
  }, [])

  // Escalonado + IntersectionObserver para reveals
  useEffect(() => {
    document.querySelectorAll<HTMLElement>('[data-stagger]').forEach(group => {
      Array.from(group.children).forEach((child, i) => {
        const el = child as HTMLElement
        el.classList.add('reveal')
        el.style.transitionDelay = `${Math.min(i * 90, 500)}ms`
      })
    })

    const revealEls = document.querySelectorAll<HTMLElement>('.reveal')

    if (!('IntersectionObserver' in window)) {
      revealEls.forEach(el => el.classList.add('revealed'))
      return
    }

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          el.classList.add('revealed')
          window.setTimeout(() => (el.style.transitionDelay = '0ms'), 950)
          io.unobserve(el)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )
    revealEls.forEach(el => io.observe(el))

    return () => io.disconnect()
  }, [])

  return (
    <main className="relative mx-auto max-w-4xl px-4 pb-16 pt-10 sm:px-6 sm:pt-14 lg:px-8">
      {/* ============ Aviso principal ============ */}
      <div id="aviso" className="gradient-border rounded-3xl border border-amber-200/80">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-50 via-white to-amber-50 p-6 sm:p-8">
          <div className="pointer-events-none absolute -top-24 right-0 h-56 w-56 rounded-full bg-amber-300/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-10 h-56 w-56 rounded-full bg-amber-200/30 blur-3xl" />

          <div className="relative flex items-start gap-4">
            <span
              className="pulse-ring mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-500 text-white shadow-lg shadow-amber-500/30"
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M12 9v4" />
                <path d="M12 17h.01" />
                <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              </svg>
            </span>
            <div>
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-amber-600">
                Aviso importante
              </p>
              <h2 className="mt-1.5 text-xl font-extrabold tracking-tight text-amber-950 sm:text-2xl">
                Esto no es un sistema real ni oficial
              </h2>
              <p className="mt-2.5 text-[15px] leading-relaxed text-amber-900/90">
                Elén es únicamente un{' '}
                <strong className="font-bold">prototipo demostrativo</strong>. No está
                conectado a ningún sistema municipal, no procesa pagos reales y no emite
                certificados con validez legal. Es una propuesta conceptual para
                visualizar cómo podría sentirse un trámite digital.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ============ Hero ============ */}
      <section className="relative mt-14 text-center sm:mt-20">
        <div
          className="blob pointer-events-none absolute -top-16 right-[8%] -z-10 h-72 w-72 rounded-full bg-primary-200/50 blur-3xl sm:h-96 sm:w-96"
          aria-hidden="true"
        />
        <div
          className="blob pointer-events-none absolute left-[4%] top-28 -z-10 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl sm:h-96 sm:w-96"
          aria-hidden="true"
          style={{ animationDelay: '-6s' }}
        />

        <span
          className="hero-rise inline-flex items-center gap-2 rounded-full border border-amber-300/70 bg-amber-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-800 shadow-sm"
          style={{ animationDelay: '.05s' }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
          </span>
          Prototipo · Sin validez oficial
        </span>

        <h1
          className="hero-rise mt-6 text-4xl font-extrabold leading-[1.15] tracking-tight text-gray-900 sm:text-5xl"
          style={{ animationDelay: '.12s' }}
        >
          Así podría sentirse un <span className="text-gradient">trámite municipal</span>
          <br className="hidden sm:block" /> desde tu teléfono
        </h1>

        <p
          className="hero-rise mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg"
          style={{ animationDelay: '.2s' }}
        >
          Elén es una demostración interactiva de cómo un ciudadano de Guano podría
          solicitar un Certificado de Gravamen sin tener que desplazarse varias veces al
          municipio. Todo lo que ves aquí es{' '}
          <strong className="font-semibold text-amber-700">simulado</strong>.
        </p>

        <div
          className="hero-rise mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          style={{ animationDelay: '.28s' }}
        >
          <Link
            to={HOME_PATH}
            className="btn-shine group relative isolate inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-primary-500 to-primary-600 px-7 text-base font-bold text-white shadow-lg shadow-primary-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary-600/35 active:translate-y-0 sm:w-auto before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-xl before:shadow-[0_0_0_0_rgba(11,171,12,0.55)] before:animate-[ringPulse_2.2s_cubic-bezier(.4,0,.6,1)_infinite] motion-reduce:before:animate-none"
          >
            Ver la demostración
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
          <a
            href="#que-es"
            className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-7 text-base font-bold text-gray-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-50 hover:shadow-md active:translate-y-0 sm:w-auto"
          >
            Entender qué es esto
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
              aria-hidden="true"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </a>
        </div>

        {/* Chips flotantes */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {[
            {
              delay: '.36s',
              floatDelay: '1.1s',
              iconBg: 'bg-primary-100 text-primary-700',
              title: 'Certificado de Gravamen',
              subtitle: 'flujo completo, simulado',
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                  <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                  <path d="M10 9H8" />
                  <path d="M16 13H8" />
                  <path d="M16 17H8" />
                </svg>
              )
            },
            {
              delay: '.44s',
              floatDelay: '1.8s',
              iconBg: 'bg-amber-100 text-amber-700',
              title: 'Caso de estudio: Guano',
              subtitle: 'ejercicio de diseño de servicio',
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <line x1="3" x2="21" y1="22" y2="22" />
                  <line x1="6" x2="6" y1="18" y2="11" />
                  <line x1="10" x2="10" y1="18" y2="11" />
                  <line x1="14" x2="14" y1="18" y2="11" />
                  <line x1="18" x2="18" y1="18" y2="11" />
                  <polygon points="12 2 20 7 4 7" />
                </svg>
              )
            },
            {
              delay: '.52s',
              floatDelay: '2.5s',
              iconBg: 'bg-emerald-100 text-emerald-700',
              title: '0 datos personales',
              subtitle: 'nada se envía ni se guarda',
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1 1 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                </svg>
              )
            }
          ].map((chip, i) => (
            <div key={i} className="hero-rise" style={{ animationDelay: chip.delay }}>
              <div className="float-soft" style={{ animationDelay: chip.floatDelay }}>
                <div className="flex items-center gap-3 rounded-2xl border border-gray-200/80 bg-white/80 px-4 py-3 text-left shadow-sm backdrop-blur-md transition-shadow duration-300 hover:shadow-md">
                  <span
                    className={`grid h-9 w-9 flex-none place-items-center rounded-xl ${chip.iconBg}`}
                    aria-hidden="true"
                  >
                    {chip.icon}
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-gray-900">
                      {chip.title}
                    </span>
                    <span className="block text-xs text-gray-500">{chip.subtitle}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="hero-rise mt-12 flex justify-center"
          style={{ animationDelay: '.6s' }}
        >
          <a
            href="#que-es"
            className="grid h-10 w-10 place-items-center rounded-full border border-gray-200 bg-white text-gray-400 shadow-sm transition-colors duration-300 hover:border-primary-300 hover:text-primary-600"
            aria-label="Bajar a la siguiente sección"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 animate-bounce"
              aria-hidden="true"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </a>
        </div>
      </section>

      {/* ============ Qué es / qué no es ============ */}
      <section id="que-es" className="mt-20 scroll-mt-28 sm:mt-28">
        <div className="reveal">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-primary-700">
            01 · Claridad
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Qué es y qué no es Elén
          </h2>
          <p className="mt-3 max-w-2xl text-base text-gray-600 sm:text-lg">
            Para evitar confusiones, aquí está la diferencia en claro.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2" data-stagger>
          <div>
            <div className="card-lift accent-gray group relative h-full overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-7">
              <h3 className="flex items-center gap-3 text-lg font-extrabold text-gray-900">
                <span
                  className="grid h-9 w-9 flex-none place-items-center rounded-full bg-gray-100 text-gray-500"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </span>
                Lo que NO es
              </h3>
              <ul className="li-hover mt-5 space-y-3 text-sm text-gray-700">
                {[
                  'No es un sistema oficial del GAD Municipal de Guano.',
                  'No está conectado a catastro, Registro de la Propiedad ni SRI.',
                  'No procesa pagos reales ni emite certificados válidos.',
                  'No reemplaza ningún trámite actual.',
                  'No representa una postura política ni una campaña.'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="li-dot li-dot-gray mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-gray-100 text-gray-400 transition-colors duration-200"
                      aria-hidden="true"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3 w-3"
                      >
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className="card-lift group relative h-full overflow-hidden rounded-3xl border border-primary-200 bg-gradient-to-br from-primary-50 via-white to-primary-50/60 p-6 shadow-sm sm:p-7">
              <h3 className="flex items-center gap-3 text-lg font-extrabold text-primary-900">
                <span
                  className="grid h-9 w-9 flex-none place-items-center rounded-full bg-primary-500 text-white shadow-md shadow-primary-500/30"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                Lo que SÍ es
              </h3>
              <ul className="li-hover mt-5 space-y-3 text-sm font-medium text-primary-900/90">
                {[
                  'Un prototipo visual e interactivo, sin backend.',
                  'Una simulación de la experiencia del ciudadano.',
                  'Una forma de mostrar qué pasos podrían digitalizarse.',
                  'Un ejercicio de diseño de servicio público.',
                  'Una idea abierta a conversación y validación.'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="li-dot mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-primary-100 text-primary-700 transition-colors duration-200"
                      aria-hidden="true"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3 w-3"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ Transparencia ============ */}
      <section className="mt-20 scroll-mt-28 sm:mt-28">
        <div className="reveal">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-primary-700">
            02 · Transparencia
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Transparencia desde el primer clic
          </h2>
          <p className="mt-3 max-w-2xl text-base text-gray-600 sm:text-lg">
            Estos avisos aparecen en toda la demostración para que nadie confunda la
            simulación con un servicio real.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-3" data-stagger>
          {[
            {
              num: '01',
              title: 'Datos ficticios',
              desc: 'Nombres, cédulas y predios son inventados. No se solicita ni almacena información personal real.',
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <ellipse cx="12" cy="5" rx="9" ry="3" />
                  <path d="M3 5V19A9 3 0 0 0 21 19V5" />
                  <path d="M3 12A9 3 0 0 0 21 12" />
                </svg>
              )
            },
            {
              num: '02',
              title: 'Pago simulado',
              desc: 'No hay pasarela de pago. No se pide tarjeta ni se realiza ningún cargo económico.',
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <line x1="2" x2="22" y1="10" y2="10" />
                </svg>
              )
            },
            {
              num: '03',
              title: 'Certificado sin validez',
              desc: 'El certificado mostrado es demostrativo y no tiene ninguna validez oficial.',
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                  <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                  <path d="m14.5 12.5-5 5" />
                  <path d="m9.5 12.5 5 5" />
                </svg>
              )
            }
          ].map(card => (
            <div key={card.num}>
              <div className="card-lift group relative isolate h-full overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <span
                  className="pointer-events-none absolute -bottom-4 right-3 -z-10 select-none font-mono text-7xl font-bold text-gray-100 transition-colors duration-300 group-hover:text-primary-100"
                  aria-hidden="true"
                >
                  {card.num}
                </span>
                <div className="flex items-start justify-between gap-3">
                  <span
                    className="grid h-10 w-10 place-items-center rounded-xl bg-gray-100 text-gray-600 transition-colors duration-300 group-hover:bg-primary-100 group-hover:text-primary-700"
                    aria-hidden="true"
                  >
                    {card.icon}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-1 font-mono text-[10px] font-bold tracking-[0.18em] text-amber-800 ring-1 ring-amber-200">
                    DEMO
                  </span>
                </div>
                <h3 className="mt-4 text-base font-extrabold text-gray-900">
                  {card.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-600">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ Aviso final ============ */}
      <section className="mt-20 sm:mt-28">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-950 via-gray-900 to-emerald-950 p-7 shadow-2xl ring-1 ring-white/10 sm:p-10">
          <span
            className="watermark pointer-events-none absolute -bottom-8 right-2 select-none text-[7rem] font-extrabold leading-none tracking-tighter sm:text-[10rem]"
            aria-hidden="true"
          >
            DEMO
          </span>
          <div
            className="blob pointer-events-none absolute -top-24 right-10 h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 space-y-5" data-stagger>
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3.5 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-amber-300">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              Recordatorio final
            </span>
            <h2 className="max-w-xl text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              Recuerda: esto es solo una propuesta
            </h2>
            <p className="max-w-2xl text-[15px] leading-relaxed text-gray-300/90 sm:text-base">
              Elén es un prototipo creado para explorar una idea: reducir desplazamientos
              innecesarios en trámites municipales. No es un sistema en funcionamiento, no
              pertenece a ninguna institución y{' '}
              <strong className="font-semibold text-white">
                no debe usarse como si lo fuera
              </strong>
              . Cualquier parecido con un servicio oficial es solo intención de diseño, no
              una realidad operativa.
            </p>
            <p className="pt-1 text-base font-semibold text-white sm:text-lg">
              Si tienes dudas, asume siempre lo más seguro:{' '}
              <span className="grow-underline text-gradient font-extrabold">
                esto es una demostración
              </span>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
