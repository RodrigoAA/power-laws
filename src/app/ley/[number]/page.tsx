import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { laws, categoryLabels, categoryColors } from '@/data/laws'

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

export default async function LawPage({ params }: LawPageProps) {
  const { number } = await params
  const lawNumber = parseInt(number, 10)
  const law = laws.find((l) => l.number === lawNumber)

  if (!law) {
    notFound()
  }

  const colors = categoryColors[law.category]
  const prevLaw = laws.find((l) => l.number === lawNumber - 1)
  const nextLaw = laws.find((l) => l.number === lawNumber + 1)

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
      {/* Back link */}
      <Link
        href="/"
        className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Volver a todas las leyes
      </Link>

      {/* Law header */}
      <header className="mb-8">
        {/* Number and category */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
            {law.number}
          </div>
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${colors.bg} ${colors.text} ${colors.border} border`}>
            {categoryLabels[law.category]}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {law.title}
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-500 italic border-l-4 border-amber-400 pl-4">
          "{law.subtitle}"
        </p>
      </header>

      {/* Main content */}
      <article className="prose prose-lg max-w-none">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Descripción
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            {law.description}
          </p>
        </div>
      </article>

      {/* Navigation */}
      <nav className="mt-12 flex justify-between items-center pt-8 border-t border-gray-200">
        {prevLaw ? (
          <Link
            href={`/ley/${prevLaw.number}`}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <div className="text-left">
              <div className="text-xs text-gray-400">Ley {prevLaw.number}</div>
              <div className="text-sm font-medium line-clamp-1 max-w-[200px]">{prevLaw.title}</div>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {nextLaw ? (
          <Link
            href={`/ley/${nextLaw.number}`}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group text-right"
          >
            <div>
              <div className="text-xs text-gray-400">Ley {nextLaw.number}</div>
              <div className="text-sm font-medium line-clamp-1 max-w-[200px]">{nextLaw.title}</div>
            </div>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </div>
  )
}
