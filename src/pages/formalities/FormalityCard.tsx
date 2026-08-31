
import { useFormalities } from './UseFormalities';
import type { Tramite } from './FormalitiesTypes';
import { StatusBadge } from './StatusBadge';
import { FORMALITIES_CERTIFICATE_PATH, FORMALITIES_DETAIL_PATH, FORMALITIES_INPERSON_PAIMENT_PATH } from '@config';
import { useNavigate } from 'react-router-dom';


interface FormalityCardProps {
    tramite: Tramite;
}

export const FormalityCard: React.FC<FormalityCardProps> = ({ tramite }) => {
     const navigate =useNavigate()
    const { selectTramite } = useFormalities();

    const handleClick = () => {
        selectTramite(tramite.id);
        if (tramite.estado === "CERTIFICADO DISPONIBLE") {
            navigate(FORMALITIES_CERTIFICATE_PATH);
        } else if (tramite.estado === "PENDIENTE DE PAGO EN VENTANILLA") {
            navigate(FORMALITIES_INPERSON_PAIMENT_PATH); 
        } else {
            navigate(FORMALITIES_DETAIL_PATH);
        }
    };

    return (
        <div 
            onClick={handleClick}
            className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200 cursor-pointer hover:shadow-md hover:border-gray-300 transition-all active:scale-[0.98] group"
        >
            <div className="flex flex-col gap-3">
                <div className="flex flex-col sm:flex-row sm:justify-between items-start gap-4">
                    <h3 className="font-semibold text-gray-900 leading-tight">Certificado de {tramite.data.tipo}</h3>
                    <StatusBadge status={tramite.estado} className="shrink-0" />
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M3 15h6"></path><path d="M3 18h6"></path></svg>
                        <span className="font-mono">{tramite.id}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>
                        <span>{tramite.fecha}</span>
                    </div>
                </div>
                <div className="flex items-center gap-1 text-sm text-primary-600 font-medium mt-1 group-hover:text-primary-700">
                    {tramite.estado === "CERTIFICADO DISPONIBLE" ? "Ver certificado" : "Ver detalle"}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"></path></svg>
                </div>
            </div>
        </div>
    );
};
