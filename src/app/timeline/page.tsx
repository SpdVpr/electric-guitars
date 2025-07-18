import type { Metadata } from 'next'
import Timeline from '@/components/Timeline'

export const metadata: Metadata = {
  title: 'Electric Guitar Timeline | 95 Years of Innovation (1931-2025)',
  description: 'Interactive timeline showcasing the evolution of electric guitars from 1931 to 2025. Explore major milestones, innovations, and cultural moments.',
  keywords: 'electric guitar timeline, guitar history timeline, music innovation timeline, guitar evolution, electric guitar milestones',
  openGraph: {
    title: 'Electric Guitar Timeline | 95 Years of Innovation',
    description: 'Interactive timeline of electric guitar evolution and major milestones',
  },
}

const TimelinePage = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-background-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-playfair font-bold text-gradient mb-6">
              Timeline of Innovation
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Journey through 95 years of electric guitar evolution. From the first electromagnetic pickup 
              to modern AI-assisted design, discover how each innovation shaped the sound of music.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Component */}
      <Timeline />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Electric Guitar Timeline | 95 Years of Innovation (1931-2025)',
            description: 'Interactive timeline showcasing the evolution of electric guitars from 1931 to 2025',
            author: {
              '@type': 'Person',
              name: 'MiniMax Agent'
            },
            publisher: {
              '@type': 'Organization',
              name: 'Electric Guitars Showcase'
            },
            datePublished: '2025-01-19',
            dateModified: '2025-01-19',
            url: 'https://electric-guitars-showcase.vercel.app/timeline'
          })
        }}
      />
    </div>
  )
}

export default TimelinePage