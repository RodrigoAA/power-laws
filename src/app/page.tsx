import { laws } from '@/data/laws'
import { LawCard } from '@/components/LawCard'

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-[#2a2a2a]">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #d4af37 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Gold gradient accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#d4af37]/5 blur-[120px] rounded-full" />

        <div className="relative container mx-auto max-w-7xl px-6 md:px-8 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Eyebrow */}
            <p className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#d4af37] mb-6 animate-fade-in-up">
              <span className="w-8 h-[1px] bg-[#d4af37]" />
              Robert Greene
              <span className="w-8 h-[1px] bg-[#d4af37]" />
            </p>

            {/* Main title */}
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#f5f5f0] mb-6 animate-fade-in-up animate-delay-100">
              Las 48 Leyes
              <span className="block text-gradient-gold">del Poder</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-[#a3a3a3] max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up animate-delay-200">
              Una guía visual e interactiva de las leyes atemporales que han definido
              el poder a través de 3000 años de historia humana
            </p>

            {/* Stats */}
            <div className="flex justify-center gap-12 md:gap-16 animate-fade-in-up animate-delay-300">
              <div className="text-center">
                <div className="font-display text-4xl md:text-5xl font-bold text-[#d4af37]">48</div>
                <div className="text-xs uppercase tracking-[0.2em] text-[#6b6b6b] mt-1">Leyes</div>
              </div>
              <div className="w-[1px] bg-[#2a2a2a]" />
              <div className="text-center">
                <div className="font-display text-4xl md:text-5xl font-bold text-[#d4af37]">6</div>
                <div className="text-xs uppercase tracking-[0.2em] text-[#6b6b6b] mt-1">Categorías</div>
              </div>
              <div className="w-[1px] bg-[#2a2a2a]" />
              <div className="text-center">
                <div className="font-display text-4xl md:text-5xl font-bold text-[#d4af37]">3000+</div>
                <div className="text-xs uppercase tracking-[0.2em] text-[#6b6b6b] mt-1">Años</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />
      </section>

      {/* Laws Grid Section */}
      <section className="container mx-auto max-w-7xl px-6 md:px-8 py-16 md:py-24">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-[#f5f5f0]">
            Todas las Leyes
          </h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-[#2a2a2a] to-transparent" />
          <span className="text-sm text-[#6b6b6b]">{laws.length} leyes</span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {laws.map((law, index) => (
            <LawCard key={law.number} law={law} index={index} />
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-[#2a2a2a]">
        <div className="container mx-auto max-w-7xl px-6 md:px-8 py-16 md:py-20">
          <div className="text-center">
            <p className="font-display text-xl md:text-2xl text-[#a3a3a3] italic">
              "El poder es el más intoxicante de todos los afrodisíacos"
            </p>
            <p className="text-sm text-[#6b6b6b] mt-3">— Henry Kissinger</p>
          </div>
        </div>
      </section>
    </div>
  )
}
