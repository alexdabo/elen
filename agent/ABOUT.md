# Contexto del proyecto — Elén

## Autor

Soy **Alexander Bonilla**, ingeniero en Sistemas y Computación y desarrollador fullstack.

Soy **guaneño, nací en Guano, Ecuador, y actualmente vivo en Guano**. Por esta razón, además de tener experiencia profesional desarrollando software, soy usuario directo de los servicios y trámites del GAD Municipal del Cantón Guano.

Mi experiencia profesional incluye el desarrollo de:

- Aplicaciones web completas.
- APIs y servicios backend.
- Sistemas administrativos.
- Generación de documentos y PDFs.
- Integración de servicios externos.
- Bases de datos.
- Autenticación.
- Roles y permisos.
- Facturación electrónica.
- Integraciones con servicios del SRI.

Trabajo principalmente con:

- JavaScript / TypeScript
- Node.js
- Go
- React
- Vue
- Astro
- PostgreSQL

### Perfiles

- Website: https://alexdabo.github.io/
- GitHub: https://github.com/alexdabo
- CV: https://alexdabo.github.io/pdf/alexander-bonilla.pdf

---

# ¿Por qué existe este proyecto?

Elén nace principalmente de una experiencia personal.

Como ciudadano de Guano, he tenido que realizar personalmente trámites municipales y he experimentado que algunos procesos requieren desplazarse físicamente al municipio, hacer fila y esperar para ser atendido.

En algunos casos, una parte importante de la información y del procedimiento ya se encuentra disponible de manera digital, pero la experiencia completa todavía puede requerir interacción presencial.

Esto me llevó a plantearme una pregunta:

> **¿Qué pasaría si un ciudadano pudiera realizar una parte importante de estos trámites desde su teléfono o computadora?**

No se trata de asumir que todos los trámites deben ser completamente digitales.

La idea es identificar qué partes del proceso podrían realizarse de manera remota y cuáles necesariamente deberían continuar requiriendo intervención presencial.

---

# Problema que se quiere explorar

Un trámite municipal puede implicar diferentes desplazamientos y tiempos de espera para el ciudadano.

Una experiencia tradicional puede verse aproximadamente así:

```text
Ciudadano
    ↓
Busca información
    ↓
Se desplaza al municipio
    ↓
Espera para ser atendido
    ↓
Presenta información
    ↓
Realiza otras gestiones
    ↓
Espera el procesamiento
    ↓
Regresa al municipio
    ↓
Recibe el resultado
```

La pregunta que motiva Elén es:

> **¿Cuántos de estos pasos realmente requieren que el ciudadano esté físicamente en el municipio?**

Si algunos de ellos pueden realizarse desde Internet, existe una oportunidad para reducir desplazamientos, tiempos de espera y carga presencial tanto para los ciudadanos como para la institución.

---

# Caso inicial: Certificado de Gravamen

El primer trámite seleccionado para explorar esta idea es el:

**Certificado de Gravamen**

Referencia del trámite:

https://www.gob.ec/gadmc-guano/tramites/certificado-gravamen

La elección de este trámite no significa que Elén vaya a implementar el procedimiento real.

Se utiliza como un **caso concreto** para poder visualizar una experiencia completa.

Trabajar con un trámite específico permite evitar una propuesta demasiado abstracta como:

> "Crear una plataforma digital para todos los trámites municipales."

En lugar de eso, la propuesta parte de algo mucho más pequeño:

> **"Así podría sentirse para un ciudadano realizar este trámite desde su teléfono o computadora."**

---

# Objetivo del proyecto

El objetivo principal de Elén **no es desarrollar un sistema municipal real**.

Tampoco busca demostrar conocimientos de programación.

Como desarrollador, ya tengo experiencia construyendo sistemas web completos.

El objetivo es demostrar visualmente una idea:

> **Un ciudadano podría realizar este trámite sin tener que desplazarse al municipio y hacer fila para cada etapa del proceso.**

La demostración debe permitir que una persona sin conocimientos técnicos pueda entender inmediatamente:

- Qué problema se intenta solucionar.
- Cómo sería la experiencia del ciudadano.
- Qué partes del proceso podrían digitalizarse.
- Qué beneficios podría tener para el ciudadano.
- Qué partes todavía necesitarían intervención humana o integración con sistemas municipales.
- Qué tendría que estudiarse antes de construir una solución real.

---

# Público principal

Aunque Elén es una aplicación web, el usuario más importante de esta primera versión **no es necesariamente el ciudadano**.

El usuario principal de la demostración es una persona del GAD que pueda evaluar la idea.

La aplicación debe ser suficientemente sencilla para que una persona sin conocimientos de:

- programación,
- automatización,
- bases de datos,
- APIs,
- infraestructura,

pueda abrirla y entenderla.

La persona no debería necesitar conocer cómo funciona la tecnología detrás.

Solamente debería poder utilizarla como cualquier otra página web.

La demostración debe conseguir que, en menos de un minuto, pueda entender la idea:

> **"El ciudadano podría hacer este trámite desde su teléfono o computadora."**

---

# ¿Qué significa "automatizar" en este contexto?

Para este proyecto no es necesario explicar automatización utilizando conceptos técnicos.

Desde el punto de vista del ciudadano, automatizar significa:

> **Convertir pasos que actualmente requieren una acción presencial en pasos que pueden realizarse digitalmente cuando el proceso lo permita.**

Por ejemplo:

### Experiencia presencial

```text
Ir al municipio
    ↓
Esperar
    ↓
Solicitar
    ↓
Pagar
    ↓
Esperar procesamiento
    ↓
Regresar
    ↓
Recibir resultado
```

### Experiencia digital propuesta

```text
Entrar desde el teléfono
    ↓
Solicitar
    ↓
Pagar
    ↓
Esperar procesamiento
    ↓
Recibir resultado
```

La tecnología necesaria para conseguir esto realmente puede ser compleja.

Pero esa complejidad debería estar detrás de la experiencia.

Para el ciudadano, la experiencia debería ser sencilla.

---

# Motivación personal

Elén no nace principalmente como una oportunidad comercial.

Nace de una experiencia personal como ciudadano de Guano.

Soy guaneño, nací y vivo en Guano y, por lo tanto, también soy usuario de los servicios y trámites que ofrece el GAD Municipal del Cantón Guano.

He tenido que realizar trámites municipales personalmente y conozco de primera mano la dificultad que puede representar tener que movilizarse hasta el municipio, esperar para ser atendido y, dependiendo del trámite, tener que regresar posteriormente para completar el proceso o retirar el resultado.

En particular, me resulta frustrante que un trámite que en esencia puede terminar produciendo un documento como un certificado pueda llegar a requerir desplazamientos presenciales que consumen una cantidad considerable de tiempo.

Desde mi perspectiva como ciudadano, el problema no es simplemente "tener que ir al municipio".

El problema es tener que organizar tiempo, transporte y actividades personales para realizar presencialmente pasos que posiblemente podrían hacerse desde un teléfono o computadora.

En el peor de los casos, considero que una solución digital debería intentar reducir la presencialidad a los pasos que realmente la necesiten.

Por ejemplo, si actualmente un ciudadano necesita acudir varias veces al municipio para completar un trámite, una mejora importante sería que pudiera realizar prácticamente todo el proceso desde su casa y que solamente tuviera que acudir presencialmente para algo que realmente no pueda hacerse de manera remota, como:

- Realizar un pago presencial, si todavía fuera necesario.
- Presentar físicamente un documento que legalmente lo requiera.
- Retirar un certificado físico, si no pudiera entregarse digitalmente.

Incluso conseguir que el ciudadano tenga que acudir **una sola vez en lugar de varias veces** ya representaría una mejora significativa.

Por eso, el objetivo de Elén no debe interpretarse como:

> "Quiero crear una plataforma para venderle al municipio."

La motivación inicial es:

> **"Yo soy uno de los ciudadanos que tiene que realizar estos trámites. Si existe una forma de hacerlos más sencillos, quiero explorarla."**

Además de ser ciudadano de Guano, tengo los conocimientos técnicos necesarios para construir software y prototipos de este tipo.

Esto me coloca en una situación particular:

- Conozco el problema desde el lado del ciudadano.
- Conozco cómo construir una posible solución desde el lado tecnológico.
- Tengo interés personal en que el problema se resuelva.
- Y puedo construir una primera demostración por mi cuenta.

Por esta razón, estoy dispuesto a invertir tiempo personal en desarrollar una prueba de concepto inicial, incluso sin cobrar por esa primera etapa.

Esto no significa que la implementación completa de un sistema municipal deba realizarse gratuitamente.

Significa que **no necesito que exista inicialmente un contrato, presupuesto o proyecto grande para demostrar que una experiencia diferente es técnicamente posible**.

La primera meta es mucho más sencilla:

> **Construir algo que yo mismo, como ciudadano de Guano, quisiera utilizar.**

---

# Motivación frente al beneficio económico

El proyecto podría eventualmente convertirse en una oportunidad profesional, pero ese no es el motivo principal por el que existe.

La motivación inicial es principalmente ciudadana y personal.

Si una solución de este tipo termina siendo útil para el GAD y posteriormente existe una oportunidad profesional para participar en su desarrollo, eso sería una consecuencia posible del proyecto, no la razón por la que decidí construir el prototipo.

La prioridad inicial es demostrar una mejora concreta en la experiencia del ciudadano.

---

# ¿Qué significa "éxito" para Elén?

El éxito de Elén no se mide inicialmente por:

- cantidad de código;
- complejidad técnica;
- cantidad de funcionalidades;
- tamaño de la aplicación;
- cantidad de trámites implementados;
- ni por conseguir un contrato.

El primer indicador de éxito es mucho más sencillo:

> **¿Podría un ciudadano realizar este trámite con menos desplazamientos y menos tiempo perdido?**

Idealmente:

### Situación actual

```text
Ciudadano
    ↓
Municipio
    ↓
Municipio
    ↓
Municipio
    ↓
Certificado
```

### Experiencia propuesta

```text
Ciudadano
    ↓
Teléfono / computadora
    ↓
Solicitud
    ↓
Pago / paso presencial necesario
    ↓
Procesamiento
    ↓
Certificado
```

Incluso si la solución no consigue eliminar completamente la presencialidad, reducir varias visitas a una sola ya sería un resultado valioso.

Por eso, Elén no parte de la idea de:

> "Todo debe ser digital."

Parte de una idea más realista:

> **"Todo lo que pueda hacerse digitalmente debería evaluarse para evitar que el ciudadano tenga que hacerlo presencialmente."**

---

# La razón más importante para construir Elén

Si esta solución existiera y funcionara correctamente, yo mismo sería uno de sus usuarios.

No estoy intentando resolver un problema hipotético.

Estoy intentando explorar una solución para un inconveniente que también he experimentado personalmente.

Por eso, una pregunta fundamental durante el desarrollo debe ser:

> **"Si yo fuera el ciudadano que necesita este certificado, ¿esto realmente me evitaría tiempo, desplazamientos y molestias?"**

Si la respuesta es no, entonces la funcionalidad probablemente no aporta suficiente valor.

Elén debe mantenerse enfocado en esa perspectiva.

---

# La demostración

El prototipo simula el trámite de un **Certificado de Gravamen** de principio a fin.

El ciudadano puede:

1. Conocer el trámite.
2. Iniciar una solicitud.
3. Ingresar información.
4. Revisar los datos.
5. Continuar al pago.
6. Realizar un pago ficticio.
7. Esperar mientras se simula el procesamiento.
8. Recibir una confirmación.
9. Visualizar un certificado demostrativo.

Todo el recorrido puede realizarse desde el navegador.

### Flujo

```text
┌──────────────┐
│    Inicio    │
└──────┬───────┘
       ↓
┌──────────────┐
│     Datos    │
└──────┬───────┘
       ↓
┌──────────────┐
│   Revisión   │
└──────┬───────┘
       ↓
┌──────────────┐
│ Pago DEMO    │
└──────┬───────┘
       ↓
┌──────────────┐
│ Procesando...│
└──────┬───────┘
       ↓
┌──────────────┐
│  Completado  │
└──────┬───────┘
       ↓
┌──────────────┐
│  Certificado │
└──────────────┘
```

---

# ¿Qué es real y qué es simulado?

Esta distinción es importante.

Elén **no tiene actualmente conexión con los sistemas del GAD**.

Por lo tanto, elementos como:

- El pago.
- La consulta de información municipal.
- El procesamiento del trámite.
- La generación del certificado.
- Los números de solicitud.
- Los datos mostrados.

son únicamente **simulaciones para la demostración**.

El objetivo es mostrar cómo podría ser la experiencia final, no afirmar que la infraestructura necesaria ya existe.

---

# Alcance inicial

El proyecto está deliberadamente limitado.

No quiero desarrollar todavía un sistema real.

La primera etapa consiste únicamente en construir un:

> **PROTOTIPO VISUAL / INTERACTIVO**

Debe ser una aplicación pequeña que permita simular el proceso de principio a fin.

## Lo que sí incluye

- Interfaz web.
- Diseño adaptable a teléfonos y computadoras.
- Flujo interactivo del trámite.
- Formulario de solicitud.
- Validaciones básicas.
- Revisión de información.
- Pago simulado.
- Simulación del procesamiento.
- Confirmación de solicitud.
- Certificado demostrativo.
- Indicadores claros de que se trata de una DEMO.

## Lo que NO se quiere construir todavía

Esta primera etapa no incluye:

- Backend.
- Base de datos.
- Autenticación.
- Usuarios reales.
- APIs.
- Integraciones reales con sistemas municipales.
- Integración real con sistemas de catastro.
- Integración real con pagos.
- Integración con el SRI.
- Firma electrónica real.
- Infraestructura de producción.
- Automatización de sistemas internos.
- Seguridad de producción.
- Protección de datos de ciudadanos reales.
- Una plataforma genérica para todos los trámites municipales.

Todo esto podría ser necesario en una implementación futura, pero está fuera del alcance del prototipo.

---

# Tecnología del prototipo

El prototipo se construirá utilizando **Astro**.

La razón es principalmente práctica.

Astro permite construir rápidamente una interfaz web estática y mantener el proyecto sencillo, organizado y fácil de modificar.

La elección de Astro no tiene como objetivo demostrar una arquitectura tecnológica avanzada.

La tecnología es solamente una herramienta para construir rápidamente la experiencia que se quiere demostrar.

La aplicación debe mantenerse deliberadamente simple.

---

# Filosofía de desarrollo

El objetivo es minimizar completamente el riesgo y el tiempo invertido.

No quiero invertir semanas construyendo un sistema que posteriormente podría no ser considerado útil.

Prefiero dedicar unas pocas horas a construir un prototipo pequeño, visualmente profesional y fácil de entender.

La estrategia es:

```text
Problema
   ↓
Idea
   ↓
Prototipo
   ↓
Presentación
   ↓
Conversación
   ↓
Validación
   ↓
Estudio del proceso real
   ↓
Implementación, si tiene sentido
```

No se debe invertir en una implementación completa antes de validar que la idea tiene sentido desde el punto de vista institucional y ciudadano.

---

# ¿Qué tendría que pasar para convertir esto en un sistema real?

El prototipo no debe saltar directamente a la construcción de un sistema real.

Si existe interés, el siguiente paso debería ser **entender el proceso real antes de programarlo**.

Sería necesario estudiar, entre otras cosas:

- El procedimiento actual del trámite.
- Los requisitos oficiales.
- La información que necesita el municipio.
- Quién interviene actualmente en cada etapa.
- Qué pasos pueden digitalizarse.
- Qué pasos requieren intervención humana.
- Qué sistemas utiliza actualmente el municipio.
- Cómo se realiza actualmente el pago.
- Cómo se generan los certificados.
- Cómo se validan los documentos.
- Cómo se realiza la firma correspondiente.
- Requisitos legales.
- Protección de datos personales.
- Seguridad.
- Integraciones necesarias.

Solamente después de comprender esto tendría sentido plantear una implementación real.

---

# Información que no forma parte de la propuesta

Tengo conocimiento indirecto de que existe interés de terceros relacionado con la automatización de procesos dentro del GAD.

Sin embargo, esta información:

- No proviene de un contacto directo con el GAD.
- No debe utilizarse como fundamento de la propuesta.
- No debe mencionarse en el acercamiento inicial.
- No debe aparecer en la presentación.
- No debe presentarse como conocimiento institucional.

La propuesta debe sostenerse exclusivamente en una motivación legítima y directa:

> **Soy ciudadano de Guano, este problema me afecta personalmente y, como desarrollador, quiero explorar una posible solución.**

No es necesario utilizar información obtenida de terceros para justificar el proyecto.

---

# Sobre una posible prueba de concepto

Existe disposición personal para desarrollar inicialmente una pequeña prueba de concepto sin cobrar.

Sin embargo, esto no debe ser el centro de la propuesta inicial.

El objetivo principal no es vender un proyecto ni conseguir inmediatamente un contrato.

El objetivo inicial es:

1. Mostrar el problema.
2. Mostrar una posible experiencia.
3. Recibir opinión.
4. Entender el proceso real.
5. Determinar si la idea tiene sentido.
6. Evaluar posteriormente qué sería necesario para implementarla.

Si existe interés, las condiciones, alcance, responsabilidades y forma de colaboración deberían discutirse posteriormente.

---

# Resultado esperado

El resultado de esta primera etapa debe ser una pequeña aplicación web que pueda:

- Abrirse en un navegador.
- Funcionar desde un teléfono o computadora.
- Ejecutarse sin backend.
- Simular el trámite de principio a fin.
- Verse profesional.
- Ser fácil de modificar.
- Ser entendida por una persona sin conocimientos técnicos.
- Dejar claro que es un prototipo conceptual.
- No aparentar ser un sistema oficial del GAD.

---

# Criterio principal para tomar decisiones

Todas las decisiones del proyecto deben responder a una pregunta:

> **¿Esto ayuda a que un funcionario del GAD vea en menos de un minuto cómo podría ser un trámite municipal digital?**

Si una funcionalidad:

- aumenta la complejidad,
- requiere mucho tiempo,
- agrega infraestructura,
- o demuestra conocimientos técnicos,

pero **no mejora significativamente la demostración**, debe evitarse.

El objetivo no es construir más.

El objetivo es **comunicar mejor una idea**.

---

# Próximas etapas

La primera etapa es:

**1. Prototipo**

Construir una experiencia pequeña y convincente.

Después:

**2. Presentación**

Crear unas diapositivas que expliquen el problema, la idea y el posible beneficio.

Después:

**3. Conversación**

Mostrar la propuesta a una persona correspondiente del GAD.

Después:

**4. Validación**

Entender si el problema existe realmente desde la perspectiva institucional y qué tan viable sería digitalizar el proceso.

Finalmente, si existe interés:

**5. Estudio e implementación**

Analizar los procesos reales, requisitos, sistemas, integraciones, seguridad, aspectos legales y demás componentes necesarios.

---

# Principio fundamental

Elén no pretende solucionar de inmediato toda la transformación digital del GAD Municipal del Cantón Guano.

Tampoco pretende demostrar que todos los trámites pueden hacerse completamente en línea.

Solamente quiere demostrar una posibilidad:

> **Que un ciudadano pueda realizar desde su teléfono o computadora una parte importante de un trámite que anteriormente requería acudir presencialmente.**

Si la demo consigue que una persona entienda esa idea rápidamente, entonces habrá cumplido su propósito.

La motivación final es sencilla:

> **Si puedo construir una experiencia que me ahorre a mí, como ciudadano de Guano, varios desplazamientos innecesarios para obtener un certificado, entonces vale la pena explorar si esa misma experiencia podría ayudar también a otros ciudadanos.**
