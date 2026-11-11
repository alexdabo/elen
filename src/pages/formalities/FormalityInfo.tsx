import { FORMALITIES_CREATE_PATH, FORMALITIES_PATH } from '@config'
import type React from 'react'
import { Link } from 'react-router-dom'

export const FormalitiesInfoPage: React.FC = () => {
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
        Volver al listado
      </Link>
      <div>
        <h2 className="text-2xl font-semibold text-gray-900">Certificado de Gravamen</h2>
        <p className="text-base text-gray-600 mt-2">
          Completa la información necesaria para iniciar tu solicitud.
        </p>
      </div>
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 space-y-4">
        <div>
          <h3 className="font-semibold text-gray-900 mb-1">¿Qué es?</h3>
          <p className="text-base text-gray-700">
            Es un documento emitido por el GAD Municipal que certifica la situación de
            gravamen (cargas o limitaciones) de un predio.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-1">¿Para qué sirve?</h3>
          <p className="text-base text-gray-700">
            Principalmente para acreditar ante terceros el estado legal del inmueble en lo
            relacionado a deudas, embargos o gravámenes municipales.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-1">
            ¿Qué información necesitas?
          </h3>
          <ul className="text-base text-gray-700 list-disc pl-5 space-y-1">
            <li>Tus datos personales.</li>
            <li>
              Datos de identificación del predio (clave catastral o dirección
              referencial).
            </li>
          </ul>
        </div>
        <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-600 border border-gray-200">
          <p>
            <em>
              Información referencial para esta demostración. Los requisitos oficiales
              pueden variar y deben verificarse en el GAD.
            </em>
          </p>
        </div>
      </div>
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 space-y-3">
        <h3 className="font-semibold text-gray-900">Proceso propuesto</h3>
        <ol className="space-y-2 text-base text-gray-700 list-decimal pl-5">
          <li>Completar información</li>
          <li>Enviar solicitud</li>
          <li>Revisión y aprobación internas</li>
          <li>Elegir forma de pago</li>
          <li>Emisión del certificado</li>
        </ol>
      </div>

      <Link
        to={FORMALITIES_CREATE_PATH}
        className="w-full bg-primary-500 text-white hover:bg-primary-600 rounded-xl min-h-14 font-semibold transition-colors duration-200 ease-out text-base flex items-center justify-center gap-2"
      >
        Comenzar solicitud
      </Link>
    </div>
  )
}
