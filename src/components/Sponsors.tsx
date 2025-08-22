'use client';

import Image from 'next/image';
import { imageMapping } from '@/lib/imageMapping';

const Sponsors = () => {
  const sponsors = [
    {
      name: "Sponsor Principal",
      image: "/images/sponsors/Captura de pantalla 2025-08-22 144146.png",
      tier: "principal"
    },
    {
      name: "Patrocinador Oficial",
      image: "/images/sponsors/OIP.webp",
      tier: "oficial"
    }
  ];

  return (
    <section id="patrocinadores" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 fade-in-up">
            Nuestros <span className="gradient-text">Patrocinadores</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto fade-in-up" style={{animationDelay: '0.2s'}}>
            Gracias a nuestros aliados estratégicos que hacen posible el crecimiento 
            y desarrollo del básquet en nuestra comunidad
          </p>
        </div>

        {/* Sponsors grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="group relative"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div className="glass-advanced p-8 rounded-3xl hover:scale-105 transition-all duration-500 h-full">
                {/* Sponsor tier badge */}
                <div className="absolute top-4 right-4 z-20">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                    sponsor.tier === 'principal' 
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white' 
                      : 'bg-gradient-to-r from-blue-400 to-purple-500 text-white'
                  }`}>
                    {sponsor.tier}
                  </span>
                </div>

                {/* Logo container */}
                <div className="relative h-32 mb-6 flex items-center justify-center">
                  <div className="relative w-full h-full group-hover:scale-110 transition-transform duration-500">
                    <Image
                      src={sponsor.image}
                      alt={sponsor.name}
                      fill
                      className="object-contain filter group-hover:brightness-110 transition-all duration-300"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Sponsor info */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                    {sponsor.name}
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center">
          <div className="glass-advanced p-8 rounded-3xl max-w-2xl mx-auto fade-in-up" style={{animationDelay: '0.6s'}}>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              ¿Quieres ser nuestro próximo patrocinador?
            </h3>
            <p className="text-gray-600 mb-6">
              Únete a nuestra familia de patrocinadores y ayuda a formar los futuros talentos del básquet
            </p>
            <button className="btn-apple-advanced group">
              <span className="relative z-10">Contáctanos</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
