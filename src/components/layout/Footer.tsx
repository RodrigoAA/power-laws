import { Book } from 'lucide-react'

export function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white">
      <div className="container mx-auto max-w-7xl px-4 py-8 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Copyright */}
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Book className="h-4 w-4" />
            <span>
              Basado en <span className="font-semibold">Las 48 Leyes del Poder</span> por Robert Greene
            </span>
          </div>

          {/* Credits */}
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} Power Laws. Todos los derechos reservados.
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-4 text-center text-xs text-gray-500">
          Este es un proyecto educativo. Todos los derechos del libro original pertenecen a Robert Greene.
        </div>
      </div>
    </footer>
  )
}
