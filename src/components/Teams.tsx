const Teams = () => {
  const equipos = [
    {
      id: 1,
      nombre: 'U15 Femenino',
      categoria: 'Juvenil Femenino',
      entrenador: 'María González',
      jugadores: 12,
      logros: ['Campeones Liga Nacional 2022', 'Subcampeones Torneo Regional'],
      color: 'bg-pink-500'
    },
    {
      id: 2,
      nombre: 'U17 Masculino',
      categoria: 'Juvenil Masculino',
      entrenador: 'Carlos Rodríguez',
      jugadores: 15,
      logros: ['Finalistas Liga Nacional 2022', '3er Lugar Torneo Internacional'],
      color: 'bg-blue-500'
    },
    {
      id: 3,
      nombre: 'Senior Masculino',
      categoria: 'Primera División',
      entrenador: 'Roberto Zeballos',
      jugadores: 18,
      logros: ['Campeones Liga Provincial', 'Semifinalistas Copa Ecuador'],
      color: 'bg-green-500'
    }
  ]

  return (
    <section id="equipos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Nuestros Equipos
          </h2>
          <p className="text-xl text-gray-600">
            Conoce a nuestros equipos competitivos y sus logros
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {equipos.map((equipo) => (
            <div key={equipo.id} className="card">
              <div className={`h-32 ${equipo.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-6 text-white">
                  <h3 className="text-2xl font-bold">{equipo.nombre}</h3>
                  <p className="text-sm opacity-90">{equipo.categoria}</p>
                </div>
                <div className="absolute top-4 right-4 text-white text-4xl">
                  🏀
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Entrenador:</span>
                    <span className="font-semibold text-gray-800">{equipo.entrenador}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Jugadores:</span>
                    <span className="font-semibold text-gray-800">{equipo.jugadores}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Logros Recientes:</h4>
                  <ul className="space-y-2">
                    {equipo.logros.map((logro, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-start">
                        <span className="text-primary-600 mr-2">🏆</span>
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
