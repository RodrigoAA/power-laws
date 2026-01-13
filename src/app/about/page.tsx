import Link from 'next/link'

export const metadata = {
  title: 'Acerca de | Las 48 Leyes del Poder',
  description: 'Proyecto de aprendizaje sobre Las 48 Leyes del Poder de Robert Greene.',
}

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#d4af37]/3 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#d4af37]/3 blur-[120px] rounded-full" />

      <div className="relative container mx-auto max-w-4xl px-6 md:px-8 py-12 md:py-20">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#6b6b6b] hover:text-[#d4af37] transition-colors mb-12 group"
        >
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          <span>Volver al inicio</span>
        </Link>

        {/* Header */}
        <header className="mb-12 animate-fade-in-up">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#f5f5f0] mb-6 leading-[1.1]">
            Acerca de este proyecto
          </h1>
          <div className="relative pl-6 border-l-2 border-[#d4af37]">
            <p className="text-xl md:text-2xl text-[#a3a3a3] italic leading-relaxed">
              Un experimento de aprendizaje y exploración tecnológica
            </p>
          </div>
        </header>

        {/* Content */}
        <div className="space-y-8">
          {/* About the project */}
          <section className="relative rounded-lg border border-[#2a2a2a] bg-[#141414] p-8 md:p-12 overflow-hidden animate-fade-in-up animate-delay-100">
            <div className="absolute top-0 right-0 w-32 h-32">
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-[#d4af37]/10 to-transparent" />
            </div>

            <h2 className="font-display text-sm uppercase tracking-[0.2em] text-[#d4af37] mb-6">
              El Proyecto
            </h2>

            <div className="space-y-4 text-lg text-[#a3a3a3] leading-relaxed">
              <p>
                Este sitio web es un <span className="text-[#f5f5f0] font-medium">proyecto personal de aprendizaje</span> que desarrollé para explorar y practicar tecnologías modernas de desarrollo web.
              </p>
              <p>
                La idea surgió de mi interés por el libro <span className="text-[#f5f5f0] font-medium">&quot;Las 48 Leyes del Poder&quot;</span> de Robert Greene, y decidí usarlo como base para crear algo visual e interactivo mientras aprendía.
              </p>
            </div>
          </section>

          {/* Technologies */}
          <section className="relative rounded-lg border border-[#2a2a2a] bg-[#141414] p-8 md:p-12 overflow-hidden animate-fade-in-up animate-delay-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                </svg>
              </div>
              <h2 className="font-display text-sm uppercase tracking-[0.2em] text-blue-400">
                Tecnologías Utilizadas
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { name: 'Next.js 16', desc: 'Framework React' },
                { name: 'TypeScript', desc: 'Tipado estático' },
                { name: 'Tailwind CSS', desc: 'Estilos utility-first' },
                { name: 'Vercel', desc: 'Deployment' },
                { name: 'Claude', desc: 'AI Assistant' },
                { name: 'GitHub', desc: 'Control de versiones' },
              ].map((tech) => (
                <div key={tech.name} className="p-4 rounded-lg bg-[#0a0a0a] border border-[#2a2a2a]">
                  <p className="text-[#f5f5f0] font-medium">{tech.name}</p>
                  <p className="text-sm text-[#6b6b6b]">{tech.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Learning goals */}
          <section className="relative rounded-lg border border-[#2a2a2a] bg-[#141414] p-8 md:p-12 overflow-hidden animate-fade-in-up animate-delay-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                </svg>
              </div>
              <h2 className="font-display text-sm uppercase tracking-[0.2em] text-emerald-400">
                Lo que aprendí
              </h2>
            </div>

            <ul className="space-y-3 text-[#a3a3a3]">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#d4af37] mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <span>App Router de Next.js y generación estática de páginas</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#d4af37] mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <span>Diseño UI/UX con Tailwind CSS y animaciones CSS</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#d4af37] mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <span>Deployment continuo con Vercel y GitHub</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#d4af37] mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <span>Programación asistida por IA con Claude</span>
              </li>
            </ul>
          </section>

          {/* Author */}
          <section className="relative rounded-lg border border-[#d4af37]/20 bg-[#141414] p-8 md:p-12 overflow-hidden animate-fade-in-up animate-delay-400">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#d4af37] to-[#b8962e] flex items-center justify-center text-[#0a0a0a] font-display text-3xl font-bold shadow-lg shadow-[#d4af37]/20">
                RA
              </div>

              <div className="flex-1 text-center md:text-left">
                <h2 className="font-display text-2xl font-bold text-[#f5f5f0] mb-2">
                  Rodrigo Avilés
                </h2>
                <p className="text-[#a3a3a3] mb-4">
                  Aprendiendo y construyendo cosas en público.
                </p>

                <a
                  href="https://twitter.com/RodrigoAviles_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0a0a0a] border border-[#2a2a2a] text-[#f5f5f0] hover:border-[#1DA1F2] hover:text-[#1DA1F2] transition-all group"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <span className="font-medium">@RodrigoAviles_</span>
                </a>
              </div>
            </div>
          </section>

          {/* Disclaimer */}
          <section className="text-center py-8 animate-fade-in-up animate-delay-500">
            <div className="flex items-center gap-4 justify-center mb-4">
              <div className="flex-1 max-w-[100px] h-[1px] bg-gradient-to-r from-transparent to-[#2a2a2a]" />
              <svg className="w-5 h-5 text-[#6b6b6b]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
              </svg>
              <div className="flex-1 max-w-[100px] h-[1px] bg-gradient-to-l from-transparent to-[#2a2a2a]" />
            </div>
            <p className="text-sm text-[#6b6b6b] max-w-xl mx-auto">
              Este es un proyecto educativo sin fines comerciales. Todo el contenido del libro
              &quot;The 48 Laws of Power&quot; pertenece a Robert Greene y su editorial.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
