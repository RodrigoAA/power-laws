import Link from 'next/link'
import { Crown } from 'lucide-react'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 transition-opacity hover:opacity-80">
          <Crown className="h-6 w-6 text-power-gold-500" />
          <span className="text-lg font-bold text-gray-900">
            Las 48 Leyes del Poder
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center space-x-6">
          <Link
            href="/"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-power-gold-500"
          >
            Inicio
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-power-gold-500"
          >
            Acerca de
          </Link>
        </nav>
      </div>

      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-power-gold-500 focus:px-4 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-power-gold-600"
      >
        Saltar al contenido principal
      </a>
    </header>
  )
}
