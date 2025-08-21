'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [activeSection, setActiveSection] = useState('dashboard')
  const router = useRouter()

  useEffect(() => {
    // Verificar autenticación
    const auth = localStorage.getItem('trotamundos_admin')
    if (auth !== 'logged_in') {
      router.push('/admin')
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  const logout = () => {
    localStorage.removeItem('trotamundos_admin')
    router.push('/admin')
  }

  if (!isAuthenticated) {
    return <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">Verificando acceso...</div>
    </div>
  }

  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: '📊' },
    { id: 'noticias', name: 'Noticias', icon: '📰' },
    { id: 'eventos', name: 'Eventos', icon: '📅' },
    { id: 'equipos', name: 'Equipos', icon: '👥' },
    { id: 'galeria', name: 'Galería', icon: '🖼️' },
    { id: 'configuracion', name: 'Configuración', icon: '⚙️' }
  ]

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">🏀</span>
            </div>
            <div>
              <h1 className="text-lg font-bold">Trotamundos</h1>
              <p className="text-sm text-gray-600">Admin Panel</p>
            </div>
          </div>
        </div>
        
        <nav className="mt-6">
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full text-left px-6 py-3 flex items-center space-x-3 hover:bg-gray-50 transition-colors ${
                activeSection === item.id ? 'bg-primary-50 border-r-2 border-primary-600 text-primary-600' : 'text-gray-700'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium">{item.name}</span>
            </button>
          ))}
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <button
            onClick={logout}
            className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors text-sm"
          >
            🚪 Cerrar Sesión
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 capitalize">
              {activeSection === 'dashboard' ? 'Panel Principal' : activeSection}
            </h1>
            <p className="text-gray-600 mt-2">
              Gestiona el contenido de tu sitio web de forma fácil
            </p>
          </header>

          {/* Contenido dinámico */}
          {activeSection === 'dashboard' && <DashboardContent />}
          {activeSection === 'noticias' && <NoticiasContent />}
          {activeSection === 'eventos' && <EventosContent />}
          {activeSection === 'equipos' && <EquiposContent />}
          {activeSection === 'galeria' && <GaleriaContent />}
          {activeSection === 'configuracion' && <ConfiguracionContent />}
        </div>
      </div>
    </div>
  )
}

// Componente Dashboard
function DashboardContent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center">
          <div className="p-3 bg-blue-100 rounded-full">
            <span className="text-2xl">📰</span>
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600">Total Noticias</p>
            <p className="text-2xl font-semibold text-gray-900">12</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center">
          <div className="p-3 bg-green-100 rounded-full">
            <span className="text-2xl">📅</span>
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600">Próximos Eventos</p>
            <p className="text-2xl font-semibold text-gray-900">3</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center">
          <div className="p-3 bg-purple-100 rounded-full">
            <span className="text-2xl">👥</span>
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600">Estudiantes</p>
            <p className="text-2xl font-semibold text-gray-900">40</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center">
          <div className="p-3 bg-orange-100 rounded-full">
            <span className="text-2xl">🖼️</span>
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600">Fotos</p>
            <p className="text-2xl font-semibold text-gray-900">156</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Componente Noticias
function NoticiasContent() {
  const [noticias, setNoticias] = useState([
    {
      id: 1,
      titulo: 'Victoria importante contra Águilas',
      fecha: '2025-08-20',
      categoria: 'Equipos',
      estado: 'Publicada'
    },
    {
      id: 2,
      titulo: 'Nuevo entrenamiento de verano',
      fecha: '2025-08-19',
      categoria: 'Entrenamientos',
      estado: 'Borrador'
    }
  ])

  const [showForm, setShowForm] = useState(false)
  const [newNoticia, setNewNoticia] = useState({
    titulo: '',
    contenido: '',
    categoria: 'Noticias Generales'
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const nuevaNoticia = {
      id: noticias.length + 1,
      titulo: newNoticia.titulo,
      fecha: new Date().toISOString().split('T')[0],
      categoria: newNoticia.categoria,
      estado: 'Publicada'
    }
    setNoticias([nuevaNoticia, ...noticias])
    setNewNoticia({ titulo: '', contenido: '', categoria: 'Noticias Generales' })
    setShowForm(false)
    alert('¡Noticia publicada exitosamente!')
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Gestión de Noticias</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
        >
          ➕ Nueva Noticia
        </button>
      </div>

      {showForm && (
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h3 className="text-lg font-bold mb-4">Crear Nueva Noticia</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Título</label>
              <input
                type="text"
                value={newNoticia.titulo}
                onChange={(e) => setNewNoticia({...newNoticia, titulo: e.target.value})}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-500"
                placeholder="Ej: Ganamos el partido contra..."
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Categoría</label>
              <select
                value={newNoticia.categoria}
                onChange={(e) => setNewNoticia({...newNoticia, categoria: e.target.value})}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-500"
              >
                <option>Noticias Generales</option>
                <option>Equipos</option>
                <option>Entrenamientos</option>
                <option>Torneos</option>
                <option>Logros</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Contenido</label>
              <textarea
                value={newNoticia.contenido}
                onChange={(e) => setNewNoticia({...newNoticia, contenido: e.target.value})}
                rows={6}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-500"
                placeholder="Escribe el contenido de la noticia..."
                required
              />
            </div>

            <div className="flex space-x-4">
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
              >
                📢 Publicar Noticia
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3">Título</th>
                <th className="text-left py-3">Fecha</th>
                <th className="text-left py-3">Categoría</th>
                <th className="text-left py-3">Estado</th>
                <th className="text-left py-3">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {noticias.map(noticia => (
                <tr key={noticia.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 font-medium">{noticia.titulo}</td>
                  <td className="py-3 text-gray-600">{noticia.fecha}</td>
                  <td className="py-3">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                      {noticia.categoria}
                    </span>
                  </td>
                  <td className="py-3">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      noticia.estado === 'Publicada' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {noticia.estado}
                    </span>
                  </td>
                  <td className="py-3">
                    <button className="text-blue-600 hover:text-blue-800 mr-3">✏️</button>
                    <button className="text-red-600 hover:text-red-800">🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

// Componentes simples para las otras secciones
function EventosContent() {
  return (
    <div className="bg-white p-8 rounded-lg shadow text-center">
      <span className="text-6xl">📅</span>
      <h3 className="text-xl font-bold mt-4 mb-2">Gestión de Eventos</h3>
      <p className="text-gray-600">Aquí podrás crear y gestionar eventos, partidos y actividades.</p>
      <button className="mt-4 bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700">
        Próximamente
      </button>
    </div>
  )
}

function EquiposContent() {
  return (
    <div className="bg-white p-8 rounded-lg shadow text-center">
      <span className="text-6xl">👥</span>
      <h3 className="text-xl font-bold mt-4 mb-2">Gestión de Equipos</h3>
      <p className="text-gray-600">Administra información de jugadores, entrenadores y estadísticas.</p>
      <button className="mt-4 bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700">
        Próximamente
      </button>
    </div>
  )
}

function GaleriaContent() {
  return (
    <div className="bg-white p-8 rounded-lg shadow text-center">
      <span className="text-6xl">🖼️</span>
      <h3 className="text-xl font-bold mt-4 mb-2">Gestión de Galería</h3>
      <p className="text-gray-600">Sube y organiza fotos y videos de entrenamientos y partidos.</p>
      <button className="mt-4 bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700">
        Próximamente
      </button>
    </div>
  )
}

function ConfiguracionContent() {
  return (
    <div className="bg-white p-8 rounded-lg shadow text-center">
      <span className="text-6xl">⚙️</span>
      <h3 className="text-xl font-bold mt-4 mb-2">Configuración</h3>
      <p className="text-gray-600">Ajusta la configuración general del sitio web.</p>
      <button className="mt-4 bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700">
        Próximamente
      </button>
    </div>
  )
}
