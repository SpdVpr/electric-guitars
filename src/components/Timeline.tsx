'use client'

import { useState } from 'react'
import { Calendar, ArrowRight, Zap, Music, Award } from 'lucide-react'

const Timeline = () => {
  const [selectedEra, setSelectedEra] = useState(0)
  
  const timelineEvents = [
    {
      year: '1931',
      era: 'Birth of Electric',
      title: 'Rickenbacker "Frying Pan"',
      description: 'The first commercially produced electric guitar, featuring an electromagnetic pickup.',
      icon: Zap,
      category: 'Innovation',
      details: 'Adolph Rickenbacker and George Beauchamp created the first electric guitar, nicknamed the "Frying Pan" due to its shape.'
    },
    {
      year: '1950',
      era: 'Solid Body Revolution',
      title: 'Fender Broadcaster/Telecaster',
      description: 'Leo Fender introduced the first mass-produced solid-body electric guitar.',
      icon: Music,
      category: 'Milestone',
      details: 'The Telecaster (originally Broadcaster) was the first commercially successful solid-body electric guitar, setting the standard for the industry.'
    },
    {
      year: '1952',
      era: 'Gibson Enters',
      title: 'Gibson Les Paul',
      description: 'Gibson\'s response to Fender, featuring a mahogany body with maple cap.',
      icon: Award,
      category: 'Classic',
      details: 'Designed in collaboration with Les Paul, this guitar introduced the concept of sustainable solid-body construction with premium tonewoods.'
    },
    {
      year: '1954',
      era: 'Design Revolution',
      title: 'Fender Stratocaster',
      description: 'The most copied electric guitar design, introducing contoured body and tremolo.',
      icon: Zap,
      category: 'Innovation',
      details: 'The Stratocaster featured revolutionary ergonomic design with a double-cutaway body, synchronized tremolo, and three single-coil pickups.'
    },
    {
      year: '1958',
      era: 'Humbucker Era',
      title: 'Gibson PAF Humbuckers',
      description: 'Seth Lover invented the humbucker pickup, eliminating noise and hum.',
      icon: Zap,
      category: 'Innovation',
      details: 'The Patent Applied For (PAF) humbucker revolutionized electric guitar tone by canceling noise while maintaining rich, warm sound.'
    },
    {
      year: '1961',
      era: 'Gibson SG',
      title: 'Gibson SG Launch',
      description: 'Lightweight design with dual cutaways for easy access to higher frets.',
      icon: Music,
      category: 'Design',
      details: 'The SG (Solid Guitar) featured a thinner, lighter body design that became popular in rock and heavy metal music.'
    },
    {
      year: '1976',
      era: 'Vintage Revival',
      title: 'Guitar Collecting Boom',
      description: 'Vintage guitars began appreciating in value, creating the collector market.',
      icon: Award,
      category: 'Culture',
      details: 'As guitar heroes emerged, vintage instruments became highly sought after, establishing the vintage guitar market.'
    },
    {
      year: '1985',
      era: 'Modern Innovation',
      title: 'PRS Guitars Founded',
      description: 'Paul Reed Smith combined vintage tone with modern manufacturing.',
      icon: Zap,
      category: 'Innovation',
      details: 'PRS guitars bridged the gap between Gibson and Fender, offering modern construction with vintage-inspired tone.'
    },
    {
      year: '2000s',
      era: 'Digital Age',
      title: 'Modeling & Effects',
      description: 'Digital modeling and advanced effects processors revolutionized guitar sound.',
      icon: Zap,
      category: 'Technology',
      details: 'Companies like Line 6 and Fractal Audio introduced sophisticated digital modeling of vintage amplifiers and effects.'
    },
    {
      year: '2020s',
      era: 'Modern Era',
      title: 'AI & Sustainability',
      description: 'AI-assisted design and sustainable materials shape the future.',
      icon: Zap,
      category: 'Future',
      details: 'Modern guitar making incorporates AI-assisted design, sustainable materials, and advanced pickup technologies while honoring traditional craftsmanship.'
    }
  ]

  const eras = [
    { name: 'Birth (1930s)', range: [0, 1] },
    { name: 'Golden Age (1950s)', range: [1, 4] },
    { name: 'Rock Era (1960s-70s)', range: [4, 6] },
    { name: 'Modern (1980s-2000s)', range: [6, 8] },
    { name: 'Digital Age (2000s+)', range: [8, 10] }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-gradient mb-6">
            Evolution Timeline
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Trace the remarkable journey of electric guitar development from the 1930s to the present day. 
            Each milestone represents a leap forward in music technology and culture.
          </p>
          
          {/* Era selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {eras.map((era, index) => (
              <button
                key={index}
                onClick={() => setSelectedEra(index)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  selectedEra === index 
                    ? 'bg-accent-gold text-black font-semibold' 
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {era.name}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-gold via-accent-amber to-accent-gold"></div>

          {/* Timeline events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const IconComponent = event.icon
              const isVisible = selectedEra === 0 || 
                (index >= eras[selectedEra - 1]?.range[0] && index < eras[selectedEra - 1]?.range[1])
              
              if (selectedEra > 0 && !isVisible) return null
              
              return (
                <div 
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent-gold rounded-full border-4 border-background z-10">
                    <div className="w-full h-full bg-accent-gold rounded-full animate-pulse"></div>
                  </div>

                  {/* Content */}
                  <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="glass-effect rounded-2xl p-6 hover-glow group">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg bg-accent-gold/20 group-hover:bg-accent-gold/30 transition-colors duration-300`}>
                          <IconComponent className="h-6 w-6 text-accent-gold" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-2xl font-bold text-accent-gold">{event.year}</span>
                            <span className="text-sm bg-white/10 text-gray-300 px-2 py-1 rounded">
                              {event.category}
                            </span>
                          </div>
                          
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-gold transition-colors duration-300">
                            {event.title}
                          </h3>
                          
                          <p className="text-gray-300 mb-3">
                            {event.description}
                          </p>
                          
                          <p className="text-sm text-gray-400 leading-relaxed">
                            {event.details}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Era label (hidden on mobile, shown on desktop) */}
                  <div className={`hidden md:block flex-1 ${index % 2 === 0 ? 'pl-12 text-left' : 'pr-12 text-right'}`}>
                    <div className="text-lg font-semibold text-accent-gold">
                      {event.era}
                    </div>
                    <div className="text-sm text-gray-400">
                      Era of {event.category}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center gap-2 bg-accent-gold hover:bg-accent-amber text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover-glow">
            <Calendar className="h-5 w-5" />
            View Complete History
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Timeline