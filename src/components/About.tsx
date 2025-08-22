const About = () => {
  return (
    <section id="nosotros" className="py-20 bg-gray-50" role="main" aria-labelledby="about-heading">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h2 id="about-heading" className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in-up">
            Sobre Trotamundos Basketball Club
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up stagger-1">
            Somos más que una escuela de básquet - somos exploradores del deporte. 
            En Trotamundos Basketball Club, cada entrenamiento es una nueva aventura hacia la excelencia deportiva.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <article className="animate-fade-in-left">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Nuestra Filosofía
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed transition-colors duration-300 hover:text-gray-700">
              Creemos que el básquet es un viaje de descubrimiento. Cada jugador es un explorador 
              que desarrolla sus habilidades técnicas mientras forja su carácter y valores.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed transition-colors duration-300 hover:text-gray-700">
              Nuestro método combina la enseñanza tradicional del básquet con enfoques innovadores, 
              creando una experiencia única donde cada trotamundo encuentra su camino al éxito.
            </p>

            <ul className="space-y-4" role="list" aria-label="Características de nuestro entrenamiento">
              <li className="flex items-center group transition-all duration-300 hover:translate-x-2" role="listitem">
                <div className="w-3 h-3 bg-primary-600 rounded-full mr-4 transition-all duration-300 group-hover:scale-125" aria-hidden="true"></div>
                <span className="text-gray-700 transition-colors duration-300 group-hover:text-primary-700">Metodología de entrenamiento explorativo</span>
              </li>
              <li className="flex items-center group transition-all duration-300 hover:translate-x-2" role="listitem" style={{ animationDelay: '0.1s' }}>
                <div className="w-3 h-3 bg-primary-600 rounded-full mr-4 transition-all duration-300 group-hover:scale-125" aria-hidden="true"></div>
                <span className="text-gray-700 transition-colors duration-300 group-hover:text-primary-700">Desarrollo integral del jugador-explorador</span>
              </li>
              <li className="flex items-center group transition-all duration-300 hover:translate-x-2" role="listitem" style={{ animationDelay: '0.2s' }}>
                <div className="w-3 h-3 bg-primary-600 rounded-full mr-4 transition-all duration-300 group-hover:scale-125" aria-hidden="true"></div>
                <span className="text-gray-700 transition-colors duration-300 group-hover:text-primary-700">Aventuras competitivas y torneos</span>
              </li>
              <li className="flex items-center group transition-all duration-300 hover:translate-x-2" role="listitem" style={{ animationDelay: '0.3s' }}>
                <div className="w-3 h-3 bg-primary-600 rounded-full mr-4 transition-all duration-300 group-hover:scale-125" aria-hidden="true"></div>
                <span className="text-gray-700 transition-colors duration-300 group-hover:text-primary-700">Comunidad de trotamundos unidos</span>
              </li>
            </ul>
          </article>

          <aside className="relative animate-fade-in-right" role="complementary" aria-label="Estadísticas de la escuela">
            <div className="bg-primary-600 rounded-lg p-8 text-white hover-lift transition-all duration-500">
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
