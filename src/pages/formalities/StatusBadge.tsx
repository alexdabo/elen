import type React from 'react'
import type { FormalityStatus } from './FormalitiesTypes'

interface StatusBadgeProps {
  status: FormalityStatus
  className?: string
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className = '' }) => {
  let classes = ''

  switch (status) {
    case 'CERTIFICADO DISPONIBLE':
      classes = 'bg-primary-50 text-primary-800'
      break
    case 'PENDIENTE DE PAGO EN VENTANILLA':
    case 'LISTO PARA PAGO':
      classes = 'bg-yellow-100 text-yellow-800'
      break
    default:
      classes = 'bg-blue-50 text-blue-800'
      break
  }

  return (
    <span
      className={`text-xs font-medium px-3 py-1 rounded-full ${classes} ${className}`}
    >
      {status}
    </span>
  )
}
