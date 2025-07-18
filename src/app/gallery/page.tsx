import type { Metadata } from 'next'
import ImageGallery from '@/components/ImageGallery'

export const metadata: Metadata = {
  title: 'Electric Guitar Gallery | High-Quality Photos & Images',
  description: 'Stunning photo gallery showcasing electric guitars, famous brands, and iconic models. High-resolution images of Fender, Gibson, PRS, Rickenbacker guitars.',
  keywords: 'electric guitar photos, guitar gallery, Fender Stratocaster images, Gibson Les Paul photos, guitar collection images',
  openGraph: {
    title: 'Electric Guitar Gallery | High-Quality Photos & Images',
    description: 'Stunning photo gallery of electric guitars and famous brands',
  },
}

const GalleryPage = () => {
  const galleryImages = [
    {
      src: '/images/guitars/fender-stratocaster.jpg',
      alt: 'Fender Stratocaster Electric Guitar',
      title: 'Fender Stratocaster - The Most Iconic Electric Guitar'
    },
    {
      src: '/images/guitars/gibson-les-paul.jpg',
      alt: 'Gibson Les Paul Electric Guitar',
      title: 'Gibson Les Paul - Rock Legend\'s Choice'
    },
    {
      src: '/images/guitars/stratocaster-vintage.jpg',
      alt: 'Vintage Fender Stratocaster',
      title: 'Vintage Stratocaster - Timeless Design'
    },
    {
      src: '/images/guitars/les-paul-sunburst.jpg',
      alt: 'Gibson Les Paul Sunburst',
      title: 'Les Paul Sunburst - Classic Beauty'
    },
    {
      src: '/images/guitars/fender-telecaster.jpg',
      alt: 'Fender Telecaster Electric Guitar',
      title: 'Fender Telecaster - First Solid Body'
    },
    {
      src: '/images/guitars/telecaster-butterscotch.jpg',
      alt: 'Fender Telecaster Butterscotch',
      title: 'Telecaster Butterscotch - Original Color'
    },
    {
      src: '/images/guitars/gibson-sg.jpg',
      alt: 'Gibson SG Electric Guitar',
      title: 'Gibson SG - Devil\'s Horns Design'
    },
    {
      src: '/images/guitars/sg-cherry-red.png',
      alt: 'Gibson SG Cherry Red',
      title: 'SG Cherry Red - AC/DC Signature'
    },
    {
      src: '/images/guitars/prs-custom.jpg',
      alt: 'PRS Custom Electric Guitar',
      title: 'PRS Custom - Modern Masterpiece'
    },
    {
      src: '/images/guitars/prs-custom-24.jpg',
      alt: 'PRS Custom 24',
      title: 'PRS Custom 24 - Flame Maple Top'
    },
    {
      src: '/images/guitars/rickenbacker.JPG',
      alt: 'Rickenbacker Electric Guitar',
      title: 'Rickenbacker - The Jangle Sound'
    },
    {
      src: '/images/guitars/rickenbacker-360.png',
      alt: 'Rickenbacker 360',
      title: 'Rickenbacker 360 - Beatles Connection'
    },
    {
      src: '/images/guitars/ibanez.jpg',
      alt: 'Ibanez Electric Guitar',
      title: 'Ibanez - Modern Performance'
    },
    {
      src: '/images/guitars/guitar-collection.jpg',
      alt: 'Electric Guitar Collection',
      title: 'Professional Guitar Collection'
    },
    {
      src: '/images/guitars/guitar-wall-collection.png',
      alt: 'Guitar Wall Display',
      title: 'Wall-Mounted Guitar Collection'
    },
    {
      src: '/images/guitars/guitar-shop-display.png',
      alt: 'Guitar Shop Display',
      title: 'Guitar Store Showcase'
    },
    {
      src: '/images/guitars/guitar-amp-setup.jpg',
      alt: 'Guitar Amplifier Setup',
      title: 'Professional Studio Setup'
    },
    {
      src: '/images/guitars/studio-setup.jpg',
      alt: 'Recording Studio Guitar Setup',
      title: 'Recording Studio Environment'
    },
    {
      src: '/images/guitars/guitar-headstock.jpg',
      alt: 'Guitar Headstock Detail',
      title: 'Headstock Craftsmanship Detail'
    },
    {
      src: '/images/guitars/pickup-detail.jpg',
      alt: 'Guitar Pickup Detail',
      title: 'Pickup Technology Close-up'
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-background-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-playfair font-bold text-gradient mb-6">
              Electric Guitar Gallery
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Explore our stunning collection of electric guitar photography. 
              From vintage classics to modern masterpieces, each image captures 
              the artistry and craftsmanship of these legendary instruments.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ImageGallery images={galleryImages} />
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ImageGallery',
            name: 'Electric Guitar Photo Gallery',
            description: 'High-quality photos of electric guitars and famous brands',
            url: 'https://electric-guitars-showcase.vercel.app/gallery',
            image: galleryImages.map(img => `https://electric-guitars-showcase.vercel.app${img.src}`)
          })
        }}
      />
    </div>
  )
}

export default GalleryPage