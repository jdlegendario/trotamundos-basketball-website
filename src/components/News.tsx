const News = () => {
  const noticias = [
    {
      id: 1,
      titulo: 'Trotamundos debuta en torneo local',
      fecha: '15 Ago 2025',
      resumen: 'Nuestro equipo juvenil participa por primera vez en el campeonato regional',
      categoria: 'Equipos',
      imagen: '/news1.jpg'
    },
    {
      id: 2,
      titulo: 'Nuevos entrenamientos de verano',
      fecha: '10 Ago 2025',
      resumen: 'Intensificamos la preparación física y técnica durante las vacaciones.',
      categoria: 'Entrenamientos',
      imagen: '/news2.jpg'
    },
    {
      id: 3,
      titulo: 'Incorporamos nuevas metodologías',
      fecha: '1 Ago 2025',
      resumen: 'Técnicas modernas de entrenamiento para mejorar el rendimiento de nuestros jugadores.',
      categoria: 'Noticias',
      imagen: '/news3.jpg'
    },
    {
      id: 4,
      titulo: 'El básquet ayuda en el desarrollo integral',
      fecha: '25 Jul 2025',
      resumen: 'Trotamundos promueve valores y disciplina a través del deporte.',
      categoria: 'Noticias',
      imagen: '/news4.jpg'
    }
  ]

  return (
    <section id="noticias" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Últimas Noticias
          </h2>
          <p className="text-xl text-gray-600">
            Mantente al día con todas las novedades de nuestra fundación
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {noticias.map((noticia) => (
            <article key={noticia.id} className="card group hover:shadow-xl transition-shadow">
              <div className="relative overflow-hidden h-48 bg-gray-200">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {noticia.categoria}
                  </span>
                </div>
                {/* Placeholder para imagen */}
                <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                  <span className="text-6xl">🏀</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{noticia.fecha}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors">
                  {noticia.titulo}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {noticia.resumen}
                </p>
                <button className="mt-4 text-primary-600 hover:text-primary-700 font-medium text-sm">
                  Leer más →
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-secondary">
            Ver Todas las Noticias
          </button>
        </div>
      </div>
    </section>
  )
}

export default News
