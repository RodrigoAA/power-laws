import { laws } from '@/data/laws'
import { LawCard } from '@/components/LawCard'

export default function Home() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl mb-4">
          Las 48 Leyes del Poder
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto md:text-xl">
          Una guía visual e interactiva de las leyes atemporales del poder y la estrategia,
          basada en el bestseller de Robert Greene
        </p>
      </div>

      {/* Stats */}
      <div className="flex justify-center gap-8 mb-12 text-center">
        <div>
          <div className="text-3xl font-bold text-gray-900">48</div>
          <div className="text-sm text-gray-500">Leyes</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-gray-900">6</div>
          <div className="text-sm text-gray-500">Categorías</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-gray-900">3000+</div>
          <div className="text-sm text-gray-500">Años de historia</div>
        </div>
      </div>

      {/* Laws Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {laws.map((law) => (
          <LawCard key={law.number} law={law} />
        ))}
      </div>
    </div>
  )
}
