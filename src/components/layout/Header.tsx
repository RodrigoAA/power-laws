import Link from 'next/link'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#2a2a2a] bg-[#0a0a0a]/95 backdrop-blur-md">
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3 transition-all hover:opacity-90">
          {/* Crown icon - custom SVG */}
          <div className="relative">
            <svg
              className="h-8 w-8 text-[#d4af37] transition-transform duration-300 group-hover:scale-110"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M2.5 19h19v2h-19v-2zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06l-2.5.67-2.73-5.45c-.36-.72-1.27-.96-1.98-.54l-.03.02-1 .63-1-.63-.03-.02c-.71-.42-1.62-.18-1.98.54l-2.73 5.45-2.5-.67c-.8-.22-1.63.26-1.84 1.06-.21.8.22 1.63 1.02 1.87l4.01 1.2.99 3.97h10l.99-3.97 4.01-1.2c.8-.24 1.23-1.07 1.02-1.87z"/>
            </svg>
            {/* Subtle glow effect */}
            <div className="absolute inset-0 blur-lg bg-[#d4af37]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <div className="flex flex-col">
            <span className="font-display text-lg font-semibold tracking-tight text-[#f5f5f0]">
              Las 48 Leyes
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#d4af37]">
              del Poder
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <Link
            href="/"
            className="relative text-sm font-medium text-[#a3a3a3] transition-colors hover:text-[#f5f5f0] after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-0 after:bg-[#d4af37] after:transition-all hover:after:w-full"
          >
            Inicio
          </Link>
          <Link
            href="/about"
            className="relative text-sm font-medium text-[#a3a3a3] transition-colors hover:text-[#f5f5f0] after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-0 after:bg-[#d4af37] after:transition-all hover:after:w-full"
          >
            Acerca de
          </Link>
        </nav>
      </div>

      {/* Decorative gold line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />

      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:bg-[#d4af37] focus:px-4 focus:py-2 focus:text-[#0a0a0a] focus:font-medium focus:outline-none"
      >
        Saltar al contenido principal
      </a>
    </header>
  )
}
