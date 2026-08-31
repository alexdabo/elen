
import { useFormalities } from './UseFormalities';
import { StatusBadge } from './StatusBadge';
import { Timeline } from './Timeline';
import { Link } from 'react-router-dom';
import { FORMALITIES_CERTIFICATE_PATH, FORMALITIES_ONLINE_PAIMENT_PATH, FORMALITIES_PATH } from '@config';

export const FormalityDetail: React.FC = () => {
    const { selectedTramite, selectInPersonPayment } = useFormalities();

    // Prevent rendering if reset happens mid-render for detail view
    if (!selectedTramite) return null;

    const isReadyForPayment = selectedTramite.estado === "LISTO PARA PAGO";

    let description = "Revisa el estado de tu trámite.";
    if (selectedTramite.estado === "PENDIENTE DEL RESPONSABLE") {
        description = "Un responsable debe revisar la información de tu solicitud.";
    } else if (selectedTramite.estado === "PENDIENTE DE APROBACIÓN") {
        description = "La información fue revisada y ahora está pendiente de aprobación.";
    } else if (selectedTramite.estado === "LISTO PARA PAGO") {
        description = "Tu solicitud ha sido aprobada. Elige cómo realizar el pago.";
    } else if (selectedTramite.estado === "PROCESAMIENTO") {
        description = "Estamos preparando tu certificado.";
    } else if (selectedTramite.estado === "CERTIFICADO DISPONIBLE") {
        description = "Tu certificado ya está disponible.";
    }

    return (
        <div className="view-container space-y-6">
            <Link
                to={FORMALITIES_PATH}
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"></path></svg>
                Volver al listado
            </Link>

            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-semibold text-gray-900">
                        Certificado de {selectedTramite.data.tipo}
                    </h2>
                    <p className="text-sm text-gray-500 font-mono">
                        {selectedTramite.id}
                    </p>
                </div>
                <StatusBadge status={selectedTramite.estado} />
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                <p className="text-base text-gray-700 mb-6 font-medium bg-gray-50 p-3 rounded-lg border border-gray-100">{description}</p>
                <Timeline status={selectedTramite.estado} />
            </div>

            {isReadyForPayment && (
                <div className="space-y-4 pt-2">
                    <p className="text-sm text-gray-600 font-medium text-center">Puedes pagar en línea o acudir a ventanilla.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <Link
                            to={FORMALITIES_ONLINE_PAIMENT_PATH}
                            className="w-full bg-primary-500 text-white hover:bg-primary-600 rounded-xl min-h-14 font-semibold transition-colors duration-200 ease-out text-base flex items-center justify-center gap-2"
                        >
                            Pagar en línea
                        </Link>
                        <button
                            onClick={() => selectInPersonPayment(selectedTramite.id)}
                            className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-xl min-h-14 font-semibold transition-colors duration-200"
                        >
                            Pagar en ventanilla
                        </button>
                    </div>
                </div>
            )}

            {selectedTramite.estado === "CERTIFICADO DISPONIBLE" && (


                <Link
                    to={FORMALITIES_CERTIFICATE_PATH}
                    className="w-full bg-primary-500 text-white hover:bg-primary-600 rounded-xl min-h-14 font-semibold transition-colors duration-200 ease-out text-base flex items-center justify-center gap-2"
                >
                    Ver certificado
                </Link>
            )}
        </div>
    );
};
