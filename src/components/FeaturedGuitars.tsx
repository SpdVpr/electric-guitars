'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Users2, ArrowRight } from 'lucide-react'

const FeaturedGuitars = () => {
  const guitars = [
    {
      name: 'Fender Stratocaster',
      image: '/images/guitars/fender-stratocaster.jpg',
      year: '1954',
      brand: 'Fender',
      description: 'The most copied electric guitar design in history, known for its versatile tone and comfortable playability.',
      famousPlayers: ['Jimi Hendrix', 'Eric Clapton', 'David Gilmour'],
      innovations: ['Tremolo system', 'Three single-coil pickups', 'Contoured body'],
      slug: 'fender-stratocaster'
    },
    {
      name: 'Gibson Les Paul',
      image: '/images/guitars/gibson-les-paul.jpg',
      year: '1952',
      brand: 'Gibson',
      description: 'Legendary for its thick, warm sustain and powerful humbucker pickups that defined rock and blues.',
      famousPlayers: ['Jimmy Page', 'Slash', 'Joe Bonamassa'],
      innovations: ['Mahogany body with maple cap', 'Humbucker pickups', 'Tune-o-matic bridge'],
      slug: 'gibson-les-paul'
    },
    {
      name: 'Fender Telecaster',
      image: '/images/guitars/fender-telecaster.jpg',
      year: '1950',
      brand: 'Fender',
      description: 'The first commercially successful solid-body electric guitar, with a bright, cutting tone.',
      famousPlayers: ['Bruce Springsteen', 'Keith Richards', 'Brad Paisley'],
      innovations: ['First mass-produced solid body', 'Bolt-on neck', 'Ash body construction'],
      slug: 'fender-telecaster'
    }
  ]

  return (
    <section className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-gradient mb-6">
            Iconic Instruments
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the guitars that revolutionized music and became the voices of legendary artists. 
            Each model tells a story of innovation and musical evolution.
          </p>
        </div>

        {/* Guitars Grid */}
        <div className="space-y-12">
          {guitars.map((guitar, index) => (
            <div 
              key={guitar.slug}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden hover-glow group">
                  <Image
                    src={guitar.image}
                    alt={guitar.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Year badge */}
                  <div className="absolute top-4 left-4 bg-accent-gold text-black px-3 py-1 rounded-full font-semibold">
                    {guitar.year}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-accent-gold font-semibold">{guitar.brand}</span>
                    <div className="w-2 h-2 bg-accent-gold rounded-full"></div>
                    <span className="text-gray-400 flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {guitar.year}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-playfair font-bold text-white mb-4">
                    {guitar.name}
                  </h3>
                  
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {guitar.description}
                  </p>
                </div>

                {/* Famous Players */}
                <div>
                  <h4 className="text-lg font-semibold text-accent-gold mb-3 flex items-center gap-2">
                    <Users2 className="h-5 w-5" />
                    Famous Players
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {guitar.famousPlayers.map((player) => (
                      <span 
                        key={player}
                        className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-sm border border-white/20"
                      >
                        {player}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Innovations */}
                <div>
                  <h4 className="text-lg font-semibold text-accent-gold mb-3">
                    Key Innovations
                  </h4>
                  <ul className="space-y-2">
                    {guitar.innovations.map((innovation) => (
                      <li key={innovation} className="text-gray-300 flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-accent-gold rounded-full mt-2 flex-shrink-0"></div>
                        {innovation}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  href={`/guitars/${guitar.slug}`}
                  className="inline-flex items-center gap-2 text-accent-gold hover:text-accent-amber transition-colors duration-300 font-semibold text-lg"
                >
                  Learn More
                  <ArrowRight className="h-5 w-5 hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link 
            href="/guitars"
            className="inline-flex items-center gap-2 bg-accent-gold hover:bg-accent-amber text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover-glow"
          >
            Explore All Guitars
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedGuitars