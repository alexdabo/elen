import { FORMALITIES_PATH } from '@config'
import type React from 'react'
import { Link } from 'react-router-dom'
import { StatusBadge } from './StatusBadge'

export const FormalityPaymentInPersonPage: React.FC = () => {
  return (
    <div className="view-container space-y-6">
      <Link
        to={FORMALITIES_PATH}
        className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15 18-6-6 6-6"></path>
        </svg>
        Volver al detalle
      </Link>
      <div className="text-center py-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 text-gray-600 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
          </svg>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900">Pago en ventanilla</h2>
        <p className="text-base text-gray-600 mt-3 max-w-md mx-auto">
          Esta opción representa un pago que todavía requiere acudir físicamente a una
          ventanilla.
        </p>
        <div className="bg-gray-100 rounded-xl p-4 mt-6 text-sm text-gray-700 max-w-sm mx-auto text-left">
          <p className="flex items-center gap-2">
            <strong>Estado:</strong>
            <StatusBadge status={'PENDIENTE DE PAGO EN VENTANILLA'} />
          </p>
          <p className="mt-2">
            Tu solicitud está lista para ser pagada en ventanilla. Este paso requiere
            presencia física.
          </p>
        </div>
      </div>

      <Link
        to={FORMALITIES_PATH}
        className="w-full bg-gray-100 text-gray-800 hover:bg-gray-200 rounded-xl min-h-14 font-semibold transition-colors duration-200 ease-out text-base flex items-center justify-center gap-2"
      >
        Volver al listado
      </Link>
    </div>
  )
}
