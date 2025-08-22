import ScrollParallax from './ScrollParallax';
import CounterAnimation from './CounterAnimation';

const Hero = () => {
  return (
    <section id="inicio" className="hero-section h-screen flex items-center justify-center text-white page-transition parallax-container" 
             style={{
               background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(59, 130, 246, 0.1)), url(\'/basketball-court.jpg\') center/cover',
               backdropFilter: 'blur(8px)',
               border: '1px solid rgba(255, 255, 255, 0.1)'
             }}
             role="banner">
      <ScrollParallax speed={0.3} className="absolute inset-0 z-0">
        <div className="hero-section h-full w-full"></div>
      </ScrollParallax>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <header>
          <ScrollParallax speed={0.5}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-reveal text-white"
                style={{
                  textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
                }}
            >
              TROTAMUNDOS
              <span className="block text-primary-400 float">BASKETBALL</span>
            </h1>
          </ScrollParallax>
          
          <ScrollParallax speed={0.2}>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto fade-in-up" style={{animationDelay: '0.5s'}} role="doc-subtitle">
              Una nueva aventura en el básquet. Únete a nuestra escuela 
              donde cada jugador es un explorador de nuevas habilidades.
            </p>
          </ScrollParallax>
        </header>
        
        <nav className="flex flex-col md:flex-row gap-4 justify-center scale-in" style={{animationDelay: '0.8s'}} role="navigation" aria-label="Acciones principales">
          <button className="btn-apple-advanced text-lg px-8 py-4" aria-label="Inscribirse en Trotamundos Básquet">
            Inscríbete Ahora
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-gray-800 font-semibold py-4 px-8 rounded-lg btn-apple glass-advanced" aria-label="Ver información de equipos">
            Ver Equipos
          </button>
        </nav>
        
        {/* Stats with Counter Animations */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16" role="region" aria-label="Estadísticas de la escuela">
          <article className="text-center glass-advanced p-4 rounded-xl card-3d-hover">
            <div className="text-4xl font-bold text-primary-400 mb-2" aria-label="3 años de experiencia">
              <CounterAnimation target={3} suffix="+" duration={1500} />
            </div>
            <div className="text-lg opacity-90">Años de Experiencia</div>
          </article>
          <article className="text-center glass-advanced p-4 rounded-xl card-3d-hover" style={{animationDelay: '0.2s'}}>
            <div className="text-4xl font-bold text-secondary-400 mb-2" aria-label="40 estudiantes activos">
              <CounterAnimation target={40} suffix="+" duration={1800} />
            </div>
            <div className="text-lg opacity-90">Estudiantes Activos</div>
          </article>
          <article className="text-center glass-advanced p-4 rounded-xl card-3d-hover" style={{animationDelay: '0.4s'}}>
            <div className="text-4xl font-bold text-green-400 mb-2" aria-label="5 torneos participados">
              <CounterAnimation target={5} suffix="+" duration={2000} />
            </div>
            <div className="text-lg opacity-90">Torneos Participados</div>
          </article>
          <article className="text-center glass-advanced p-4 rounded-xl card-3d-hover" style={{animationDelay: '0.6s'}}>
            <div className="text-4xl font-bold text-yellow-400 mb-2" aria-label="2 entrenadores profesionales">
              <CounterAnimation target={2} suffix="+" duration={1600} />
            </div>
            <div className="text-lg opacity-90">Entrenadores Pro</div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Hero
