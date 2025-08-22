import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import News from '@/components/News'
import Events from '@/components/Events'
import Teams from '@/components/Teams'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { getSchemaOrgData } from '@/lib/seo'

export default function Home() {
  // Datos estructurados optimizados para SEO
  const organizationSchema = getSchemaOrgData('organization')

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <main className="min-h-screen">
        <Header />
        <Hero />
        <About />
        <News />
        <Events />
        <Teams />
        <Gallery />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
