const News = () => {
  const noticias = [
    {
      id: 1,
      titulo: 'Los Exploradores conquistan el primer lugar',
      fecha: '15 Ago 2025',
      resumen: 'Nuestro equipo femenino U15 se corona campeón del Torneo Metropolitano de Quito',
      categoria: 'Equipos',
      imagen: '/news1.jpg'
    },
    {
      id: 2,
      titulo: 'Nueva aventura de entrenamiento',
      fecha: '10 Ago 2025',
      resumen: 'Implementamos el método "Exploración Baloncestística" para desarrollar creatividad en la cancha.',
      categoria: 'Metodología',
      imagen: '/news2.jpg'
    },
    {
      id: 3,
      titulo: 'Trotamundos se expande por Ecuador',
      fecha: '1 Ago 2025',
      resumen: 'Abrimos nuevas sedes en Guayaquil y Cuenca para llevar nuestra filosofía a más jugadores.',
      categoria: 'Expansión',
      imagen: '/news3.jpg'
    },
    {
      id: 4,
      titulo: 'La aventura del básquet transforma vidas',
      fecha: '25 Jul 2025',
      resumen: 'Nuestros trotamundos desarrollan liderazgo, trabajo en equipo y perseverancia en cada aventura.',
      categoria: 'Valores',
      imagen: '/news4.jpg'
    }
  ]

  return (
    <section id="noticias" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in-up">
            Últimas Noticias
          </h2>
          <p className="text-xl text-gray-600 animate-fade-in-up stagger-1">
            Mantente al día con todas las novedades de nuestra fundación
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {noticias.map((noticia, index) => (
            <article 
              key={noticia.id} 
              className="card group hover:shadow-xl transition-all duration-500 hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden h-48 bg-gray-200">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-75"></div>
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 group-hover:scale-105">
                    {noticia.categoria}
                  </span>
                </div>
                {/* Placeholder para imagen */}
                <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                  <span className="text-6xl transition-transform duration-300 group-hover:bounce">🏀</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2 transition-colors duration-300 group-hover:text-primary-500">{noticia.fecha}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {noticia.titulo}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                  {noticia.resumen}
                </p>
                <button className="mt-4 text-primary-600 hover:text-primary-700 font-medium text-sm transition-all duration-300 hover:translate-x-1 flex items-center">
                  Leer más 
                  <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-up stagger-4">
          <button className="btn-secondary hover-lift">
            Ver Todas las Noticias
          </button>
        </div>
      </div>
    </section>
  )
}

export default News
