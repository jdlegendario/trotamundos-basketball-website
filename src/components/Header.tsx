'use client'

import { useState } from 'react'
import Link from 'next/link'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Noticias', href: '#noticias' },
    { name: 'Eventos', href: '#eventos' },
    { name: 'Equipos', href: '#equipos' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Contacto', href: '#contacto' },
  ]

  return (
    <header className="fixed top-0 w-full bg-white shadow-lg z-50" role="banner">
      <nav className="container mx-auto px-4" role="navigation" aria-label="Navegación principal">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 basketball-gradient rounded-full flex items-center justify-center" aria-hidden="true">
              <span className="text-white font-bold text-xl">🏀</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Trotamundos</h1>
              <h2 className="text-sm text-primary-600 font-semibold">BÁSQUET</h2>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                aria-label={`Ir a sección ${item.name}`}
              >
                {item.name}
              </Link>
            ))}
            <button className="btn-primary" aria-label="Inscribirse en Trotamundos Básquet">
              Inscríbete Ahora
            </button>
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
              <button className="btn-primary mt-4 w-full">
                Inscríbete Ahora
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
