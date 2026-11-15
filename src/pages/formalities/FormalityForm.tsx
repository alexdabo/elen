import { FORMALITIES_PATH, FORMALITIES_DETAIL_PATH } from '@config'
import React, { useCallback, useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import type {
  AcquisitionMethod,
  CertificateType,
  FormalityData,
  PropertyType,
  Zone
} from './FormalitiesTypes'
import { useFormalities } from './UseFormalities'

/* ------------------------------------------------------------------ */
/*  Static data                                                        */
/* ------------------------------------------------------------------ */

export const certificateTypes: CertificateType[] = [
  'Gravámenes',
  'Bienes y raíces',
  'Búsqueda'
]

const purposes = [
  'Posesión efectiva',
  'Compraventa',
  'Juicio',
  'Prestamo',
  'Donación',
  'Tramite municipio',
  'Casas comerciales',
  'Hipotecas',
  'Herencias',
  'Donaciones',
  'Otra'
]

const institutions = [
  'Funcion judicial',
  'Casa comercial',
  'Personal',
  'Municipio',
  'Notaria',
  'Institucion bancaria',
  'Otra'
]

const propertyTypes: PropertyType[] = [
  'Terreno',
  'Casa y Terreno',
  'Propiedad Horizontal'
]

const locations = [
  'El Rosario',
  'Guanando',
  'Ilapo',
  'La Matriz',
  'La Providencia',
  'San Andrés',
  'San Gerardo',
  'San Isidro',
  'San José de Chazo',
  'Santa Fe de Galán',
  'Valparaíso'
]

const zones: Zone[] = ['Urbano', 'Rural']

const acquisitionMethods: AcquisitionMethod[] = [
  'Compraventa',
  'Herencia',
  'Posesión Efectiva',
  'Adjudicación',
  'Donación',
  'Otros'
]

/* ------------------------------------------------------------------ */
/*  Step definitions                                                   */
/* ------------------------------------------------------------------ */

export type StepKey =
  | 'solicitante'
  | 'certificado'
  | 'predio'
  | 'propietario'
  | 'declaracion'

export interface StepDef {
  key: StepKey
  title: string
  shortTitle: string
  description: string
}

export const STEPS: StepDef[] = [
  {
    key: 'solicitante',
    title: 'Datos del solicitante',
    shortTitle: 'Solicitante',
    description: 'Información personal de contacto'
  },
  {
    key: 'certificado',
    title: 'Datos del certificado',
    shortTitle: 'Certificado',
    description: 'Tipo, propósito e institución'
  },
  {
    key: 'predio',
    title: 'Datos del predio',
    shortTitle: 'Predio',
    description: 'Características y ubicación del bien'
  },
  {
    key: 'propietario',
    title: 'Datos del propietario',
    shortTitle: 'Propietario',
    description: 'Titular del bien inmueble'
  },
  {
    key: 'declaracion',
    title: 'Declaración y Firma',
    shortTitle: 'Firma',
    description: 'Revisa y confirma tu solicitud'
  }
]

/* ------------------------------------------------------------------ */
/*  Validation                                                         */
/* ------------------------------------------------------------------ */

function isBlank(v: unknown): boolean {
  return typeof v !== 'string' || v.trim() === ''
}

export function validateStep(step: StepKey, formData: FormalityData): string | null {
  switch (step) {
    case 'solicitante': {
      if (
        isBlank(formData.apellidos) ||
        isBlank(formData.nombres) ||
        isBlank(formData.cedula) ||
        isBlank(formData.correo) ||
        isBlank(formData.telefono)
      ) {
        return 'Por favor completa todos los datos del solicitante.'
      }
      return null
    }
    case 'certificado': {
      if (
        isBlank(formData.tipo) ||
        isBlank(formData.proposito) ||
        isBlank(formData.institucion)
      ) {
        return 'Por favor selecciona tipo, propósito e institución.'
      }
      if (formData.institucion === 'Otra' && isBlank(formData.otraInstitucion)) {
        return 'Por favor especifica la otra institución.'
      }
      return null
    }
    case 'predio': {
      if (
        isBlank(formData.tipoInmueble) ||
        isBlank(formData.location) ||
        isBlank(formData.zona) ||
        isBlank(formData.direccion) ||
        isBlank(formData.formaAdq)
      ) {
        return 'Por favor completa los datos del predio.'
      }
      if (isBlank(formData.fechaEscritura) || isBlank(formData.fechaInscripcion)) {
        return 'Por favor ingresa las fechas de escritura e inscripción.'
      }
      return null
    }
    case 'propietario': {
      if (
        isBlank(formData.propNombre) ||
        isBlank(formData.propId) ||
        isBlank(formData.propCel)
      ) {
        return 'Por favor completa los datos del propietario.'
      }
      return null
    }
    case 'declaracion': {
      if (!formData.declarationAccepted) {
        return 'Debes aceptar la declaración para continuar.'
      }
      return null
    }
    default:
      return null
  }
}

/* ------------------------------------------------------------------ */
/*  Inline icons                                                       */
/* ------------------------------------------------------------------ */

const ChevronLeft: React.FC<{ className?: string }> = ({ className }) => (
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
    className={className}
    aria-hidden="true"
  >
    <path d="m15 18-6-6 6-6" />
  </svg>
)

const ChevronRight: React.FC<{ className?: string }> = ({ className }) => (
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
    className={className}
    aria-hidden="true"
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
)

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

/* ------------------------------------------------------------------ */
/*  Small presentational helpers                                       */
/* ------------------------------------------------------------------ */

const Field: React.FC<{
  label: string
  htmlFor: string
  children: React.ReactNode
}> = ({ label, htmlFor, children }) => (
  <div className="space-y-1">
    <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-900">
      {label}
    </label>
    {children}
  </div>
)

const SummaryRow: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 py-2 border-b border-gray-100 last:border-b-0">
    <span className="text-sm text-gray-500">{label}</span>
    <span className="text-sm font-medium text-gray-900 break-words">{value || '—'}</span>
  </div>
)

const inputCls =
  'w-full rounded-xl border border-gray-300 min-h-12 px-4 text-base focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-colors'

const selectCls = `${inputCls} bg-white`

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export const FormalityFormPage: React.FC = () => {
  const navigate = useNavigate()
  const { formData, updateFormField, createTramite, startProcedureWorkflow } =
    useFormalities()

  const [currentStep, setCurrentStep] = useState<number>(0)
  const [validationError, setValidationError] = useState<string>('')
  const [visited, setVisited] = useState<Set<number>>(() => new Set([0]))

  const handleInput = useCallback(
    (field: keyof FormalityData, value: unknown) => {
      setValidationError('')
      updateFormField(field as any, value as any)
    },
    [updateFormField]
  )

  const goTo = useCallback(
    (index: number) => {
      if (index < 0 || index >= STEPS.length) return
      // Only allow navigating to already-visited steps
      if (!visited.has(index)) return
      setValidationError('')
      setCurrentStep(index)
    },
    [visited]
  )

  const goNext = useCallback(() => {
    const stepKey = STEPS[currentStep].key
    const err = validateStep(stepKey, formData)
    if (err) {
      setValidationError(err)
      return
    }
    setValidationError('')
    setCurrentStep(prev => {
      const next = Math.min(prev + 1, STEPS.length - 1)
      setVisited(v => {
        const copy = new Set(v)
        copy.add(next)
        return copy
      })
      return next
    })
  }, [currentStep, formData])

  const goPrev = useCallback(() => {
    setValidationError('')
    setCurrentStep(prev => Math.max(prev - 1, 0))
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Validate every step in order before submitting
    for (let i = 0; i < STEPS.length; i++) {
      const err = validateStep(STEPS[i].key, formData)
      if (err) {
        setValidationError(err)
        setCurrentStep(i)
        setVisited(v => {
          const copy = new Set(v)
          for (let j = 0; j <= i; j++) copy.add(j)
          return copy
        })
        return
      }
    }

    // Final review — do NOT create the trámite here.
    const tramite = createTramite()
    startProcedureWorkflow(tramite.id)
    navigate(FORMALITIES_DETAIL_PATH)
  }

  const progressPct = useMemo(
    () => Math.round(((currentStep + 1) / STEPS.length) * 100),
    [currentStep]
  )

  const currentStepDef = STEPS[currentStep]
  const isLast = currentStep === STEPS.length - 1

  /* ---------------------------------------------------------------- */
  /*  Step renderers (all mounted, toggled via hidden/block)           */
  /* ---------------------------------------------------------------- */

  const renderSolicitante = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Apellidos" htmlFor="applicant-last-name">
          <input
            type="text"
            id="applicant-last-name"
            name="applicant-last-name"
            autoComplete="family-name"
            required
            value={formData.apellidos}
            onChange={e => handleInput('apellidos', e.target.value)}
            className={inputCls}
          />
        </Field>

        <Field label="Nombres" htmlFor="applicant-first-name">
          <input
            type="text"
            id="applicant-first-name"
            name="applicant-first-name"
            autoComplete="given-name"
            required
            value={formData.nombres}
            onChange={e => handleInput('nombres', e.target.value)}
            className={inputCls}
          />
        </Field>
      </div>

      <Field label="Cédula" htmlFor="applicant-dni">
        <input
          type="text"
          id="applicant-dni"
          name="applicant-dni"
          inputMode="numeric"
          required
          value={formData.cedula}
          onChange={e => handleInput('cedula', e.target.value)}
          className={inputCls}
        />
      </Field>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Correo electrónico" htmlFor="applicant-email">
          <input
            type="email"
            id="applicant-email"
            name="applicant-email"
            autoComplete="email"
            required
            value={formData.correo}
            onChange={e => handleInput('correo', e.target.value)}
            className={inputCls}
          />
        </Field>

        <Field label="Teléfono" htmlFor="applicant-phone">
          <input
            type="tel"
            id="applicant-phone"
            name="applicant-phone"
            autoComplete="tel"
            required
            value={formData.telefono}
            onChange={e => handleInput('telefono', e.target.value)}
            className={inputCls}
          />
        </Field>
      </div>
    </div>
  )

  const renderCertificado = () => (
    <div className="space-y-4">
      <Field label="Tipo de certificado" htmlFor="certificate-type">
        <select
          id="certificate-type"
          name="certificate-type"
          required
          value={formData.tipo}
          onChange={e => handleInput('tipo', e.target.value)}
          className={selectCls}
        >
          {certificateTypes.map(c => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Propósito de la solicitud" htmlFor="certificate-purpose">
        <select
          id="certificate-purpose"
          name="certificate-purpose"
          required
          value={formData.proposito}
          onChange={e => handleInput('proposito', e.target.value)}
          className={selectCls}
        >
          <option value="">Seleccionar...</option>
          {purposes.map(c => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Institución que solicita" htmlFor="certificate-institution">
        <select
          id="certificate-institution"
          name="certificate-institution"
          required
          value={formData.institucion}
          onChange={e => handleInput('institucion', e.target.value)}
          className={selectCls}
        >
          <option value="">Seleccionar...</option>
          {institutions.map(c => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </Field>

      {formData.institucion === 'Otra' && (
        <Field label="Otra institución" htmlFor="certificate-other-institution">
          <input
            type="text"
            id="certificate-other-institution"
            name="certificate-other-institution"
            required
            value={formData.otraInstitucion}
            onChange={e => handleInput('otraInstitucion', e.target.value)}
            className={inputCls}
          />
        </Field>
      )}
    </div>
  )

  const renderPredio = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Field label="Tipo de bien inmueble" htmlFor="property-type">
          <select
            id="property-type"
            name="property-type"
            required
            value={formData.tipoInmueble}
            onChange={e => handleInput('tipoInmueble', e.target.value)}
            className={selectCls}
          >
            <option value="">Seleccionar...</option>
            {propertyTypes.map(c => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Ubicación" htmlFor="property-location">
          <select
            id="property-location"
            name="property-location"
            required
            value={formData.location}
            onChange={e => handleInput('location', e.target.value)}
            className={selectCls}
          >
            <option value="">Seleccionar...</option>
            {locations.map(c => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Zona" htmlFor="property-zone">
          <select
            id="property-zone"
            name="property-zone"
            required
            value={formData.zona}
            onChange={e => handleInput('zona', e.target.value)}
            className={selectCls}
          >
            <option value="">Seleccionar...</option>
            {zones.map(c => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Dirección" htmlFor="property-address">
        <input
          type="text"
          id="property-address"
          name="property-address"
          autoComplete="street-address"
          required
          placeholder="Calle y número"
          value={formData.direccion}
          onChange={e => handleInput('direccion', e.target.value)}
          className={inputCls}
        />
      </Field>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Field label="Forma de adquisición" htmlFor="property-acquisition">
          <select
            id="property-acquisition"
            name="property-acquisition"
            required
            value={formData.formaAdq}
            onChange={e => handleInput('formaAdq', e.target.value)}
            className={selectCls}
          >
            <option value="">Seleccionar...</option>
            {acquisitionMethods.map(c => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Fecha de escritura" htmlFor="property-deed-date">
          <input
            type="date"
            id="property-deed-date"
            name="property-deed-date"
            required
            value={formData.fechaEscritura}
            onChange={e => handleInput('fechaEscritura', e.target.value)}
            className={inputCls}
          />
        </Field>

        <Field label="Fecha de inscripción" htmlFor="property-registration-date">
          <input
            type="date"
            id="property-registration-date"
            name="property-registration-date"
            required
            value={formData.fechaInscripcion}
            onChange={e => handleInput('fechaInscripcion', e.target.value)}
            className={inputCls}
          />
        </Field>
      </div>
    </div>
  )

  const renderPropietario = () => (
    <div className="space-y-4">
      <Field label="Nombre / Razón Social" htmlFor="owner-name">
        <input
          type="text"
          id="owner-name"
          name="owner-name"
          autoComplete="name"
          required
          placeholder="Nombres y apellidos completos"
          value={formData.propNombre}
          onChange={e => handleInput('propNombre', e.target.value)}
          className={inputCls}
        />
      </Field>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Cédula / RUC" htmlFor="owner-dni">
          <input
            type="tel"
            id="owner-dni"
            name="owner-dni"
            autoComplete="tel"
            required
            value={formData.propId}
            onChange={e => handleInput('propId', e.target.value)}
            className={inputCls}
          />
        </Field>

        <Field label="Celular" htmlFor="owner-phone">
          <input
            type="tel"
            id="owner-phone"
            name="owner-phone"
            autoComplete="tel"
            required
            value={formData.propCel}
            onChange={e => handleInput('propCel', e.target.value)}
            className={inputCls}
          />
        </Field>
      </div>
    </div>
  )

  const renderDeclaracion = () => {
    const fullName = [formData.nombres, formData.apellidos].filter(Boolean).join(' ')

    return (
      <div className="space-y-6">
        <div className="rounded-xl bg-gray-50 border border-gray-200 p-4 sm:p-5">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">
            Resumen de la solicitud
          </h4>
          <div className="divide-y divide-gray-100">
            <SummaryRow label="Solicitante" value={fullName} />
            <SummaryRow label="Cédula" value={formData.cedula} />
            <SummaryRow label="Tipo de certificado" value={formData.tipo} />
            <SummaryRow label="Propósito" value={formData.proposito} />
            <SummaryRow label="Tipo de inmueble" value={formData.tipoInmueble} />
            <SummaryRow label="Ubicación" value={formData.location} />
            <SummaryRow label="Propietario" value={formData.propNombre} />
          </div>
        </div>

        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="f-declara"
            name="f-declara"
            required
            checked={formData.declarationAccepted}
            onChange={e => handleInput('declarationAccepted', e.target.checked)}
            className="mt-1 h-5 w-5 rounded border-gray-300 text-primary-500 focus:ring-primary-200"
          />
          <label htmlFor="f-declara" className="text-sm text-gray-700">
            He revisado la información y declaro que los datos proporcionados son
            correctos.
          </label>
        </div>
      </div>
    )
  }

  const renderStep = (key: StepKey) => {
    switch (key) {
      case 'solicitante':
        return renderSolicitante()
      case 'certificado':
        return renderCertificado()
      case 'predio':
        return renderPredio()
      case 'propietario':
        return renderPropietario()
      case 'declaracion':
        return renderDeclaracion()
    }
  }

  /* ---------------------------------------------------------------- */
  /*  Render                                                           */
  /* ---------------------------------------------------------------- */

  return (
    <div className="view-container space-y-6">
      <Link
        to={FORMALITIES_PATH}
        className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
      >
        <ChevronLeft />
        Cancelar
      </Link>

      {/* Progress bar */}
      <div className="w-full h-1.5 rounded-full bg-gray-200 overflow-hidden">
        <div
          className="h-full bg-primary-500 transition-all duration-300 ease-out"
          style={{ width: `${progressPct}%` }}
          role="progressbar"
          aria-valuenow={progressPct}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Progreso del formulario"
        />
      </div>

      {/* Stepper */}
      <nav aria-label="Progreso del formulario" className="w-full">
        {/* Mobile: dots + current title */}
        <div className="sm:hidden">
          <div className="flex items-center justify-center gap-2">
            {STEPS.map((s, i) => (
              <span
                key={s.key}
                aria-current={i === currentStep ? 'step' : undefined}
                className={
                  'h-2 rounded-full transition-all ' +
                  (i === currentStep
                    ? 'w-6 bg-primary-500'
                    : i < currentStep
                      ? 'w-2 bg-primary-400'
                      : 'w-2 bg-gray-300')
                }
              />
            ))}
          </div>
          <p className="mt-3 text-center text-sm font-semibold text-gray-900">
            {currentStepDef.title}
          </p>
          <p className="text-center text-xs text-gray-500">
            Paso {currentStep + 1} de {STEPS.length}
          </p>
        </div>

        {/* Tablet + Desktop */}
        <div className="hidden sm:flex items-center w-full">
          {STEPS.map((s, i) => {
            const isActive = i === currentStep
            const isComplete = i < currentStep
            const isClickable = visited.has(i) && !isActive
            const isLast = i === STEPS.length - 1

            return (
              <React.Fragment key={s.key}>
                <button
                  type="button"
                  onClick={() => isClickable && goTo(i)}
                  disabled={!isClickable}
                  aria-current={isActive ? 'step' : undefined}
                  aria-label={`Paso ${i + 1}: ${s.title}`}
                  className={
                    'flex flex-col items-center text-center min-w-0 ' +
                    (isClickable ? 'cursor-pointer group' : 'cursor-default')
                  }
                >
                  <span
                    className={
                      'flex items-center justify-center h-9 w-9 rounded-full border-2 text-sm font-semibold transition-colors ' +
                      (isActive
                        ? 'bg-primary-500 border-primary-500 text-white'
                        : isComplete
                          ? 'bg-primary-100 border-primary-400 text-primary-600'
                          : 'bg-white border-gray-300 text-gray-400')
                    }
                  >
                    {isComplete ? <CheckIcon /> : i + 1}
                  </span>
                  <span
                    className={
                      'mt-2 text-xs font-medium truncate max-w-[6rem] ' +
                      (isActive
                        ? 'text-primary-600'
                        : isComplete
                          ? 'text-gray-700'
                          : 'text-gray-400')
                    }
                  >
                    {s.shortTitle}
                  </span>
                </button>

                {!isLast && (
                  <div
                    className={
                      'flex-1 h-0.5 mx-2 sm:mx-3 transition-colors ' +
                      (i < currentStep ? 'bg-primary-400' : 'bg-gray-200')
                    }
                    aria-hidden="true"
                  />
                )}
              </React.Fragment>
            )
          })}
        </div>
      </nav>

      {validationError && (
        <div
          role="alert"
          className="bg-red-50 text-red-700 p-4 rounded-xl text-sm border border-red-200"
        >
          {validationError}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate autoComplete="on">
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-200">
          {/* Header */}
          <div className="mb-4">
            <h3 className="font-semibold text-gray-900">{currentStepDef.title}</h3>
            <p className="text-xs text-gray-500 mt-0.5">{currentStepDef.description}</p>
          </div>

          {/* All steps mounted; only current is visible */}
          {STEPS.map((s, i) => (
            <div
              key={s.key}
              className={i === currentStep ? 'block' : 'hidden'}
              aria-hidden={i !== currentStep}
            >
              {renderStep(s.key)}
            </div>
          ))}

          {/* Navigation buttons */}
          <div className="mt-6 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3">
            <button
              type="button"
              onClick={goPrev}
              disabled={currentStep === 0}
              className={
                'inline-flex items-center justify-center gap-2 rounded-xl min-h-12 px-5 text-base font-medium transition-colors border ' +
                (currentStep === 0
                  ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50')
              }
            >
              <ChevronLeft />
              Anterior
            </button>

            {isLast ? (
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-primary-500 text-white hover:bg-primary-600 rounded-xl min-h-12 sm:min-h-14 px-6 font-semibold transition-colors duration-200 ease-out text-base"
              >
                Enviar a revisión
                <ChevronRight />
              </button>
            ) : (
              <button
                type="button"
                onClick={goNext}
                className="inline-flex items-center justify-center gap-2 bg-primary-500 text-white hover:bg-primary-600 rounded-xl min-h-12 sm:min-h-14 px-6 font-semibold transition-colors duration-200 ease-out text-base"
              >
                Siguiente
                <ChevronRight />
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  )
}
