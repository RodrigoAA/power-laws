import { notFound } from 'next/navigation'
import Link from 'next/link'
import { laws, categoryLabels } from '@/data/laws'

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
          {/* Large decorative number */}
          <div className="relative mb-8">
            <span className="font-display text-[12rem] md:text-[16rem] font-black text-[#141414] leading-none select-none">
              {law.number.toString().padStart(2, '0')}
            </span>
            <div className="absolute top-1/2 left-0 -translate-y-1/2 flex items-center gap-4">
              <span className="flex items-center justify-center w-16 h-16 rounded-full bg-[#d4af37] text-[#0a0a0a] font-display font-bold text-2xl shadow-lg shadow-[#d4af37]/20">
                {law.number}
              </span>
              <span className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-medium border ${categoryStyles[law.category]}`}>
                {categoryLabels[law.category]}
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#f5f5f0] mb-6 leading-[1.1] animate-fade-in-up animate-delay-100">
            {law.title}
          </h1>

          {/* Subtitle */}
          <div className="relative pl-6 border-l-2 border-[#d4af37] animate-fade-in-up animate-delay-200">
            <p className="text-xl md:text-2xl text-[#a3a3a3] italic leading-relaxed">
              "{law.subtitle}"
            </p>
          </div>
        </header>

        {/* Main content */}
        <article className="animate-fade-in-up animate-delay-300">
          <div className="relative rounded-lg border border-[#2a2a2a] bg-[#141414] p-8 md:p-12 overflow-hidden">
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

            {/* Decorative separator */}
            <div className="flex items-center gap-4 my-10">
              <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-[#2a2a2a]" />
              <svg className="w-6 h-6 text-[#d4af37]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
              </svg>
              <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-[#2a2a2a]" />
            </div>

            {/* Key insight */}
            <div className="bg-[#0a0a0a] rounded-lg p-6 border border-[#2a2a2a]">
              <h3 className="font-display text-sm uppercase tracking-[0.2em] text-[#6b6b6b] mb-3">
                Reflexión Clave
              </h3>
              <p className="text-[#a3a3a3] italic">
                El dominio de esta ley requiere práctica constante y una observación aguda de las dinámicas de poder en cada interacción.
              </p>
            </div>
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
