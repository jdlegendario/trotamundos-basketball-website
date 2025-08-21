const About = () => {
  return (
    <section id="nosotros" className="py-20 bg-gray-50" role="main" aria-labelledby="about-heading">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h2 id="about-heading" className="text-4xl font-bold text-gray-800 mb-4">
            Sobre Trotamundos Básquet
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trotamundos es una escuela de básquet joven y en crecimiento en Ecuador. 
            Somos una familia que está construyendo el futuro del básquet local.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <article>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Nuestra Misión
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Desarrollar el potencial atlético y personal de cada jugador a través de una formación 
              integral que combine técnica, táctica, preparación física y valores humanos.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Como escuela joven, creemos en el deporte como herramienta de crecimiento personal, 
              formando no solo excelentes jugadores, sino también mejores personas.
            </p>

            <ul className="space-y-4" role="list" aria-label="Características de nuestro entrenamiento">
              <li className="flex items-center" role="listitem">
                <div className="w-3 h-3 bg-primary-600 rounded-full mr-4" aria-hidden="true"></div>
                <span className="text-gray-700">Entrenamiento profesional personalizado</span>
              </li>
              <li className="flex items-center" role="listitem">
                <div className="w-3 h-3 bg-primary-600 rounded-full mr-4" aria-hidden="true"></div>
                <span className="text-gray-700">Formación en valores y disciplina</span>
              </li>
              <li className="flex items-center" role="listitem">
                <div className="w-3 h-3 bg-primary-600 rounded-full mr-4" aria-hidden="true"></div>
                <span className="text-gray-700">Participación en torneos regionales</span>
              </li>
              <li className="flex items-center" role="listitem">
                <div className="w-3 h-3 bg-primary-600 rounded-full mr-4" aria-hidden="true"></div>
                <span className="text-gray-700">Ambiente familiar y seguro</span>
              </li>
            </ul>
          </article>

          <aside className="relative" role="complementary" aria-label="Estadísticas de la escuela">
            <div className="bg-primary-600 rounded-lg p-8 text-white">
              <h4 className="text-xl font-bold mb-4">¿Por qué elegir Trotamundos?</h4>
              <div className="space-y-3">
                <div>
                  <div className="text-3xl font-bold">3+</div>
                  <div className="text-sm opacity-90">Años de experiencia</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">40+</div>
                  <div className="text-sm opacity-90">Estudiantes activos</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">95%</div>
                  <div className="text-sm opacity-90">Satisfacción de padres</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">5+</div>
                  <div className="text-sm opacity-90">Torneos participados</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-200 rounded-lg -z-10" aria-hidden="true"></div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default About
