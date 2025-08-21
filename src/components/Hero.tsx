const Hero = () => {
  return (
    <section id="inicio" className="hero-section h-screen flex items-center justify-center text-white" role="banner">
      <div className="container mx-auto px-4 text-center">
        <header>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            TROTAMUNDOS
            <span className="block text-primary-400">BÁSQUET</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto" role="doc-subtitle">
            Una nueva aventura en el básquet. Únete a nuestra escuela 
            donde cada jugador es un explorador de nuevas habilidades.
          </p>
        </header>
        <nav className="flex flex-col md:flex-row gap-4 justify-center" role="navigation" aria-label="Acciones principales">
          <button className="btn-primary text-lg px-8 py-4" aria-label="Inscribirse en Trotamundos Básquet">
            Inscríbete Ahora
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-gray-800 font-semibold py-4 px-8 rounded-lg transition-colors" aria-label="Ver información de equipos">
            Ver Equipos
          </button>
        </nav>
        
        {/* Stats - Optimized for SEO */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16" role="region" aria-label="Estadísticas de la escuela">
          <article className="text-center">
            <div className="text-4xl font-bold text-primary-400" aria-label="3 años de experiencia">3+</div>
            <div className="text-lg">Años de Experiencia</div>
          </article>
          <article className="text-center">
            <div className="text-4xl font-bold text-primary-400" aria-label="40 estudiantes activos">40+</div>
            <div className="text-lg">Estudiantes Activos</div>
          </article>
          <article className="text-center">
            <div className="text-4xl font-bold text-primary-400" aria-label="5 torneos participados">5+</div>
            <div className="text-lg">Torneos Participados</div>
          </article>
          <article className="text-center">
            <div className="text-4xl font-bold text-primary-400" aria-label="2 entrenadores profesionales">2+</div>
            <div className="text-lg">Entrenadores Profesionales</div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Hero
