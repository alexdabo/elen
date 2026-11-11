import { FORMALITIES_DETAIL_PATH } from '@config'
import type React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFormalities } from './UseFormalities'

export const FormalityPaymentPage: React.FC = () => {
  const { selectedTramite, processOnlinePayment } = useFormalities()
  const [isProcessing, setIsProcessing] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)

  if (!selectedTramite) return null

  const handlePayment = () => {
    setIsProcessing(true)
    setTimeout(() => {
      setIsProcessing(false)
      setIsCompleted(true)
      setTimeout(() => {
        processOnlinePayment(selectedTramite.id)
      }, 1000)
    }, 2000)
  }

  return (
    <div className="view-container space-y-6">
      {!isProcessing && !isCompleted && (
        <Link
          to={FORMALITIES_DETAIL_PATH}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors disabled:opacity-50"
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
          Volver
        </Link>
      )}

      <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5 space-y-2 text-yellow-800">
        <div className="flex items-center gap-2 font-semibold text-base">PAGO DEMO</div>
        <p className="text-sm">
          Este pago es simulado. No se realizará ningún cargo real.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 space-y-4">
        <div className="flex justify-between text-base">
          <span className="text-gray-600">
            Certificado de {selectedTramite.data.tipo}
          </span>
          <span className="font-semibold text-gray-900">{selectedTramite.id}</span>
        </div>
        <div className="border-t border-dashed border-gray-300 pt-4 flex justify-between items-center">
          <span className="font-semibold text-gray-900">Total a pagar</span>
          <span className="text-xl font-bold text-gray-900">$7.50</span>
        </div>
      </div>

      <button
        disabled={isProcessing || isCompleted}
        onClick={handlePayment}
        className={`w-full rounded-xl min-h-14 font-semibold transition-colors duration-200 flex items-center justify-center gap-2 text-base 
                    ${isCompleted ? 'bg-green-500 text-white' : 'bg-primary-500 text-white hover:bg-primary-600'} 
                    disabled:opacity-80`}
      >
        {isProcessing && (
          <svg
            className="w-5 h-5 text-white animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
          </svg>
        )}
        {isProcessing
          ? 'Procesando pago...'
          : isCompleted
            ? 'Pago realizado correctamente'
            : 'Confirmar pago DEMO'}
      </button>
    </div>
  )
}
