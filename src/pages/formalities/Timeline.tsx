import React from 'react';
import type { FormalityStatus } from './FormalitiesTypes';


interface TimelineProps {
    status: FormalityStatus;
}

type TimelineItemState = "completed" | "active" | "pending";

interface TimelineItem {
    label: string;
    state: TimelineItemState;
}

function getTimelineForStatus(status: FormalityStatus): TimelineItem[] {
    const baseTimeline = [
        { label: "Solicitud creada", state: "pending" as TimelineItemState },
        { label: "Responsable", state: "pending" as TimelineItemState },
        { label: "Aprobación", state: "pending" as TimelineItemState },
        { label: "Pago", state: "pending" as TimelineItemState },
        { label: "Emisión", state: "pending" as TimelineItemState },
        { label: "Certificado", state: "pending" as TimelineItemState },
    ];

    if (status === "SOLICITUD ENVIADA") {
        baseTimeline[0].state = "completed";
    } else if (status === "PENDIENTE DEL RESPONSABLE") {
        baseTimeline[0].state = "completed";
        baseTimeline[1].state = "active";
    } else if (status === "PENDIENTE DE APROBACIÓN") {
        baseTimeline[0].state = "completed";
        baseTimeline[1].state = "completed";
        baseTimeline[2].state = "active";
    } else if (status === "LISTO PARA PAGO" || status === "PENDIENTE DE PAGO EN VENTANILLA") {
        baseTimeline[0].state = "completed";
        baseTimeline[1].state = "completed";
        baseTimeline[2].state = "completed";
    } else if (status === "PROCESAMIENTO") {
        baseTimeline[0].state = "completed";
        baseTimeline[1].state = "completed";
        baseTimeline[2].state = "completed";
        baseTimeline[3].state = "completed";
        baseTimeline[4].state = "active"; // Simulating moving to emission
    } else if (status === "CERTIFICADO DISPONIBLE") {
        baseTimeline.forEach(t => t.state = "completed");
    }

    return baseTimeline;
}

export const Timeline: React.FC<TimelineProps> = ({ status }) => {
    const timeline = getTimelineForStatus(status);

    return (
        <div className="space-y-4">
            {timeline.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                        {item.state === "completed" && (
                            <svg className="w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        )}
                        {item.state === "active" && (
                            <svg className="w-5 h-5 text-blue-500 animate-spin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>
                        )}
                        {item.state === "pending" && (
                            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                        )}
                    </div>
                    <span className={`text-sm ${item.state === "completed" ? "text-gray-900 font-medium" : item.state === "active" ? "text-blue-600 font-semibold" : "text-gray-500"}`}>
                        {item.label}
                    </span>
                </div>
            ))}
        </div>
    );
};
