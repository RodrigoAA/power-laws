import Link from 'next/link'
import { Law, categoryLabels, categoryColors } from '@/data/laws'

interface LawCardProps {
  law: Law
}

export function LawCard({ law }: LawCardProps) {
  const colors = categoryColors[law.category]

  return (
    <Link
      href={`/ley/${law.number}`}
      className="group block"
    >
      <article className="relative h-full bg-white rounded-xl shadow-sm border border-gray-200 p-6 transition-all duration-300 hover:shadow-lg hover:border-gray-300 hover:-translate-y-1">
        {/* Number badge */}
        <div className="absolute -top-3 -left-3 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
          {law.number}
        </div>

        {/* Category badge */}
        <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors.bg} ${colors.text} ${colors.border} border mb-3`}>
          {categoryLabels[law.category]}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors line-clamp-2">
          {law.title}
        </h3>

        {/* Subtitle */}
        <p className="text-sm text-gray-500 italic mb-3 line-clamp-2">
          "{law.subtitle}"
        </p>

        {/* Description preview */}
        <p className="text-sm text-gray-600 line-clamp-3">
          {law.description}
        </p>

        {/* Read more indicator */}
        <div className="mt-4 flex items-center text-sm font-medium text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity">
          Leer más
          <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </article>
    </Link>
  )
}
