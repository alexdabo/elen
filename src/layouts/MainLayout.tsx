import { Fragment } from "react"
import { Link, Outlet } from 'react-router-dom'

import Imagotipo from '@assets/imagotipo.png'
import { INFO_PATH } from "@config"

import { ScrollProgressBar } from "@component/ScrollProgressBar"
import { Marquee } from "@component/Marquee"



interface MainLayoutProps {
    isContainer?: boolean
}


export const MainLayout: React.FC<MainLayoutProps> = ({ isContainer }) => {
    return <Fragment>
        <ScrollProgressBar />
<Marquee/>
        <header
            className="bg-white border-b border-gray-200 sticky top-0 z-40 no-print"
        >
            <div
                className="container mx-auto px-4 flex items-center justify-between"
            >
                <Link to="/" className="flex">
                    <img src={Imagotipo} alt="Logo" className="h-16 w-auto" />
                </Link>
                <span
                    className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full"
                >
                    Prototipo conceptual
                </span>

                <Link
                    to={INFO_PATH}
                    className="group flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200"
                >
                    <span
                        className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-100 text-gray-500 group-hover:bg-gray-200 group-hover:text-gray-700 transition-colors"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="w-4 h-4"
                        >
                            <circle cx="12" cy="12" r="9" />
                            <path
                                strokeLinecap="round"
                                d="M12 11v5"
                            />
                            <path
                                strokeLinecap="round"
                                d="M12 8h.01"
                            />
                        </svg>
                    </span>

                    <span>Acerca</span>
                </Link>
            </div>
        </header>

        <main className={`flex-1 w-full mx-auto min-h-screen px-4 py-8 pb-24 ${isContainer ? "container" : "max-w-2xl"}`}>
            <Outlet />
        </main>
        <footer className="border-t border-gray-200 bg-white/70 backdrop-blur">
            <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
                <div className="flex items-center gap-2.5">
                    <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-primary-500 to-emerald-600 text-xs font-extrabold text-white shadow-sm shadow-primary-500/30">E</span>
                    <p className="text-sm text-gray-600"><strong className="font-bold text-gray-900">Elén</strong> · Prototipo demostrativo</p>
                </div>
                <p className="text-center font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500 sm:text-right">No oficial · Sin validez legal · Solo demostración</p>
            </div>
        </footer>
    </Fragment>
}