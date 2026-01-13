export default function Home() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 md:text-6xl mb-4">
          Las 48 Leyes del Poder
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Una guía visual e interactiva de las leyes atemporales del poder y la estrategia
        </p>
      </div>

      {/* Placeholder para el grid de cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-shadow">
          <p className="text-gray-500 text-center">
            Las leyes se cargarán aquí...
          </p>
        </div>
      </div>
    </div>
  )
}
