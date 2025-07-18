'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Star } from 'lucide-react'

const FeaturedBrands = () => {
  const brands = [
    {
      name: 'Fender',
      logo: '/images/brands/fender-logo.png',
      founded: '1946',
      description: 'Revolutionary designs that defined electric guitar sound',
      iconicModels: ['Stratocaster', 'Telecaster', 'Jazzmaster'],
      slug: 'fender',
      featured: true
    },
    {
      name: 'Gibson',
      logo: '/images/brands/gibson-logo.jpg',
      founded: '1902',
      description: 'Legendary craftsmanship with unmatched sustain and warmth',
      iconicModels: ['Les Paul', 'SG', 'Flying V'],
      slug: 'gibson',
      featured: true
    },
    {
      name: 'PRS',
      logo: '/images/brands/prs-logo.jpg',
      founded: '1985',
      description: 'Modern innovation meets vintage soul',
      iconicModels: ['Custom 24', 'McCarty', 'Silver Sky'],
      slug: 'prs',
      featured: false
    },
    {
      name: 'Rickenbacker',
      logo: '/images/brands/rickenbacker-logo.png',
      founded: '1931',
      description: 'Distinctive jangle and pioneering electric innovation',
      iconicModels: ['330', '360', '4003 Bass'],
      slug: 'rickenbacker',
      featured: false
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-gradient mb-6">
            Legendary Brands
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the master craftsmen who shaped the sound of modern music. 
            Each brand brings its own legacy of innovation and artistry.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {brands.map((brand, index) => (
            <div 
              key={brand.slug}
              className={`group relative glass-effect rounded-2xl p-8 hover-glow transition-all duration-500 ${
                brand.featured ? 'md:col-span-1' : ''
              }`}
            >
              {brand.featured && (
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-accent-gold text-black px-3 py-1 rounded-full text-sm font-semibold">
                  <Star className="h-4 w-4" />
                  Featured
                </div>
              )}
              
              <div className="flex items-start gap-6">
                {/* Logo */}
                <div className="relative w-20 h-20 flex-shrink-0">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    fill
                    className="object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                  />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-accent-gold transition-colors duration-300">
                      {brand.name}
                    </h3>
                    <span className="text-sm text-gray-400 bg-white/10 px-2 py-1 rounded">
                      Est. {brand.founded}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {brand.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-accent-gold mb-2">Iconic Models:</h4>
                    <div className="flex flex-wrap gap-2">
                      {brand.iconicModels.map((model) => (
                        <span 
                          key={model}
                          className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded border border-white/20"
                        >
                          {model}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    href={`/brands/${brand.slug}`}
                    className="inline-flex items-center gap-2 text-accent-gold hover:text-accent-amber transition-colors duration-300 font-semibold"
                  >
                    Explore {brand.name}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link 
            href="/brands"
            className="inline-flex items-center gap-2 bg-accent-gold hover:bg-accent-amber text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover-glow"
          >
            View All Brands
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedBrands