const Teams = () => {
  const equipos = [
    {
      id: 1,
      nombre: 'Exploradores',
      categoria: 'U15 Femenino',
      entrenador: 'Ana Morales',
      jugadores: 12,
      logros: ['Campeonas Torneo Quito 2024', 'Mejor Equipo Juvenil Regional'],
      color: 'bg-pink-500'
    },
    {
      id: 2,
      nombre: 'Aventureros',
      categoria: 'U17 Masculino',
      entrenador: 'Diego Vásquez',
      jugadores: 15,
      logros: ['Subcampeones Liga Metropolitana', 'Mejor Defensa Torneo 2024'],
      color: 'bg-blue-500'
    },
    {
      id: 3,
      nombre: 'Conquistadores',
      categoria: 'Senior Masculino',
      entrenador: 'Marco Herrera',
      jugadores: 18,
      logros: ['Campeones Liga Pichincha 2024', 'Semifinalistas Copa Nacional'],
      color: 'bg-green-500'
    }
  ]

  return (
    <section id="equipos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in-up">
            Nuestros Equipos
          </h2>
          <p className="text-xl text-gray-600 animate-fade-in-up stagger-1">
            Conoce a nuestros equipos competitivos y sus logros
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {equipos.map((equipo, index) => (
            <div 
              key={equipo.id} 
              className="card hover-lift transition-all duration-500 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`h-32 ${equipo.color} relative overflow-hidden transition-all duration-500 group-hover:h-36`}>
                <div className="absolute inset-0 bg-black/20 transition-all duration-300 group-hover:bg-black/10"></div>
                <div className="absolute bottom-4 left-6 text-white transition-all duration-300 group-hover:bottom-6">
                  <h3 className="text-2xl font-bold transition-all duration-300 group-hover:text-3xl">{equipo.nombre}</h3>
                  <p className="text-sm opacity-90 transition-all duration-300 group-hover:opacity-100">{equipo.categoria}</p>
                </div>
                <div className="absolute top-4 right-4 text-white text-4xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                  🏀
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2 group-hover:mb-3 transition-all duration-300">
                    <span className="text-gray-600 transition-colors duration-300 group-hover:text-primary-600">Entrenador:</span>
                    <span className="font-semibold text-gray-800 transition-colors duration-300 group-hover:text-primary-700">{equipo.entrenador}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 transition-colors duration-300 group-hover:text-primary-600">Jugadores:</span>
                    <span className="font-semibold text-gray-800 transition-colors duration-300 group-hover:text-primary-700">{equipo.jugadores}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-primary-700">Logros Recientes:</h4>
                  <ul className="space-y-2">
                    {equipo.logros.map((logro, index) => (
                      <li 
                        key={index} 
                        className="text-sm text-gray-600 flex items-start transition-all duration-300 hover:text-gray-800 hover:translate-x-1"
                        style={{ transitionDelay: `${index * 0.1}s` }}
                      >
                        <span className="text-primary-600 mr-2 transition-all duration-300 hover:scale-110">🏆</span>
                        {logro}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full btn-secondary">
                  Ver Equipo Completo
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Estadísticas del club */}
        <div className="mt-16 bg-primary-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold text-center mb-8">Estadísticas del Club</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">109</div>
              <div className="text-sm opacity-90">Puntos por partido</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">65</div>
              <div className="text-sm opacity-90">Rebotes por partido</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">23.6</div>
              <div className="text-sm opacity-90">Asistencias por partido</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">102</div>
              <div className="text-sm opacity-90">Puntos permitidos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Teams
