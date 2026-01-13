import Link from 'next/link'
import { Law, categoryLabels } from '@/data/laws'
import { LawIllustration } from './LawIllustration'

interface LawCardProps {
  law: Law
  index: number
}

const categoryStyles: Record<Law['category'], string> = {
  reputation: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  strategy: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  deception: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  relationships: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  timing: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
  'self-mastery': 'bg-slate-400/10 text-slate-300 border-slate-500/20'
}

export function LawCard({ law, index }: LawCardProps) {
  const animationDelay = (index % 12) * 50

  return (
    <Link
      href={`/ley/${law.number}`}
      className="group block"
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <article className="relative h-full overflow-hidden rounded-lg border border-[#2a2a2a] bg-[#141414] transition-all duration-500 hover:border-[#d4af37]/30 hover:bg-[#1a1a1a] animate-fade-in-up">
        {/* Illustration */}
        <div className="relative overflow-hidden">
          <LawIllustration lawNumber={law.number} className="w-full h-40 transition-transform duration-500 group-hover:scale-105" />
        </div>

        {/* Content */}
        <div className="relative z-10 p-5">
          {/* Number and category badges */}
          <div className="flex items-center gap-2 mb-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#d4af37] text-[#0a0a0a] font-display font-bold text-sm">
              {law.number}
            </span>
            <span className={`px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-medium border ${categoryStyles[law.category]}`}>
              {categoryLabels[law.category]}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-display text-lg font-semibold text-[#f5f5f0] mb-2 leading-tight group-hover:text-[#d4af37] transition-colors duration-300">
            {law.title}
          </h3>

          {/* Subtitle quote */}
          <p className="text-sm text-[#6b6b6b] italic mb-3 line-clamp-2 border-l-2 border-[#d4af37]/30 pl-3">
            &quot;{law.subtitle}&quot;
          </p>

          {/* Read more */}
          <div className="flex items-center gap-2 text-sm font-medium text-[#d4af37] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1">
            <span>Explorar ley</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </article>
    </Link>
  )
}
