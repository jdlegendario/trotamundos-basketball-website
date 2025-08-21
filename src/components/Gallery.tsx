const Gallery = () => {
  const fotos = [
    { id: 1, alt: 'Entrenamiento U15 Femenino', categoria: 'Entrenamientos' },
    { id: 2, alt: 'Partido Liga Nacional', categoria: 'Partidos' },
    { id: 3, alt: 'Celebración Campeonato', categoria: 'Celebraciones' },
    { id: 4, alt: 'Campamento de Verano', categoria: 'Eventos' },
    { id: 5, alt: 'Equipo Senior Masculino', categoria: 'Equipos' },
    { id: 6, alt: 'Entrenamiento Técnico', categoria: 'Entrenamientos' },
    { id: 7, alt: 'Final Liga Juvenil', categoria: 'Partidos' },
    { id: 8, alt: 'Graduación Jugadores', categoria: 'Eventos' }
  ]

  return (
    <section id="galeria" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Galería
          </h2>
          <p className="text-xl text-gray-600">
            Revive los mejores momentos de nuestra fundación
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['Todos', 'Entrenamientos', 'Partidos', 'Eventos', 'Equipos', 'Celebraciones'].map((categoria) => (
            <button
              key={categoria}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                categoria === 'Todos'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-primary-100 hover:text-primary-600'
              }`}
            >
              {categoria}
            </button>
          ))}
        </div>

        {/* Grid de fotos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {fotos.map((foto, index) => (
            <div
              key={foto.id}
              className={`relative overflow-hidden rounded-lg bg-gradient-to-br from-primary-400 to-primary-600 hover:shadow-lg transition-shadow cursor-pointer ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              } ${index === 3 ? 'lg:col-span-2' : ''}`}
              style={{
                minHeight: index === 0 ? '300px' : index === 3 ? '200px' : '200px'
              }}
            >
              {/* Placeholder con gradiente */}
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="text-4xl mb-2">🏀</div>
                  <div className="text-sm font-medium opacity-90">{foto.categoria}</div>
                </div>
              </div>
              
              {/* Overlay con información */}
              <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity flex items-end">
                <div className="p-4 text-white">
                  <div className="text-sm font-medium">{foto.alt}</div>
                  <div className="text-xs opacity-90">{foto.categoria}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Videos destacados */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">
            Videos Destacados
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((video) => (
              <div key={video} className="card">
                <div className="relative bg-gradient-to-br from-secondary-400 to-secondary-600 h-48 flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="text-6xl mb-2">▶️</div>
                    <div className="text-sm">Entrenamientos {video}</div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Sesión de Entrenamiento #{video}
                  </h4>
                  <p className="text-sm text-gray-600">
                    Mira cómo nuestros jugadores desarrollan sus habilidades.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary">
            Ver Galería Completa
          </button>
        </div>
      </div>
    </section>
  )
}

export default Gallery
