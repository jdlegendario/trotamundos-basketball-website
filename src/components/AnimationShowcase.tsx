'use client';

import Card3D from './Card3D';
import CounterAnimation from './CounterAnimation';
import ProgressBar from './ProgressBar';
import ScrollParallax from './ScrollParallax';

const AnimationShowcase = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">
            Animaciones Premium Apple Style
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experimenta las animaciones avanzadas inspiradas en Apple MacBook Pro
          </p>
        </div>

        {/* Counter Animations Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
            Counter Animations
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="glass-advanced p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">
                <CounterAnimation target={1250} suffix="+" duration={2000} />
              </div>
              <p className="text-sm text-gray-600">Usuarios Registrados</p>
            </div>
            
            <div className="glass-advanced p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-green-500 mb-2">
                <CounterAnimation target={98} suffix="%" duration={1800} />
              </div>
              <p className="text-sm text-gray-600">Satisfacción</p>
            </div>
            
            <div className="glass-advanced p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-purple-500 mb-2">
                <CounterAnimation target={47} suffix="K" duration={2200} />
              </div>
              <p className="text-sm text-gray-600">Visualizaciones</p>
            </div>
            
            <div className="glass-advanced p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">
                <CounterAnimation target={24} suffix="/7" duration={1600} />
              </div>
              <p className="text-sm text-gray-600">Soporte</p>
            </div>
          </div>
        </div>

        {/* 3D Cards Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
            3D Interactive Cards
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <Card3D key={item} className="h-80">
                <div className="glass-advanced h-full rounded-xl p-6 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4"></div>
                    <h4 className="text-xl font-bold mb-2 text-gray-800">
                      Característica {item}
                    </h4>
                    <p className="text-gray-600">
                      Mueve el mouse sobre esta tarjeta para ver el efecto 3D increíble.
                    </p>
                  </div>
                  
                  <ProgressBar 
                    progress={65 + (item * 10)} 
                    label="Progreso"
                    color={item === 1 ? '#3B82F6' : item === 2 ? '#10B981' : '#8B5CF6'}
                    animated={true}
                  />
                </div>
              </Card3D>
            ))}
          </div>
        </div>

        {/* Progress Bars Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
            Animated Progress Bars
          </h3>
          <div className="max-w-2xl mx-auto space-y-6">
            <ProgressBar 
              progress={85} 
              label="HTML/CSS" 
              color="#E34F26"
              animated={true}
            />
            <ProgressBar 
              progress={78} 
              label="JavaScript" 
              color="#F7DF1E"
              animated={true}
            />
            <ProgressBar 
              progress={92} 
              label="React/Next.js" 
              color="#61DAFB"
              animated={true}
            />
            <ProgressBar 
              progress={70} 
              label="TypeScript" 
              color="#3178C6"
              animated={true}
            />
          </div>
        </div>

        {/* Parallax Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
            Scroll Parallax Effects
          </h3>
          <div className="relative h-64 overflow-hidden rounded-xl">
            <ScrollParallax speed={0.5} className="absolute inset-0">
              <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <h4 className="text-white text-2xl font-bold">Fondo Lento</h4>
              </div>
            </ScrollParallax>
            
            <ScrollParallax speed={0.2} className="absolute inset-0 z-10">
              <div className="w-full h-full flex items-center justify-center">
                <div className="glass-advanced p-8 rounded-xl text-center">
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">Contenido Rápido</h4>
                  <p className="text-gray-600">Scroll para ver el efecto parallax</p>
                </div>
              </div>
            </ScrollParallax>
          </div>
        </div>

        {/* Button Showcase */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8 text-gray-800">
            Premium Buttons
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="btn-apple-advanced">
              Botón Premium
            </button>
            <button className="glass-advanced px-6 py-3 rounded-lg font-medium text-gray-800 hover:scale-105 transition-transform">
              Glass Button
            </button>
            <button className="bg-gradient-to-r from-pink-500 to-violet-500 text-white px-6 py-3 rounded-lg font-medium hover:scale-105 transition-all duration-300 hover:shadow-lg">
              Gradient Button
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimationShowcase;
