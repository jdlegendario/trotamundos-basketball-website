'use client';

import { useState } from 'react';
import { getGalleryImages, getRandomImages, getTrainingImages } from '@/lib/imageMapping';
import Image from 'next/image';

const Gallery = () => {
  const [filtroActivo, setFiltroActivo] = useState('Todos');
  
  // Obtener imágenes organizadas
  const galeria = getGalleryImages();
  const entrenamientos = getTrainingImages();
  
  // Crear array de fotos con imágenes reales
  const todasLasFotos = [
    ...galeria.slice(0, 15).map((img, index) => ({ 
      id: index + 1, 
      src: img, 
      alt: `Momento destacado ${index + 1}`, 
      categoria: 'Galería' 
    })),
    ...entrenamientos.slice(0, 10).map((img, index) => ({ 
      id: index + 20, 
      src: img, 
      alt: `Entrenamiento ${index + 1}`, 
      categoria: 'Entrenamientos' 
    }))
  ];

  // Filtrar fotos según categoría activa
  const fotosFiltradas = filtroActivo === 'Todos' 
    ? todasLasFotos 
    : todasLasFotos.filter(foto => foto.categoria === filtroActivo);

  const categorias = ['Todos', 'Galería', 'Entrenamientos'];

  return (
    <section id="galeria" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Galería
          </h2>
          <p className="text-xl text-gray-600">
            Revive los mejores momentos de nuestra fundación
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categorias.map((categoria) => (
            <button
              key={categoria}
              onClick={() => setFiltroActivo(categoria)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                categoria === filtroActivo
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-primary-100 hover:text-primary-600'
              }`}
            >
              {categoria}
            </button>
          ))}
        </div>

        {/* Grid de fotos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {fotosFiltradas.map((foto, index) => (
            <div
              key={foto.id}
              className={`relative overflow-hidden rounded-lg hover:shadow-lg transition-shadow cursor-pointer ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              } ${index === 3 ? 'lg:col-span-2' : ''}`}
              style={{
                minHeight: index === 0 ? '300px' : index === 3 ? '200px' : '200px'
              }}
            >
              {/* Imagen real */}
              <Image
                src={foto.src}
                alt={foto.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              
              {/* Overlay con información */}
              <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity flex items-end">
                <div className="p-4 text-white">
                  <div className="text-sm font-medium">{foto.alt}</div>
                  <div className="text-xs opacity-90">{foto.categoria}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Videos destacados */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">
            Videos Destacados
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((video) => (
              <div key={video} className="card">
                <div className="relative bg-gradient-to-br from-secondary-400 to-secondary-600 h-48 flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="text-6xl mb-2">▶️</div>
                    <div className="text-sm">Entrenamientos {video}</div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Sesión de Entrenamiento #{video}
                  </h4>
                  <p className="text-sm text-gray-600">
                    Mira cómo nuestros jugadores desarrollan sus habilidades.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary">
            Ver Galería Completa
          </button>
        </div>
      </div>
    </section>
  )
}

export default Gallery
