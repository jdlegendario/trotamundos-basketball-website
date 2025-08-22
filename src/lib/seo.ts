// Configuración para optimización SEO
export const seoConfig = {
  siteName: 'Trotamundos Básquet',
  siteUrl: 'https://trotamundos-basquet.com',
  defaultTitle: 'Trotamundos - Escuela de Básquet en Ecuador',
  defaultDescription: 'Escuela de básquet joven en Ecuador con entrenamientos profesionales. 3+ años de experiencia, 40+ estudiantes activos, 2 entrenadores certificados.',
  keywords: [
    'básquet Ecuador',
    'escuela básquet',
    'entrenamientos básquet',
    'basketball Ecuador',
    'deportes niños',
    'academia básquet',
    'Trotamundos',
    'clases básquet profesionales',
    'entrenamiento deportivo juvenil',
    'básquet Quito',
    'básquet Guayaquil',
    'formación deportiva',
    'valores deportivos'
  ],
  author: 'Trotamundos Básquet',
  social: {
    facebook: 'https://www.facebook.com/trotamundos',
    instagram: 'https://www.instagram.com/trotamundos',
    telegram: 'https://t.me/+pjK0UzNs-Kw3YTVh'
  }
}

// Datos estructurados para diferentes tipos de contenido
export const getSchemaOrgData = (type: 'organization' | 'article' | 'event', data?: any) => {
  const baseSchema = {
    '@context': 'https://schema.org',
  }

  switch (type) {
    case 'organization':
      return {
        ...baseSchema,
        '@type': 'SportsOrganization',
        name: 'Trotamundos Básquet',
        alternateName: 'Escuela de Básquet Trotamundos',
        description: seoConfig.defaultDescription,
        url: seoConfig.siteUrl,
        logo: `${seoConfig.siteUrl}/logo.png`,
        image: `${seoConfig.siteUrl}/og-image.jpg`,
        sport: 'Basketball',
        foundingDate: '2022',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'EC',
          addressLocality: 'Ecuador'
        },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          areaServed: 'EC',
          availableLanguage: 'Spanish'
        },
        sameAs: Object.values(seoConfig.social)
      }

    case 'article':
      return {
        ...baseSchema,
        '@type': 'Article',
        headline: data.title,
        description: data.description,
        image: data.image,
        datePublished: data.publishDate,
        dateModified: data.modifiedDate,
        author: {
          '@type': 'Organization',
          name: seoConfig.author
        },
        publisher: {
          '@type': 'Organization',
          name: seoConfig.author,
          logo: {
            '@type': 'ImageObject',
            url: `${seoConfig.siteUrl}/logo.png`
          }
        }
      }

    case 'event':
      return {
        ...baseSchema,
        '@type': 'SportsEvent',
        name: data.title,
        description: data.description,
        startDate: data.startDate,
        endDate: data.endDate,
        location: {
          '@type': 'Place',
          name: data.location,
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'EC'
          }
        },
        organizer: {
          '@type': 'Organization',
          name: 'Trotamundos Básquet'
        }
      }

    default:
      return baseSchema
  }
}
