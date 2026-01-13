export function Footer() {
  return (
    <footer className="relative w-full border-t border-[#2a2a2a] bg-[#0a0a0a]">
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />

      <div className="container mx-auto max-w-7xl px-6 md:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left side - Book info */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#d4af37]/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-[#d4af37]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 2L14 6.5V17.5L19 13V2M6.5 5C4.55 5 2.45 5.4 1 6.5V21.16C1 21.41 1.25 21.66 1.5 21.66C1.6 21.66 1.65 21.59 1.75 21.59C3.1 20.94 5.05 20.5 6.5 20.5C8.45 20.5 10.55 20.9 12 22C13.35 21.15 15.8 20.5 17.5 20.5C19.15 20.5 20.85 20.81 22.25 21.56C22.35 21.61 22.4 21.59 22.5 21.59C22.75 21.59 23 21.34 23 21.09V6.5C22.4 6.05 21.75 5.75 21 5.5V19C19.9 18.65 18.7 18.5 17.5 18.5C15.8 18.5 13.35 19.15 12 20V6.5C10.55 5.4 8.45 5 6.5 5Z"/>
              </svg>
            </div>
            <div className="text-center md:text-left">
              <p className="text-sm text-[#a3a3a3]">
                Basado en <span className="text-[#f5f5f0] font-medium">Las 48 Leyes del Poder</span>
              </p>
              <p className="text-xs text-[#6b6b6b]">por Robert Greene</p>
            </div>
          </div>

          {/* Center - Crown icon */}
          <div className="hidden md:block">
            <svg className="w-6 h-6 text-[#d4af37]/30" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2.5 19h19v2h-19v-2zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06l-2.5.67-2.73-5.45c-.36-.72-1.27-.96-1.98-.54l-.03.02-1 .63-1-.63-.03-.02c-.71-.42-1.62-.18-1.98.54l-2.73 5.45-2.5-.67c-.8-.22-1.63.26-1.84 1.06-.21.8.22 1.63 1.02 1.87l4.01 1.2.99 3.97h10l.99-3.97 4.01-1.2c.8-.24 1.23-1.07 1.02-1.87z"/>
            </svg>
          </div>

          {/* Right side - Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-[#6b6b6b]">
              © {new Date().getFullYear()} Power Laws
            </p>
            <p className="text-xs text-[#4a4a4a] mt-1">
              Proyecto educativo
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-10 pt-6 border-t border-[#1a1a1a] text-center">
          <p className="text-xs text-[#4a4a4a] max-w-xl mx-auto">
            Este es un proyecto educativo e interactivo. Todos los derechos del libro original
            "The 48 Laws of Power" pertenecen a Robert Greene y su editorial.
          </p>
        </div>
      </div>
    </footer>
  )
}
