# PROMPT PARA CONSTRUIR EL PROTOTIPO ELÉN

Actúa como diseñador UX/UI y desarrollador frontend senior especializado en prototipos de servicios digitales ciudadanos.

Construye un prototipo web funcional que demuestre cómo podría ser la experiencia de un ciudadano al gestionar digitalmente un Certificado de Gravamen.

El proyecto se llama Elén.

==================================================
1. RESTRICCIÓN TÉCNICA ABSOLUTA
==================================================

CREA ÚNICAMENTE UN ARCHIVO:

index.html

No crees ningún otro archivo.

No utilices:

- Astro
- React
- Vue
- Svelte
- Backend
- Base de datos
- API
- Archivos CSS externos
- Archivos JavaScript externos
- package.json
- Componentes separados
- Infraestructura
- Autenticación
- Servicios externos

Todo debe estar contenido dentro del mismo HTML.

Utiliza:

- HTML
- Tailwind CSS mediante CDN
- JavaScript vanilla embebido dentro de <script>

El archivo debe poder abrirse directamente en un navegador y funcionar.

==================================================
2. DISEÑO
==================================================

Existe otro archivo independiente que contiene las especificaciones de diseño y estilo.

Ese archivo es la fuente de verdad para:

- colores;
- tipografías;
- espaciado;
- botones;
- tarjetas;
- iconografía;
- bordes;
- sombras;
- navegación;
- componentes;
- responsive design;
- identidad visual.

Si tienes acceso a ese archivo, debes seguirlo estrictamente.

No inventes una nueva identidad visual.

No sustituyas sus especificaciones por preferencias propias.

Si no tienes acceso al archivo de diseño, utiliza Tailwind para crear una interfaz limpia, moderna, profesional y responsive, preparada para adaptarse posteriormente a las especificaciones.

==================================================
3. CONTEXTO
==================================================

Elén nace desde la perspectiva de un ciudadano de Guano que también es desarrollador de software.

La idea busca explorar cómo determinados trámites municipales podrían realizarse digitalmente para reducir desplazamientos, filas y tiempos de espera.

El objetivo NO es construir un sistema municipal real.

El objetivo es demostrar:

"Así podría sentirse para un ciudadano realizar este trámite desde su teléfono o computadora."

La demo debe mostrar que digitalizar el trámite no necesariamente significa eliminar la intervención humana.

Puede existir un flujo como:

Ciudadano
↓
Solicitud digital
↓
Revisión
↓
Aprobación
↓
Pago
↓
Emisión
↓
Firmas
↓
Certificado

==================================================
4. TRÁMITE DE REFERENCIA
==================================================

Utiliza como referencia:

Certificado de Gravamen

Referencia:

https://www.gob.ec/gadmc-guano/tramites/certificado-gravamen

También utiliza como referencia el formulario:

https://form.jotform.com/51034724543651

Utiliza los campos del formulario como referencia para construir el formulario del prototipo.

No integres Jotform.

No envíes información a Jotform.

No utilices el formulario como backend.

Solo utiliza sus campos como referencia.

==================================================
5. OBJETIVO DE LA EXPERIENCIA
==================================================

La aplicación debe demostrar un recorrido completo:

Listado de trámites
↓
Crear nuevo trámite
↓
Información
↓
Formulario
↓
Revisión de datos
↓
Enviar solicitud
↓
Estado: pendiente del responsable
↓
Estado: pendiente de aprobación del revisor
↓
Estado: listo
↓
Elegir método de pago
↓
Pago online DEMO
o
Pago en ventanilla
↓
Procesamiento
↓
Certificado disponible
↓
Certificado DEMO

==================================================
6. PRIMERA VISTA — LISTADO DE TRÁMITES
==================================================

IMPORTANTE:

NO crear una landing page.

NO iniciar directamente el formulario.

Cuando se abra el HTML, la primera vista debe ser una pantalla de listado de trámites o solicitudes.

El usuario debe encontrar una interfaz parecida a:

"Mis trámites"

o:

"Mis solicitudes"

La pantalla debe mostrar una lista de solicitudes existentes.

Utiliza algunos registros DEMO.

Ejemplo:

Certificado de Gravamen
Solicitud #GRV-DEMO-000123
Estado: Certificado disponible

Certificado de Gravamen
Solicitud #GRV-DEMO-000122
Estado: Pendiente de pago

Los registros deben ser ficticios.

==================================================
7. BOTÓN CREAR NUEVO TRÁMITE
==================================================

En el listado debe existir un CTA principal:

"+ Nuevo trámite"

Al pulsarlo debe comenzar una nueva solicitud.

No abrir directamente una nueva página.

Cambiar la vista dentro del mismo HTML mediante JavaScript.

El flujo será:

Listado
→ Nuevo trámite
→ Información
→ Formulario

==================================================
8. CREAR NUEVA SOLICITUD
==================================================

Cuando el usuario presione:

"+ Nuevo trámite"

mostrar información breve:

CERTIFICADO DE GRAVAMEN

Explicar:

"Completa la información necesaria para iniciar tu solicitud."

Mostrar un resumen de los pasos:

1. Completar información.
2. Enviar solicitud.
3. Revisión.
4. Aprobación.
5. Elegir forma de pago.
6. Emisión del certificado.

CTA:

"Comenzar solicitud"

==================================================
9. FORMULARIO
==================================================

Utiliza como referencia los campos del formulario:

https://form.jotform.com/51034724543651

Organiza los campos en grupos para evitar un formulario excesivamente largo.

--------------------------------------------------
DATOS DEL SOLICITANTE
--------------------------------------------------

- Apellidos
- Nombres
- Cédula
- Correo electrónico
- Teléfono

--------------------------------------------------
DATOS DEL CERTIFICADO
--------------------------------------------------

- Tipo de certificado
- Propósito de la solicitud
- Institución que solicita
- Otra institución

Para esta demo:

"Gravámenes"

debe ser la opción principal.

--------------------------------------------------
DATOS DEL PREDIO
--------------------------------------------------

- Propietario / forma de adquisición
- Tipo de bien inmueble
- Ubicación
- Zona
- Forma de adquisición
- Fecha de escritura
- Fecha de inscripción en el Registro de la Propiedad

--------------------------------------------------
DATOS DEL PROPIETARIO
--------------------------------------------------

- Nombre / Razón Social
- Cédula / RUC
- Celular
- Dirección

--------------------------------------------------
DECLARACIÓN
--------------------------------------------------

Incluir una declaración conceptual basada en el formulario de referencia.

Checkbox obligatorio:

"He revisado la información y declaro que los datos proporcionados son correctos."

--------------------------------------------------
FIRMA
--------------------------------------------------

Representar la firma del solicitante como:

"Firma DEMO"

No implementar firma electrónica real.

==================================================
10. VALIDACIONES
==================================================

Implementar validaciones básicas con JavaScript.

Validar:

- campos obligatorios;
- correo electrónico;
- identificación;
- declaración obligatoria.

Mostrar mensajes de error claros.

No realizar validaciones contra sistemas externos.

==================================================
11. REVISIÓN DE LA SOLICITUD
==================================================

Antes de enviar, mostrar un resumen:

DATOS DEL SOLICITANTE

DATOS DEL CERTIFICADO

DATOS DEL PREDIO

DATOS DEL PROPIETARIO

DECLARACIÓN

FIRMA

Cada sección debe permitir:

"Editar"

Mostrar un CTA:

"Enviar solicitud"

==================================================
12. CREACIÓN DEL TRÁMITE
==================================================

Cuando el usuario envíe la solicitud:

Generar un identificador ficticio.

Ejemplo:

GRV-DEMO-000124

Crear el nuevo registro dentro del listado de trámites.

El estado inicial debe ser:

"PENDIENTE DEL RESPONSABLE"

La solicitud debe aparecer en el listado.

==================================================
13. LISTADO DE TRÁMITES DESPUÉS DE CREAR
==================================================

Después de enviar el formulario, regresar automáticamente al listado de trámites.

La nueva solicitud debe aparecer arriba.

Ejemplo:

Certificado de Gravamen
#GRV-DEMO-000124

PENDIENTE DEL RESPONSABLE

Mostrar también la fecha.

El usuario debe poder hacer clic sobre la solicitud para ver su detalle.

==================================================
14. ESTADOS AUTOMÁTICOS
==================================================

La nueva solicitud debe pasar automáticamente por los siguientes estados:

ESTADO 1:

"PENDIENTE DEL RESPONSABLE"

Duración:

3 segundos.

Después pasar automáticamente a:

ESTADO 2:

"PENDIENTE DE APROBACIÓN"

Duración:

3 segundos.

Después pasar automáticamente a:

ESTADO 3:

"LISTO PARA PAGO"

El cambio debe ocurrir automáticamente.

El usuario no debe tener que hacer clic para avanzar.

==================================================
15. ESTADO — PENDIENTE DEL RESPONSABLE
==================================================

Mostrar:

"Solicitud enviada"

Estado:

"PENDIENTE DEL RESPONSABLE"

Descripción:

"Un responsable debe revisar la información de tu solicitud."

Mostrar visualmente:

● Pendiente del responsable
○ Aprobación
○ Pago
○ Certificado

Después de 3 segundos avanzar automáticamente.

No utilizar nombres reales.

Puede mostrarse:

"Responsable · DEMO"

==================================================
16. ESTADO — PENDIENTE DE APROBACIÓN
==================================================

Mostrar:

"Solicitud en revisión"

Estado:

"PENDIENTE DE APROBACIÓN"

Descripción:

"La información fue revisada y ahora está pendiente de aprobación."

Mostrar:

✓ Solicitud recibida
✓ Revisión inicial
● Aprobación
○ Pago
○ Certificado

Mantener este estado durante exactamente 3 segundos.

Después pasar automáticamente a:

"LISTO PARA PAGO"

==================================================
17. ESTADO — LISTO PARA PAGO
==================================================

Mostrar:

"Solicitud aprobada"

Estado:

"LISTO PARA PAGO"

Descripción:

"Tu solicitud ha sido aprobada y puedes elegir cómo realizar el pago."

Este estado NO debe avanzar automáticamente.

El usuario debe tomar una decisión.

Mostrar dos opciones:

--------------------------------------------------
PAGAR EN LÍNEA
--------------------------------------------------

"Realiza el pago desde este prototipo."

Botón:

"Pagar en línea"

--------------------------------------------------
PAGAR EN VENTANILLA
--------------------------------------------------

"Realiza el pago presencialmente en ventanilla."

Botón:

"Pagar en ventanilla"

==================================================
18. PAGO EN LÍNEA
==================================================

Si el usuario selecciona:

"Pagar en línea"

mostrar una pantalla de pago DEMO.

IMPORTANTE:

No integrar una pasarela real.

No pedir datos reales de tarjeta.

No almacenar información financiera.

Mostrar:

"PAGO DEMO"

"Este pago es simulado. No se realizará ningún cargo real."

Mostrar:

Certificado de Gravamen
Solicitud #GRV-DEMO-000124

Valor:

Utilizar un valor claramente DEMO si no se dispone de un valor oficial verificable.

Por ejemplo:

"$0.00 DEMO"

Botón:

"Confirmar pago DEMO"

==================================================
19. SIMULACIÓN DEL PAGO ONLINE
==================================================

Cuando el usuario pulse:

"Confirmar pago DEMO"

mostrar:

"Procesando pago..."

durante aproximadamente 2 segundos.

Después mostrar:

"Pago realizado correctamente"

Estado:

"PAGADO"

Después continuar automáticamente al siguiente proceso.

==================================================
20. PAGO EN VENTANILLA
==================================================

Si el usuario selecciona:

"Pagar en ventanilla"

NO simular un pago online.

Mostrar:

"PAGO EN VENTANILLA"

Explicar:

"Esta opción representa un pago que todavía requiere acudir físicamente a una ventanilla."

Mostrar:

"Tu solicitud está lista para ser pagada en ventanilla."

Estado:

"PENDIENTE DE PAGO EN VENTANILLA"

No marcar la solicitud como pagada.

No avanzar automáticamente hacia el certificado.

Permitir regresar al listado.

Esta parte es importante porque demuestra que Elén no intenta asumir que todos los pasos necesariamente pueden digitalizarse.

==================================================
21. CONTINUACIÓN DESPUÉS DEL PAGO ONLINE
==================================================

Después de un pago online DEMO exitoso, continuar con:

"Procesando solicitud"

Mostrar:

✓ Solicitud aprobada
✓ Pago realizado
● Preparando certificado
○ Firma de emisión
○ Certificado disponible

Simular una espera breve.

==================================================
22. EMISIÓN DEL CERTIFICADO
==================================================

Después del pago online:

mostrar:

"Certificado en preparación"

Estado:

"EMISIÓN"

Descripción:

"El certificado está siendo preparado."

Después de una breve simulación:

"Certificado emitido"

==================================================
23. FIRMA DEL RESPONSABLE DE REVISIÓN
==================================================

Representar una firma DEMO asociada a la revisión.

Mostrar:

"Responsable de revisión"

Estado:

"Firmado DEMO"

No utilizar nombres reales.

No implementar firma electrónica real.

==================================================
24. FIRMA DEL RESPONSABLE DE EMISIÓN
==================================================

Representar una segunda firma DEMO.

Mostrar:

"Responsable de emisión"

Estado:

"Firmado DEMO"

No utilizar nombres reales.

No implementar firma electrónica real.

==================================================
25. CERTIFICADO DISPONIBLE
==================================================

Después de completar el proceso:

Estado:

"CERTIFICADO DISPONIBLE"

Mostrar:

✓ Solicitud enviada
✓ Solicitud revisada
✓ Solicitud aprobada
✓ Pago realizado
✓ Certificado emitido
✓ Firma de revisión
✓ Firma de emisión

CTA:

"Ver certificado"

==================================================
26. LISTADO ACTUALIZADO
==================================================

Una vez completado el proceso, el listado debe actualizar el estado del trámite.

Ejemplo:

Certificado de Gravamen
#GRV-DEMO-000124

CERTIFICADO DISPONIBLE

Al hacer clic:

"Ver certificado"

==================================================
27. CERTIFICADO DEMO
==================================================

Crear una representación visual profesional del certificado.

Debe contener permanentemente:

"DOCUMENTO DEMOSTRATIVO — SIN VALIDEZ OFICIAL"

Utilizar únicamente datos ficticios.

Puede contener:

- nombre del trámite;
- número DEMO;
- fecha;
- datos ficticios del propietario;
- datos ficticios del predio;
- resultado ficticio;
- firma DEMO del responsable de revisión;
- firma DEMO del responsable de emisión;
- código visual DEMO.

No utilizar:

- firmas reales;
- sellos oficiales reales;
- datos reales;
- números oficiales;
- información que pueda hacer pasar el documento por auténtico.

==================================================
28. BOTÓN DESCARGAR
==================================================

Puedes incluir:

"Descargar certificado DEMO"

Si es sencillo, generar una descarga desde el navegador.

No es obligatorio generar un PDF real.

Si hacerlo complica el prototipo, basta con la visualización del documento.

==================================================
29. DETALLE DE UN TRÁMITE
==================================================

Desde el listado, el usuario debe poder abrir cualquier trámite DEMO.

Mostrar:

Certificado de Gravamen
#GRV-DEMO-000124

Estado actual.

Y una línea de tiempo:

✓ Solicitud creada
✓ Revisión
✓ Aprobación
✓ Pago
✓ Emisión
✓ Firmas
✓ Certificado

Los pasos futuros deben aparecer pendientes.

==================================================
30. LÍNEA DE TIEMPO
==================================================

La línea de tiempo debe actualizarse dinámicamente.

Ejemplo:

SOLICITUD
✓ Completada

RESPONSABLE
✓ Completada

APROBACIÓN
● En proceso

PAGO
○ Pendiente

EMISIÓN
○ Pendiente

CERTIFICADO
○ Pendiente

Cuando cada etapa termine, actualizar automáticamente.

==================================================
31. REINICIAR DEMO
==================================================

Agregar una opción:

"Reiniciar demo"

Debe permitir borrar las solicitudes creadas durante la sesión y volver al estado inicial.

No utilizar base de datos.

Puedes utilizar memoria JavaScript o localStorage.

Si utilizas localStorage, debe ser únicamente para conservar la demo dentro del navegador.

==================================================
32. DATOS DEMO
==================================================

Todos los datos deben ser ficticios.

Ejemplo:

Solicitante:
Alexander Bonilla DEMO

Cédula:
0600000000

Correo:
demo@example.com

Teléfono:
0990000000

Propietario:
Propietario DEMO

Predio:
Predio DEMO-001

Solicitud:
GRV-DEMO-000124

Responsable:
Funcionario DEMO

Revisor:
Funcionario DEMO

Emisor:
Funcionario DEMO

No utilizar información personal real.

==================================================
33. DEMO Y TRANSPARENCIA
==================================================

Mantener visible:

"DEMO · Prototipo conceptual"

La aplicación NO debe parecer una plataforma oficial.

Dejar claro que:

- los datos son ficticios;
- el pago es simulado;
- las firmas son simuladas;
- el proceso institucional es simulado;
- el certificado no tiene validez oficial;
- no existe conexión con sistemas del GAD.

==================================================
34. CONCEPTO QUE DEBE COMUNICAR
==================================================

La experiencia debe comunicar visualmente:

ANTES:

Ciudadano
↓
Municipio
↓
Solicitud
↓
Espera
↓
Municipio
↓
Pago
↓
Espera
↓
Certificado

PROPUESTA:

Ciudadano
↓
Solicitud digital
↓
Revisión institucional
↓
Aprobación
↓
Pago online
↓
Emisión
↓
Firmas
↓
Certificado digital

Y también debe mostrar que existe una alternativa:

Pago online
O
Pago en ventanilla

Esto es importante.

Elén NO afirma:

"Todo puede hacerse digitalmente."

Elén propone:

"Todo lo que pueda hacerse digitalmente debería evaluarse para reducir desplazamientos innecesarios."

==================================================
35. PAGO EN VENTANILLA COMO EXCEPCIÓN
==================================================

El flujo debe demostrar que si el ciudadano escoge:

"Pagar en ventanilla"

la experiencia cambia.

Mostrar claramente:

"Este paso todavía requiere presencia física."

Esto refuerza la propuesta de Elén:

No eliminar la presencialidad por completo.

Reducirla únicamente a los pasos que realmente la necesiten.

==================================================
36. MICROCOPY
==================================================

Utilizar lenguaje ciudadano.

No utilizar lenguaje técnico.

Ejemplos:

"Estamos revisando tu solicitud."

"Tu solicitud fue aprobada."

"Elige cómo quieres realizar el pago."

"Puedes pagar en línea o acudir a ventanilla."

"Estamos preparando tu certificado."

"Tu certificado ya está disponible."

==================================================
37. RESPONSABILIDAD INSTITUCIONAL
==================================================

Representar claramente que existen diferentes responsables.

No inventar nombres.

Utilizar roles:

"Responsable de revisión · DEMO"

"Responsable de emisión · DEMO"

El flujo conceptual debe ser:

Ciudadano
↓
Solicitud
↓
Responsable de revisión
↓
Aprobación
↓
Pago
↓
Responsable de emisión
↓
Firma
↓
Certificado

==================================================
38. NO HACER
==================================================

No crear:

- backend;
- APIs;
- base de datos;
- autenticación;
- pagos reales;
- integración con Jotform;
- integración con catastro;
- integración con Registro de la Propiedad;
- integración con SRI;
- firma electrónica real;
- sistema administrativo real;
- dashboard institucional;
- servicios externos;
- múltiples archivos;
- sistema multi-trámite real.

==================================================
39. CRITERIO DE ÉXITO
==================================================

El prototipo debe permitir demostrar en pocos minutos:

1. Ver los trámites existentes.
2. Crear un nuevo trámite.
3. Completar la solicitud.
4. Ver la solicitud en el listado.
5. Ver "Pendiente del responsable".
6. Ver automáticamente "Pendiente de aprobación".
7. Ver automáticamente "Listo para pago".
8. Elegir pago online o ventanilla.
9. Si se elige online, simular el pago.
10. Continuar automáticamente con la emisión.
11. Mostrar las dos firmas DEMO.
12. Mostrar el certificado DEMO.
13. Regresar al listado y ver el estado actualizado.

==================================================
40. REGLA DE TIEMPOS
==================================================

Los estados:

"PENDIENTE DEL RESPONSABLE"

y:

"PENDIENTE DE APROBACIÓN"

deben durar exactamente aproximadamente 3 segundos cada uno.

El avance debe ser automático.

El estado:

"LISTO PARA PAGO"

debe detener el flujo y esperar la decisión del usuario.

Si selecciona:

"Pagar en línea"

continuar automáticamente después de la simulación.

Si selecciona:

"Pagar en ventanilla"

detener el proceso y mostrar que requiere presencia física.

==================================================
41. EXPERIENCIA MOBILE FIRST
==================================================

La aplicación debe funcionar correctamente en:

- móvil;
- tablet;
- laptop;
- desktop.

Priorizar:

- botones grandes;
- formularios cómodos;
- buena jerarquía visual;
- tarjetas;
- estados claros;
- línea de tiempo;
- navegación sencilla.

==================================================
42. REGLA FINAL
==================================================

No construyas un sistema municipal real.

Construye una demostración de cómo podría sentirse un servicio municipal digital.

La pregunta que debe responder la experiencia es:

"¿Cuánto del trámite podría hacer un ciudadano desde su teléfono o computadora y qué partes todavía requerirían intervención presencial?"

La aplicación debe hacer evidente que:

- el ciudadano puede iniciar el trámite digitalmente;
- la institución puede continuar procesándolo;
- existen responsables humanos;
- existen revisiones y aprobaciones;
- el ciudadano puede elegir cómo pagar;
- el pago online puede evitar una visita adicional;
- si el pago en línea no es posible, todavía existe la alternativa presencial;
- finalmente el ciudadano puede recibir un certificado digital.

==================================================
43. ENTREGA
==================================================

Entrega únicamente:

index.html

No entregues explicaciones.

No entregues archivos adicionales.

No entregues código separado.

No entregues pseudocódigo.

No entregues estructura de carpetas.

No entregues Astro.

No entregues React.

No entregues Vue.

No entregues backend.

No entregues CSS externo.

No entregues JavaScript externo.

Entrega únicamente un HTML completamente funcional que contenga:

- HTML;
- Tailwind CSS mediante CDN;
- JavaScript vanilla embebido.

Debe poder copiarse directamente a un archivo index.html y abrirse en el navegador para ejecutar toda la demostración.
