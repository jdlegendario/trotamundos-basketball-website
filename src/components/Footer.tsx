const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 basketball-gradient rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">🏀</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Trotamundos</h3>
                <p className="text-sm text-gray-400">Básquet con Aventura</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Una nueva aventura en el básquet. Somos una escuela joven que está 
              construyendo campeones con pasión, disciplina y valores.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/caballitozeballosm" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                📘
              </a>
              <a href="https://twitter.com/Fund_Caballito" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                🐦
              </a>
              <a href="https://www.instagram.com/yosoycaballito/" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                📷
              </a>
              <a href="https://api.whatsapp.com/send?phone=593959170756" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                💬
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-300 hover:text-primary-400 transition-colors">Inicio</a></li>
              <li><a href="#nosotros" className="text-gray-300 hover:text-primary-400 transition-colors">Nosotros</a></li>
              <li><a href="#equipos" className="text-gray-300 hover:text-primary-400 transition-colors">Equipos</a></li>
              <li><a href="#eventos" className="text-gray-300 hover:text-primary-400 transition-colors">Eventos</a></li>
              <li><a href="#galeria" className="text-gray-300 hover:text-primary-400 transition-colors">Galería</a></li>
              <li><a href="#contacto" className="text-gray-300 hover:text-primary-400 transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Contacto rápido */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="mr-3">📱</span>
                <span className="text-gray-300">097 972 2094</span>
              </div>
              <div className="flex items-center">
                <span className="mr-3">📧</span>
                <span className="text-gray-300 text-sm">yosoycaballitozeballos@gmail.com</span>
              </div>
              <div className="flex items-start">
                <span className="mr-3 mt-1">📍</span>
                <span className="text-gray-300">Ecuador</span>
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Trotamundos Básquet. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Política de Privacidad</a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Términos de Uso</a>
              <a href="/admin" className="text-gray-600 hover:text-primary-400 transition-colors">⚙️</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
