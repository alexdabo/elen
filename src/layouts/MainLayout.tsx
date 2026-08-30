import { Fragment } from "react"
import {Link, Outlet} from 'react-router-dom'

import Imagotipo from '@assets/imagotipo.png'

export const MainLayout:React.FC=()=>{
    return <Fragment>
        <header
            className="bg-white border-b border-gray-200 sticky top-0 z-50 no-print"
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
                    DEMO · Prototipo conceptual
                </span>
            </div>
        </header>

        <main className="flex-1 w-full max-w-2xl mx-auto px-4 py-8 pb-24">
            <Outlet />
        </main>
    </Fragment>
}