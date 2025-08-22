'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Noticias', href: '#noticias' },
    { name: 'Eventos', href: '#eventos' },
    { name: 'Equipos', href: '#equipos' },
    { name: 'Patrocinadores', href: '#patrocinadores' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Contacto', href: '#contacto' },
  ]

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50 transition-all duration-300" role="banner">
      <nav className="container mx-auto px-4" role="navigation" aria-label="Navegación principal">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 animate-fade-in-left">
            <div className="w-10 h-10 relative hover-scale overflow-hidden rounded-full" aria-hidden="true">
              <Image
                src="/icon.png"
                alt="Trotamundos Logo"
                fill
                className="object-cover"
                sizes="40px"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Trotamundos</h1>
              <h2 className="text-sm text-primary-600 font-semibold">BASKETBALL CLUB</h2>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 animate-fade-in-right">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-all duration-300 relative group"
                style={{ animationDelay: `${index * 0.1}s` }}
                aria-label={`Ir a sección ${item.name}`}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <div className="flex items-center space-x-3">
              <Link
                href="/admin"
                className="px-4 py-2 text-primary-600 border border-primary-600 rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-300 font-medium hover-lift"
                aria-label="Ingresar al panel de administración"
              >
                Ingresar
              </Link>
              <button className="btn-primary" aria-label="Inscribirse en Trotamundos Básquet">
                Inscríbete Ahora
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-gray-600 transition-all ${isMenuOpen ? 'rotate-45 translate-y-0.5' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-gray-600 mt-1 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-gray-600 mt-1 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-0.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-gray-700 hover:text-primary-600 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 mt-4">
                <Link
                  href="/admin"
                  className="px-4 py-2 text-center text-primary-600 border border-primary-600 rounded-lg hover:bg-primary-600 hover:text-white transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ingresar
                </Link>
                <button className="btn-primary w-full">
                  Inscríbete Ahora
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
