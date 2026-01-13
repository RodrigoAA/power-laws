# Las 48 Leyes del Poder - Web Interactiva

Una guía visual e interactiva de las 48 Leyes del Poder de Robert Greene, inspirada en el diseño de [lawsofux.com](https://lawsofux.com/).

## 🎯 Estado del Proyecto

**Fase Actual:** Fase 1 completada ✅

### ✅ Completado (Fase 1: Fundación)

- [x] Proyecto Next.js 15+ inicializado con TypeScript
- [x] Tailwind CSS 4 configurado con paleta de colores personalizada
- [x] IBM Plex Sans como fuente principal
- [x] Configuración de export estático para deployment
- [x] Header con navegación sticky
- [x] Footer con créditos
- [x] Estructura de carpetas completa
- [x] Utilidades base (cn para class merging)

### 📋 Pendiente

**Fase 2: Estructura de Datos (Siguiente)**
- [ ] Crear tipos TypeScript (src/types/law.ts)
- [ ] Extraer contenido de 10 leyes del PDF
- [ ] Mapear 48 iconos Lucide
- [ ] Implementar helper functions (getLawBySlug, etc.)

**Fase 3: Homepage y Cards**
- [ ] Componente LawCard
- [ ] Grid responsive
- [ ] Animaciones fade-in

**Fase 4: Páginas de Detalle**
- [ ] Ruta dinámica /laws/[slug]
- [ ] Componentes de detalle (Hero, Takeaways, Examples, etc.)
- [ ] Navegación prev/next

**Fase 5-8:** Ver plan completo en `.claude/plans/typed-wondering-cocke.md`

## 🚀 Inicio Rápido

### Prerequisitos

- Node.js 18+
- npm o yarn

### Instalación

```bash
cd power-laws
npm install
```

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Build para Producción

```bash
npm run build
```

Esto generará una salida estática en el directorio `out/` lista para desplegar en Vercel, Netlify, o cualquier hosting estático.

## 📁 Estructura del Proyecto

```
power-laws/
├── src/
│   ├── app/                    # App Router de Next.js
│   │   ├── layout.tsx          # Layout root con Header/Footer
│   │   ├── page.tsx            # Homepage
│   │   ├── globals.css         # Estilos globales
│   │   ├── laws/[slug]/        # Páginas dinámicas (pendiente)
│   │   └── about/              # Página About (pendiente)
│   │
│   ├── components/
│   │   ├── layout/             # Header, Footer, Navigation
│   │   ├── cards/              # LawCard, LawCardGrid (pendiente)
│   │   ├── law-detail/         # Componentes de página individual (pendiente)
│   │   ├── ui/                 # Componentes UI reutilizables (pendiente)
│   │   └── seo/                # StructuredData (pendiente)
│   │
│   ├── data/
│   │   ├── laws.ts             # Datos de las 48 leyes (pendiente)
│   │   └── law-icons.ts        # Mapeo de iconos (pendiente)
│   │
│   ├── types/
│   │   └── law.ts              # Interface Law (pendiente)
│   │
│   ├── lib/
│   │   ├── utils.ts            # Utilidades (cn function)
│   │   └── laws.ts             # Helper functions (pendiente)
│   │
│   └── styles/
│       └── animations.css      # Animaciones personalizadas (pendiente)
│
├── public/                     # Assets estáticos
├── next.config.ts              # Configuración Next.js (static export)
├── tailwind.config.ts          # Configuración Tailwind (colores power-gold/navy)
└── tsconfig.json               # Configuración TypeScript
```

## 🎨 Sistema de Diseño

### Paleta de Colores

- **Power Gold**: `#F59E0B` (500) - Color principal de acento
- **Power Navy**: `#3B82F6` (500) - Color secundario
- **Background**: `#FAFAF9` - Fondo claro cálido
- **Foreground**: `#1A1A1A` - Texto principal

### Tipografía

- **Fuente**: IBM Plex Sans (400, 500, 600, 700)
- **Headings**: Font-weight 700, tracking tight
- **Body**: Font-weight 400, line-height 1.75

### Inspiración de Diseño

El diseño está inspirado en [Laws of UX](https://lawsofux.com/) con:
- Grid limpio y responsive (3/2/1 columnas)
- Cards con hover effects sutiles
- Navegación sticky
- Animaciones suaves
- Performance-first approach

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 16.1.1 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS 4
- **Iconos**: Lucide React
- **Deployment**: Configurado para Vercel (static export)

## 📚 Documentación del Plan

El plan completo de implementación con todas las fases detalladas está en:
```
.claude/plans/typed-wondering-cocke.md
```

Este documento incluye:
- 8 fases de implementación detalladas
- Estructura de datos mejorada
- Estrategia de contenido para las 48 leyes
- Checklists de verificación
- Guía de deployment

## 🎯 Próximos Pasos

1. **Extraer Contenido del PDF**
   - Leer "The 48 Laws of Power" PDF
   - Extraer las primeras 10 leyes con:
     - Título y descripción breve
     - 3-5 key takeaways
     - 1-2 ejemplos históricos
     - Transgresión
     - Interpretación moderna

2. **Crear Estructura de Datos**
   - Definir interface `Law` en TypeScript
   - Mapear 48 iconos Lucide apropiados
   - Implementar helpers (getLawBySlug, etc.)

3. **Desarrollar Componentes**
   - LawCard para el grid
   - Páginas individuales de leyes
   - Sistema de navegación

## 📝 Notas de Desarrollo

### Configuración de Tailwind CSS 4

Este proyecto usa Tailwind CSS v4 que requiere `@tailwindcss/postcss` en lugar del plugin tradicional. Ya está configurado en `postcss.config.mjs`.

### Export Estático

El proyecto está configurado para generar un sitio completamente estático:
- `output: 'export'` en `next.config.ts`
- `images.unoptimized: true` para compatibilidad
- Todas las 48 páginas se generarán en build time

### Fuentes

IBM Plex Sans se carga desde Google Fonts con `display: swap` para evitar FOIT (Flash of Invisible Text).

## 🤝 Contribución

Este es un proyecto educativo. El contenido original pertenece a Robert Greene.

## 📄 Licencia

MIT

---

**Última actualización:** 2026-01-13 - Fase 1 completada
