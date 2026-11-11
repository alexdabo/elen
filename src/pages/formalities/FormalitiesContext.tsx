import {
  FORMALITIES_DETAIL_PATH,
  FORMALITIES_INPERSON_PAIMENT_PATH,
  FORMALITIES_PATH
} from '@config'
import { generateProcedureId, getCurrentFormattedDate } from '@helper'
import React, { createContext, type ReactNode, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { initialFormData, initialTramites } from './FormalitiesData'
import type { FormalityData, FormalityStatus, Tramite } from './FormalitiesTypes'

export interface FormalitiesContextValue {
  tramites: Tramite[]
  currentTramiteId: string | null
  formData: FormalityData
  selectedTramite: Tramite | null

  selectTramite: (id: string) => void
  updateFormField: <K extends keyof FormalityData>(
    field: K,
    value: FormalityData[K]
  ) => void
  setFormData: (data: FormalityData) => void
  createTramite: () => Tramite
  updateTramiteStatus: (id: string, status: FormalityStatus) => void
  resetDemo: () => void
  startProcedureWorkflow: (id: string) => void
  processOnlinePayment: (id: string) => void
  selectInPersonPayment: (id: string) => void
}

export const FormalitiesContext = createContext<FormalitiesContextValue | undefined>(
  undefined
)

export const FormalitiesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const navigate = useNavigate()
  const [tramites, setTramites] = useState<Tramite[]>(initialTramites)

  const [currentTramiteId, setCurrentTramiteId] = useState<string | null>(null)
  const [formData, setFormData] = useState<FormalityData>(initialFormData)

  const selectedTramite = currentTramiteId
    ? (tramites.find(t => t.id === currentTramiteId) ?? null)
    : null

  const selectTramite = useCallback((id: string) => {
    setCurrentTramiteId(id)
  }, [])

  const updateFormField = useCallback(
    <K extends keyof FormalityData>(field: K, value: FormalityData[K]) => {
      setFormData(prev => ({ ...prev, [field]: value }))
    },
    []
  )

  const resetDemo = useCallback(() => {
    setTramites(initialTramites)
    setCurrentTramiteId(null)
    setFormData(initialFormData)

    navigate(FORMALITIES_PATH)
  }, [])

  const createTramite = useCallback(() => {
    const newTramite: Tramite = {
      id: generateProcedureId(),
      estado: 'SOLICITUD ENVIADA',
      fecha: getCurrentFormattedDate(),
      data: { ...formData }
    }

    setTramites(prev => [newTramite, ...prev])
    setCurrentTramiteId(newTramite.id)
    return newTramite
  }, [formData])

  const updateTramiteStatus = useCallback((id: string, status: FormalityStatus) => {
    setTramites(prev => prev.map(t => (t.id === id ? { ...t, estado: status } : t)))
  }, [])

  const selectInPersonPayment = useCallback(
    (id: string) => {
      updateTramiteStatus(id, 'PENDIENTE DE PAGO EN VENTANILLA')
      navigate(FORMALITIES_INPERSON_PAIMENT_PATH)
    },
    [updateTramiteStatus]
  )

  // Simulation workflow side-effects
  const startProcedureWorkflow = useCallback(
    (id: string) => {
      // This is handled visually using timers when moving to detail view
      // We update status in intervals
      updateTramiteStatus(id, 'PENDIENTE DEL RESPONSABLE')

      setTimeout(() => {
        setTramites(currentTramites => {
          if (
            currentTramites.find(t => t.id === id)?.estado === 'PENDIENTE DEL RESPONSABLE'
          ) {
            const updated = currentTramites.map(t =>
              t.id === id
                ? { ...t, estado: 'PENDIENTE DE APROBACIÓN' as FormalityStatus }
                : t
            )

            setTimeout(() => {
              setTramites(latest =>
                latest.map(t =>
                  t.id === id && t.estado === 'PENDIENTE DE APROBACIÓN'
                    ? { ...t, estado: 'LISTO PARA PAGO' as FormalityStatus }
                    : t
                )
              )
            }, 3000)

            return updated
          }
          return currentTramites
        })
      }, 3000)
    },
    [updateTramiteStatus]
  )

  const processOnlinePayment = useCallback(
    (id: string) => {
      setTimeout(() => {
        updateTramiteStatus(id, 'PROCESAMIENTO')
        navigate(FORMALITIES_DETAIL_PATH)

        // Multiple processing steps simulation
        let step = 0
        const interval = setInterval(() => {
          step++
          if (step > 4) {
            clearInterval(interval)
            updateTramiteStatus(id, 'CERTIFICADO DISPONIBLE')
          }
        }, 1200)
      }, 3000)
    },
    [updateTramiteStatus]
  )

  return (
    <FormalitiesContext.Provider
      value={{
        tramites,
        currentTramiteId,
        // currentView,
        formData,
        selectedTramite,

        selectTramite,
        updateFormField,
        setFormData,
        createTramite,
        updateTramiteStatus,
        resetDemo,
        startProcedureWorkflow,
        processOnlinePayment,
        selectInPersonPayment
      }}
    >
      {children}
    </FormalitiesContext.Provider>
  )
}
