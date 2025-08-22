import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Trotamundos - Escuela de Básquet en Ecuador | Entrenamientos Profesionales',
  description: 'Escuela de básquet Trotamundos en Ecuador. 3+ años formando jugadores con entrenamientos profesionales. 40+ estudiantes activos, 2 entrenadores certificados. ¡Únete a nuestra aventura deportiva!',
  keywords: 'básquet Ecuador, escuela básquet, entrenamientos básquet, basketball Ecuador, deportes niños, academia básquet, Trotamundos, clases básquet profesionales, entrenamiento deportivo juvenil',
  authors: [{ name: 'Trotamundos Básquet' }],
  creator: 'Trotamundos Básquet',
  publisher: 'Trotamundos Básquet',
  robots: 'index, follow',
  icons: {
    icon: '/icon.png',
    shortcut: '/favicon.ico',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'Trotamundos - Escuela de Básquet en Ecuador',
    description: 'Escuela de básquet joven y en crecimiento con 40+ estudiantes activos y entrenamientos profesionales en Ecuador.',
    url: 'https://trotamundos-basquet.com',
    siteName: 'Trotamundos Básquet',
    locale: 'es_EC',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Trotamundos - Escuela de Básquet Ecuador'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trotamundos - Escuela de Básquet en Ecuador',
    description: 'Únete a nuestra aventura deportiva. Entrenamientos profesionales de básquet para todas las edades.',
    images: ['/twitter-image.jpg']
  },
  alternates: {
    canonical: 'https://trotamundos-basquet.com'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
