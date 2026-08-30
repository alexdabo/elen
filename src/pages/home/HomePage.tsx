import Isotipo from '@assets/isotipo.png'
import { FORMALITIES_PATH } from '@config'
import { Link } from "react-router-dom"

export const HomePage: React.FC=()=>{
    return  <div className="max-w-2xl mx-auto px-4 py-6">
        {/* VIEW: Bienvenida */}
        <div id="view-home" className="view active">
            <div
                className="flex flex-col items-center justify-center min-h-[70vh] text-center"
            >
                <div
                    className="w-20 h-20 bg-primary-50 rounded-2xl flex items-center justify-center mb-8"
                >
                    <img src={Isotipo} alt="Logo" className="h-12 w-auto" />
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                    Bienvenido a Elén
                </h2>
                <p className="text-gray-600 text-lg mb-2 max-w-md">
                    Gestiona tus trámites municipales de forma digital
                </p>
                <p className="text-gray-400 text-sm mb-10">
                    Prototipo demostrativo · Datos ficticios
                </p>

                <Link
                    to={FORMALITIES_PATH}
                    className="w-full max-w-xs py-4 bg-primary-500 text-white font-medium rounded-xl hover:bg-primary-600 transition-colors duration-200 ease-out text-lg"
                >
                    Mis trámites
                </Link>

                <div
                    className="mt-12 bg-white rounded-2xl p-6 shadow-sm w-full max-w-md"
                >
                    <h3 className="font-medium text-gray-900 mb-4">
                        ¿Qué puedes hacer?
                    </h3>
                    <div className="space-y-3">
                        <div className="flex items-start gap-3">
                            <div
                                className="w-8 h-8 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0"
                            >
                                <svg
                                    className="w-4 h-4 text-primary-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    ><path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 4v16m8-8H4"></path></svg
                                >
                            </div>
                            <div className="text-left">
                                <p className="text-sm font-medium text-gray-900">
                                    Crear solicitudes
                                </p>
                                <p className="text-xs text-gray-500">
                                    Inicia trámites desde tu dispositivo
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div
                                className="w-8 h-8 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0"
                            >
                                <svg
                                    className="w-4 h-4 text-primary-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    ><path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                    ></path></svg
                                >
                            </div>
                            <div className="text-left">
                                <p className="text-sm font-medium text-gray-900">
                                    Seguir el progreso
                                </p>
                                <p className="text-xs text-gray-500">
                                    Revisa el estado de tus trámites
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div
                                className="w-8 h-8 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0"
                            >
                                <svg
                                    className="w-4 h-4 text-primary-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    ><path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    ></path>
                                    </svg                                >
                            </div>
                            <div className="text-left">
                                <p className="text-sm font-medium text-gray-900">
                                    Recibir documentos
                                </p>
                                <p className="text-xs text-gray-500">
                                    Obtén certificados digitales
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}