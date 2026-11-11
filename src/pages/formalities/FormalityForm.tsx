import { FORMALITIES_PATH, FORMALITIES_REVIEW_PATH } from '@config'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import type {
  AcquisitionMethod,
  CertificateType,
  PropertyType,
  Zone
} from './FormalitiesTypes'
import { useFormalities } from './UseFormalities'

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

export const FormalityFormPage: React.FC = () => {
  const navigate = useNavigate()
  const { formData, updateFormField } = useFormalities()
  const [validationError, setValidationError] = useState<string>('')

  const handleInput = React.useCallback(
    (field: string, value: any) => {
      setValidationError('')
      updateFormField(field as any, value)
    },
    [updateFormField]
  )

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Perform final strict validation before review
    if (
      !formData.apellidos.trim() ||
      !formData.nombres.trim() ||
      !formData.cedula.trim()
    ) {
      setValidationError('Por favor completa los datos personales.')
      return
    }

    if (formData.institucion === 'Otra' && !formData.otraInstitucion.trim()) {
      setValidationError('Por favor especifica la otra institución.')
      return
    }

    navigate(FORMALITIES_REVIEW_PATH)
  }

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
        Cancelar
      </Link>

      {validationError && (
        <div className="bg-red-50 text-red-700 p-4 rounded-xl text-sm border border-red-200">
          {validationError}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6" autoComplete="on">
        {/* Applicant */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 space-y-4">
          <h3 className="font-semibold text-gray-900">Datos del solicitante</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Last name */}
            <div className="space-y-1">
              <label
                htmlFor="applicant-last-name"
                className="block text-sm font-medium text-gray-900"
              >
                Apellidos
              </label>

              <input
                type="text"
                id="applicant-last-name"
                name="applicant-last-name"
                autoComplete="family-name"
                required
                value={formData.apellidos}
                onChange={e => handleInput('apellidos', e.target.value)}
                className="w-full rounded-xl border border-gray-300 min-h-12 px-4 text-base focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-colors"
              />
            </div>

            {/* First name */}
            <div className="space-y-1">
              <label
                htmlFor="applicant-first-name"
                className="block text-sm font-medium text-gray-900"
              >
                Nombres
              </label>

              <input
                type="text"
                id="applicant-first-name"
                name="applicant-first-name"
                autoComplete="given-name"
                required
                value={formData.nombres}
                onChange={e => handleInput('nombres', e.target.value)}
                className="w-full rounded-xl border border-gray-300 min-h-12 px-4 text-base focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-colors"
              />
            </div>
          </div>

          {/* ID */}
          <div className="space-y-1">
            <label
              htmlFor="applicant-dni"
              className="block text-sm font-medium text-gray-900"
            >
              Cédula
            </label>

            <input
              type="text"
              id="applicant-dni"
              name="applicant-dni"
              inputMode="numeric"
              required
              value={formData.cedula}
              onChange={e => handleInput('cedula', e.target.value)}
              className="w-full rounded-xl border border-gray-300 min-h-12 px-4 text-base focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email */}
            <div className="space-y-1">
              <label
                htmlFor="applicant-email"
                className="block text-sm font-medium text-gray-900"
              >
                Correo electrónico
              </label>

              <input
                type="email"
                id="applicant-email"
                name="applicant-email"
                autoComplete="email"
                required
                value={formData.correo}
                onChange={e => handleInput('correo', e.target.value)}
                className="w-full rounded-xl border border-gray-300 min-h-12 px-4 text-base focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-colors"
              />
            </div>

            {/* Phone */}
            <div className="space-y-1">
              <label
                htmlFor="applicant-phone"
                className="block text-sm font-medium text-gray-900"
              >
                Teléfono
              </label>

              <input
                type="tel"
                id="applicant-phone"
                name="applicant-phone"
                autoComplete="tel"
                required
                value={formData.telefono}
                onChange={e => handleInput('telefono', e.target.value)}
                className="w-full rounded-xl border border-gray-300 min-h-12 px-4 text-base focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Certificado */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 space-y-4">
          <h3 className="font-semibold text-gray-900">Datos del certificado</h3>
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-900">
              Tipo de certificado
            </label>
            <select
              required
              value={formData.tipo}
              onChange={e => handleInput('tipo', e.target.value)}
              className="w-full rounded-xl border border-gray-300 min-h-12 px-4 text-base focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-colors bg-white"
            >
              {certificateTypes.map(c => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-900">
              Propósito de la solicitud
            </label>
            <select
              required
              value={formData.proposito}
              onChange={e => handleInput('proposito', e.target.value)}
              className="w-full rounded-xl border border-gray-300 min-h-12 px-4 text-base focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-colors bg-white"
            >
              <option value="">Seleccionar...</option>
              {purposes.map(c => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-900">
              Institución que solicita
            </label>
            <select
              required
              value={formData.institucion}
              onChange={e => handleInput('institucion', e.target.value)}
              className="w-full rounded-xl border border-gray-300 min-h-12 px-4 text-base focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-colors bg-white"
            >
              <option value="">Seleccionar...</option>
              {institutions.map(c => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          {formData.institucion === 'Otra' && (
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-900">
                Otra institución
              </label>
              <input
                type="text"
                required
                value={formData.otraInstitucion}
                onChange={e => handleInput('otraInstitucion', e.target.value)}
                className="w-full rounded-xl border border-gray-300 min-h-12 px-4 text-base focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-colors"
              />
            </div>
          )}
        </div>

        {/* Predio */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 space-y-4">
          <h3 className="font-semibold text-gray-900">Datos del predio</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-900">
                Tipo de bien inmueble
              </label>
              <select
                required
                value={formData.tipoInmueble}
                onChange={e => handleInput('tipoInmueble', e.target.value)}
                className="w-full rounded-xl border border-gray-300 min-h-12 px-4 text-base focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-colors bg-white"
              >
                <option value="">Seleccionar...</option>
                {propertyTypes.map(c => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-900">Ubicación</label>
              <select
                required
                value={formData.location}
                onChange={e => handleInput('location', e.target.value)}
                className="w-full rounded-xl border border-gray-300 min-h-12 px-4 text-base focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-colors bg-white"
              >
                <option value="">Seleccionar...</option>
                {locations.map(c => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-900">Zona</label>
              <select
                required
                value={formData.zona}
                onChange={e => handleInput('zona', e.target.value)}
                className="w-full rounded-xl border border-gray-300 min-h-12 px-4 text-base focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-colors bg-white"
              >
                <option value="">Seleccionar...</option>
                {zones.map(c => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-900">Dirección</label>
            <input
              type="text"
              id="property-address"
              name="property-address"
              autoComplete="street-address"
              required
              placeholder="Calle y número"
              value={formData.direccion}
              onChange={e => handleInput('direccion', e.target.value)}
              className="w-full rounded-xl border border-gray-300 min-h-12 px-4 text-base focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-colors"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-900">
                Forma de adquisición
              </label>
              <select
                required
                value={formData.formaAdq}
                onChange={e => handleInput('formaAdq', e.target.value)}
                className="w-full rounded-xl border border-gray-300 min-h-12 px-4 text-base focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-colors bg-white"
              >
                <option value="">Seleccionar...</option>
                {acquisitionMethods.map(c => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-900">
                Fecha de escritura
              </label>
              <input
                type="date"
                required
                value={formData.fechaEscritura}
                onChange={e => handleInput('fechaEscritura', e.target.value)}
                className="w-full rounded-xl border border-gray-300 min-h-12 px-4 text-base focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-colors"
              />
            </div>
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-900">
                Fecha de inscripción
              </label>
              <input
                type="date"
                required
                value={formData.fechaInscripcion}
                onChange={e => handleInput('fechaInscripcion', e.target.value)}
                className="w-full rounded-xl border border-gray-300 min-h-12 px-4 text-base focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Propietario */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 space-y-4">
          <h3 className="font-semibold text-gray-900">Datos del propietario</h3>
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-900">
              Nombre / Razón Social
            </label>
            <input
              id="owner-name"
              name="owner-name"
              autoComplete="name"
              type="text"
              required
              placeholder="Nombres y apellidos completos"
              value={formData.propNombre}
              onChange={e => handleInput('propNombre', e.target.value)}
              className="w-full rounded-xl border border-gray-300 min-h-12 px-4 text-base focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-colors"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-900">
                Cédula / RUC
              </label>
              <input
                type="tel"
                autoComplete="tel"
                id="owner-dni"
                name="owner-dni"
                required
                value={formData.propId}
                onChange={e => handleInput('propId', e.target.value)}
                className="w-full rounded-xl border border-gray-300 min-h-12 px-4 text-base focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-colors"
              />
            </div>
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-900">Celular</label>
              <input
                type="tel"
                id="owner-phone"
                name="owner-phone"
                autoComplete="tel"
                required
                value={formData.propCel}
                onChange={e => handleInput('propCel', e.target.value)}
                className="w-full rounded-xl border border-gray-300 min-h-12 px-4 text-base focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Checkbox y Firma */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 space-y-4">
          <h3 className="font-semibold text-gray-900">Declaración y Firma</h3>
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="f-declara"
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

        <button
          type="submit"
          className="w-full bg-primary-500 text-white hover:bg-primary-600 rounded-xl min-h-14 font-semibold transition-colors duration-200 ease-out text-base"
        >
          Revisar solicitud
        </button>
      </form>
    </div>
  )
}
