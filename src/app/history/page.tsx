import type { Metadata } from 'next'
import Image from 'next/image'
import { Calendar, Lightbulb, Music, Award, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Electric Guitar History | Evolution from 1930s to 2025',
  description: 'Complete history of electric guitars from the first electromagnetic pickup in 1931 to modern innovations. Discover how electric guitars revolutionized music.',
  keywords: 'electric guitar history, guitar evolution, Rickenbacker frying pan, Leo Fender, Les Paul, guitar timeline, music history',
  openGraph: {
    title: 'Electric Guitar History | Evolution from 1930s to 2025',
    description: 'Comprehensive history of electric guitar development and its impact on music',
  },
}

const HistoryPage = () => {
  const historicalPeriods = [
    {
      period: 'Pre-Electric Era (1920s-1930s)',
      icon: Lightbulb,
      color: 'from-blue-500 to-purple-500',
      description: 'Before electric guitars, musicians struggled with volume in big bands and orchestras.',
      keyEvents: [
        'Acoustic guitars could not compete with brass and percussion',
        'Musicians experimented with megaphones and resonators',
        'Need for amplification became critical in jazz ensembles'
      ]
    },
    {
      period: 'Birth of Electric (1931-1940s)',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      description: 'The first electric guitars emerged, revolutionizing popular music forever.',
      keyEvents: [
        '1931: Rickenbacker "Frying Pan" - first electric guitar',
        '1936: Gibson ES-150 with Charlie Christian pickup',
        '1940s: Electric guitars gain popularity in jazz and country'
      ]
    },
    {
      period: 'Solid Body Revolution (1950s)',
      icon: Music,
      color: 'from-green-500 to-teal-500',
      description: 'Leo Fender and Gibson introduced solid-body designs that eliminated feedback.',
      keyEvents: [
        '1950: Fender Broadcaster/Telecaster launched',
        '1952: Gibson Les Paul introduced',
        '1954: Fender Stratocaster changed everything'
      ]
    },
    {
      period: 'Golden Age (1960s-1970s)',
      icon: Award,
      color: 'from-red-500 to-pink-500',
      description: 'Electric guitars became the centerpiece of rock music and cultural revolution.',
      keyEvents: [
        '1960s: British Invasion popularized electric guitars',
        'Hendrix, Clapton, and Page became guitar heroes',
        'Effects pedals and amplifier innovations'
      ]
    },
    {
      period: 'Modern Era (1980s-Present)',
      icon: Zap,
      color: 'from-purple-500 to-indigo-500',
      description: 'Digital technology, new materials, and global manufacturing transformed the industry.',
      keyEvents: [
        'Digital effects and modeling amplifiers',
        'Extended range guitars and new pickup designs',
        'Sustainable materials and AI-assisted design'
      ]
    }
  ]

  const milestones = [
    {
      year: '1931',
      event: 'First Electric Guitar',
      description: 'Rickenbacker creates the "Frying Pan," the world&apos;s first electric guitar.',
      impact: 'Proved that electric amplification could work for stringed instruments.'
    },
    {
      year: '1936',
      event: 'Gibson ES-150',
      description: 'Gibson releases the ES-150 with the famous "Charlie Christian" pickup.',
      impact: 'Established Gibson as a major player in electric guitar manufacturing.'
    },
    {
      year: '1950',
      event: 'Fender Telecaster',
      description: 'Leo Fender introduces the first mass-produced solid-body electric guitar.',
      impact: 'Revolutionized guitar manufacturing and eliminated feedback issues.'
    },
    {
      year: '1954',
      event: 'Fender Stratocaster',
      description: 'The Stratocaster introduced contoured body design and tremolo system.',
      impact: 'Became the most copied guitar design in history.'
    },
    {
      year: '1958',
      event: 'Gibson PAF Humbuckers',
      description: 'Seth Lover invents the humbucker pickup, eliminating 60-cycle hum.',
      impact: 'Enabled higher gain and distortion while maintaining clarity.'
    },
    {
      year: '1969',
      event: 'Woodstock Festival',
      description: 'Jimi Hendrix\'s performance showcased the electric guitar\'s artistic potential.',
      impact: 'Elevated the electric guitar to an art form and cultural symbol.'
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-background-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/guitars/vintage-historical.jpg"
            alt="Vintage electric guitars"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-playfair font-bold text-gradient mb-6">
              Electric Guitar History
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              From the first electromagnetic pickup in 1931 to today&apos;s digital innovations, 
              the electric guitar has continuously evolved while maintaining its soul. 
              Discover the remarkable journey of the instrument that changed music forever.
            </p>
          </div>
        </div>
      </section>

      {/* Historical Periods */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-playfair font-bold text-gradient text-center mb-16">
            Eras of Evolution
          </h2>
          
          <div className="grid gap-8">
            {historicalPeriods.map((period, index) => {
              const IconComponent = period.icon
              return (
                <div 
                  key={index}
                  className="glass-effect rounded-3xl p-8 hover-glow group"
                >
                  <div className="flex items-start gap-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${period.color} flex-shrink-0`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent-gold transition-colors duration-300">
                        {period.period}
                      </h3>
                      <p className="text-lg text-gray-300 mb-6">
                        {period.description}
                      </p>
                      
                      <div className="space-y-3">
                        {period.keyEvents.map((event, eventIndex) => (
                          <div key={eventIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-accent-gold rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-400">{event}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Major Milestones Timeline */}
      <section className="py-20 bg-background-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-playfair font-bold text-gradient text-center mb-16">
            Major Milestones
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-gold via-accent-amber to-accent-gold"></div>
            
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-accent-gold rounded-full border-4 border-background z-10">
                    <div className="w-full h-full bg-accent-gold rounded-full animate-pulse"></div>
                  </div>

                  {/* Content */}
                  <div className={`flex-1 ml-20 md:ml-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                    <div className="glass-effect rounded-2xl p-6 hover-glow">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl font-bold text-accent-gold">{milestone.year}</span>
                        <Calendar className="h-5 w-5 text-accent-gold" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3">
                        {milestone.event}
                      </h3>
                      
                      <p className="text-gray-300 mb-4">
                        {milestone.description}
                      </p>
                      
                      <div className="bg-accent-gold/10 border border-accent-gold/30 rounded-lg p-3">
                        <strong className="text-accent-gold text-sm">Impact:</strong>
                        <p className="text-gray-300 text-sm mt-1">{milestone.impact}</p>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for layout */}
                  <div className="hidden md:block flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Electric Guitar History | Evolution from 1930s to 2025',
            description: 'Complete history of electric guitars from the first electromagnetic pickup in 1931 to modern innovations',
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
            url: 'https://electric-guitars-showcase.vercel.app/history'
          })
        }}
      />
    </div>
  )
}

export default HistoryPage