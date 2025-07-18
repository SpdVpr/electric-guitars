import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, MapPin, Award, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Electric Guitar Brands | Famous Manufacturers & Their Legacy',
  description: 'Comprehensive guide to legendary electric guitar brands including Fender, Gibson, PRS, Rickenbacker, and more. Discover their history, iconic models, and innovations.',
  keywords: 'electric guitar brands, Fender guitars, Gibson guitars, PRS guitars, Rickenbacker guitars, Ibanez guitars, guitar manufacturers',
  openGraph: {
    title: 'Electric Guitar Brands | Famous Manufacturers & Their Legacy',
    description: 'Comprehensive guide to legendary electric guitar brands and their innovations',
  },
}

const BrandsPage = () => {
  const brands = [
    {
      id: 1,
      name: 'Fender',
      logo: '/images/brands/fender-logo.png',
      founded: '1946',
      founder: 'Leo Fender',
      location: 'Fullerton, California',
      description: 'Fender revolutionized the music industry with the first mass-produced solid-body electric guitar and bass. Known for bright, cutting tones and innovative designs.',
      iconicModels: ['Stratocaster', 'Telecaster', 'Jazzmaster', 'Jaguar'],
      innovations: ['First mass-produced solid-body guitar', 'Bolt-on neck construction', 'Single-coil pickups'],
      notableArtists: ['Jimi Hendrix', 'Eric Clapton', 'David Gilmour', 'John Mayer'],
      slug: 'fender',
      backgroundColor: 'from-yellow-900/20 to-orange-900/20'
    },
    {
      id: 2,
      name: 'Gibson',
      logo: '/images/brands/gibson-logo.jpg',
      founded: '1902',
      founder: 'Orville Gibson',
      location: 'Kalamazoo, Michigan',
      description: 'Gibson is synonymous with premium craftsmanship and warm, sustaining tones. Famous for mahogany construction and humbucker pickups.',
      iconicModels: ['Les Paul', 'SG', 'Flying V', 'Explorer'],
      innovations: ['Humbucker pickups', 'Mahogany/maple construction', 'Tune-o-matic bridge'],
      notableArtists: ['Jimmy Page', 'Slash', 'Angus Young', 'Joe Bonamassa'],
      slug: 'gibson',
      backgroundColor: 'from-red-900/20 to-amber-900/20'
    },
    {
      id: 3,
      name: 'PRS (Paul Reed Smith)',
      logo: '/images/brands/prs-logo.jpg',
      founded: '1985',
      founder: 'Paul Reed Smith',
      location: 'Stevensville, Maryland',
      description: 'PRS combines the best of vintage tone with modern manufacturing precision. Known for beautiful figured tops and versatile electronics.',
      iconicModels: ['Custom 24', 'McCarty', 'Silver Sky', 'Hollowbody'],
      innovations: ['Floating tremolo system', 'Bird inlays', '5-way pickup switching'],
      notableArtists: ['Carlos Santana', 'John Mayer', 'Mark Tremonti', 'Al Di Meola'],
      slug: 'prs',
      backgroundColor: 'from-purple-900/20 to-blue-900/20'
    },
    {
      id: 4,
      name: 'Rickenbacker',
      logo: '/images/brands/rickenbacker-logo.png',
      founded: '1931',
      founder: 'Adolph Rickenbacker',
      location: 'Santa Ana, California',
      description: 'Pioneer of the electric guitar, Rickenbacker created the first electric guitar and is famous for its distinctive jangly tone and unique designs.',
      iconicModels: ['330', '360', '370', '4003 Bass'],
      innovations: ['First electric guitar', 'Jangle tone', 'Semi-hollow construction'],
      notableArtists: ['John Lennon', 'George Harrison', 'Roger McGuinn', 'Tom Petty'],
      slug: 'rickenbacker',
      backgroundColor: 'from-green-900/20 to-teal-900/20'
    },
    {
      id: 5,
      name: 'Ibanez',
      logo: '/images/guitars/ibanez.jpg',
      founded: '1957',
      founder: 'Hoshino Gakki',
      location: 'Nagoya, Japan',
      description: 'Ibanez is renowned for its high-performance electric guitars, particularly in rock and metal genres. Known for fast necks and modern features.',
      iconicModels: ['RG Series', 'JEM', 'Artcore', 'S Series'],
      innovations: ['Thin fast necks', 'Double-locking tremolo', 'Modern pickup designs'],
      notableArtists: ['Steve Vai', 'Joe Satriani', 'Paul Gilbert', 'Korn'],
      slug: 'ibanez',
      backgroundColor: 'from-indigo-900/20 to-slate-900/20'
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-background-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-playfair font-bold text-gradient mb-6">
              Legendary Brands
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Meet the master craftsmen and visionary companies that shaped the sound of modern music. 
              From Leo Fender&apos;s revolutionary designs to Gibson&apos;s premium craftsmanship, 
              each brand brings its own unique legacy of innovation and artistry.
            </p>
          </div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            {brands.map((brand, index) => (
              <div 
                key={brand.id}
                className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${brand.backgroundColor} border border-white/10`}
              >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 p-8 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    {/* Logo and Basic Info */}
                    <div className="text-center lg:text-left">
                      <div className="relative w-32 h-32 mx-auto lg:mx-0 mb-6">
                        <Image
                          src={brand.logo}
                          alt={`${brand.name} logo`}
                          fill
                          className="object-contain filter brightness-0 invert"
                        />
                      </div>
                      <h2 className="text-4xl font-playfair font-bold text-white mb-4">
                        {brand.name}
                      </h2>
                      <div className="space-y-2 text-gray-300">
                        <div className="flex items-center justify-center lg:justify-start gap-2">
                          <Calendar className="h-5 w-5 text-accent-gold" />
                          <span>Founded {brand.founded} by {brand.founder}</span>
                        </div>
                        <div className="flex items-center justify-center lg:justify-start gap-2">
                          <MapPin className="h-5 w-5 text-accent-gold" />
                          <span>{brand.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description and Details */}
                    <div className="lg:col-span-2 space-y-6">
                      <p className="text-lg text-gray-200 leading-relaxed">
                        {brand.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Iconic Models */}
                        <div>
                          <h3 className="text-lg font-semibold text-accent-gold mb-3 flex items-center gap-2">
                            <Award className="h-5 w-5" />
                            Iconic Models
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {brand.iconicModels.map((model) => (
                              <span 
                                key={model}
                                className="bg-white/20 text-white px-3 py-1 rounded-full text-sm border border-white/30"
                              >
                                {model}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Notable Artists */}
                        <div>
                          <h3 className="text-lg font-semibold text-accent-gold mb-3">
                            Notable Artists
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {brand.notableArtists.map((artist) => (
                              <span 
                                key={artist}
                                className="bg-accent-gold/20 text-accent-gold px-3 py-1 rounded-full text-sm border border-accent-gold/30"
                              >
                                {artist}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Innovations */}
                      <div>
                        <h3 className="text-lg font-semibold text-accent-gold mb-3">
                          Key Innovations
                        </h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {brand.innovations.map((innovation) => (
                            <li key={innovation} className="text-gray-300 flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-accent-gold rounded-full mt-2 flex-shrink-0"></div>
                              {innovation}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link 
                        href={`/brands/${brand.slug}`}
                        className="inline-flex items-center gap-2 bg-accent-gold hover:bg-accent-amber text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover-glow"
                      >
                        Explore {brand.name}
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
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
            name: 'Electric Guitar Brands',
            description: 'Comprehensive guide to legendary electric guitar brands and manufacturers',
            url: 'https://electric-guitars-showcase.vercel.app/brands',
            mainEntity: brands.map(brand => ({
              '@type': 'Brand',
              name: brand.name,
              foundingDate: brand.founded,
              founder: brand.founder,
              url: `https://electric-guitars-showcase.vercel.app/brands/${brand.slug}`,
              description: brand.description,
              logo: `https://electric-guitars-showcase.vercel.app${brand.logo}`
            }))
          })
        }}
      />
    </div>
  )
}

export default BrandsPage