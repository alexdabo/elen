import { ScrollProgressBar } from '@component/ScrollProgressBar'
import { Marquee } from '@component/Marquee'
import { Outlet } from 'react-router-dom'
import { Fragment } from 'react'

export const CampaignLayout: React.FC = () => {
  return (
    <Fragment>
      <ScrollProgressBar />
      <Marquee />
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40 no-print">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          {/* <a
            href="https://byronperez.online/"
            target="_blank"
            rel="noopener"
            className="flex items-center gap-3"
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 text-sm font-black text-white shadow-md shadow-primary-600/30">
              BP
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-extrabold tracking-tight text-gray-900">
                Byron Pérez
              </span>
              <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-700">
                Guano tiene futuro
              </span>
            </span>
          </a> */}

          <a
            className="group flex items-center gap-3 font-bold"
            href="https://byronperez.online/"
            target="_blank"
            aria-label="Alianza Vida — Byron Pérez"
          >
            <span className="grid h-10 w-15 place-items-center rounded-xl bg-[#BD2475] font-display text-base text-white transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
              20-17
            </span>
            <span className="leading-none">
              <span className="text-dark block font-display text-lg tracking-tight">
                Alianza Vida<span className="text-[#01B8C1] ml-1">20-17</span>
              </span>
              <span className="text-muted mt-1 block text-[10px] font-bold uppercase tracking-[0.18em]">
                Byron Pérez · Guano
              </span>
            </span>
          </a>

          <div className="flex items-center gap-2">
            <span className="hidden rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-800 sm:inline-flex">
              Prototipo · Sin validez oficial
            </span>
            <a
              href="#que-es"
              className="hidden rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-bold text-gray-800 transition hover:bg-gray-50 sm:inline-flex"
            >
              Entender qué es
            </a>
            <a
              href="https://byronperez.online/"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-b from-primary-500 to-primary-600 px-4 py-2 text-sm font-bold text-white shadow-md shadow-primary-600/25 transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Ir a la campaña
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-4 w-4"
              >
                <path d="M7 17 17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      <main className={`flex-1 w-full mx-auto min-h-screen px-4 py-8 pb-24 max-w-4xl`}>
        <Outlet />
      </main>
      <footer className="border-t border-gray-200 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
          <div className="flex items-center gap-2.5">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-primary-500 to-emerald-600 text-xs font-extrabold text-white shadow-sm shadow-primary-500/30">
              E
            </span>
            <p className="text-sm text-gray-600">
              <strong className="font-bold text-gray-900">Elén</strong> · Prototipo
              demostrativo
            </p>
          </div>
          <p className="text-center font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500 sm:text-right">
            No oficial · Sin validez legal · Solo demostración
          </p>
        </div>
      </footer>
    </Fragment>
  )
}
