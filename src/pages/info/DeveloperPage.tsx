import React, { useEffect, useState } from "react";

const DEVELOPER_DATA_URL = "https://alexdabo.github.io/data.json";
interface DeveloperData {
    Profile: {
        fullName: string;
        alias: string;
        greeting: string;
    };
    Web: {
        image: string;
        summary: string;
        about: string;
    };
    Network: {
        website: {
            name: string;
            label: string;
            url: string;
        };
        whatsapp: {
            name: string;
            label: string;
            url: string;
        };
    };
}




interface ContactItemProps {
    type: "website" | "whatsapp";
    name: string;
    label: string;
    url: string;
}

const ContactItem: React.FC<ContactItemProps> = ({
    type,
    name,
    label,
    url,
}) => {
    const isWhatsapp = type === "whatsapp";

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-200"
        >
            <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${isWhatsapp
                        ? "bg-green-50 text-green-600 group-hover:bg-green-100"
                        : "bg-primary-50 text-primary-600 group-hover:bg-primary-100"
                    }`}
            >
                {isWhatsapp ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                        <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4" />
                        <path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4" />
                        <path d="M12.5 3a16.989 16.989 0 0 1 1.828 4" />
                        <path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4" />
                        <path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4" />
                        <path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4" />
                        <path d="M2 10l1 4l1.5 -4l1.5 4l1 -4" />
                        <path d="M17 10l1 4l1.5 -4l1.5 4l1 -4" />
                        <path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4" />
                    </svg>
                )}
            </div>

            <div className="min-w-0 flex-1 text-left">
                <p className="text-xs text-gray-400 mb-0.5">
                    {name}
                </p>

                <p className="text-sm font-medium text-gray-800 truncate">
                    {label}
                </p>
            </div>

            <svg
                className="w-4 h-4 text-gray-300 group-hover:text-gray-500 transition-colors flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
            </svg>
        </a>
    );
};



export const DeveloperPage: React.FC = () => {
    const [data, setData] = useState<DeveloperData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadDeveloper = async () => {
            try {
                setLoading(true);

                const response = await fetch(DEVELOPER_DATA_URL);

                if (!response.ok) {
                    throw new Error("No se pudo obtener la información.");
                }

                const json = await response.json();
                setData(json);
            } catch (err) {
                setError(
                    err instanceof Error
                        ? err.message
                        : "Ocurrió un error inesperado."
                );
            } finally {
                setLoading(false);
            }
        };

        loadDeveloper();
    }, []);

    if (loading) {
        return (
            <div className="max-w-2xl mx-auto px-4 py-6">
                <div className="min-h-[70vh] flex flex-col items-center justify-center text-center">
                    <div className="w-12 h-12 border-4 border-primary-100 border-t-primary-500 rounded-full animate-spin mb-6" />

                    <h2 className="text-xl font-semibold text-gray-900">
                        Cargando información
                    </h2>

                    <p className="text-sm text-gray-500 mt-2">
                        Obteniendo los datos del desarrollador...
                    </p>
                </div>
            </div>
        );
    }

    if (error || !data) {
        return (
            <div className="max-w-2xl mx-auto px-4 py-6">
                <div className="min-h-[70vh] flex items-center justify-center">
                    <div className="bg-white rounded-2xl p-6 shadow-sm w-full text-center">
                        <div className="w-12 h-12 mx-auto bg-red-50 text-red-500 rounded-xl flex items-center justify-center mb-4">
                            !
                        </div>

                        <h2 className="font-semibold text-gray-900">
                            No se pudo cargar la información
                        </h2>

                        <p className="text-sm text-gray-500 mt-2">
                            {error ?? "Intenta nuevamente más tarde."}
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto px-4 py-6">
            <div className="space-y-6">

                {/* Perfil */}
                <section className="bg-white rounded-2xl p-6 shadow-sm">
                    <div className="flex flex-col items-center text-center">
                        <img
                            src={data.Web.image}
                            alt={data.Profile.fullName}
                            className="w-24 h-24 rounded-2xl object-cover mb-5"
                        />

                        <p className="text-sm text-primary-600 font-medium mb-2">
                            {data.Profile.greeting}
                        </p>

                        <h1 className="text-2xl font-bold text-gray-900">
                            {data.Profile.fullName}
                        </h1>

                        <p className="text-gray-500 mt-1">
                            {data.Profile.alias}
                        </p>

                        <p className="text-gray-600 text-sm leading-relaxed mt-5 max-w-lg">
                            {data.Web.summary}
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-2 gap-3">
                        <ContactItem
                            type="website"
                            name={data.Network.website.name}
                            label={data.Network.website.label}
                            url={data.Network.website.url}
                        />

                        <ContactItem
                            type="whatsapp"
                            name={data.Network.whatsapp.name}
                            label={data.Network.whatsapp.label}
                            url={data.Network.whatsapp.url}
                        />
                    </div>

                </section>


            </div>
        </div>
    );
};
