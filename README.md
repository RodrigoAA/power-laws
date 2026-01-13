# Las 48 Leyes del Poder - Web Interactiva

Una guía visual e interactiva de las 48 Leyes del Poder de Robert Greene, con un diseño editorial de lujo y contenido enfocado en aplicaciones profesionales.

**Live:** [power-laws.vercel.app](https://power-laws.vercel.app/)

## Estado del Proyecto

**Completado** - Todas las funcionalidades implementadas y desplegadas.

### Funcionalidades

- [x] Las 48 leyes con contenido completo
- [x] Ilustraciones SVG únicas para cada ley
- [x] Ejemplos históricos detallados
- [x] Aplicaciones modernas enfocadas en el ámbito profesional
- [x] Sección "La Reversa" para cada ley
- [x] Diseño editorial de lujo (tema oscuro con acentos dorados)
- [x] Navegación entre leyes (anterior/siguiente)
- [x] Categorización por tipo (Reputación, Estrategia, Engaño, Relaciones, Timing, Autodominio)
- [x] Página "Acerca de" con información del proyecto
- [x] SEO optimizado con metadatos dinámicos
- [x] Sitio completamente estático (SSG)
- [x] Desplegado en Vercel con CI/CD

## Inicio Rápido

### Prerequisitos

- Node.js 18+
- npm

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

Genera una salida estática en el directorio `out/` lista para desplegar.

## Estructura del Proyecto

```
power-laws/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout root con Header/Footer
│   │   ├── page.tsx            # Homepage con grid de leyes
│   │   ├── globals.css         # Estilos globales y animaciones
│   │   ├── ley/[number]/       # Páginas dinámicas de cada ley
│   │   └── about/              # Página Acerca de
│   │
│   ├── components/
│   │   ├── Header.tsx          # Navegación principal
│   │   ├── Footer.tsx          # Pie de página
│   │   ├── LawCard.tsx         # Tarjeta de ley para el grid
│   │   └── LawIllustration.tsx # 48 ilustraciones SVG
│   │
│   ├── data/
│   │   └── laws.ts             # Datos completos de las 48 leyes
│   │
│   └── lib/
│       └── utils.ts            # Utilidades (cn function)
│
├── public/                     # Assets estáticos (favicon, icons)
├── next.config.ts              # Configuración Next.js (static export)
└── tsconfig.json               # Configuración TypeScript
```

## Sistema de Diseño

### Paleta de Colores

- **Dorado**: `#d4af37` - Color principal de acento
- **Background**: `#0a0a0a` - Fondo oscuro
- **Surface**: `#141414` - Tarjetas y contenedores
- **Border**: `#2a2a2a` - Bordes sutiles
- **Text Primary**: `#f5f5f0` - Texto principal
- **Text Secondary**: `#a3a3a3` - Texto secundario

### Tipografía

- **Display**: Cormorant Garamond (serif) - Títulos
- **Body**: Inter (sans-serif) - Texto general

### Categorías y Colores

| Categoría | Color |
|-----------|-------|
| Reputación | Amber |
| Estrategia | Blue |
| Engaño | Purple |
| Relaciones | Emerald |
| Timing | Rose |
| Autodominio | Slate |

## Stack Tecnológico

- **Framework**: Next.js 16.1.1 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS 4
- **Deployment**: Vercel (static export)
- **AI Assistant**: Claude (desarrollo asistido)

## Contenido

Cada ley incluye:

1. **Título y Subtítulo**: Nombre de la ley y cita representativa
2. **La Ley**: Descripción completa del principio
3. **Ejemplo Histórico**: Historia real que ilustra la ley
4. **Aplicación Moderna**: Cómo aplicar la ley en el ámbito profesional
5. **La Reversa**: Cuándo NO aplicar la ley o sus limitaciones

### Enfoque Profesional

Todas las "Aplicaciones Modernas" están orientadas al mundo laboral:
- Negociaciones salariales y de contratos
- Política de oficina y relaciones con superiores
- Liderazgo y gestión de equipos
- Presentaciones ejecutivas
- Desarrollo de carrera
- Networking profesional

## Deployment

El proyecto está configurado para deployment automático en Vercel:

1. Push a `main` triggerea un nuevo deploy
2. Vercel detecta Next.js automáticamente
3. Build estático genera las 54 páginas
4. CDN global distribuye el contenido

## Licencia

MIT

Este es un proyecto educativo. El contenido original de "The 48 Laws of Power" pertenece a Robert Greene y su editorial.

---

**Autor**: Rodrigo Avilés ([@RodrigoAviles_](https://twitter.com/RodrigoAviles_))

**Última actualización**: 2026-01-13
