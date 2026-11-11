export type PropertyType = 'Terreno' | 'Casa y Terreno' | 'Propiedad Horizontal'

export type Zone = 'Urbano' | 'Rural'

export type AcquisitionMethod =
  | 'Compraventa'
  | 'Herencia'
  | 'Posesión Efectiva'
  | 'Adjudicación'
  | 'Donación'
  | 'Otros'

export type CertificateType = 'Gravámenes' | 'Bienes y raíces' | 'Búsqueda'

export interface FormalityData {
  apellidos: string
  nombres: string
  cedula: string
  correo: string
  telefono: string
  tipo: CertificateType
  proposito: string
  institucion: string
  otraInstitucion: string
  tipoInmueble: PropertyType
  location: string
  zona: Zone
  direccion: string
  formaAdq: AcquisitionMethod
  fechaEscritura: string
  fechaInscripcion: string
  propNombre: string
  propId: string
  propCel: string
  declarationAccepted: boolean
}

export type FormalityStatus =
  | 'CERTIFICADO DISPONIBLE'
  | 'PENDIENTE DE PAGO EN VENTANILLA'
  | 'SOLICITUD ENVIADA'
  | 'PENDIENTE DEL RESPONSABLE'
  | 'PENDIENTE DE APROBACIÓN'
  | 'LISTO PARA PAGO'
  | 'PROCESAMIENTO'

export interface Tramite {
  id: string
  estado: FormalityStatus
  fecha: string
  data: FormalityData
}

export type FormalityView =
  | 'list'
  | 'info'
  | 'form'
  | 'review'
  | 'detail'
  | 'pay-online'
  | 'pay-inperson'
  | 'certificate'
