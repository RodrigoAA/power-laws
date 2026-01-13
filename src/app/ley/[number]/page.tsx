import { notFound } from 'next/navigation'
import Link from 'next/link'
import { laws, categoryLabels } from '@/data/laws'
import { LawIllustration } from '@/components/LawIllustration'

interface LawPageProps {
  params: Promise<{ number: string }>
}

export async function generateStaticParams() {
  return laws.map((law) => ({
    number: law.number.toString(),
  }))
}

export async function generateMetadata({ params }: LawPageProps) {
  const { number } = await params
  const lawNumber = parseInt(number, 10)
  const law = laws.find((l) => l.number === lawNumber)

  if (!law) {
    return { title: 'Ley no encontrada' }
  }

  return {
    title: `Ley ${law.number}: ${law.title} | Las 48 Leyes del Poder`,
    description: law.description,
  }
}

const categoryStyles: Record<string, string> = {
  reputation: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  strategy: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  deception: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  relationships: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  timing: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
  'self-mastery': 'bg-slate-400/10 text-slate-300 border-slate-500/20'
}

export default async function LawPage({ params }: LawPageProps) {
  const { number } = await params
  const lawNumber = parseInt(number, 10)
  const law = laws.find((l) => l.number === lawNumber)

  if (!law) {
    notFound()
  }

  const prevLaw = laws.find((l) => l.number === lawNumber - 1)
  const nextLaw = laws.find((l) => l.number === lawNumber + 1)

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
          <span>Volver a todas las leyes</span>
        </Link>

        {/* Law header */}
        <header className="mb-12 animate-fade-in-up">
          {/* Illustration and number */}
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            {/* Illustration */}
            <div className="w-full md:w-64 flex-shrink-0">
              <LawIllustration lawNumber={law.number} className="w-full h-64 md:h-64 rounded-lg shadow-2xl shadow-[#d4af37]/10" />
            </div>

            {/* Number and badges */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <span className="flex items-center justify-center w-16 h-16 rounded-full bg-[#d4af37] text-[#0a0a0a] font-display font-bold text-2xl shadow-lg shadow-[#d4af37]/20">
                  {law.number}
                </span>
                <span className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-medium border ${categoryStyles[law.category]}`}>
                  {categoryLabels[law.category]}
                </span>
              </div>
              <p className="text-sm text-[#6b6b6b] uppercase tracking-widest">
                Ley {law.number} de 48
              </p>
            </div>
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#f5f5f0] mb-6 leading-[1.1] animate-fade-in-up animate-delay-100">
            {law.title}
          </h1>

          {/* Subtitle */}
          <div className="relative pl-6 border-l-2 border-[#d4af37] animate-fade-in-up animate-delay-200">
            <p className="text-xl md:text-2xl text-[#a3a3a3] italic leading-relaxed">
              &quot;{law.subtitle}&quot;
            </p>
          </div>
        </header>

        {/* Main content */}
        <article className="space-y-8">
          {/* La Ley */}
          <div className="relative rounded-lg border border-[#2a2a2a] bg-[#141414] p-8 md:p-12 overflow-hidden animate-fade-in-up animate-delay-300">
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-32 h-32">
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-[#d4af37]/10 to-transparent" />
            </div>

            <h2 className="font-display text-sm uppercase tracking-[0.2em] text-[#d4af37] mb-6">
              La Ley
            </h2>

            <p className="text-lg md:text-xl text-[#f5f5f0] leading-relaxed">
              {law.description}
            </p>
          </div>

          {/* Historical Example */}
          <div className="relative rounded-lg border border-[#2a2a2a] bg-[#141414] p-8 md:p-12 overflow-hidden animate-fade-in-up animate-delay-400">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/>
                </svg>
              </div>
              <h2 className="font-display text-sm uppercase tracking-[0.2em] text-amber-400">
                Ejemplo Histórico
              </h2>
            </div>

            <h3 className="font-display text-2xl md:text-3xl font-bold text-[#f5f5f0] mb-6">
              {law.historicalExample.title}
            </h3>

            <p className="text-[#a3a3a3] leading-relaxed text-lg">
              {law.historicalExample.story}
            </p>
          </div>

          {/* Modern Application */}
          <div className="relative rounded-lg border border-[#2a2a2a] bg-[#141414] p-8 md:p-12 overflow-hidden animate-fade-in-up animate-delay-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <h2 className="font-display text-sm uppercase tracking-[0.2em] text-blue-400">
                Aplicación Moderna
              </h2>
            </div>

            <p className="text-[#f5f5f0] leading-relaxed text-lg">
              {law.modernApplication}
            </p>
          </div>

          {/* Reversal */}
          <div className="relative rounded-lg border border-[#2a2a2a] bg-[#0a0a0a] p-8 md:p-12 overflow-hidden animate-fade-in-up animate-delay-600">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-rose-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                </svg>
              </div>
              <h2 className="font-display text-sm uppercase tracking-[0.2em] text-rose-400">
                La Reversa
              </h2>
            </div>

            <p className="text-[#a3a3a3] leading-relaxed text-lg italic">
              {law.reversal}
            </p>
          </div>

          {/* Key insight */}
          <div className="bg-[#141414] rounded-lg p-8 border border-[#d4af37]/20 animate-fade-in-up animate-delay-700">
            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]/30" />
              <svg className="w-6 h-6 text-[#d4af37]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
              </svg>
              <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]/30" />
            </div>
            <p className="text-center text-[#d4af37] italic text-lg">
              El dominio de esta ley requiere práctica constante y una observación aguda de las dinámicas de poder en cada interacción.
            </p>
          </div>
        </article>

        {/* Navigation */}
        <nav className="mt-16 grid grid-cols-2 gap-4 animate-fade-in-up animate-delay-400">
          {prevLaw ? (
            <Link
              href={`/ley/${prevLaw.number}`}
              className="group flex flex-col gap-2 p-6 rounded-lg border border-[#2a2a2a] bg-[#141414] hover:border-[#d4af37]/30 transition-all"
            >
              <span className="text-xs uppercase tracking-wider text-[#6b6b6b]">
                ← Ley anterior
              </span>
              <span className="font-display text-lg text-[#f5f5f0] group-hover:text-[#d4af37] transition-colors line-clamp-2">
                {prevLaw.number}. {prevLaw.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {nextLaw ? (
            <Link
              href={`/ley/${nextLaw.number}`}
              className="group flex flex-col gap-2 p-6 rounded-lg border border-[#2a2a2a] bg-[#141414] hover:border-[#d4af37]/30 transition-all text-right"
            >
              <span className="text-xs uppercase tracking-wider text-[#6b6b6b]">
                Ley siguiente →
              </span>
              <span className="font-display text-lg text-[#f5f5f0] group-hover:text-[#d4af37] transition-colors line-clamp-2">
                {nextLaw.number}. {nextLaw.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </div>
    </div>
  )
}
