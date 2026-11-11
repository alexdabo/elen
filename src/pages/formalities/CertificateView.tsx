import { FORMALITIES_PATH } from '@config'
import type React from 'react'
import { Link } from 'react-router-dom'
import { useFormalities } from './UseFormalities'

export const FormalityCertificatePage: React.FC = () => {
  const { selectedTramite } = useFormalities()

  if (!selectedTramite) return null

  const data = selectedTramite.data

  return (
    <div className="view-container space-y-6">
      <Link
        to={FORMALITIES_PATH}
        className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors no-print"
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
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden relative">
        {/* Visual indicator of demo watermark in print views via CSS standard class logic or inline */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none overflow-hidden z-0">
          <span className="text-[150px] font-bold text-gray-900 transform -rotate-45 block w-[800px] text-center">
            DEMOSTRATIVO
          </span>
        </div>

        <div className="bg-primary-900 p-6 text-white text-center relative z-10">
          <h1 className="text-xl font-bold uppercase tracking-wider text-primary-50">
            Registro Municipal de la Propiedad · GAD Guano
          </h1>
        </div>
        <div className="p-8 space-y-8 relative z-10">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 uppercase">
              Certificado de {data.tipo}
            </h2>
            <div className="mt-1 text-sm font-medium text-red-600 bg-red-50 inline-block px-3 py-1 rounded-full border border-red-200">
              Documento demostrativo — Sin validez oficial
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 text-base bg-gray-50 p-6 rounded-xl border border-gray-100">
            <div>
              <span className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                Número
              </span>
              <span className="font-mono font-medium text-gray-900 select-all">
                {selectedTramite.id}
              </span>
            </div>
            <div>
              <span className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                Fecha de Emisión
              </span>
              <span className="font-medium text-gray-900">{selectedTramite.fecha}</span>
            </div>
            <div>
              <span className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                Solicitante
              </span>
              <span className="font-medium text-gray-900 leading-tight block">
                {data.nombres} {data.apellidos}
                <br />
                <span className="text-gray-500 text-sm font-normal">
                  CI: {data.cedula}
                </span>
              </span>
            </div>
            <div>
              <span className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                Propietario
              </span>
              <span className="font-medium text-gray-900 leading-tight block">
                {data.propNombre}
                <br />
                <span className="text-gray-500 text-sm font-normal">
                  CI/RUC: {data.propId}
                </span>
              </span>
            </div>
            <div className="col-span-2 pt-4 border-t border-gray-200">
              <span className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                Inmueble Identificado
              </span>
              <span className="font-medium text-gray-900">
                {data.tipoInmueble} ubicado en {data.direccion} ({data.location}, zona{' '}
                {data.zona.toLowerCase()}). Adquirido vía {data.formaAdq.toLowerCase()}{' '}
                (Escritura: {data.fechaEscritura}).
              </span>
            </div>
          </div>

          <div className="text-gray-800 leading-relaxed text-justify">
            <p className="mb-4">
              En atención a la solicitud presentada para fines de{' '}
              <strong>{data.proposito.toLowerCase()}</strong> requerido por{' '}
              <strong>
                {data.institucion === 'Otra' ? data.otraInstitucion : data.institucion}
              </strong>
              , y revisados los índices y registros que reposan en esta dependencia hasta
              la fecha actual; certifico que:
            </p>
            <p className="p-4 bg-gray-50 border-l-4 border-primary-500 text-gray-900 rounded-r-xl">
              El predio detallado{' '}
              <strong>no registra gravámenes, embargos o limitaciones vigentes</strong>{' '}
              que impidan su libre disposición, según los registros simulados de este
              entorno demostrativo.
            </p>
          </div>

          <div className="pt-16 pb-8 grid grid-cols-2 gap-8 text-center text-sm">
            <div>
              <div className="border-t border-gray-300 w-48 mx-auto pt-2">
                <p className="font-bold text-gray-900">Responsable de Revisión</p>
                <p className="text-gray-500 italic mt-1 text-xs">
                  Firma representativa · DEMO
                </p>
                <p className="text-gray-600 mt-1">Funcionario DEMO</p>
              </div>
            </div>
            <div>
              <div className="border-t border-gray-300 w-48 mx-auto pt-2">
                <p className="font-bold text-gray-900">Responsable de Emisión</p>
                <p className="text-gray-500 italic mt-1 text-xs">
                  Firma representativa · DEMO
                </p>
                <p className="text-gray-600 mt-1">Funcionario DEMO</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => window.print()}
        className="w-full bg-primary-500 text-white hover:bg-primary-600 rounded-xl min-h-14 font-semibold transition-colors duration-200 ease-out text-base flex flex-row gap-2 justify-center items-center no-print"
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
          <polyline points="6 9 6 2 18 2 18 9"></polyline>
          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
          <rect x="6" y="14" width="12" height="8"></rect>
        </svg>
        Descargar certificado DEMO
      </button>

      <style>{`
                @media print {
                    body {
                        background: white;
                    }
                    .no-print {
                        display: none !important;
                    }
                    .view-container {
                        max-width: 100% !important;
                        padding: 0 !important;
                        margin: 0 !important;
                    }
                    nav, header, footer {
                        display: none !important;
                    }
                }
            `}</style>
    </div>
  )
}
