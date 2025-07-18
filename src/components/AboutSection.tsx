'use client'

import Image from 'next/image'
import { Calendar, Users, Music, Award } from 'lucide-react'

const AboutSection = () => {
  const stats = [
    {
      icon: Calendar,
      number: '95+',
      label: 'Years of History',
      description: 'From 1930s to 2025'
    },
    {
      icon: Users,
      number: '50+',
      label: 'Famous Brands',
      description: 'Legendary manufacturers'
    },
    {
      icon: Music,
      number: '100+',
      label: 'Iconic Models',
      description: 'Revolutionary designs'
    },
    {
      icon: Award,
      number: '1000+',
      label: 'Music Legends',
      description: 'Artists who made history'
    }
  ]

  return (
    <section id="about-section" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-gradient mb-6">
                The Electric Revolution
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                The electric guitar transformed music forever, giving birth to genres like rock, blues, jazz fusion, and heavy metal. 
                From the first electromagnetic pickups in the 1930s to today&apos;s cutting-edge digital modeling, 
                the electric guitar continues to evolve while maintaining its soul.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our comprehensive showcase celebrates the craftsmanship, innovation, and artistry behind the world&apos;s 
                most influential electric guitars. Discover the stories of legendary luthiers, groundbreaking designs, 
                and the musicians who brought these instruments to life.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-3">
                      <IconComponent className="h-8 w-8 text-accent-gold" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-accent-gold font-semibold mb-1">{stat.label}</div>
                    <div className="text-sm text-gray-400">{stat.description}</div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden hover-glow">
              <Image
                src="/images/guitars/guitar-collection.jpg"
                alt="Electric Guitar Collection"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              {/* Floating card */}
              <div className="absolute bottom-6 left-6 right-6 glass-effect rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">Craftsmanship Meets Innovation</h3>
                <p className="text-sm text-gray-300">
                  Each guitar tells a story of musical evolution, from vintage classics to modern masterpieces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection