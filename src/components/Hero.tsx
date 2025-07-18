'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronDown, Play, Volume2 } from 'lucide-react'

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0)
  
  const heroImages = [
    {
      src: '/images/hero-guitar-background.jpg',
      alt: 'Electric Guitar Collection',
      title: 'The Art of Electric Sound',
      subtitle: 'Discover the instruments that shaped music history'
    },
    {
      src: '/images/guitars/fender-stratocaster.jpg',
      alt: 'Fender Stratocaster',
      title: 'Legendary Craftsmanship',
      subtitle: 'From Hendrix to modern masters'
    },
    {
      src: '/images/guitars/gibson-les-paul.jpg',
      alt: 'Gibson Les Paul',
      title: 'Timeless Innovation',
      subtitle: 'Where tradition meets excellence'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [heroImages.length])

  const scrollToContent = () => {
    const element = document.getElementById('about-section')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-playfair font-bold mb-6 animate-fade-in">
          <span className="text-gradient">
            {heroImages[currentImage].title}
          </span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-300 mb-8 animate-slide-up">
          {heroImages[currentImage].subtitle}
        </p>
        
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-slide-up">
          Journey through the evolution of electric guitars from the 1930s to today. 
          Explore legendary brands, iconic models, and the stories behind the instruments 
          that revolutionized music.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
          <button 
            onClick={scrollToContent}
            className="bg-accent-gold hover:bg-accent-amber text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover-glow flex items-center gap-2"
          >
            <Play className="h-5 w-5" />
            Start Exploring
          </button>
          
          <button className="glass-effect hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center gap-2">
            <Volume2 className="h-5 w-5" />
            Listen to History
          </button>
        </div>

        {/* Image indicators */}
        <div className="flex justify-center space-x-2 mt-12">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImage ? 'bg-accent-gold' : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`View image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-accent-gold transition-colors duration-300 animate-bounce"
        aria-label="Scroll to content"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  )
}

export default Hero