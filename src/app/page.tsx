import Hero from '@/components/Hero'
import FeaturedBrands from '@/components/FeaturedBrands'
import Timeline from '@/components/Timeline'
import FeaturedGuitars from '@/components/FeaturedGuitars'
import AboutSection from '@/components/AboutSection'

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Electric Guitars Showcase',
    description: 'Comprehensive history of electric guitars from the 1930s to 2025. Discover famous brands like Fender, Gibson, PRS, and Rickenbacker.',
    url: 'https://electric-guitars-showcase.vercel.app',
    publisher: {
      '@type': 'Organization',
      name: 'Electric Guitars Showcase',
      url: 'https://electric-guitars-showcase.vercel.app'
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://electric-guitars-showcase.vercel.app/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    },
    mainEntity: {
      '@type': 'ItemList',
      name: 'Electric Guitar Brands and History',
      description: 'Collection of electric guitar brands, models, and historical information',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@type': 'WebPage',
            name: 'Guitar History',
            url: 'https://electric-guitars-showcase.vercel.app/history'
          }
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@type': 'WebPage',
            name: 'Guitar Brands',
            url: 'https://electric-guitars-showcase.vercel.app/brands'
          }
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: {
            '@type': 'WebPage',
            name: 'Guitar Models',
            url: 'https://electric-guitars-showcase.vercel.app/guitars'
          }
        }
      ]
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />
      <AboutSection />
      <FeaturedBrands />
      <FeaturedGuitars />
      <Timeline />
    </>
  )
}