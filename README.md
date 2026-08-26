# Capuchas, orejas y detalles — Landing Page

Landing page de alta conversión para el mini curso **"Capuchas, orejas y detalles: tu primer proyecto de cosplay amigable"** de Moka Torota (El Taller de Moka).

Construida como una app de una sola página con 16 secciones fijas, un módulo de urgencia dinámico (escalera de precios por ventas) y un simulador de social proof en vivo.

## Stack técnico

- [Next.js](https://nextjs.org/) 16 (App Router, Turbopack)
- [React](https://react.dev/) 19
- [Three.js](https://threejs.org/) + [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) — fondo animado de partículas en Hero y CTAs
- CSS plano (sin frameworks de estilos) — paleta y estilos en `app/globals.css`

## Requisitos

- Node.js **20.9 o superior** (recomendado usar la versión LTS más reciente)
- npm (viene incluido con Node)

## Cómo levantarlo en local

```bash
# 1. Clonar el repositorio
git clone <URL-de-este-repositorio>
cd React-LP-Mokita

# 2. Instalar dependencias
npm install

# 3. Levantar el servidor de desarrollo
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador. Los cambios en el código se reflejan automáticamente (hot reload).

## Otros comandos

```bash
npm run build   # build de producción
npm run start   # levanta el build de producción (requiere correr build antes)
npm run lint    # linting
```

## Estructura del proyecto

```
app/                     App Router de Next.js: layout, página principal y estilos globales
components/
  sections/              Las 16 secciones de la landing, en orden (01Hero.jsx ... 16FinalCta.jsx)
  SalesProvider.jsx       Estado global del contador de "ventas" (alimenta la barra de urgencia)
  UrgencyBar.jsx          Módulo de urgencia (métricas, barra de progreso, tabla de precios)
  SocialProofToast.jsx    Notificación flotante de "compra reciente" (social proof simulado)
  OfferStack.jsx          Bloque de oferta reutilizado en las secciones de precio/CTA
  ThreeBackground.jsx     Fondo animado con Three.js (partículas)
lib/
  content.js              Contenido de módulos, bonos y FAQ del curso
  pricing.js               Lógica de la escalera de precios
  socialProof.js            Lista de nombres/países para el social proof simulado
```

## Pendientes antes de publicar

- **Enlace de compra:** todos los botones de CTA apuntan a `#comprar` como placeholder. Reemplazar `CTA_HREF` en `lib/content.js` por el enlace real de checkout de Hotmart.
- **Testimonios:** la sección 10 (`components/sections/10Testimonials.jsx`) tiene 8 espacios reservados en formato masonry. Reemplazar por las imágenes reales de testimonios cuando estén disponibles.

## Notas sobre el módulo de urgencia

El contador de ventas y la barra de urgencia son **simulados** (no se conectan a Hotmart ni a ninguna base de datos real): existen para transmitir escasez de forma consistente con la política del programa, pero el precio no cambia realmente en el backend. La lógica vive en `lib/pricing.js` y `components/SalesProvider.jsx`.
