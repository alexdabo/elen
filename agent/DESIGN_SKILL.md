# Skill: UI Designer — Elén Design System

## Objective

Every component, page, or layout generated for **Elén** must strictly follow these rules.

The priority is always:

> Clarity > Usability > Accessibility > Consistency > Aesthetics

The design must communicate:

- Confianza
- Cercanía
- Claridad
- Sencillez
- Seguridad

Elén debe sentirse como un servicio digital que **acompaña al ciudadano durante un trámite**, no como un software administrativo.

Never design Elén as:

- A complex government portal
- An admin dashboard
- A SaaS application
- A marketing landing page
- A technology showcase

The technology should disappear behind the experience.

---

# Philosophy

The design combines four pillars:

- Simplicity
- Guided interaction
- Institutional trust
- High readability

The interface should be understandable by a person with little experience using computer systems.

The user should not need to understand:

- Navigation systems
- Technical terminology
- Application architecture
- Workflow concepts
- Database concepts
- Digital process terminology

The interface should explain what is happening naturally.

The fundamental principle is:

> **The interface should guide the citizen instead of asking the citizen to understand the interface.**

---

# Principles

Always design with:

- Generous whitespace
- Large readable text
- Few visible actions
- Clear visual hierarchy
- Short sentences
- Familiar terminology
- Large touch targets
- Predictable interactions
- Progressive disclosure
- Strong primary actions
- Clear feedback

Avoid:

- Unnecessary options
- Dense interfaces
- Technical terminology
- Decorative UI
- Complex navigation
- Excessive icons
- Hidden functionality
- Small controls
- Information overload

Every screen should answer three questions:

1. **Where am I?**
2. **What do I need to do?**
3. **What happens next?**

---

# Colors

The primary color palette is already defined in Tailwind.

Only use:

```

primary-50 → primary-950

```

Primary color:

```

primary-500

```

The primary palette is green.

Green represents:

- Action
- Progress
- Confirmation
- Success
- Continuation

The interface should primarily appear:

- White
- Gray
- With controlled green accents

Never make the entire interface green.

Never use `primary-500` as a large background.

The primary color should guide attention toward the most important action.

---

# Color Usage

## Primary Action

Use:

```

bg-primary-500
text-white
hover:bg-primary-600

```

Reserved for:

- Main actions
- Continue buttons
- Confirmations
- Important selected states

## Soft Primary

Use:

```

bg-primary-50
text-primary-800

```

For:

- Informational messages
- Completed states
- Selected elements
- Success areas
- Helpful contextual information

## Primary Text

Use:

```

text-primary-700
text-primary-800
text-primary-900

```

Only when green text has semantic meaning.

Never use green for all headings.

---

# Neutral Colors

Neutral colors form the majority of the interface.

Prefer:

```

bg-gray-50
bg-white

text-gray-900
text-gray-700
text-gray-600

border-gray-200
border-gray-300

```

The interface should visually feel mostly neutral.

Green should guide the eye rather than dominate the page.

---

# Border Radius

Elén uses soft, friendly corners.

## Buttons

```

rounded-xl

```

## Inputs

```

rounded-xl

```

## Cards

```

rounded-2xl

```

## Dialogs

```

rounded-2xl

```

## Badges

```

rounded-full

```

Avoid:

```

rounded-none
rounded-sm

```

The interface should feel approachable rather than rigid.

---

# Shadows

Shadows must remain subtle.

## Cards

```

shadow-sm

```

## Dropdowns

```

shadow-lg

```

## Dialogs

```

shadow-xl

```

Never use heavy shadows as a primary visual element.

Avoid:

```

shadow-2xl

```

unless there is a specific interaction requiring strong separation.

---

# Borders

Borders are optional.

When used:

```

border
border-gray-200

```

For form controls:

```

border-gray-300

```

Never use thick borders.

Never use green borders around every component.

Green borders should communicate an actual state.

---

# Glassmorphism

Glassmorphism is **not part of the Elén visual identity**.

Do not use:

```

backdrop-blur
bg-white/70
bg-white/80

```

for ordinary components.

The interface should prioritize:

- Solid surfaces
- Strong contrast
- Predictability
- Readability

Avoid visual effects that could make the interface feel less familiar.

---

# Cards

Cards should be used to group related information.

Cards must have:

- Solid background
- Clear hierarchy
- Generous padding
- Minimal visual decoration
- Optional subtle border
- Optional subtle shadow

Recommended:

```

rounded-2xl
bg-white
p-6
shadow-sm

```

Cards should communicate:

> **“These pieces of information belong together.”**

They should never exist merely for decoration.

Avoid excessive cards within cards.

---

# Layout

The interface should use a centered, readable content area.

Recommended:

```

max-w-2xl

```

for guided processes.

For larger informational pages:

```

max-w-4xl

```

Mobile horizontal padding:

```

px-4

```

Desktop:

```

px-6
px-8

```

Never allow text to occupy extremely wide lines.

The user should always feel that the interface is manageable.

---

# Spacing

Primary spacing scale:

```

2
4
6
8
10
12
16

```

Prefer generous vertical spacing.

Avoid cramped forms.

Related elements should be close together.

Different conceptual sections should have significantly more separation.

The rule is:

> **Related information stays together. Unrelated information gets space.**

---

# Typography

Use a single highly readable sans-serif font.

Prioritize readability over visual personality.

## H1

```

text-3xl
font-bold

```

Desktop:

```

lg:text-4xl

```

## H2

```

text-2xl
font-semibold

```

## H3

```

text-xl
font-semibold

```

## Body

```

text-base

```

## Secondary

```

text-sm

```

Never use excessively small text for important information.

Avoid displaying more than four text sizes on the same screen.

---

# Language

Language is part of the UI design.

Use simple, direct Spanish.

Prefer:

> **Ingresa tus datos**

Instead of:

> Ingrese la información requerida para continuar con el proceso.

Prefer:

> **Revisa tu información**

Instead of:

> Verificación de datos ingresados.

Prefer:

> **Tu solicitud está siendo procesada**

Instead of:

> Procesamiento de solicitud en curso.

Never expose technical terminology to the citizen.

Avoid words such as:

- Endpoint
- Backend
- API
- Registro
- Payload
- Parámetro
- Transacción
- Error 400
- UUID

unless the information is specifically intended for a technical audience.

---

# Guided Flow

Elén is primarily a guided experience.

Every process should be divided into understandable steps.

Example:

```

Datos → Revisión → Pago → Resultado

```

The user should always know:

```

Paso 2 de 4

```

or equivalent.

Never force the user to remember where they are in the process.

---

# One Primary Action

Every screen should have one clearly dominant action.

Example:

```

Continuar

```

Secondary actions should never visually compete with it.

Avoid presenting multiple equally prominent buttons such as:

```

Guardar
Continuar
Enviar
Finalizar
Cancelar

```

The user should know immediately:

> **“Este es el botón que debo presionar.”**

---

# Buttons

Only four button variants exist.

## Primary

```

bg-primary-500
text-white
hover:bg-primary-600

```

## Secondary

```

bg-gray-100
text-gray-800
hover:bg-gray-200

```

## Outline

```

border
border-gray-300
bg-white
hover:bg-gray-50

```

## Ghost

```

hover:bg-gray-100

```

Do not create additional button variants.

The primary button should normally be the most visually prominent element on the screen.

---

# Button Size

Buttons must be comfortable for inexperienced users.

Recommended:

```

min-h-12

```

For primary mobile actions:

```

min-h-14

```

Mobile primary actions should normally use:

```

w-full

```

Avoid small buttons.

Avoid actions that depend on precise mouse movement.

---

# Inputs

Inputs must be large and easy to understand.

Recommended:

```

rounded-xl
border
border-gray-300
min-h-12
px-4
text-base

```

For primary form fields:

```

min-h-14

```

Never use small inputs to save space.

---

# Input Labels

Every input must have a visible label.

Never depend exclusively on placeholders.

Preferred:

```

Número de cédula

[________________________]

```

Not:

```

[ Ingresa tu cédula ]

```

The label should remain visible even after the user enters information.

---

# Input Focus

Focus must be clearly visible.

Use:

```

focus:border-primary-500
focus:ring-2
focus:ring-primary-200

```

The user must immediately understand which field is active.

Never remove the browser focus indicator without replacing it with a stronger one.

---

# Form Design

Forms must be progressive.

Never present a large administrative form if the information can be collected in multiple steps.

Prefer:

```

Paso 1
Tus datos

```

then:

```

Paso 2
Datos del inmueble

```

then:

```

Paso 3
Revisión

```

The user should only see the information necessary for the current step.

---

# Error Messages

Errors must be human and actionable.

Never display:

```

Campo inválido

```

Prefer:

> **Revisa tu número de cédula**

And explain why when useful:

> La cédula debe tener 10 dígitos.

Errors must tell the user:

1. What went wrong.
2. Where it happened.
3. How to fix it.

Never blame the user.

---

# Success States

Success should be unmistakable.

Use:

```

bg-primary-50
text-primary-900

```

with:

```

bg-primary-500
text-white

```

for the success icon.

Example hierarchy:

```

✓

Solicitud completada

Tu solicitud fue registrada correctamente.

```

Do not communicate success only through color.

Always combine color with:

- Icon
- Text
- Clear explanation

---

# Progress Indicator

The progress indicator should be simple.

Preferred:

```

●────●────○────○

```

with:

```

Paso 2 de 4

```

Avoid complicated steppers.

The progress indicator exists to reduce uncertainty, not to display technical workflow information.

---

# Icons

Use simple, familiar icons.

Preferred library:

- Lucide

Standard:

```

size-5

```

Larger contextual icons:

```

size-6
size-8

```

Never use icons alone when their meaning could be ambiguous.

For example, avoid:

```

[ → ]

```

when:

```

[ Continuar → ]

```

would be clearer.

---

# Navigation

Elén should have minimal navigation.

The prototype should not resemble an administrative portal.

Avoid:

- Complex sidebars
- Large navigation menus
- Multiple levels of navigation
- Dashboard-style navigation
- Unnecessary account menus

The user should primarily move:

```

Inicio
↓
Trámite
↓
Resultado

```

Navigation should never compete with the task.

---

# Header

The header should establish identity without pretending to be an official municipal system.

It may contain:

```

ELÉN
Prototipo demostrativo

```

The prototype must clearly communicate its status.

Never make the interface appear to be an official GAD system.

---

# Prototype Identity

The application must clearly distinguish between:

> **Elén — propuesta / prototipo**

and:

> **Sistema oficial del GAD**

The interface must never imply that:

- The application is officially deployed.
- The GAD operates the prototype.
- Payments are real.
- Certificates are legally valid.
- Information comes from municipal systems.

When necessary, use clear labels such as:

```

DEMO

```

or:

> **Prototipo demostrativo**

---

# Simulated Processes

Any simulated process must be visually identifiable without destroying the experience.

Examples:

```

Pago DEMO

```

```

Certificado de demostración

```

```

Datos simulados

```

The user should never confuse a simulated action with a real municipal transaction.

---

# Loading States

Loading states should explain what is happening.

Avoid:

```

Loading...

```

Prefer:

> **Estamos procesando tu solicitud**

or:

> **Estamos preparando tu certificado**

The loading state should reduce uncertainty.

Never use infinite decorative animations.

---

# Animations

Animations should be subtle and functional.

Duration:

```

150ms
200ms
250ms

```

Timing:

```

ease-out

```

Allowed:

- Fade
- Slide
- Opacity
- Scale
- Color transitions

Use animation primarily to communicate:

- Navigation between steps
- State changes
- Completion
- Loading

Never use:

- Bounce
- Rotation
- Excessive zoom
- Decorative motion
- Infinite animations

---

# Transitions

Interactive elements should use:

```

transition-colors
duration-200
ease-out

```

Use:

```

transition-all

```

only when multiple properties actually need to transition.

Do not animate elements simply because they can be animated.

---

# Hover States

Every interactive component should provide clear feedback.

Prefer:

- Color changes
- Background changes
- Small elevation changes

Never move buttons or controls significantly.

Important:

Hover must never be the only indication of an interaction because the primary device may be a phone.

---

# Touch Targets

All interactive controls must have a minimum target of:

```

44px × 44px

```

Prefer:

```

min-h-12

```

for important controls.

The interface must be comfortable on inexpensive phones and older devices.

---

# Mobile First

Elén is designed mobile-first.

The primary experience should be optimized for:

- Smartphones
- Touch interaction
- Small screens
- Vertical scrolling

Desktop is an enhancement of the mobile experience.

Never design desktop first and simply shrink it for mobile.

---

# Responsive Design

Primary breakpoints:

- `sm`
- `md`
- `lg`
- `xl`

Never hide essential functionality on mobile.

On small screens:

- Forms become single-column.
- Primary actions become full-width.
- Content remains readable.
- Navigation becomes minimal.
- Cards use comfortable but reduced padding.

---

# Density

Elén must feel light.

Always prioritize:

> **Clarity > Information density**

Never attempt to show every piece of information at once.

If information is not required for the current action, defer it until later.

---

# Accessibility

Every component must support:

- Keyboard navigation
- Visible focus states
- WCAG AA contrast
- Minimum 44px touch targets
- Semantic HTML
- Visible form labels
- Descriptive error messages
- Meaningful button labels
- Reduced-motion support

Never communicate an important state exclusively through color.

For example:

Bad:

```

green = success
red = error

```

Better:

```

✓ Solicitud completada

```

and:

```

⚠ Revisa tu información

```

---

# Content Hierarchy

The interface should have a clear hierarchy:

```

What is happening?
        ↓
What do I need to know?
        ↓
What do I need to do?
        ↓
What happens next?

```

Never reverse this hierarchy by presenting controls before explaining the task.

---

# Information Disclosure

Show information progressively.

Do not expose:

- Technical details
- Internal identifiers
- System statuses
- Integration information
- Infrastructure information

unless they are relevant to the citizen.

The user should see the **result of the technology**, not the technology itself.

---

# Desktop Layout

On desktop, avoid filling the entire screen unnecessarily.

A guided process should remain visually focused.

Recommended:

```

max-w-2xl

```

for the primary workflow.

Large screens should provide more whitespace, not more information.

---

# Empty States

Empty states must explain what the user can do.

Never show:

```

No data

```

Prefer:

> **Todavía no tienes solicitudes**

> Cuando realices una solicitud, aparecerá aquí.

If there is an action:

```

Realizar una solicitud

```

---

# Tables

Tables should only be used when they genuinely improve comprehension.

Do not use tables simply because the underlying information is structured.

For inexperienced users, prefer:

- Cards
- Lists
- Summaries

When a table is necessary:

- Use generous row height.
- Use clear headers.
- Avoid heavy grid lines.
- Use subtle hover states.

---

# Notifications

Notifications should be concise.

They should communicate:

```

What happened?

```

and, when necessary:

```

What should I do?

```

Never display technical system messages.

---

# Photography and Decorative Elements

Photography is **not a core visual element of Elén**.

Do not use decorative photography simply to make screens look more attractive.

Images should only be used when they provide meaningful context.

Avoid:

- Decorative stock photography
- Large hero photographs
- Unnecessary illustrations
- Decorative gradients
- Visual noise

The citizen's task is more important than visual decoration.

---

# Visual Tone

The visual tone should be:

- Calm
- Friendly
- Institutional
- Modern
- Familiar
- Trustworthy

Avoid being:

- Corporate
- Futuristic
- Technical
- Luxurious
- Playful
- Overly governmental
- Visually complex

---

# Demo vs Real System

The visual design must always respect the current scope of Elén.

The prototype is:

> **An interactive demonstration of a possible citizen experience.**

It is not:

> **A municipal information system.**

Do not design features that imply real integrations unless they are explicitly labeled as simulated.

---

# Technical Simplicity

The UI should not require complex frontend architecture merely to achieve visual effects.

Prefer:

- Simple Tailwind utilities
- Reusable components
- Simple transitions
- Semantic HTML
- Minimal JavaScript
- Static content where possible

Do not introduce:

- Complex animation systems
- Heavy UI libraries
- Unnecessary dependencies
- Complex state management

The prototype should remain easy to modify.

---

# Golden Rule

Before generating any interface for Elén, ask:

- Can a person unfamiliar with computer systems understand this screen immediately?
- Is it obvious what the user should do?
- Is there only one primary action?
- Does the language sound like a person speaking to a citizen?
- Is the most important information visible within a few seconds?
- Could any element be removed without reducing understanding?
- Is the interface comfortable on a phone?
- Are simulated features clearly identified?
- Does the interface feel trustworthy without pretending to be an official GAD system?
- Is the technology invisible behind the experience?

If the answer is **No**, simplify the interface before considering it complete.

---

# Core Principle

Above all else:

> **Elén should not teach the citizen how to use a computer system. Elén should teach the citizen cómo realizar el trámite.**
