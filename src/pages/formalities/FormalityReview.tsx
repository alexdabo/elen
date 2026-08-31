import React from 'react';
import { useFormalities } from './UseFormalities';
import { FORMALITIES_CREATE_PATH, FORMALITIES_DETAIL_PATH } from '@config';
import { Link, useNavigate } from 'react-router-dom';


export const FormalityReview: React.FC = () => {
    const navigate =useNavigate()
    const { formData,  createTramite, startProcedureWorkflow } = useFormalities();

    const handleConfirm = () => {
        const tramite = createTramite();
        startProcedureWorkflow(tramite.id);
        
        navigate(FORMALITIES_DETAIL_PATH);
    };

    return (
        <div className="view-container space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">Revisa tu solicitud</h2>
            <p className="text-base text-gray-600">Verifica que todo sea correcto antes de enviarla.</p>

            <div className="space-y-4">
                <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm relative">
                    <h3 className="font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-100 flex justify-between">
                        Datos del solicitante
                        <Link to={FORMALITIES_CREATE_PATH} className="text-primary-600 font-normal text-sm hover:underline">Editar</Link>
                    </h3>
                    <div className="grid grid-cols-2 gap-y-2 text-sm">
                        <div className="text-gray-500">Nombre:</div><div className="font-medium text-gray-900">{formData.nombres} {formData.apellidos}</div>
                        <div className="text-gray-500">Cédula:</div><div className="font-medium text-gray-900">{formData.cedula}</div>
                        <div className="text-gray-500">Correo:</div><div className="font-medium text-gray-900">{formData.correo}</div>
                        <div className="text-gray-500">Teléfono:</div><div className="font-medium text-gray-900">{formData.telefono}</div>
                    </div>
                </div>
                
                <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm relative">
                    <h3 className="font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-100 flex justify-between">
                        Datos del certificado
                        <Link to={FORMALITIES_CREATE_PATH} className="text-primary-600 font-normal text-sm hover:underline">Editar</Link>
                    </h3>
                    <div className="grid grid-cols-2 gap-y-2 text-sm">
                        <div className="text-gray-500">Tipo:</div><div className="font-medium text-gray-900">{formData.tipo}</div>
                        <div className="text-gray-500">Propósito:</div><div className="font-medium text-gray-900">{formData.proposito}</div>
                        <div className="text-gray-500">Institución:</div><div className="font-medium text-gray-900">{formData.institucion === "Otra" ? formData.otraInstitucion : formData.institucion}</div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm relative">
                    <h3 className="font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-100 flex justify-between">
                        Datos del predio y propietario
                        <Link to={FORMALITIES_CREATE_PATH} className="text-primary-600 font-normal text-sm hover:underline">Editar</Link>
                    </h3>
                    <div className="grid grid-cols-2 gap-y-2 text-sm">
                        <div className="text-gray-500 col-span-2 font-medium bg-gray-50 p-2 rounded mb-1">Inmueble</div>
                        <div className="text-gray-500">Ubicación:</div><div className="font-medium text-gray-900">{formData.location} - {formData.zona}</div>
                        <div className="text-gray-500">Dirección:</div><div className="font-medium text-gray-900">{formData.direccion}</div>
                        <div className="text-gray-500 mt-2 col-span-2 font-medium bg-gray-50 p-2 rounded mb-1">Propietario</div>
                        <div className="text-gray-500">Nombre:</div><div className="font-medium text-gray-900">{formData.propNombre}</div>
                        <div className="text-gray-500">Cédula:</div><div className="font-medium text-gray-900">{formData.propId}</div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm relative">
                    <h3 className="font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-100 flex justify-between">
                        Declaración y Firma
                        <Link to={FORMALITIES_CREATE_PATH} className="text-primary-600 font-normal text-sm hover:underline">Editar</Link>
                    </h3>
                    <div className="text-sm">
                        <div className="flex items-center gap-2 text-green-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            Declaración aceptada
                        </div>
                        <div className="flex items-center gap-2 text-green-700 mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            Firma registrada
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-sm text-yellow-800">
                Revisa cuidadosamente la información antes de enviar tu solicitud.
            </div>

            <button onClick={handleConfirm} className="w-full bg-primary-500 text-white hover:bg-primary-600 rounded-xl min-h-14 font-semibold transition-colors duration-200 ease-out text-base">
                Confirmar y enviar
            </button>
        </div>
    );
};
