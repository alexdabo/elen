import { Fab } from '@component/FabButton'
import { FORMALITIES_INFO_PATH } from '@config'
import type React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FormalityCard } from './FormalityCard'
import { useFormalities } from './UseFormalities'

export const FormalitiesPage: React.FC = () => {
  const navigate = useNavigate()
  const { tramites, resetDemo } = useFormalities()

  return (
    <div className="view-container space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Mis trámites</h1>

        <Link
          to={FORMALITIES_INFO_PATH}
          className="hidden sm:flex bg-primary-500 text-white hover:bg-primary-600 rounded-xl min-h-12 px-4 font-semibold transition-colors duration-200 ease-out text-base items-center justify-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5v14"></path>
          </svg>
          Nuevo trámite
        </Link>
      </div>

      <div className="space-y-3">
        {tramites.length === 0 ? (
          <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-200">
            <p className="text-gray-500 mb-2">No tienes trámites en curso.</p>
            <p className="text-sm text-gray-400">
              Inicia una nueva solicitud para comenzar.
            </p>
          </div>
        ) : (
          tramites.map(t => <FormalityCard key={t.id} tramite={t} />)
        )}
      </div>
      <button
        onClick={resetDemo}
        className="text-sm text-gray-500 hover:text-gray-700 underline"
      >
        Reiniciar demo
      </button>

      <Fab
        onClick={() => navigate(FORMALITIES_INFO_PATH)}
        type="button"
        tooltip="Nuevo trámite"
        aria-label="Nuevo trámite"
      />
    </div>
  )
}
