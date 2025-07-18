import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Users2, Music, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Iconic Electric Guitars | Famous Models & Their Stories',
  description: 'Explore the most influential electric guitars in music history. From the Fender Stratocaster to Gibson Les Paul, discover the instruments that shaped music.',
  keywords: 'electric guitars, Fender Stratocaster, Gibson Les Paul, Telecaster, SG, iconic guitars, famous guitar models',
  openGraph: {
    title: 'Iconic Electric Guitars | Famous Models & Their Stories',
    description: 'Discover the most influential electric guitars and their impact on music history',
  },
}

const GuitarsPage = () => {
  const guitars = [
    {
      id: 1,
      name: 'Fender Stratocaster',
      brand: 'Fender',
      year: '1954',
      image: '/images/guitars/fender-stratocaster.jpg',
      description: 'The most copied electric guitar design in history. Leo Fender\'s masterpiece introduced the world to the double-cutaway body, synchronized tremolo, and three single-coil pickup configuration that became the standard for electric guitars.',
      technicalSpecs: {
        body: 'Alder or Ash',
        neck: 'Maple',
        pickups: '3 Single-Coil',
        bridge: 'Synchronized Tremolo'
      },
      innovations: [
        'Contoured body for comfort',
        'Synchronized tremolo system',
        'Three single-coil pickup layout',
        'Five-way pickup selector'
      ],
      famousPlayers: ['Jimi Hendrix', 'Eric Clapton', 'David Gilmour', 'John Mayer'],
      culturalImpact: 'Defined the sound of rock, blues, and pop music for over 70 years.',
      slug: 'fender-stratocaster'
    },
    {
      id: 2,
      name: 'Gibson Les Paul',
      brand: 'Gibson',
      year: '1952',
      image: '/images/guitars/gibson-les-paul.jpg',
      description: 'The quintessential rock guitar, known for its thick, warm sustain and powerful humbucker pickups. Designed in collaboration with jazz guitarist Les Paul, it became the weapon of choice for rock legends.',
      technicalSpecs: {
        body: 'Mahogany with Maple Cap',
        neck: 'Mahogany',
        pickups: '2 Humbuckers',
        bridge: 'Tune-o-matic with Stop Tailpiece'
      },
      innovations: [
        'Mahogany body with maple cap',
        'Humbucker pickup design',
        'Tune-o-matic bridge system',
        'Binding and premium appointments'
      ],
      famousPlayers: ['Jimmy Page', 'Slash', 'Joe Bonamassa', 'Gary Moore'],
      culturalImpact: 'Became synonymous with hard rock and heavy metal, defining the "thick" guitar sound.',
      slug: 'gibson-les-paul'
    },
    {
      id: 3,
      name: 'Fender Telecaster',
      brand: 'Fender',
      year: '1950',
      image: '/images/guitars/fender-telecaster.jpg',
      description: 'The first commercially successful solid-body electric guitar. Originally called the Broadcaster, the Telecaster\'s simple design and bright, cutting tone made it a favorite among country and rock musicians.',
      technicalSpecs: {
        body: 'Ash or Alder',
        neck: 'Maple',
        pickups: '2 Single-Coil',
        bridge: 'Fixed Bridge with 3 Saddles'
      },
      innovations: [
        'First mass-produced solid-body guitar',
        'Bolt-on neck construction',
        'Simple, reliable electronics',
        'Bright, cutting tone'
      ],
      famousPlayers: ['Bruce Springsteen', 'Keith Richards', 'Brad Paisley', 'Joe Strummer'],
      culturalImpact: 'Pioneered the solid-body electric guitar and influenced countless designs that followed.',
      slug: 'fender-telecaster'
    },
    {
      id: 4,
      name: 'Gibson SG',
      brand: 'Gibson',
      year: '1961',
      image: '/images/guitars/gibson-sg.jpg',
      description: 'Gibson\'s response to Fender\'s success, the SG featured a thinner, lighter body with dual cutaways for easy access to higher frets. Its devilish design became iconic in rock and metal.',
      technicalSpecs: {
        body: 'Mahogany',
        neck: 'Mahogany',
        pickups: '2 Humbuckers',
        bridge: 'Tune-o-matic with Vibrato or Stop Tailpiece'
      },
      innovations: [
        'Lightweight thin body design',
        'Dual cutaway for fret access',
        'Devil horn body shape',
        'Improved neck joint'
      ],
      famousPlayers: ['Angus Young', 'Tony Iommi', 'Derek Trucks', 'Sister Rosetta Tharpe'],
      culturalImpact: 'Became the face of hard rock and heavy metal with its aggressive appearance and tone.',
      slug: 'gibson-sg'
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-background-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-playfair font-bold text-gradient mb-6">
              Iconic Instruments
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover the electric guitars that revolutionized music and became the voices of legendary artists. 
              Each instrument represents a breakthrough in design, technology, and musical expression.
            </p>
          </div>
        </div>
      </section>

      {/* Guitars Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {guitars.map((guitar, index) => (
              <article 
                key={guitar.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden hover-glow group">
                    <Image
                      src={guitar.image}
                      alt={guitar.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Year badge */}
                    <div className="absolute top-6 left-6 bg-accent-gold text-black px-4 py-2 rounded-full font-bold text-lg">
                      {guitar.year}
                    </div>
                    
                    {/* Brand badge */}
                    <div className="absolute top-6 right-6 glass-effect px-4 py-2 rounded-full text-white font-semibold">
                      {guitar.brand}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div>
                    <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-white mb-4">
                      {guitar.name}
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {guitar.description}
                    </p>
                  </div>

                  {/* Technical Specs */}
                  <div className="glass-effect rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-accent-gold mb-4 flex items-center gap-2">
                      <Zap className="h-5 w-5" />
                      Technical Specifications
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(guitar.technicalSpecs).map(([key, value]) => (
                        <div key={key}>
                          <div className="text-sm text-gray-400 capitalize">{key}</div>
                          <div className="text-white font-medium">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Innovations */}
                  <div>
                    <h3 className="text-xl font-semibold text-accent-gold mb-4">
                      Key Innovations
                    </h3>
                    <ul className="space-y-2">
                      {guitar.innovations.map((innovation) => (
                        <li key={innovation} className="text-gray-300 flex items-start gap-3">
                          <div className="w-2 h-2 bg-accent-gold rounded-full mt-2 flex-shrink-0"></div>
                          {innovation}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Famous Players */}
                  <div>
                    <h3 className="text-xl font-semibold text-accent-gold mb-4 flex items-center gap-2">
                      <Users2 className="h-5 w-5" />
                      Famous Players
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {guitar.famousPlayers.map((player) => (
                        <span 
                          key={player}
                          className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-sm border border-white/20 hover:bg-accent-gold/20 hover:text-accent-gold transition-colors duration-300"
                        >
                          {player}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Cultural Impact */}
                  <div className="bg-accent-gold/10 border border-accent-gold/30 rounded-xl p-4">
                    <h3 className="text-lg font-semibold text-accent-gold mb-2 flex items-center gap-2">
                      <Music className="h-5 w-5" />
                      Cultural Impact
                    </h3>
                    <p className="text-gray-300">{guitar.culturalImpact}</p>
                  </div>

                  <Link 
                    href={`/guitars/${guitar.slug}`}
                    className="inline-flex items-center gap-2 bg-accent-gold hover:bg-accent-amber text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover-glow"
                  >
                    Learn More About {guitar.name}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Iconic Electric Guitars',
            description: 'Comprehensive guide to the most influential electric guitars in music history',
            url: 'https://electric-guitars-showcase.vercel.app/guitars',
            mainEntity: guitars.map(guitar => ({
              '@type': 'Product',
              name: guitar.name,
              brand: guitar.brand,
              description: guitar.description,
              url: `https://electric-guitars-showcase.vercel.app/guitars/${guitar.slug}`,
              image: `https://electric-guitars-showcase.vercel.app${guitar.image}`,
              releaseDate: guitar.year
            }))
          })
        }}
      />
    </div>
  )
}

export default GuitarsPage