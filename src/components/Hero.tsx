const Hero = () => {
  return (
    <section id="inicio" className="hero-section h-screen flex items-center justify-center text-white page-transition" role="banner">
      <div className="container mx-auto px-4 text-center">
        <header>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-reveal">
            TROTAMUNDOS
            <span className="block text-primary-400 float">BASKETBALL</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto fade-in-up" style={{animationDelay: '0.5s'}} role="doc-subtitle">
            Una nueva aventura en el básquet. Únete a nuestra escuela 
            donde cada jugador es un explorador de nuevas habilidades.
          </p>
        </header>
        <nav className="flex flex-col md:flex-row gap-4 justify-center scale-in" style={{animationDelay: '0.8s'}} role="navigation" aria-label="Acciones principales">
          <button className="btn-primary btn-apple text-lg px-8 py-4 glass-morphism" aria-label="Inscribirse en Trotamundos Básquet">
            Inscríbete Ahora
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-gray-800 font-semibold py-4 px-8 rounded-lg btn-apple glass-morphism" aria-label="Ver información de equipos">
            Ver Equipos
          </button>
        </nav>
        
        {/* Stats - Optimized for SEO */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16" role="region" aria-label="Estadísticas de la escuela">
          <article className="text-center apple-hover stagger-item">
            <div className="text-4xl font-bold text-primary-400 pulse-slow" aria-label="3 años de experiencia">3+</div>
            <div className="text-lg opacity-80">Años de Experiencia</div>
          </article>
          <article className="text-center apple-hover stagger-item">
            <div className="text-4xl font-bold text-primary-400 pulse-slow" aria-label="40 estudiantes activos">40+</div>
            <div className="text-lg opacity-80 group-hover:opacity-100 transition-opacity duration-300">Estudiantes Activos</div>
          </article>
          <article className="text-center group">
            <div className="text-4xl font-bold text-primary-400 group-hover:scale-110 transition-transform duration-300" aria-label="5 torneos participados">5+</div>
            <div className="text-lg opacity-80 group-hover:opacity-100 transition-opacity duration-300">Torneos Participados</div>
          </article>
          <article className="text-center group">
            <div className="text-4xl font-bold text-primary-400 group-hover:scale-110 transition-transform duration-300" aria-label="2 entrenadores profesionales">2+</div>
            <div className="text-lg opacity-80 group-hover:opacity-100 transition-opacity duration-300">Entrenadores Profesionales</div>
          </article>
        </div>
        
        {/* Scroll indicator */}
        <a 
          href="#nosotros" 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle hover:scale-110 transition-transform duration-300"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center opacity-75 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
          <p className="text-xs text-white/60 mt-2 text-center hover:text-white/80 transition-colors duration-300">Scroll</p>
        </a>
      </div>
    </section>
  )
}

export default Hero
