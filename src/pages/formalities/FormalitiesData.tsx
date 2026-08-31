import {type Tramite,type FormalityData } from "./FormalitiesTypes";

export const initialFormData: FormalityData = {
    apellidos: "",
    nombres: "",
    cedula: "",
    correo: "",
    telefono: "",
    tipo: "Gravámenes",
    proposito: "",
    institucion: "",
    otraInstitucion: "",
    tipoInmueble: "Terreno",
    location: "",
    zona: "Urbano",
    direccion: "",
    formaAdq: "Compraventa",
    fechaEscritura: "",
    fechaInscripcion: "",
    propNombre: "",
    propId: "",
    propCel: "",
    declarationAccepted: false,

};

export const initialTramites: Tramite[] = [
    {
        id: "GRV-DEMO-000123",
        estado: "CERTIFICADO DISPONIBLE",
        fecha: "10/08/2026",
        data: {
            apellidos: "Pérez",
            nombres: "Juan",
            cedula: "0600000001",
            correo: "juan.perez.demo@example.com",
            telefono: "0990000001",
            tipo: "Gravámenes",
            proposito: "Compraventa",
            institucion: "Notaria",
            otraInstitucion: "",
            tipoInmueble: "Casa y Terreno",
            location: "La Matriz",
            zona: "Urbano",
            direccion: "Calle 1 y 2",
            formaAdq: "Compraventa",
            fechaEscritura: "2020-05-15",
            fechaInscripcion: "2020-06-10",
            propNombre: "Juan Pérez DEMO",
            propId: "0600000001",
            propCel: "0990000001",
            declarationAccepted: true,

        }
    },
    {
        id: "GRV-DEMO-000122",
        estado: "PENDIENTE DE PAGO EN VENTANILLA",
        fecha: "09/08/2026",
        data: {
            apellidos: "Gómez",
            nombres: "Ana",
            cedula: "0600000002",
            correo: "ana.gomez.demo@example.com",
            telefono: "0990000002",
            tipo: "Gravámenes",
            proposito: "Tramite municipio",
            institucion: "Municipio",
            otraInstitucion: "",
            tipoInmueble: "Terreno",
            location: "San Andrés",
            zona: "Rural",
            direccion: "Av. Principal",
            formaAdq: "Herencia",
            fechaEscritura: "2019-03-20",
            fechaInscripcion: "2019-04-05",
            propNombre: "Ana Gómez DEMO",
            propId: "0600000002",
            propCel: "0990000002",
            declarationAccepted: true,
  
        }
    }
];
