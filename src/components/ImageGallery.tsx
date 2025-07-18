'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface ImageGalleryProps {
  images: {
    src: string
    alt: string
    title?: string
  }[]
  className?: string
}

const ImageGallery = ({ images, className = '' }: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : images.length - 1)
    }
  }

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage < images.length - 1 ? selectedImage + 1 : 0)
    }
  }

  return (
    <>
      <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ${className}`}>
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-square cursor-pointer group overflow-hidden rounded-lg"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            {image.title && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                <p className="text-white text-sm font-medium">{image.title}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-accent-gold transition-colors duration-300 z-10"
          >
            <X className="h-8 w-8" />
          </button>
          
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-accent-gold transition-colors duration-300 z-10"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-accent-gold transition-colors duration-300 z-10"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <div className="relative max-w-5xl max-h-full">
            <Image
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              width={1200}
              height={800}
              className="object-contain max-h-screen"
            />
            {images[selectedImage].title && (
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <h3 className="text-white text-xl font-semibold">
                  {images[selectedImage].title}
                </h3>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default ImageGallery