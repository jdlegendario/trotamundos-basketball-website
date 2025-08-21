const Events = () => {
  const eventos = [
    {
      id: 1,
      titulo: 'Torneo Regional Juvenil',
      fecha: '31 Sep 2025',
      hora: '15:00',
      ubicacion: 'Coliseo Municipal',
      equipos: 'Trotamundos vs Águilas del Norte',
      entradas: 'Entrada libre',
      precio: 'Gratis'
    },
    {
      id: 2,
      titulo: 'Partido Amistoso',
      fecha: '15 Sep 2025',
      hora: '16:00',
      ubicacion: 'Cancha Local',
      equipos: 'Trotamundos vs Lobos Marinos',
      entradas: 'Abierto al público',
      precio: 'Gratis'
    },
    {
      id: 3,
      titulo: 'Campamento de Verano 2025',
      fecha: '1 Dic 2025',
      hora: '08:00',
      ubicacion: 'Instalaciones Trotamundos',
      equipos: 'Todas las categorías',
      entradas: 'Inscripciones abiertas',
      precio: '$50'
    }
  ]

  return (
    <section id="eventos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Próximos Eventos
          </h2>
          <p className="text-xl text-gray-600">
            No te pierdas nuestros próximos partidos y actividades
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {eventos.map((evento, index) => (
            <div key={evento.id} className={`card ${index === 0 ? 'lg:col-span-2' : ''}`}>
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <span className="mr-4">📅 {evento.fecha}</span>
                      <span>🕐 {evento.hora}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {evento.titulo}
                    </h3>
                    <p className="text-gray-600 mb-4">📍 {evento.ubicacion}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary-600 mb-1">
                      {evento.precio}
                    </div>
                    <div className="text-sm text-gray-500">por entrada</div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Equipos:</h4>
                  <p className="text-gray-600">{evento.equipos}</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <span className="text-red-600 font-medium">⚠️ {evento.entradas}</span>
                  </div>
                  <button className="btn-primary">
                    Comprar Entradas
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Próximos partidos rápidos */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Resultados Recientes
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center border-r border-gray-200 last:border-r-0 pr-6 last:pr-0">
              <div className="text-sm text-gray-500 mb-2">14 Abril 2024</div>
              <div className="flex items-center justify-center space-x-2 mb-2">
                <span className="font-semibold">Athletic NY</span>
                <span className="text-2xl font-bold text-green-600">105</span>
                <span className="text-gray-400">-</span>
                <span className="text-2xl font-bold text-gray-400">99</span>
                <span className="font-semibold">Dragons Boston</span>
              </div>
              <div className="text-xs text-green-600 font-medium">Victoria Local</div>
            </div>
            <div className="text-center border-r border-gray-200 last:border-r-0 pr-6 last:pr-0">
              <div className="text-sm text-gray-500 mb-2">14 Abril 2024</div>
              <div className="flex items-center justify-center space-x-2 mb-2">
                <span className="font-semibold">Dragons Boston</span>
                <span className="text-2xl font-bold text-gray-400">105</span>
                <span className="text-gray-400">-</span>
                <span className="text-2xl font-bold text-green-600">123</span>
                <span className="font-semibold">Rockets Houston</span>
              </div>
              <div className="text-xs text-green-600 font-medium">Victoria Visitante</div>
            </div>
            <div className="text-center pr-6 last:pr-0">
              <div className="text-sm text-gray-500 mb-2">14 Abril 2024</div>
              <div className="flex items-center justify-center space-x-2 mb-2">
                <span className="font-semibold">Bulls Chicago</span>
                <span className="text-2xl font-bold text-green-600">105</span>
                <span className="text-gray-400">-</span>
                <span className="text-2xl font-bold text-gray-400">29</span>
                <span className="font-semibold">Dragons Boston</span>
              </div>
              <div className="text-xs text-green-600 font-medium">Victoria Local</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Events
