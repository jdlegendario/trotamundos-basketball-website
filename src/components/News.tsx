'use client'

import Card3D from './Card3D';
import ProgressBar from './ProgressBar';

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
          <h2 className="text-4xl font-bold text-gray-800 mb-4 text-reveal">
            Últimas Aventuras
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto fade-in-up" style={{animationDelay: '0.2s'}}>
            Sigue las últimas hazañas y conquistas de nuestros trotamundos en el mundo del básquet
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {noticias.map((noticia, index) => (
            <article
              key={noticia.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden apple-hover stagger-item glass-morphism"
              style={{animationDelay: `${0.1 * (index + 1)}s`}}
            >
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img
                  src={noticia.imagen}
                  alt={noticia.titulo}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = `https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=300&fit=crop&auto=format`
                  }}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block bg-primary-100 text-primary-800 text-sm px-3 py-1 rounded-full font-medium bounce-in" style={{animationDelay: `${0.2 * (index + 1)}s`}}>
                    {noticia.categoria}
                  </span>
                  <time className="text-gray-500 text-sm">{noticia.fecha}</time>
                </div>
                <h3 className="font-bold text-lg mb-3 text-gray-800 hover:text-primary-600 transition-colors duration-300">
                  {noticia.titulo}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {noticia.resumen}
                </p>
                <button className="text-primary-600 hover:text-primary-800 font-medium text-sm btn-apple inline-flex items-center">
                  Leer más
                  <svg className="w-4 h-4 ml-1 transition-transform duration-300 hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12 scale-in" style={{animationDelay: '0.8s'}}>
          <button className="btn-primary btn-apple px-8 py-3">
            Ver Todas las Noticias
          </button>
        </div>
      </div>
    </section>
  )
}

export default News
