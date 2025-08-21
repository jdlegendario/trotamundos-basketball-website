'use client'

import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    edad: '',
    mensaje: ''
  })

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData)
    alert('¡Gracias por tu interés! Te contactaremos pronto.')
  }

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Contacto
          </h2>
          <p className="text-xl text-gray-600">
            ¿Listo para unirte a nuestra familia? Contáctanos hoy mismo
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulario */}
          <div className="card">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Formulario de Inscripción
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Edad
                    </label>
                    <input
                      type="number"
                      name="edad"
                      value={formData.edad}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje (opcional)
                  </label>
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Cuéntanos sobre tu experiencia previa o expectativas..."
                  ></textarea>
                </div>

                <button type="submit" className="w-full btn-primary text-lg">
                  Enviar Solicitud de Inscripción
                </button>
              </form>
            </div>
          </div>

          {/* Información de contacto */}
          <div>
            <div className="card mb-8">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Información de Contacto
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 basketball-gradient rounded-lg flex items-center justify-center text-white mr-4 flex-shrink-0">
                      📱
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Teléfono</h4>
                      <p className="text-gray-600">097 972 2094</p>
                      <p className="text-sm text-gray-500">Lun - Vie: 8:00 AM - 8:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 basketball-gradient rounded-lg flex items-center justify-center text-white mr-4 flex-shrink-0">
                      📧
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                      <p className="text-gray-600">yosoycaballitozeballos@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 basketball-gradient rounded-lg flex items-center justify-center text-white mr-4 flex-shrink-0">
                      📍
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Ubicación</h4>
                      <p className="text-gray-600">Ecuador</p>
                      <button className="text-primary-600 hover:text-primary-700 text-sm font-medium mt-1">
                        Ver en mapa →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Redes sociales */}
            <div className="card">
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  Síguenos en Redes Sociales
                </h3>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/caballitozeballosm" className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                    📘
                  </a>
                  <a href="https://twitter.com/Fund_Caballito" className="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center text-white hover:bg-blue-500 transition-colors">
                    🐦
                  </a>
                  <a href="https://www.instagram.com/yosoycaballito/" className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center text-white hover:bg-pink-700 transition-colors">
                    📷
                  </a>
                  <a href="https://api.whatsapp.com/send?phone=593959170756" className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white hover:bg-green-700 transition-colors">
                    💬
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
